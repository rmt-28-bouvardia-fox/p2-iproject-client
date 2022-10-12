import { defineStore } from "pinia";
import axios from "axios";
import api from "@/helpers/api.js";

import firebase from "../firebase";
import {
  ref,
  query,
  onValue,
  orderByChild,
  startAfter,
  off,
  get,
} from "firebase/database";
import { useSwalStore } from "./swal";

const dbRef = ref(firebase, "/bids");

// query
const q = query(
  dbRef,
  orderByChild("expiredBy"),
  startAfter(new Date().getTime())
);

export const useBidStore = defineStore("bid", {
  state: () => ({
    days: [
      "Sunday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    winningBids: [],
    sellingBids: [],
    bids: [],
    bid: {},
    bidPageLoader: false,
    searchCardList: [],
    searchNotFound: false,
    searchQuery: {
      type: "",
      attribute: "",
      race: "",
      query: "",
      num: 8,
      page: 1,
      hasNext: false,
      hasPrev: false,
    },
    currency: {
      eur: 0,
      usd: 0,
    },
  }),
  getters: {},
  actions: {
    listenBids() {
      onValue(q, this.onBidsChange, this.onError);
    },
    unlistenBids() {
      off(q);
    },
    async getBid(id) {
      this.bidPageLoader = true;
      const swal = useSwalStore();
      try {
        const { data } = await api({
          url: `/bid/${id}`,
          method: "GET",
          headers: {
            access_token: localStorage?.access_token,
          },
        });

        this.bid = data;
      } catch (error) {
        swal.errorHandler(error);
      } finally {
        this.bidPageLoader = false;
      }
    },
    async addNewBid(newBid) {
      const swal = useSwalStore();
      try {
        await api({
          url: "/my-bid",
          method: "POST",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            cardId: newBid.cardId,
            condition: newBid.condition,
            expiredBy: newBid.expiredBy,
            startPrice: newBid.price,
            notes: newBid.notes,
          },
        });

        swal.swalInfo(
          "Bid started!",
          "You can check your bid info in My Bids menu",
          8000
        );
        this.router.push("/my-bids");
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    async getAllCardsByIDs(ids) {
      const swal = useSwalStore();
      try {
        const cards = await api({
          url: "/card/details",
          method: "POST",
          data: {
            ids: ids, //string of ids
          },
        });

        return cards.data;
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    async onBidsChange(snapshot) {
      if (!snapshot.val()) {
        return;
      }

      let _bids = [];

      snapshot.forEach((item) => {
        let key = item.key;
        let data = item.val();
        let card = {
          key: key,
          buyerId: data.buyerId,
          sellerId: data.sellerId,
          currentPrice: data.currentPrice,
          createdBy: data.createdBy,
          createdAt: data.createdAt,
          expiredBy: data.expiredBy,
          cardId: data.cardId,
        };

        _bids.push(card);
      });

      let arrOfIds = _bids.map((e) => e.cardId);
      const stringOfIds = arrOfIds.join(",");

      let cardsData = await this.getAllCardsByIDs(stringOfIds);

      let newBids = _bids.map((bid) => {
        const cardDetail = cardsData.data.find((data) => data.id == bid.cardId);

        return {
          ...bid,
          cardDetail,
        };
      });

      this.bids = newBids;
    },
    async searchCard() {
      const swal = useSwalStore();
      this.searchNotFound = false;
      const { num, page, query, type, attribute, race } = this.searchQuery;
      const offset = num * (page - 1);

      if (!query) {
        return;
      }

      let params = {
        type: type,
        attribute: attribute,
        race: race,
        query: query,
        num: num,
        offset: offset,
      };

      try {
        const { data } = await api({
          url: "/card/search",
          method: "GET",
          params,
        });

        this.searchQuery.hasNext = data.meta.hasOwnProperty("next_page");
        this.searchQuery.hasPrev = data.meta.hasOwnProperty("previous_page");
        this.searchCardList = data.data;
      } catch (error) {
        if (error?.response?.status == 404) {
          this.searchNotFound = true;
        } else {
          swal.errorHandler(error);
        }
      }
    },
    async winningBid() {
      const swal = useSwalStore();
      try {
        const { data } = await api({
          url: "/my-bid/winning",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.winningBids = data;
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    async sellingBid() {
      const swal = useSwalStore();
      try {
        const { data } = await api({
          url: "/my-bid/selling",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.sellingBids = data;
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    clearQuery() {
      this.searchQuery = {
        type: "",
        attribute: "",
        race: "",
        query: "",
        num: 8,
        page: 1,
        hasNext: false,
        hasPrev: false,
      };
      this.searchCardList = [];
      this.searchNotFound = false;
    },
    async getCurrency() {
      const swal = useSwalStore();
      try {
        const { data } = await axios({
          url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/idr.json",
          method: "GET",
        });
        this.currency.eur = data.idr.eur;
        this.currency.usd = data.idr.usd;
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    async submitBid(payload) {
      const swal = useSwalStore();
      try {
        const { data } = await api({
          url: `/my-bid/${payload.id}`,
          method: "PATCH",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            currentPrice: payload.price,
          },
        });

        swal.swalInfo(
          data.message,
          "Check My Winning List frequently to check if you win this bid",
          8000
        );

        return true;
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    onError(error) {
      const swal = useSwalStore();
      swal.errorHandler(error);
    },
    msToDate(ms) {
      const d = new Date(ms);
      const day = this.days[d.getDay()];
      const date = d.getDate();
      const month = this.months[d.getMonth()];
      const year = d.getFullYear();
      const hour = d.getHours();
      const minute = d.getMinutes();
      return `${day}, ${date} ${month} ${year} ( ${hour}:${minute} )`;
    },
  },
});

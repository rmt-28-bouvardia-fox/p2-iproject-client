import { defineStore } from "pinia";
import axios from "axios";
import api from "@/helpers/api.js"

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

const dbRef = ref(firebase, "/bids");

// query
const q = query(
  dbRef,
  orderByChild("expiredBy"),
  startAfter(new Date().getTime())
);

export const useBidStore = defineStore("bid", {
  state: () => ({
    bids: [],
    searchCardList: [],
    searchNotFound: false,
    searchQuery: {
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
    async addNewBid(newBid) {
      try {
        console.log(newBid);
        // await api({
        //   url: "/bids",
        //   method: "POST",
        //   headers: {
        //     access_token: localStorage.access_token,
        //   },
        //   data: {
        //     card: newBid.cardId,
        //     expiredBy: newBid.expiredBy,
        //     startPrice: newBid.startPrice,
        //     notes: newBid.notes
        //   },
        // });

        this.router.push("/my-bids");
      } catch (error) {
        console.log(error);
      }
    },
    async getAllCardsByIDs(ids) {
      try {
        const cards = await api({
          url: "/getCardDetails",
          method: "POST",
          data: {
            ids: ids, //string of ids
          },
        });

        return cards.data;
      } catch (error) {
        console.log(error);
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
      this.searchNotFound = false;
      const { num, page, query } = this.searchQuery;
      const offset = num * (page - 1);

      if (!query) {
        return;
      }

      try {
        const { data } = await api({
          url: "/searchCard",
          method: "GET",
          params: {
            query: query,
            num: num,
            offset: offset,
          },
        });

        this.searchQuery.hasNext = data.meta.hasOwnProperty("next_page");
        this.searchQuery.hasPrev = data.meta.hasOwnProperty("previous_page");
        this.searchCardList = data.data;
      } catch (error) {
        if (error?.response?.status == 404) {
          this.searchNotFound = true;
        }
        console.log(error);
      }
    },
    clearQuery() {
      this.searchQuery = {
        query: "",
        num: 8,
        page: 1,
        hasNext: false,
        hasPrev: false,
      };
    },
    async getCurrency() {
      try {
        const { data } = await axios({
          url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/idr.json",
          method: "GET",
        });
        this.currency.eur = data.idr.eur;
        this.currency.usd = data.idr.usd;
      } catch (error) {
        console.log(error);
      }
    },
    onError(error) {
      console.log(error);
    },
  },
});

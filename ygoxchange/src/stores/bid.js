import { defineStore } from "pinia";
import axios from "axios";

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

let now = new Date();
now = now.getTime();

// query
const q = query(dbRef, orderByChild("expiredBy"), startAfter(now));

export const useBidStore = defineStore("bid", {
  state: () => ({
    bids: [],
  }),
  getters: {},
  actions: {
    listenBids() {
      onValue(q, this.onBidsChange, this.onError);
    },
    unlistenBids() {
      off(q);
    },
    async getNewBid() {
      const newData = await get(q);

      this.onBidsChange(newData);
    },
    addNewBid() {},
    async getAllCardsByIDs(ids) {
      try {
        const cards = await axios({
          url: "http://localhost:3000/getCardDetails",
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
    onError(error) {
      console.log(error);
    },
  },
});

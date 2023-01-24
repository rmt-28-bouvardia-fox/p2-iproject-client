<script>
import Currency from "@/components/Currency.vue";
export default {
  props: ["card", "currency", "detail"],
  components: {
    Currency,
  },
};
</script>

<template>
  <div
    class="font-semibold"
    :class="detail == true ? 'font-semibold text-2xl text-blueTheme pb-3' : ''"
  >
    {{ detail == true ? "Card Prices References" : "Card Prices :" }}
  </div>
  <div class="flex">
    <div class="w-1/2 pr-3" :class="detail == true ? 'pb-4' : ''">
      Card Market
    </div>
    <Currency
      :price="card.card_prices[0].cardmarket_price"
      :currency="currency.eur"
    />
  </div>
  <div class="flex" :class="detail == true ? 'pb-4' : ''">
    <div class="w-1/2 pr-3">CoolStuffInc.com</div>
    <Currency class="w-1/2" :price="card.card_prices[0].coolstuffinc_price"
    :currency="currency.usd" />
  </div>
  <div class="flex" :class="detail == true ? 'pb-4' : ''">
    <div class="w-1/2 pr-3">TCG Player</div>
    <Currency class="w-1/2" :price="card.card_prices[0].tcgplayer_price"
    :currency="currency.usd" />
  </div>
  <div class="flex" :class="detail == true ? 'pb-4' : ''">
    <div class="w-1/2 pr-3">Ebay</div>
    <Currency class="w-1/2" :price="card.card_prices[0].ebay_price"
    :currency="currency.usd" />
  </div>
  <div class="flex" :class="detail == true ? 'pb-4' : ''">
    <div class="w-1/2 pr-3">Amazon</div>
    <Currency class="w-1/2" :price="card.card_prices[0].amazon_price"
    :currency="currency.usd" />
  </div>
</template>

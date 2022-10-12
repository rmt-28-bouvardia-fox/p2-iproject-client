<template>
  <!-- container carrd -->
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <!-- card -->
    <div class="col" v-for="(arisan, index) in myArisan" :key="index">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>{{ arisan.name }}</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            {{ arisan.Arisan.name }}
          </text>
        </svg>

        <div class="card-body">
          <p class="card-text">
            <font style="vertical-align: inherit"
              ><font style="vertical-align: inherit"
                >Arisan kamu diisi oleh {{ arisan.Arisan.people }} Orang.
              </font></font
            >
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                @click.prevent="getArisanDetail(arisan.Arisan.id)"
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Detail</font></font
                >
              </button>
            </div>
            <small class="text-muted"
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >{{ arisan.Arisan.people }} people</font
                ></font
              ></small
            >
          </div>
        </div>
      </div>
    </div>
    <!-- end card -->
  </div>
  <!-- end container card -->
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useArisanStore } from "../stores/arisan";

export default {
  computed: {
    ...mapState(useArisanStore, ["myArisan"]),
  },
  methods: {
    ...mapActions(useArisanStore, ["fetchMyArisan", "getArisanDetail"]),
  },
  created() {
    console.log(window.location)
    this.fetchMyArisan();
    console.log(this.myArisan);
  },
};
</script>

<style lang="scss" scoped></style>

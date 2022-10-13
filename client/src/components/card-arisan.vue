<template>
  <!-- container carrd -->
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <!-- card -->
    <div class="col" v-for="(batch, index) in arisan" :key="index">
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
          <title>{{ batch.name }}</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">{{ batch.name }}</text>
        </svg>

        <div class="card-body">
          <p cla ss="card-text">
            <font style="vertical-align: inherit"
              ><font style="vertical-align: inherit">Arisan Ready. </font></font
            >
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                @click="addMyArisan(batch.id)"
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Join</font></font
                >
              </button>
            </div>
            <small class="text-muted"
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >{{ batch.people }} People</font
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
  created() {
    this.fetchArisan();
  },
  computed: {
    ...mapState(useArisanStore, ["arisan"]),
  },
  methods: {
    ...mapActions(useArisanStore, ["fetchArisan", "addMyArisan"]),
  },
};
</script>

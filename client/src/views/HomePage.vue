<!-- eslint-disable prettier/prettier -->
<template>
    <NavigationBar />
    <main>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">
                        <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">Arisan Online H8</font>
                        </font>
                    </h1>
                    <p class="lead text-muted">
                        <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">Arisan berbasis online, untuk para developer.<br />
                            </font>
                            <font style="vertical-align: inherit">Mari kita mulai yagesya, allow Location needed!.
                            </font>
                        </font>
                    </p>
                </div>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <!-- container carrd -->
                    <!-- card -->
                    <CardArisan />
                    <!-- end card -->
                <!-- end container card -->
            </div>
        </div>
    </main>
</template>

<script>
import NavigationBar from "../components/navigation-bar.vue";
import CardArisan from "../components/card-arisan.vue";
import { mapActions, mapState } from "pinia";
import { useArisanStore } from "../stores/arisan";
export default {
  created() {
    console.log("masuk");
  },
  components: { NavigationBar, CardArisan },
  methods: {
    ...mapActions(useArisanStore, ["fetchArisan"]),
  },
  computed: {
    ...mapState(useArisanStore, ["arisan"]),
  },
};
</script>

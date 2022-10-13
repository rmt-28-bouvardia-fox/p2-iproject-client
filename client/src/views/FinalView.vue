<script>
import { useInvitationStore } from "./../stores/invitation";
import { mapState, mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(useInvitationStore, ["fetchInvitation"]),
    getDate(datetime) {
      let date = new Date(datetime);
      let dateString = `${date.getFullYear}/${date.getMonth() + 1}/${
        date.getDate
      }`;
      return date;
    },
  },
  computed: {
    ...mapState(useInvitationStore, ["invitation"]),
  },
  created() {
    this.fetchInvitation(this.$route.params.coupleName);
  },
};
</script>

<template>
  <div>
    <div class="final">
      <img class="background" :src="invitation.Template.background" />
      <div class="centered">
        <div class="opening">
          Together with our families, you are invited to our wedding
        </div>
        <div class="groom">
          <h1>Mr. {{ invitation.groomName }}</h1>
          Son of Mr. {{ invitation.fatherGroom }} & Mrs.
          {{ invitation.motherGroom }}
          <br />
        </div>
        <h3>&</h3>
        <div class="bride">
          <h1>Ms. {{ invitation.BrideName }}</h1>
          Daugther of Mr. {{ invitation.fatherBride }} & Mrs.
          {{ invitation.motherBride }}
          <br />
        </div>
        <div class="date">
          <br />
          {{ getDate(invitation.weddingDate) }}
        </div>
        <div class="location">
          <br />
          {{ invitation.weddingLocation }}
          <br />
        </div>
        <br />
        <div class="quotes">
          “We are all a little weird and life’s a little weird. And when we find
          someone whose weirdness is compatible with ours, we join up with them
          and fall in mutual weirdness and call it love.”
          <br />
          —Dr. Seuss
          <br />
        </div>
        <!-- Maps -->
        <div clss="maps">
          <br />
          <br />
          <iframe
            width="300px"
            height="200px"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :src="invitation.maps"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

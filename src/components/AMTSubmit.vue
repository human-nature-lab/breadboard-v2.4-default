<template>
  <form
    :action="url"
    method="get"
  >
    <PlayerText :player="player" />
    <div v-if="comments">
      <h4>Comments</h4>
      <v-textarea
        v-if="comments"
        outlined
        name="comments"
        rows="5"
        cols="50"
      />
    </div>
    <v-btn type="submit">
      Submit HIT
    </v-btn>
    <input
      type="hidden"
      name="assignmentId"
      :value="player.id"
    >
    <input
      v-if="bonus"
      type="hidden"
      name="bonus"
      :value="fBonus"
    >
    <input
      type="hidden"
      name="reason"
      :value="reason"
    >
  </form>
</template>

<script>
import { PlayerText } from '@human-nature-lab/breadboard-client';


export default {
    name: "AMTSubmit",
    props: {
        player: Object,
        comments: Boolean,
        bonus: Number,
        reason: String,
        sandbox: Boolean,
    },
    computed: {
        url() {
            return this.player && (this.player.sandbox || this.sandbox)
                ? "https://workersandbox.mturk.com/mturk/externalSubmit"
                : "https://www.mturk.com/mturk/externalSubmit";
        },
        fBonus() {
            return this.bonus.toFixed(2); // Ensure only two decimal places
        },
    },
    components: { PlayerText }
}
</script>

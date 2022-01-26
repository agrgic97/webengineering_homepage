<template>
  <div class="view">
    <ViewHeader :header="header" :subheader="subheader"></ViewHeader>
    <Exercise class="exercise" v-for="item in exercises[data]" :data="item"></Exercise>
  </div>
</template>

<script>
import ViewHeader from "../src/components/ViewHeader.vue";
import Exercise from "../src/components/Exercise.vue";
import { exercises } from "../data/exercises.js";

export default {
  name: "ViewTemplate",
  components: {
    ViewHeader,
    Exercise
  },
  data() {
    return {
      exercises
    }
  },
  props: {
    header: {
      type: String,
      default: ""
    },
    subheader: {
      type: String,
      default: ""
    },
    data: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
  @media only screen and (min-width: 600px) {
    .exercise {
      margin: 50px 15%;
    }
  }
</style>
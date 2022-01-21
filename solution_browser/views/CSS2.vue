<template>
  <div class="view">
    <ViewHeader :header="header" :subheader="subheader"></ViewHeader>
    <Exercise class="exercise" v-for="item in data" :data="item"></Exercise>
  </div>
</template>

<script>
import ViewHeader from "../src/components/ViewHeader.vue";
import Exercise from "../src/components/Exercise.vue";
import { exercises } from "../data/exercises.js";

export default {
  name: "CSS2",
  components: {
    ViewHeader,
    Exercise
  },
  data() {
    return {
      header: "CSS 2. Teil",
      subheader: "Responsive Web Design",
      data: exercises.CSS2
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
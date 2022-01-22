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
  name: "ECMAScript",
  components: {
    ViewHeader,
    Exercise
  },
  data() {
    return {
      header: "ECMAScript",
      subheader: "",
      data: exercises.ECMAScript
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
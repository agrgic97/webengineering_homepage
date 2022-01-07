<template>
  <div class="view">
    <ViewHeader :header="header" :subheader="subheader"></ViewHeader>
    <Exercise></Exercise>
  </div>
</template>

<script>
import ViewHeader from "../src/components/ViewHeader.vue";
import Exercise from "../src/components/Exercise.vue";

export default {
  name: "Einfuehrung",
  components: {
    ViewHeader,
    Exercise
  },
  data() {
    return {
      header: 'Einführung',
      subheader: 'HTTP, URI, und HTML'
    }
  }

}
</script>

<style scoped>

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .description {
    display: inline-block;
    padding: 10px 30px;
    background-color: #ccc;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
  }
</style>
<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "Vue",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "Vue.js",
      subheader: "",
      data: "Vue"
    }
  }
}
</script>

<style scoped>

</style>
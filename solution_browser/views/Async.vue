<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "Async",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "Async",
      subheader: "",
      data: "Async"
    }
  }
}
</script>

<style scoped>

</style>
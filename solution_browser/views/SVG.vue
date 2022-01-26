<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "SVG",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "SVG",
      subheader: "",
      data: "SVG"
    }
  }
}
</script>

<style scoped>

</style>
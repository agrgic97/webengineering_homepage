<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "Functional",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "Funktionale",
      subheader: "Programmierung",
      data: "Functional"
    }
  }
}
</script>

<style scoped>

</style>
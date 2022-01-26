<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "DOM",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "DOM",
      subheader: "",
      data: "DOM"
    }
  }
}
</script>

<style scoped>

</style>
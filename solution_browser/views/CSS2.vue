<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "CSS2",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "CSS 2. Teil",
      subheader: "Responsive Web Design",
      data: "CSS2"
    }
  }
}
</script>

<style scoped>

</style>
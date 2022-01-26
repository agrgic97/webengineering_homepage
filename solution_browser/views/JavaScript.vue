<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "JavaScript",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "JavaScript",
      subheader: "",
      data: "JavaScript"
    }
  }
}
</script>

<style scoped>

</style>
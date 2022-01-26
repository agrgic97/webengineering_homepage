<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "Security",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "Sicherheit",
      subheader: "",
      data: "Security"
    }
  }
}
</script>

<style scoped>

</style>
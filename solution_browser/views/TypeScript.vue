<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "TypeScript",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "TypeScript",
      subheader: "",
      data: "TypeScript"
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "ECMAScript",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "ECMAScript",
      subheader: "",
      data: "ECMAScript"
    }
  }
}
</script>

<style scoped>

</style>
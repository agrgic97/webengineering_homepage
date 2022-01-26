<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "PHP",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: "PHP",
      subheader: "Server-Side Scripting",
      data: "PHP"
    }
  }
}
</script>

<style scoped>

</style>
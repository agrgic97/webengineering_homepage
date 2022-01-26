<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";

export default {
  name: "CSS1",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: 'CSS 1. Teil',
      subheader: '',
      data: "CSS1"
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <ViewTemplate :header="header" :subheader="subheader" :data="data"></ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate.vue";


export default {
  name: "Einfuehrung",
  components: {
    ViewTemplate
  },
  data() {
    return {
      header: 'Einführung',
      subheader: 'HTTP, URI, und HTML',
      data: "Einfuehrung"
    }
  }

}
</script>

<style scoped>
</style>
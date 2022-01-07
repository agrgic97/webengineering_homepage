<template>
  <div class="container">
    <div class="header">{{ header }}</div>
    <div class="subheader">{{ subheader }}</div>
  </div>
</template>

<script>
export default {
  name: "ViewHeader",
  props: {
    header: String,
    subheader: String
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    padding: 30px 0;
    background-color: #ccc;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
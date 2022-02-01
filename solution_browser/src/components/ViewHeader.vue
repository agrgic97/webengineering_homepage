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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px 0;
    height: 150px;
    color: white;
    background-color: deepskyblue;
    font-size: 2rem;
    font-weight: bold;

  }

  .subheader {
    text-align: center;
  }

</style>
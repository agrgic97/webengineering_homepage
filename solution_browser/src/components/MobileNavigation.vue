<template>
  <div class="navigation">
    <div class="navItem" v-for="item in navList"><a>{{ item.valueOf() }}</a></div>
  </div>
</template>

<script>
export default {
  name: "MobileNavigation",
  props: {
    navList: Array
  }
}
</script>

<style scoped>
  .navigation {
    position: absolute;
    color: white;
    margin-top: 25px;
  }

  .navItem {
    padding: 10px;
    width: 210px;
    border-radius: 5px;
  }

  .navItem:hover, .navItem:active {
    background-color: #528545;
    font-weight: bold;
    transform: scale(1.05);
  }
</style>
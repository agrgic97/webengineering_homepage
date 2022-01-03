<template>
  <div class="navigation">
    <div class="home"><a>Home<font-awesome-icon class="icon" icon="home"></font-awesome-icon></a></div>
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

  .navItem, .home {
    padding: 10px;
    width: 210px;
    border-radius: 5px;
  }

  .home {
    margin-bottom: 10px;
    background-color: #333333;
  }

  .home:hover, .home:active {
    transform: scale(1.05);
  }

  .navItem a {
    display: block;
  }

  .navItem a:hover, .navItem a:active {
    font-weight: bold;
    transform: scale(1.05);
  }

  .navItem:hover, .navItem:active {
    background-color: #528545;
  }

  .icon {
    margin-left: 5px;
  }
</style>
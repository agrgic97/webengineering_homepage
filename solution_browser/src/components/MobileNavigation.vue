<template>
  <div class="navigation">
    <router-link class="navItem" to="/">Home<font-awesome-icon icon="home" class="icon"></font-awesome-icon></router-link>
    <router-link class="navItem" v-for="item in navList" key="{{ item.id }}" :to="item.path">{{ item.text }}</router-link>
  </div>
</template>valueOf()

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
    padding-left: 10px;
  }

  .navItem{
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
    width: 160px;

    /* https://pretagteam.com/question/chrome-hide-blue-highlight-css-mobile */
    -webkit-tap-highlight-color: transparent;
  }

  .navItem:hover {
    background-color: cornflowerblue;
    border-radius: 5px;
  }

  .icon {
    margin-left: 5px;
  }
</style>
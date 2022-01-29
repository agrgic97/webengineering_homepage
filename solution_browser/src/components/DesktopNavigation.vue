<template>
  <div class="navigation">
    <div class="navItem" v-for="item in navList" key="{{ item.id }}"><router-link class="link" :to="item.path">{{ item.text }}</router-link></div>
  </div>
</template>

<script>
export default {
  name: "DesktopNavigation",
  props: {
      navList: Array
  }
}
</script>

<style scoped>
  .navigation {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    margin-top: 20px;
  }

  .navItem {
    display: inline-block;
    padding: 10px;
    font-size: 1.25rem;
    color: #333333;
  }

  .link {
    text-decoration: none;
    color: cornflowerblue;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .navItem .link {
    display: block;
  }

  .navItem .link:hover, .navItem .link:active {
    transform: scale(1.05);
    font-weight: bold;
    color: darkblue;
  }

</style>
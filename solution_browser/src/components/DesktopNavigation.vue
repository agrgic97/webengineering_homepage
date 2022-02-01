<template>
  <div class="navigation">
    <router-link class="navItem" v-for="item in navList" :key="item.id" :to="item.path" @click="$emit('update-navbar', item.id)">{{ item.text }}<font-awesome-icon v-if="item.id === 0" icon="home" class="icon"></font-awesome-icon></router-link>
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
    text-decoration: none;
    color: cornflowerblue;
    font-weight: bold;
    font-size: 1.5rem;
  }



  .icon {
    margin-left: 5px;
  }

  .navItem:hover, .navItem:active {
    font-weight: bold;
    color: darkblue;
    transform: scale(1.05);
  }

</style>
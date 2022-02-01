<template>
  <div class="navigation">
    <router-link @click="$emit('update-navbar', item.id)" :class="[item.active ? 'active': 'navItem']" v-for="item in navList" :key="item.id" :to="item.path">{{ item.text }}<font-awesome-icon v-if="item.id === 0" icon="home" class="icon"></font-awesome-icon></router-link>
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
    margin-top: 30px;
  }

  .navItem, .active {
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
    width: 200px;

    /* https://stackoverflow.com/questions/21003535/anyway-to-prevent-the-blue-highlighting-of-elements-in-chrome-when-clicking-quic */
    -webkit-tap-highlight-color: transparent;
  }

  .active {
    background-color: darkblue;
    transform: scale(1.05);
    font-weight: bold;
  }

  .navItem:hover {
    transform: scale(1.05);
    font-weight: bold;
  }

  .icon {
    margin-left: 5px;
  }
</style>
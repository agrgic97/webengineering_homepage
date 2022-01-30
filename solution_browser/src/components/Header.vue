<template>
  <div class="header">
    <router-link id="top" class="title" :style="mobile ? '' : 'font-size: 2rem'" to="/">Solution Browser</router-link>
    <div class="icon"><font-awesome-icon v-if="mobile" class="icon" :icon="['fas', showNav ? 'times' : 'bars']" @click="$emit('slide-content')"></font-awesome-icon></div>
    <DesktopNavigation :navList="navList" v-if="!mobile"></DesktopNavigation>
  </div>
</template>

<script>
  import DesktopNavigation from "./DesktopNavigation.vue";

  export default {
    name: "Header",
    components: {
      DesktopNavigation
    },
    props: {
      mobile: Boolean,
      showNav: Boolean,
      navList: Array
    }
  }
</script>

<style scoped>

  .header {
    padding: 30px;
    background-color: #f1f1f1;
    text-align: center;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: black;
  }

  .icon {
    font-size: 1.5rem;
    margin-top: 5px;
    color: darkblue;
  }

  img {
    width: 300px;
    height: auto;
    transition: 0.5s;
    user-select: none;
  }

  img:hover {
    transform: scale(1.05);
  }
  
  @media only screen and (min-width: 600px) {
    img {
      width: 500px;
    }
  }
</style>
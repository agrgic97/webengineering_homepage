<template>
  <div class="header">
    <font-awesome-icon v-if="mobile" class="icon" :icon="['fas', showNav ? 'times' : 'bars']" @click="$emit('slide-content')"></font-awesome-icon>
    <span class="title" :style="mobile ? '' : 'font-size: 2rem'">Solution Browser</span>
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
    text-align: center;
    padding: 10px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .icon {
    font-size: 1.5rem;
    float: left;
    margin-top: 5px;
  }
</style>
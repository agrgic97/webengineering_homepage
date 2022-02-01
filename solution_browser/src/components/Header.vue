<template>
  <div class="header">
    <router-link class="title" to="/~agrgic2s/">&lt;/&gt; Solution Browser</router-link>
    <div class="icon"><font-awesome-icon v-if="mobile" class="icon" :icon="['fas', showNav ? 'times' : 'bars']" @click="$emit('slide-content')"></font-awesome-icon></div>
    <DesktopNavigation @update-navbar="updateNavbar" :navList="navList" v-if="!mobile"></DesktopNavigation>
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
    },
    methods: {
      updateNavbar(id) {
        this.$emit('update-navbar', id)
      }
    }
  }
</script>

<style scoped>

  .header {
    padding: 30px 10px;
    background-color: #f1f1f1;
    text-align: center;
  }

  .title {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: darkblue;
    transition: 0.5s;
  }

  .icon {
    font-size: 1.25rem;
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
    .title {
      font-size: 3rem;
    }

    img {
      width: 500px;
    }
  }
</style>
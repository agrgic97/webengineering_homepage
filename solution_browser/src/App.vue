<script>
  import Header from "./components/Header.vue";
  import MobileNavigation from "./components/MobileNavigation.vue";

  export default {
    name: 'App',
    components: {
      Header,
      MobileNavigation
    },
    data() {
      return {
        screenWidth: window.innerWidth,
        showNav: false,
        navList: [
            'Einführung',
            'CSS 1. Teil',
            'CSS 2. Teil',
            'JavaScript',
            'DOM',
            'ECMAScript',
            'Functional',
            'Async',
            'SVG',
            'TypeScript',
            'Vue',
            'PHP',
            'Security',
            'Vue 3'
        ]
      }
    },
    methods: {
      isMobile() {
        return this.screenWidth < 600
      },
      isDesktop() {
        return this.screenWidth >= 600
      },
      slideContent() {
        this.showNav = !this.showNav
      }
    },
    mounted() {
      window.onresize = () => { this.screenWidth = window.innerWidth }
    }

  }
</script>

<template>
  <div class="app">
    <MobileNavigation :navList="navList"></MobileNavigation>
    <div class="content" :class="showNav ? 'open' : ''">
      <Header :showIcon="isMobile()" :showNav="showNav" @slide-content="slideContent()"></Header>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
  }

  body {
    background-color: #4CAF50;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }

  .app {
    padding: 10px;
    height: calc(100vh - 20px);
    width: 100%;
    position: relative;
  }

  .content {
    padding: 20px;
    background-color: white;
    height: calc(100vh - 20px);
    width: 100%;
    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    position: relative;
    transition: 0.75s ease-out;
  }

  .open {
    transform: translateX(150px);
  }
</style>

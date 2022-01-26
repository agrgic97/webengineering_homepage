<template>
  <div class="app">
    <MobileNavigation :navList="navList"></MobileNavigation>
    <div class="content" :class="showNav ? 'open' : ''">
      <Header :mobile="isMobile()" :navList="navList" :showNav="showNav" @slide-content="slideContent()"></Header>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import MobileNavigation from "./components/MobileNavigation.vue";

  export default {
    name: 'App',
    components: {
      Header,
      MobileNavigation,
    },
    data() {
      return {
        screenWidth: window.innerWidth,
        showNav: false,
        navList: [
          { text: 'Einführung', path: '/Einfuehrung', id: 1 },
          { text: 'CSS 1. Teil', path: '/CSS1', id: 2 },
          { text: 'CSS 2. Teil', path: '/CSS2', id: 3 },
          { text: 'JavaScript', path: '/JavaScript', id: 4 },
          { text: 'DOM', path: '/DOM', id: 5 },
          { text: 'ECMAScript', path: '/ECMAScript', id: 6 },
          { text: 'Functional', path: '/Functional', id: 7 },
          { text: 'Async', path: '/Async', id: 8 },
          { text: 'SVG', path: '/SVG', id: 9 },
          { text: 'TypeScript', path: '/TypeScript', id: 10 },
          { text: 'Vue', path: '/Vue', id: 11 },
          { text: 'PHP', path: '/PHP', id: 12 },
          { text: 'Security', path: '/Security', id: 13 }
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
    overflow-x: hidden;
    height: 100vh;
    width: 100%;
  }

  .app {
    padding: 10px;
    min-height: calc(100vh - 20px);
    width: 100%;
    position: relative;
  }

  .content {
    background-color: white;
    min-height: calc(100vh - 20px);
    width: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    position: relative;
    transition: 0.75s ease-out;
    padding-bottom: 20px;
  }

  .open {
    transform: translateX(150px);
  }

  @media only screen and (min-width: 600px) {
    /* https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp */

    /* width */
    ::-webkit-scrollbar {
      height: 5px;
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
</style>

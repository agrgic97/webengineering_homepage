<template>
  <div class="app">
    <MobileNavigation @update-navbar="updateNavbar" :navList="navList"></MobileNavigation>
    <div class="content" :class="showNav ? 'open' : ''">
      <Header :mobile="isMobile()" :navList="navList" :showNav="showNav" @update-navbar="updateNavbar" @slide-content="slideContent()"></Header>
      <router-view class="view"></router-view>
      <Footer></Footer>
      <ToTheTop v-show="scrollY > 300" @to-top="toTop"></ToTheTop>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import MobileNavigation from "./components/MobileNavigation.vue";
  import ToTheTop from "./components/ToTheTop.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: 'App',
    components: {
      Header,
      MobileNavigation,
      ToTheTop,
      Footer
    },
    data() {
      return {
        screenWidth: window.innerWidth,
        widthTimer: 0,
        showNav: false,
        navList: [
          { text: 'Home', path: '/~agrgic2s', id: 0, active: true},
          { text: 'Einführung', path: '/~agrgic2s/Einfuehrung', id: 1, active: false },
          { text: 'CSS 1. Teil', path: '/~agrgic2s/CSS1', id: 2, active: false },
          { text: 'CSS 2. Teil', path: '/~agrgic2s/CSS2', id: 3, active: false },
          { text: 'JavaScript', path: '/~agrgic2s/JavaScript', id: 4, active: false },
          { text: 'DOM', path: '/~agrgic2s/DOM', id: 5, active: false },
          { text: 'ECMAScript', path: '/~agrgic2s/ECMAScript', id: 6, active: false },
          { text: 'Functional', path: '/~agrgic2s/Functional', id: 7, active: false },
          { text: 'Async', path: '/~agrgic2s/Async', id: 8, active: false },
          { text: 'SVG', path: '/~agrgic2s/SVG', id: 9, active: false },
          { text: 'TypeScript', path: '/~agrgic2s/TypeScript', id: 10, active: false },
          { text: 'Vue', path: '/~agrgic2s/Vue', id: 11, active: false },
          { text: 'PHP', path: '/~agrgic2s/PHP', id: 12, active: false },
          { text: 'Security', path: '/~agrgic2s/Security', id: 13, active: false }
        ],
        scrollTimer: 0,
        scrollY: 0
      }
    },
    methods: {
      isMobile() {
        return this.screenWidth < 600
      },
      slideContent() {
        this.showNav = !this.showNav
      },
      // copied method structure from beneath
      handleResize() {
        if(this.widthTimer) return
        this.widthTimer = setTimeout(() => {
          this.screenWidth = window.innerWidth
          clearTimeout(this.widthTimer)
          this.widthTimer = 0
        }, 100)
      },
      // https://codepen.io/webty_mizusawa/pen/QWLMeqE
      handleScroll() {
        if(this.scrollTimer) return
        this.scrollTimer = setTimeout(() => {
          this.scrollY = document.body.scrollTop
          clearTimeout(this.scrollTimer)
          this.scrollTimer = 0
        }, 100)

      },
      // https://codepen.io/webty_mizusawa/pen/QWLMeqE
      toTop() {
        document.body.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      },
      updateNavbar(id) {
        this.navList = this.navList.map(item => {
          (item.id === id) ? item.active = true: item.active = false
          return item
        })
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize)
      // https://codepen.io/webty_mizusawa/pen/QWLMeqE
      document.body.addEventListener('scroll', this.handleScroll)
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
    background-color: cornflowerblue;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    overflow-x: hidden;
    height: 100vh;
    width: 100%;
  }

  .app {
    min-height: calc(100vh - 20px);
    width: 100%;
    position: relative;
  }

  .content {
    background-color: white;
    min-height: 100vh;
    width: 100%;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    position: relative;
    transition: 0.75s ease-out;
  }

  .open {
    transform: translateX(150px);
  }


  /* https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp */

  /* width */
  ::-webkit-scrollbar {
    height: 5px;
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

</style>

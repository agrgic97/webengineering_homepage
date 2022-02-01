<template>
  <div class="view">
    <h1>Willkommen auf der Webapp zur Veranstaltung Web Engineering WS2021/22</h1>
    <h3>Hier werden Übungsaufgaben rund um das Thema World-Wide-Web gezeigt. Die Bearbeitung der Aufgaben erfolgte semesterbegleitend und werden auf dieser Webapp zur Schau gestellt.</h3>
    <p><strong>Ziele der Veranstaltung</strong> sind, den Umgang mit den kennengelernten Web-Technologien zu erlernen und diese am Beispiel der Webapp anzuwenden.</p>
    <p><strong>Diese Technologien wurden für die Entwicklung dieser Webapp benuzt:</strong></p>
    <div class="images">
      <img :src="html" alt="HTML-Logo">
      <img :src="css" alt="CSS-Logo">
      <img :src="js" alt="JS-Logo">
      <img :src="vue" alt="Vue-Logo">
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      html: '/~agrgic2s/HTML5_logo_and_wordmark.svg',
      css: '/~agrgic2s/CSS3_logo_and_wordmark.svg',
      js: '/~agrgic2s/Unofficial_JavaScript_logo_2.svg',
      vue: '/~agrgic2s/Vue.js_Logo_2.svg'
    }
  }
}
</script>

<style scoped>
  .view {
    margin: 50px 15%;
  }

  .view * {
    margin-bottom: 30px;
  }

  h1, h3 {
    text-align: center;
    margin-bottom: 30px;
  }

  .images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 47px;
  }

  img {
    width: 200px;
    height: 200px;
    margin: 0 20px;
    transform: scale(1.05);
  }

</style>
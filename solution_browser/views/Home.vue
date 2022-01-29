<template>
  <div class="view">
    <h1>Willkommen auf der Webapp zur Veranstaltung Web Engineering WS2021/22</h1>
    <h3>Hier werden Übungsaufgaben rund um das Thema World-Wide-Web gezeigt. Die Bearbeitung der Aufgaben erfolgte über das gesamte Semester und werden auf dieser Webapp zur Schau gestellt.</h3>
    <p><strong>Ziele der Veranstaltung</strong> sind, den Umgang mit den kennengelernten Web-Technologien zu erlernen und diese am Beispiel der Webapp anzuwenden.</p>
    <p><strong>Technologien dieser Webapp:</strong></p>
    <div class="images">
      <img src="src/assets/HTML5_logo_and_wordmark.svg" alt="HTML-Logo">
      <img src="src/assets/CSS3_logo_and_wordmark.svg" alt="CSS-Logo">
      <img src="src/assets/Unofficial_JavaScript_logo_2.svg" alt="JS-Logo">
      <img src="src/assets/Node.js_logo.svg" alt="Node-Logo">
      <img src="src/assets/Vue.js_Logo_2.svg" alt="Vue-Logo">
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
  }

  img {
    width: 200px;
    height: 200px;
    margin: 0 20px;
    transform: scale(1.05);
  }

</style>
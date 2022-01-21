<template>
  <div class="container">
    <div class="title"> {{ data.title }} </div>
    <div class="exercises" v-for="item in data.exercises">
      <div class="subtitle">{{ item.title }}
        <br>
        <a v-if="item.video" :href="item.link">Zum Video</a>
      </div>
      <img v-if="item.image" :src="item.path">
      <div class="solution" v-if="!item.code">{{ item.solution }}</div>
      <code-highlight :language="item.language" class="code" v-if="item.code">
        <pre>
          {{  item.solution }}
        </pre>
      </code-highlight>
    </div>
  </div>
</template>

<script>
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue';
import 'vue-code-highlight/themes/window.css'
import 'vue-code-highlight/themes/prism-tomorrow.css';



export default {
  name: "Exercise",
  components: {
      CodeHighlight
  },
  props: {
    data: Object
  },
  methods: {

  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Tinos&display=swap');

  .container {
    margin: 0 5%;
  }

  .exercises {
    margin: 50px 0;
  }


  .title {
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 75px;
    border-bottom: 1px solid black;
  }

  .subtitle {
    white-space: pre-line;
    margin-bottom: 30px;
  }

  .solution {
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);
    padding: 10px;
    font-family: 'Tinos', serif;
    background-color: #eee;
    white-space: pre-line;
    /* https://stackoverflow.com/questions/3058866/how-to-force-a-line-break-in-a-long-word-in-a-div */
    overflow-wrap: break-word;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: cornflowerblue;
  }

  a:hover {
    text-decoration: underline cornflowerblue;
  }
</style>
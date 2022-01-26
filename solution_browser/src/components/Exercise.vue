<template>
  <div class="container">
    <div class="title"> {{ data.title }} </div>
    <div class="exercises" v-for="item in data.exercises">
      <div class="subtitle">
        <div class="task">{{ item.title }}</div>
        <code-highlight :language="item.snipped_language" class="code" v-if="item.code_snipped">
          <pre>
            {{ item.snipped }}
          </pre>
        </code-highlight>
        <a v-if="item.video" :href="item.video_link">Zum Video</a>
        <a v-if="item.html_page" :href="item.page_link">Zur Seite</a>
        <img v-if="item.image" :src="item.path">
      </div>
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
import 'vue-code-highlight/themes/window.css';
import 'vue-code-highlight/themes/prism.css';

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
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 20px;
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
    font-weight: bold;
  }

  .task {
    margin-bottom: 20px;
  }

  .solution {
    border-radius: 5px;
    padding: 20px;
    background-color: white;
    font-family: 'Tinos', serif;
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

  @media only screen and (min-width: 600px) {
    img {
      max-height: 400px;
      width: auto;
    }
  }
</style>
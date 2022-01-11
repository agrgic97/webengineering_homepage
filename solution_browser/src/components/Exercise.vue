<template>
  <div class="container">
    <div class="title"> {{ data.title }} </div>
    <div class="exercises" v-for="item in data.exercises">
      <div class="subtitle">{{ item.title }}</div>
      <img v-if="item.image" src="src/assets/wireframe01.jpg">
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
    margin: 50px 5%;
  }

  .container * {
    margin-bottom: 10px;
  }

  .exercises {
    margin: 20px 0;
  }

  .title {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .solution {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    font-family: 'Tinos', serif;
    background-color: #eee;
  }

  img {
    width: 100%;
  }

</style>
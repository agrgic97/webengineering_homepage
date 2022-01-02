<template>
  <div class="header">
    <font-awesome-icon v-if="showIcon" class="icon" :icon="['fas', showNav ? 'times' : 'bars']" @click="$emit('slide-content')"></font-awesome-icon>
    <span class="title">Solution Browser</span>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: [
        'showIcon',
        'showNav'
    ]
  }
</script>

<style scoped>

  .header {
    text-align: center;
    border-bottom: 1px solid #ccc;
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
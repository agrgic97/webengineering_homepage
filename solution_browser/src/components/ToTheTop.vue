<template>
  <div class="icon" @click="$emit('to-top')">
    <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: "ToTheTop",
}
</script>

<style scoped>

  .icon {
    font-size: 2rem;
    color: cornflowerblue;
    position: fixed;
    bottom: 10px;
    right: 10px;
    border: 2px solid cornflowerblue;
    border-radius: 5px;
    padding: 0 12px;
  }

  @media only screen and (min-width: 600px) {
    .icon {
      bottom: 25px;
      right: 50px;
    }
  }

</style>
<template>
  <div class="footer">
    <span>Sourcecode auf <a href="https://github.com/agrgic97/webengineering_homepage">Github<font-awesome-icon :icon="['fab', 'github']" class="icon"></font-awesome-icon></a></span>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: darkblue;
    color: cornflowerblue;
  }

  .icon {
    margin-left: 5px;
    font-size: 1.5rem;
  }

  a {
    color: cornflowerblue;
  }

  @media only screen and (min-width: 600px){
    .footer {
      font-size: 1.25rem;
    }
  }
</style>
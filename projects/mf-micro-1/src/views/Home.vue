<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <br>
    <div>
      <h1>Page Header</h1>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  components: { HelloWorld }
}
</script>
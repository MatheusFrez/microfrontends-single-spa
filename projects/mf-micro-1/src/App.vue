<template>
  <div id="app">
    <header>
      <h1>Micro 1</h1>
    </header>
    <div id="nav">
      <router-link to="/teste1">Micro 1</router-link> 
      <router-link to="/teste2">Micro 2</router-link>
      <router-link to="/about">about of mfe 1</router-link>
      <div class="button">
        <button @click="testChangeRouter">Micro to micro 2 with vue router</button>
      </div>
    </div>
    <div class="dogs-list">
      <div v-for="dogUrl in dogsOnStorage" :key="dogUrl">
        <img :src="dogUrl" alt="dog-image" width="300" height="300" class="dog-item" />
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    const channel = new BroadcastChannel('example-channel');

    channel.addEventListener('message', event => {
      console.log('MENSAGEM QUE CHEGOU AQUI DO MFE 2', event.data)
    });
  },
  computed: {
    dogsOnStorage() {
      const dogsStorage = localStorage.getItem('dogs-mfe')
      const actualDogsOnStorage = dogsStorage && JSON.parse(dogsStorage) || [];
      return actualDogsOnStorage;
    }
  },
  methods: {
    testChangeRouter() {
      this.$router.replace('/teste2')
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dogs-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10% 0 10%;
}

.dog-item {
  margin: 10px;
}

</style>

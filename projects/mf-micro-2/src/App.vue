<template>
  <div id="app">
    <header>
      <h1>Micro 2</h1>
    </header>
    <div id="nav">
      <router-link to="/teste1">Micro 1</router-link>  
      <router-link to="/teste2">Micro 2</router-link>
      <router-link to="/teste2/about">About micro 2</router-link>
      <div class="button">
        <button @click="triggerEvent">Trigger event</button>
      </div>
      <div class="button">
        <button @click="addRandomDogToLocalStorage">Add dog on storage</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    triggerEvent() {
      const channel = new BroadcastChannel('example-channel');

      channel.postMessage({
        test: 'testing....',
        information2: 'lorem impsum....'
      });
    },
    async addRandomDogToLocalStorage() {
      const dogUrl = (await (await fetch('https://dog.ceo/api/breeds/image/random')).json()).message;

      const dogsStorage = localStorage.getItem('dogs-mfe')
      const actualDogsOnStorage = dogsStorage && JSON.parse(dogsStorage) || [];

      let dogsOnStorage = actualDogsOnStorage || [];
      dogsOnStorage.push(dogUrl);

      localStorage.setItem('dogs-mfe', JSON.stringify(dogsOnStorage));
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

.button {
  margin-top: 25px;
}
</style>

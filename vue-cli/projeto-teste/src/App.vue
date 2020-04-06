<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <teste-vue :msgTeste="texto"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Teste from './components/Teste.vue'

export default {
  name: 'App',
  components: {'teste-vue': Teste},
  data() {
    return {
      texto: 'Visite o site para mais informações'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
img {
  height: 400px;
}
</style>

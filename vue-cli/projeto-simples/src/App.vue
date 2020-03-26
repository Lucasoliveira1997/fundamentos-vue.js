<template>
    <div id="app">
        <h1>{{ titulo }}</h1>
        <button @click="alteraTexto()">Altera Texto</button>
    </div>
</template>

<script>
export default {
    el: '#app',
    data: function(){
        return {
            titulo: 'Ufa, Vue JS!'
        }
    },
    methods: {
        alteraTexto() {
            return this.titulo += '#'
        }
    }
}
</script>

<style>
    #app {
        background-color: bisque;
        color: black;
        font-size: 1.5em;
    }
</style>
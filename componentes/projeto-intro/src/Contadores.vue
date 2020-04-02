<template>
    <div>
        <h1>Contadores</h1>
        <app-contador v-for="contador in 5" :key="contador"/>
    </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
    components: {
        'app-contador': Contador
    }
}
</script>

<style>
    
</style>
<template>
    <div>
        <p>Bem vindo ao meu Teste de Vue</p>
        <p>
            {{msgTeste}}
            <a href="https://www.redbull.com/br-pt/">Pagina Oficial</a>            
        </p>
    </div>
</template>

<script>
export default {
    props: {
        msgTeste: {type: String, required: true}        
    }
}
</script>

<style>
    
</style>
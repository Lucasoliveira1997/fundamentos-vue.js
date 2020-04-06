<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>A altura é <strong>{{ altura }}</strong></p>
        <button @click="alteraAltura">Alterar Altura</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: ['altura'],
    methods: {
        alteraAltura() {
            this.altura = 1.92
            barramento.alterarAltura(this.altura)
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>

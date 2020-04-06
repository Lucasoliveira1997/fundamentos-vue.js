<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário <strong>{{ inverteNome() }} | {{ idade }} anos</strong></p>
        <p>A altura é <strong>{{ altura }}</strong></p>
        <button @click="reiniciarNome()">Reiniciar Nome</button>
        <button @click="resetNome()">Reiniciar Nome (CallBack)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {type: String, required: true, default: 'Anônimo'},
        idade: {type: Number, default: function() {
          return 34
        }},
        resetNome: Function,
        altura: Number
    },
    methods: {
        inverteNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            this.nome = 'Lucas Silva de Oliveira',
            this.$emit('nomeMudou', this.nome)
        },
        created() {
            barramento.quandoAlturaMudar(altura => {
                this.altura = altura
            })
        },
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>

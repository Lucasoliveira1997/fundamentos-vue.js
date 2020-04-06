<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>o nome é <strong>{{ nome }}</strong></p>
        <p>A altura é <strong>{{ altura }}</strong></p>
        <hr>
        <p>{{nome}}</p>
        <div class="componentes">
            <app-usuario-info :nome="nome" :altura="altura" :resetNome="reiniciarCb()" @nomeMudou="nome = $event"/>
            <app-usuario-editar :altura="altura"/>
        </div>
        <button @click="alteraNome">Alterar Nome</button>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },

    data() {
        return {
            nome: 'Lucas Silva de Oliveira',
            idade: 22,
            altura: 1.84
        }
    },
    methods: {
        alteraNome() {
            this.nome = 'Ana Oliveira'
        },
        reiniciarCb() {
            this.nome = 'Lucas Silva de Oliveira'
        }
    }    
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>

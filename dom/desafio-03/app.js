new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },

    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
        }
    },

    watch: {
        resultado(novo, antigo) {
            setTimeout(() => {
                alert('Funcionou!')
                alert(antigo)
                alert(novo)
            }, 2000)
        }
    }
});
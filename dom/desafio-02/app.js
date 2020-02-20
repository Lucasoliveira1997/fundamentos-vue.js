new Vue({
    el: '#desafio',
    data: {
        palavra: '',

    },
    methods: {
        clicou() {
            alert('Clicou!!!')
        },
        completa(e) {
            this.palavra = e.target.value
        }
    }
})
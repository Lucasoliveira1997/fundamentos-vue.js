new Vue({
    el: "#desafio",

    data: {
        nome: 'Lucas',
        idade: 22,
        imagem: 'wallpaper.jpg'
    },
    
    methods: {
        aleatorio() {
            return Math.random().toFixed(1) * 10
        }
    },
})
import Vue from 'vue'
export default new Vue({
    methods: {
        alterarAltura(altura) {
            this.$emit('mudaAltura', altura)
        },
        quandoAlturaMudar(callback) {
            this.$on('mudaAltura', callback)
        }
    }
})
import Vue from 'vue'
export default new Vue({
    methods: {
        detalhaUsuario(usuario) {
            this.$emit('detalhaUsuario', usuario)
        },
        onDetalhaUsuario(callback) {
            this.$on('detalhaUsuario', callback)
        }
    },
})
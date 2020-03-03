new Vue({
    el: '#app',

    data: {
        inicio: true,
        playerLife: 100,
        monsterLife: 100,
        playerAttack: 0,
        monsterAttack: 0,
        logs: ''
    },

    computed: {
        resultado() {
            return playerLife <= 0 ? 'Você Perdeu :(' : 'Você Ganhou :)'
        }
    },

    methods: {
        ataca() {
            let num = (Math.random().toFixed(1) * 20)
            let aditionalHurt = (Math.random().toFixed(1) * 10)

            if(this.playerLife > 0 && this.monsterLife > 0) {
                this.monsterLife -= num  
                this.playerLife = (this.playerLife - num) - aditionalHurt

                this.playerAttack = num
                this.monsterAttack = num + aditionalHurt
            }

            this.logs += `<li>MONSTRO ATINGIU O JOGADOR COM ${this.playerAttack} DE DANO</li>
                        <li>JOGADOR ATINGIU O MONSTRO COM ${this.playerAttack} DE DANO</li>`           
        },
        atacaEspecial(){
            let num = (Math.random().toFixed(1) * 20)
            let aditionalHurt = (Math.random().toFixed(1) * 10)
            
            this.playerLife -= num
            this.monsterLife = (this.monsterLife - num) - aditionalHurt

            this.playerAttack = num + aditionalHurt
            this.monsterAttack = num
        },
        cura() {
            if(playerLife <= 100) {
                this.playerLife += (Math.random().toFixed(1) * 20)            
                this.playerLife -= (Math.random().toFixed(1) * 20)
            }
        },
        desistir() {
            this.inicio =  !this.inicio
            this.playerLife = 100
            this.monsterLife = 100
        }
    }
})
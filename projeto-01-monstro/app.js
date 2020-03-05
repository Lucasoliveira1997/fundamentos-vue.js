new Vue({
    el: '#app',

    data: {
        inicio: true,
        playerLife: 100,
        monsterLife: 100,
        playerAttack: 0,
        monsterAttack: 0,
        logs: [],
        carregaProgresso: true,
        playerLifeBar: '',
        monsterLifeBar: '',
        playerLog: '',
        monsterLog: ''
    },

    computed: {
        resultado() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },

    methods: {
        atualizaLife() {
            this.playerLifeBar = `width: ${this.playerLife}%`
            this.monsterLifeBar = `width: ${this.monsterLife}%`
        },
        ataca() {
            let num = (Math.random().toFixed(1) * 20)
            let aditionalHurt = (Math.random().toFixed(1) * 10)

            if(this.playerLife > 0 && this.monsterLife > 0) {
                this.monsterLife -= Math.max(num, 0)
                this.playerLife = Math.max((this.playerLife - num) - aditionalHurt, 0)

                this.playerAttack = num
                this.monsterAttack = num + aditionalHurt   
                
                this.playerLog = `jogador atingiu monstro com ${this.playerAttack}.`
                this.monsterLog = `monster atingiu jogador com ${this.monsterAttack}.`
                this.registerLog(this.playerLog, '.ulJogador')
                this.registerLog(this.monsterLog, '.ulMonstro')

                this.atualizaLife()
            }                     
        },
        atacaEspecial(){
            let num = (Math.random().toFixed(1) * 20)
            let aditionalHurt = (Math.random().toFixed(1) * 10)
            
            if(this.playerLife > 0 && this.monsterLife > 0) {
                this.playerLife -= Math.max(num, 0)
                this.monsterLife = Math.max((this.monsterLife - num) - aditionalHurt, 0)
    
                this.playerAttack = num + aditionalHurt
                this.monsterAttack = num
    
                this.atualizaLife()
            }
        },
        cura() {
            let heal = Math.min((Math.random().toFixed(1) * 20), 100)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.playerLife -= (Math.random().toFixed(1) * 10)

            this.atualizaLife()
        },
        iniciar() {
            this.inicio =  !this.inicio
            this.playerLife = 100
            this.monsterLife = 100
            this.atualizaLife()
            this.logs = []
        },
        desistir() {
            this.inicio =  !this.inicio
            this.playerLife = 100
            this.monsterLife = 100
            this.atualizaLife()
            this.logs = []
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })                 
        }
    },
    watch: {
        resultado(value) {
            if(value)
                this.inicio = true
        }
    },
})
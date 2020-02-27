new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe2: ['classeDiv1', 'classeDiv2'],
		classeDiv1: true,
		classeDiv2: true,
		classe3: '',
		classe4: '',
		exemplo: false,
		estilo5: {
			width: 100+'px',
			height: 100+'px'
		},
		cor5: '',
		carregamento: ''
	},
	computed: {},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				console.log('clicou')				
				if(this.classe1 == 'destaque') {
					this.classe1 = 'encolher'
				} else {
					this.classe1 = 'destaque'
				}
			}, 2000);
		},
		iniciarProgresso() {
			let num = 0
			setInterval(() => {				
				if(num <= 100) {
					this.carregamento = `width : ${num++}%`
				}
			},125)			
		},
		setClasse(event) {
			console.log(event)			
			if (event.target.value == 'true') {
				this.classe4 = true
			} else if (event.target.value == "false") { 
				this.classe4 = false
			}
		}
	}
})

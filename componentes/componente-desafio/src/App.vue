<template>
	<v-app>
		<app-navigation/>		
		<app-toolbar/>
		<app-conteudo/>
		<app-rodape/>
	</v-app>
</template>

<script>
import Navigation from '@/components/template/Navigation.vue'
import ToolBar from '@/components/template/ToolBar.vue'
import Content from '@/components/widgets/Content.vue'
import Footer from '@/components/template/Footer.vue'

export default {
	components: {
		'app-navigation': Navigation,
		'app-toolbar': ToolBar,
		'app-conteudo': Content,
		'app-rodape': Footer
	},
}
</script>

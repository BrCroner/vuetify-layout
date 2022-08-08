<template>
	<v-app-bar color="deep-purple" app dark>
		<v-toolbar-side-icon>
			<v-list-item href="https://github.com/BrCroner" target="_blank">
				<v-img
					contain
					src="@/assets/croner-logo-white.svg"
					max-height="42"
					max-width=""
				/>
			</v-list-item>
		</v-toolbar-side-icon>
		<v-spacer></v-spacer>
		<v-btn to="/" text rounded>Login</v-btn>
		<v-btn to="/dashboard" text rounded>Dashboard</v-btn>
		<v-btn to="/about" text rounded>Sobre</v-btn>
		<v-btn text rounded @click="$emit(['isDark', toggleTheme()])">Tema</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	name: 'TheNavbar',
	methods: {
		toggleTheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
	},
};
</script>

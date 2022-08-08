<template>
	<v-app>
		<TheNavbar @is-dark="themeToggle" />
		<RouterView />
		<TheFooter />
	</v-app>
</template>

<script>
import TheNavbar from '@/components/Navegation/TheNavbar.vue';
import TheFooter from '@/components/Navegation/TheFooter.vue';
import LoginView from '@/views/LoginView.vue';
import AboutView from '@/views/AboutView.vue';
import RouterLink from '@/router';
import isDark from '@/components/Navegation/TheNavbar.vue';

export default {
	name: 'App',
	components: {
		TheNavbar,
		TheFooter,
		LoginView,
		AboutView,
		RouterLink,
		isDark,
	},
};
</script>

import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import AboutView from '../views/AboutView.vue';
import Dashboard from '../views/Dashboard.vue';
import Singup from '../views/Singup.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'LoginView',
		component: LoginView,
	},
	{
		path: '/about',
		name: 'AboutView',
		component: AboutView,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/singup',
		name: 'Singup',
		component: Singup,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

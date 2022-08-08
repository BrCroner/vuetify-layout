<template>
	<v-content>
		<v-container fluid>
			<h1>Cadastro</h1>
			<v-layout align-center justify-center row>
				<v-col cols="12" md="6" lg="4">
					<v-form ref="signUpForm">
						<v-text-field
							prepend-icon="mdi-emoticon-outline"
							label="Nome"
							v-model="name"
							:rules="nameRules"
							required
							placeholder="Nome completo"
							type="text"
						></v-text-field>
						<v-text-field
							prepend-icon="mdi-email"
							label="Email"
							v-model="email"
							:rules="emailRules"
							required
							placeholder="Email"
							type="email"
						></v-text-field>
						<v-autocomplete
							prepend-icon="mdi-briefcase"
							label="Qual o cargo que procura?"
							:items="jobs"
						>
						</v-autocomplete>
						<v-file-input label="Adicione sua foto"></v-file-input>
						<v-text-field
							prepend-icon="mdi-calendar-month"
							label="Data de nascimento"
							v-model="birthday"
							:rules="birthdayRules"
							required
							hint="Formato: AAAA/MM/DD"
							readonly
						></v-text-field>
						<v-layout align-center justify-center>
							<v-date-picker
								color="deep-purple"
								v-model="birthday"
								locale="pt-br"
							></v-date-picker>
						</v-layout>
						<v-checkbox
							color="deep-purple"
							v-model="agreeToTerms"
							:rules="agreeToTermsRules"
							required
							label="Aceito os termos e condições."
						></v-checkbox>
						<v-layout justify-space-between>
							<v-btn color="deep-purple" dark type="submit">Enviar</v-btn>
							<v-btn color="error" @click="resetForm">Apagar</v-btn>
						</v-layout>
					</v-form>
				</v-col>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
export default {
	name: 'Singup',
	data: () => ({
		name: '',
		nameRules: [
			(value) => !!value || 'Informe seu nome completo!',
			(value) => value.length >= 12 || 'Informe seu nome completo!',
		],
		email: '',
		emailRules: [
			(value) => !!value || 'É necessário informar o e-mail!',
			(value) =>
				value.indexOf('@') !== 0 || 'É necessário informar um e-mail válido!',
			(value) => value.includes('@') || 'O e-mail deve possuir símbolo @.',

			(value) =>
				value.indexOf('.') <= value.length - 3 ||
				'E-mail deve possuir um domínio válido!',
		],
		agreeToTerms: false,
		agreeToTermsRules: [
			(value) => !!value || 'É necessário aceitar os termos e condições!',
		],
		birthday: '',
		birthdayRules: [
			(value) => !!value || 'Necessário informar data de nascimento!',
		],
		jobs: ['Estagiário(a)', 'Vendedor(a)'],
	}),
	methods: {
		resetForm() {
			this.$refs.signUpForm.reset();
		},
	},
};
</script>

<style></style>

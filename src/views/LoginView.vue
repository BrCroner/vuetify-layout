<template>
	<v-content>
		<v-card width="400" class="mx-auto mt-5">
			<v-card-title>
				<h1 class="display-1">Login</h1>
			</v-card-title>
			<v-card-text>
				<v-form>
					<v-text-field label="username" prepend-icon="mdi-account-circle" />
					<v-text-field
						:type="showPassword ? 'text' : 'password'"
						label="password"
						prepend-icon="mdi-lock"
						:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showPassword = !showPassword"
					/>
				</v-form>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn to="/singup" color="success">Cadastro</v-btn>
				<v-spacer></v-spacer>
				<v-btn color="info">Login</v-btn>
			</v-card-actions>
		</v-card>
	</v-content>
</template>

<script>
export default {
	name: 'LoginView',
	data: () => ({
		showPassword: false,
	}),
};
</script>

<template>
	<v-footer dark padless dense>
		<v-row>
			<v-col class="text-right deep-purple" cols="12" mr-10>
				<v-card-text>
					<v-btn
						icon="mdi-linkedin"
						class="mx-4 white--text"
						href="https://www.linkedin.com/in/croner/"
						target="_blank"
					>
						<v-icon size="24px" icon="mdi-linkedin"> mdi-linkedin </v-icon>
					</v-btn>
					<v-btn
						icon="mdi-github"
						class="mx-4 white--text"
						href="https://github.com/BrCroner"
						target="_blank"
					>
						<v-icon size="24px" icon="mdi-github"> mdi-github </v-icon>
					</v-btn>
					<v-btn
						icon="mdi-whatsapp"
						class="mx-4 white--text"
						href="https://web.whatsapp.com/send?phone=5561981167309&text&app_absent=0"
						target="_blank"
					>
						<v-icon size="24px" icon="mdi-whatsapp"> mdi-whatsapp </v-icon>
					</v-btn>
					<v-btn
						icon="mdi-email"
						class="mx-4 white--text"
						href="mailto:bruno.croner@outlook.com"
					>
						<v-icon size="24px" icon="mdi-email"> mdi-email </v-icon>
					</v-btn>
				</v-card-text>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script>
export default {
	name: 'TheFooter',
};
</script>

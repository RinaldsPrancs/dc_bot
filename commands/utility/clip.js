const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clip')
		.setDescription('Clips last 10 seconds from current call'),
	async execute(interaction) {
		await interaction.reply('Clipped');
	},
};
import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

import { addRoleToUser, replyMessage } from './utils/functions'

dotenv.config()

const { BOT_TOKEN, CHANNEL_ID } = process.env

const intents = [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
]

const client = new Client({
	intents: intents,
})

client.once(Events.ClientReady, () => {
	console.log('Bot is running...')
})

client.login(BOT_TOKEN)

client.on('messageCreate', async (msg) => {
	if (msg.author.bot) return

	if (msg.channelId === CHANNEL_ID) {
		const msgIsPeriod = msg.content.match(/^\d{2}.\d{1}$/)

		if (msgIsPeriod) {
			const roleExists = msg.guild?.roles.cache.find(
				({ name }) => name === msg.content
			)

			if (roleExists) {
				const userHasRole = msg.member?.roles.cache.find(
					({ name }) => name === msg.content
				)

				if (userHasRole) {
					replyMessage(msg, 'Você já faz parte desse período.')
				} else {
					addRoleToUser(msg, roleExists)
					replyMessage(msg, 'Período adicionado com sucesso!')
				}
			} else {
				const createdRole = await msg.guild?.roles.create({
					name: msg.content,
				})

				createdRole && addRoleToUser(msg, createdRole)
				replyMessage(msg, 'Período adicionado com sucesso!')
			}
		} else {
			replyMessage(msg, 'Estrutura do período errado (Ex: 22.1)')
		}
	}
})

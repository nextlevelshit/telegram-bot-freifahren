const Telegraf = require('telegraf')
const config = require('./config')
const bot = new Telegraf(config.telegram.token) 

bot.start((ctx) => {
  const { id } = ctx.update.message.from

  console.log(`[${id}] new user connected`)
})

bot.on('text', (ctx) => {
  const { id } = ctx.update.message.from
  const { text } = ctx.message
  const { sendMessage } = ctx.telegram

  sendMessage(config.telegram.chat.id, text).then(() => {
    console.log(`[${id}] new message: ${ctx.message.text}`)
  })
})

bot.launch()
const Telegraf = require('telegraf')
const config = require('./config.json')

const bot = new Telegraf(config.token) 

bot.start((ctx) => {
  const { id } = ctx.update.message.from

  console.log(`[${id}] new user connected`)
})

bot.on('text', (ctx) => {
  const { telegram, message, update } = ctx
  const { id } = update.message.from
  const { text } = message

  telegram.sendMessage(config.chat.id, text).then(() => {
    console.log(`[${id}] new message: ${ctx.message.text}`)
  })
})

bot.launch()
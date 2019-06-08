<div align="center">
  <h1>Telegram Bot</h1>  
  <sup>Privacy-protecting Bot for anonymous messaging in Telegram Channels</sup>
</div>


## Getting Started

### Rquirements

- [Install **Node.js** via package manager](//nodejs.org/en/download/package-manager/)

### Download/Clone Repository

```bash
# Via SSH
git clone git@github.com:nextlevelshit/telegram-bot-freifahren.git

# Via HTTPS
git clone https://github.com/nextlevelshit/telegram-bot-freifahren.git
```

### Install Dependencies

```bash
yarn

# Or with npm (default)

npm i
```

### Configuration

Copy `./config.example.json` to `./config.json` and fill in your person configurations.

```js
{
  "telegram": {
    "token": "",        // Telegram Bot Token
    "chat": {
      "id": "-100",     // ID of the Chat
      "username": ""    // Username of the Chat
    }
  }
}
```

### Running the script

```bash
node index.js
```

Or if you prefer to use a process manager, for instance PM2:

```
pm2 start index.js
```

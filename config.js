import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

// Global variables
global.owner = [
  ['24160338758', 'DADDYIGWE', true], 
  ['24160338758', 'PAAIGWE', true],
  ['24160338758', 'IGWETECH', true], 
  ['24160338758', '𝙺𝙸𝙽𝙶 IGWE⚡', true],
  ['24160338758', 'IGWETECH', true],
  ['24160338758', 'IGWETECH', true]
] 

global.mods = ['24160338758'] 
global.prems = ['24160338758']
global.allowed = ['24160338758']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'QUEEN-ROSI-MD'
global.premium = 'true'
global.packname = 'IGWE TECH inc' 
global.author = 'QUEEN-ROSI' 
global.menuvid = 'https://telegra.ph/file/325630f66abc968eda8e2.mp4'
global.igfg = '▢✓ support group\nhttps://chat.whatsapp.com/C6ivOH7HeeR5URsOcTeGhE\n' 
global.dygp = 'https://chat.whatsapp.com/C6ivOH7HeeR5URsOcTeGhE'
global.fgsc = 'https://github.com/papaigwe1234/QUEEN-ROSI' 
global.fgyt = 'https://youtube.com/@papaigwe'
global.fgpyp = 'https://youtube.com/@papaigwetech'
global.fglog = 'ROSI.jpg' 
global.thumb = fs.readFileSync('./ROSI.jpg')

global.wait = '*🕣 _QUEEN-ROSI IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

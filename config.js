import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
['529373853455', 'OWNER', true], 
['595986172767', 'Propietaria', true],
['5217821153974', 'Obtener tu bot personalizado', true], 
["5492266466080"],
["593968585383"], 
["593968263524"], 
["5492266613038"], 
["5217294888993"],
['595975740803'],
['595985451858'],
['595975116890'], 
['5215616098210'],
["51948705559"]]

global.mods = [''] 
global.prems = ['']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Galaxia-Bot-MD' 
global.author = '𝙶𝚊𝚕𝚊𝚡𝚒𝚊-𝙱𝚘𝚝-𝙼𝙳' 

//--info FG
global.botName = 'Galaxia-Bot-MD'
global.fgig = 'https://www.facebook.com/elrebelde21' 
global.fgsc = 'https://github.com/elrebelde21' 
global.fgyt = 'https://www.whatsapp.com/channel/0029Va90xMsFHWpvGyDqwm3O'
global.fgpyp = 'mercado pago alias: OficialGB'
global.fglog = 'https://telegra.ph/file/1df72eb5de5bd060e166c.jpg' 

//--- Grupos WA
global.fgcanal = 'https://www.whatsapp.com/channel/0029Va90xMsFHWpvGyDqwm3O'
global.bgp = 'https://chat.whatsapp.com/Fik3Dnu7v4PJNsYNBVkOwY' //loli
global.bgp2 = 'https://chat.whatsapp.com/H4hxytyGvucIF1k0UAR7es'
global.bgp3 = 'https://chat.whatsapp.com/Fik3Dnu7v4PJNsYNBVkOwY' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 30 
global.maxwarn = '6' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

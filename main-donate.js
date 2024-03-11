
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `╔══〘 𝙳𝙾𝙽𝙰𝙲𝙸𝙾𝙽𝙴𝚂 〗══╗
║════════════════
║ᰔ ¿𝐐𝐔𝐈𝐄𝐑𝐄 𝐔𝐍 𝐁𝐎𝐓 𝐏𝐀𝐑𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎? 
║════════════════
║ ☞ 𝐇𝐚𝐬 𝐮𝐧𝐚 𝐝𝐨𝐧𝐚𝐜𝐢𝐨́𝐧 𝐯𝐨𝐥𝐮𝐧𝐭𝐚𝐫𝐢𝐚 𝐚 𝐧𝐮𝐞𝐬𝐭𝐫𝐨 𝐦𝐞𝐫𝐜𝐚𝐝𝐨 𝐩𝐚𝐠𝐨
║ ☞ 𝐕𝐚𝐥𝐨𝐫 : 1 dolar = 1 grupo
║ ☞ 2 dolar = 2 grupos
║ ☞ 3 dolar = 3 grupos
║ ☞ 4 dolar = 4 grupos
║ ☞ 5 dolar = promoción mas de 10
║════════════════
║ \`ᰔᩚ 𝐐𝐔𝐈𝐄𝐑𝐄 𝐎𝐁𝐓𝐄𝐍𝐄𝐑 𝐓𝐔 𝐁𝐎𝐓 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐙𝐀𝐃𝐎? :\`
║ ☞ https://www.facebook.com/elrebelde21
║ ➳ desde 1 dolar bot personalizado normal, cambiar el precio depende que tal personalizado los queres 😺
║════════════════
║ ☛☛☛ 𝙼𝙴𝚁𝙲𝙰𝙳𝙾 𝙿𝙰𝙶𝙾 
║ ➬ 𝚊𝚕𝚒𝚊𝚜: OficialGB
╚════════════════`
let img = 'https://telegra.ph/file/1df72eb5de5bd060e166c.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rpyp)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler


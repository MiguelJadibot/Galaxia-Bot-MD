 
let handler = async (m, { conn }) => {

m.reply(`*${botName}*

════════════════
◈ Canal
${fgcanal}

◈ Grupo *1*
${bgp2}

════════════════
${bgp}
`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler

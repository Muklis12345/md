let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Kliss Ganzzz;;;\nFN:Kliss Ganzzz⸙\nORG:Kliss Ganzzz⸙\nTITLE:\nitem1.TEL;waid=6285838142263:+62 858-3814-2263\nitem1.X-ABLabel:Kliss Ganzzz⸙\nX-WA-BIZ-DESCRIPTION:${htjava} Tᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ sᴀᴠᴇ ᴋᴏɴᴛᴀᴋ!!\nX-WA-BIZ-NAME:Kliss Ganzzz⸙\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/own.jpg')
  let nowner1 = `${6285838142263.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${6285838571629.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`╳ ── ◸ *Mʏ Oᴡɴᴇʀ* ◹ ── ╳
⟣⟮ *${Muklis1}* ⟯⟢
⟬ @${6285838142263.split`@`[0]} ⟭
┆
⟣⟮ *${Muklis2}* ⟯⟢
⟬ @${6285838571629.split`@`[0]} ⟭
┆`
)
//------------ BIO
let ppown1 = await conn.profilePictureUrl(6285838142263 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `┆⫹⫺ 💌 Nama : Muklis
┆⫹⫺ ✉️ Nama RL : Klis
┆⫹⫺ ♂️ Gender : Pria
┆⫹⫺ 🕋 Agama : Islam
┆⫹⫺ ⏰ Tanggal lahir : 07 - 04 - 2007
┆⫹⫺ 🎨 Umur : 15
┆⫹⫺ 🧮 Kelas : X
┆⫹⫺ 🧩 Hobby : 𝙱𝚘𝚕𝚊
┆⫹⫺ 💬 Sifat : ASIK,BAIK,RAMAH
┆⫹⫺ 🗺️ Tinggal : Indonesia, Lampung Utara
└––––––––––––·•
`
let ppown2 = await conn.profilePictureUrl(6285838571629 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `┆⫹⫺ 💌 Nama : Muklis2
┆⫹⫺ ✉️ Nama RL : Klis
┆⫹⫺ ♂️ Gender : Pria
┆⫹⫺ 🕋 Agama : Islam
┆⫹⫺ ⏰ Tanggal lahir : 07 - 04 - 2007
┆⫹⫺ 🎨 Umur : 15
┆⫹⫺ 🧮 Kelas : X
┆⫹⫺ 🧩 Hobby : Bola
┆⫹⫺ 💬 Sifat : ASIK,BAIK,RAMAH
┆⫹⫺ 🗺️ Tinggal : Indonesia, Lampung Utara
└––––––––––––·•
`

  let tek = `⟣⟞⟚⟝ 〨⎣ *Nᴏᴛᴇ* ⎤〨 ⟞⟚⟝⟢
┆
𐚀 Oᴡɴᴇʀ Tɪᴅᴀᴋ Rᴇsᴘᴏɴᴅ Cʜᴀᴛ Aɴᴇʜ
𐚀 Oᴡɴᴇʀ Bᴇʀʜᴀᴋ Bʟᴏᴄᴋ Sɪᴀᴘᴀ Sᴀᴊᴀ
𐚀 Gᴀᴋ Rᴇsᴘᴏɴᴅ Kᴀʟᴏ Mɪɴᴛᴀ Sᴄ
𐚀 Eᴛɪᴋᴀɴʏᴀ Dɪᴘᴀᴋᴇ
𐚀 Cʜᴇᴛ Cᴇᴡᴇ Gᴡ Aɴᴇʜ Aɴᴇʜ Gᴡ Bᴜᴀᴛ Tɪᴅᴜʀ Lᴜ
𐚀 Cʜᴇᴛ Aɴᴇʜ Gᴀᴋ Jᴇʟᴀs Bᴀɴ/Bʟᴏᴄᴋ
𐚀 Cᴀʟʟ Bʟᴏᴄᴋ\n⫹ Kᴇᴛɪ *.rules* Uɴᴛᴜᴋ Mᴇʟɪʜᴀᴛ Rᴜʟᴇs Sᴇʟᴇɴɢᴋᴀᴘɴʏ ⫺`
const sections = 
[{
title: `⫹⫺ Oᴛʜᴇʀ ⫹⫺`,
rows: [
{title: "⸙ Kontak", rowId: ".owner kontak"},
{title: "⸙ Nomor", rowId: ".owner nomor"},
{title: "⸙ Biodata Muklis1", rowId: ".owner bio"},
{title: "⸙ Biodata Muklis2", rowId: ".owner bio2"},
{title: "⸙ Script", rowId: ".sc"},
]}, {
title: `⬔ Sᴜᴘᴘᴏʀᴛ Mᴇ ⬔`,
rows: [
{title: "〠 Donasi", rowId: ".owner nomor"},
{title: "〠 Sewa", rowId: ".sewa"},
{title: "〠 Buy Premium", rowId: ".premium"},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "Cʟɪᴄᴋ",
  sections
}
  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        break
          case 'nomor':
         /* conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 /*  conn.sendButton(m.chat, teksnomor, null, pp, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/own.jpg').buffer, teksnomor, `Halo ${tag}\nIᴛᴜ Oᴡɴᴇʀ Kᴜ⫺⫰⫹\n` + botdate, `Sewa Bot`, `.sewa`, 'Menu', `.menu`, ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/klia_jbff',
    mediaType: 2, 
    description: sgc,
    title: "Join Sini Juga Cuy!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, '┍┈༺ *𝙱𝚒𝚘𝙳𝚊𝚝𝚊 𝙼𝚞𝚔𝚕𝚒𝚜1* ༻', teksbio, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
                        case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, '┍┈༺ *𝙱𝚒𝚘𝙳𝚊𝚝𝚊 𝙼𝚞𝚔𝚕𝚒𝚜2* ༻', teksbio2, ppown2, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler

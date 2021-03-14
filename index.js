const colors = require("colors")
const dbd = require("dbd.js")
 
console.clear()
const bot = new dbd.Bot({
token: "NzgyMDIwODQ2MzAxNzQxMDU3.X8GHqw.RNjEoClIrNZuyCiyqZpu3eywy5Q", 
prefix: "*",
    mobile: true,
    fetchInvites: true,
})
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command(command)
} 
}
bot.onMessage()

bot.status({
      text: "$serverCount Servers | v0.0.1",
      type: "WATCHING",
      time: 6
})
 bot.variables({
     mute: "",
    warn: "0",
	rch: "",
	rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
 	lvl: "0",
	exp: "0",
 	rexp: "40",
	rsystem: "0",
    prefix: "*",
    XP: "0",
    tc: "0",
    users: "null",
    suggest_system: "no",
    suggestchannel: ""
 })
 
bot.readyCommand({
  channel: "785572423117439047",
  code: 
  `
  $djsEval[const colors = require("colors")
  console.clear()
  ` 
})
 

bot.command({
name:"restart",
code:`$addCmdReactions[✅]
$updateCommands
$onlyForIDs[737062452209909852;Error!]
`});

bot.command({
 name: "setlvchan",
 usage: "setlvchan <channel>",
 description: "settings the levelup channel",
 code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
})
 
bot.command({
 name: "resetlvchan",
 usage: "resetrank",
 description: "reset the levelup channel",
 code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
})
 
bot.command({
 name: "$alwaysExecute",
 code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]` 
})
 
bot.command({
 name: "$alwaysExecute",
 code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})
 
bot.awaitedCommand({
 name: "errorrank",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})
 
bot.command({
 name: "setlvmsg",
 usage: "setrankmsg <message>",
 description: "message for the leveled up",
 code: `$description[You have been setted the message to:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;You can also use this variables:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
})
 
bot.command({
 name: "rank",
 aliases: ["level"],
 usage: "rank (user)",
 description: "see the current level and exp",
 code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
$cooldown[5s;]`
})
bot.command({
name: "invites",
code: `
$title[$username's invite info]
$thumbnail[$authorAvatar]
$description[
Total: $sum[$userInfo[real];$userInfo[fake]]
Real: $userInfo[real]
Fake: $userInfo[fake]]
`
})
bot.botJoinCommand({
    channel: "$systemChannelID",
    code: `$title[Ovoroid]
$description[Hi im Ovoroid a nice multifonction bot if you want to know more about me i invite you to join my support server and check the website

[Support Server\\](https://discord.gg/7HZYxM3xEn) |[Website\\](https://ovoroid.arenar.xyz) |[Discord Bot\\](https://discord.com/api/oauth2/authorize?client_id=782020846301741057&permissions=-1&scope=bot) ]
`
 
})
bot.onGuildJoin()
bot.botJoinCommand({
    channel: "772414449839636490",
    code: `$title[Ive joined $serverName !]
$description[
**Server Owner**: $ownerID
**Server Region**: $serverRegion
**Channel Count**: $channelCount
**Role Count**: $roleCount
**Emoji Count**: $emojiCount
**Members Count**: $membersCount
]`
})
bot.onGuildJoin()
bot.botLeaveCommand({
    channel: "772414449839636490",
    code: `$title[Ive left $serverName !]
$description[
**Server Owner**: $ownerID
**Server Region**: $serverRegion
**Channel Count**: $channelCount
**Role Count**: $roleCount
**Emoji Count**: $emojiCount
**Members Count**: $membersCount
]`
})
bot.onGuildLeave()
bot.command({
    name: "transfer-rate",
    code: `$title[Transfer Rate]
$description[$djsEval[var netStat = require('net-stat');
var totalrx = netStat.totalRx({ iface: 'eth0', units: 'MiB' });
message.channel.send((totalrx).toFixed(3) + " mb/s");]]`
})
bot.loopCommand({
code: `$loop[1;user]
$setServerVar[users;$getObjectProperty[result]]
$addObjectProperty[result;$getReactions[$channelID;$splitText[1];<:OvoroidCoins:782679175822835743>;id]]
$createObject[{}]
$wait[10s]
$textSplit[$sendMessage[React to the message to win nothing.{reactions:<:OvoroidCoins:782679175822835743>}{delete:11s};yes]; ]
`,
channel: "783189903055388723",
executeOnStartup: true,
every: 1800000
})

bot.awaitedCommand({
 name: "user",
 code: `
$if[$getObjectProperty[user]!=782959014584778772]

The winner is <@$getObjectProperty[user]>
$onlyIf[$getObjectProperty[user]!=$clientID;No one win{delete:5s}]
$endif
$addObjectProperty[user;$splitText[$random[1;$getTextSplitLength]]]
$onlyIf[$getTextSplitLength!=1;There is no neccesary users {delete:2s}]
$createObject[{}]
$textSplit[$getServerVar[users];,]
$deleteIn[2s]
`})
bot.awaitedCommand({
 name: "awaitReaction1",
 code: `
 $editMessage[$message[1];{author:$username tested their strength:$authorAvatar}{description:
:bell:
$randomText[░
░
░
░
░
░
░
░
░
█ $random[1;10]/100 Eee?;░
░
░
░
░
░
░
░
█ $random[10;20]/100 Seriously?
█;░
░
░
░
░
░
░
█ $random[20;30]/100 Hmmm
█
█;░
░
░
░
░
█ $random[30;40]/100 Nice
█
█
█
█;░
░
░
░
░
█ $random[40;50]/100 You did better
█
█
█
█;░
░
░
░
█ $random[50;60]/100 Not bad!
█
█
█
█
█;░
░
░
█ $random[60;70]/100 Cmon lets go!
█
█
█
█
█
█;░
░
█ $random[70;80]/100 Keep it!
█
█
█
█
█
█
█;░
█ $random[80;90]/100 Wow its close
█
█
█
█
█
█
█
█;█ $random[90;100]/100 WOW!
█
█
█
█
█
█
█
█
█
█]}{footer:Come test your strength}{color:YELLOW}]`
})
bot.command({
 name: "bell",
 description: "Test your strength",
 usage: "bell",
 category: "fun",
 code: `
$reactionCollector[$splitText[1];$authorID;24h;🔔;awaitReaction1;yes]
$textSplit[$sendMessage[{author:$username tested their strength:$authorAvatar}{description:
:bell:
░ 
░ 
░ 
░ 
░ 
░ 
░ 
░ 
░ 
░}{footer:Come test your strength}{color:YELLOW};yes]; ]`
})
bot.command({
 name: "enable-suggest",
 code: ` 
$setServerVar[suggest_system;true]
Enabled! 
$onlyPerms[manageserver;You need manage server permissions]`
 })

bot.command({
 name: "disable-suggest",
 code: `
$setServerVar[suggest_system;no]

$onlyPerms[manageserver;You need manage server permissions]`
 })
bot.command({
 name: "set-suggest-channel",
 code: `
$setServerVar[suggestchannel;$mentionedChannels[1]] 
Set suggest channel to <#$mentionedChannels[1]> 
$argsCheck[>1;Please mention a channel] 
$onlyPerms[manageserver;You need manage server permission]
$onlyIf[$getServerVar[suggest_system]==true;Suggest system is not enabled!]
`
 })

bot.command({
 name: "suggest",
 code: `
 $useChannel[$getServerVar[suggestchannel]]
 $title[**New Suggestion!**]
 $description[
 username: $username[$authorID]
 Suggestion: $message]
 $color[RANDOM]
 $footer[✔ like it / ❌ didnt like it]
 $thumbnail[$userAvatar[$authorID]]
 $addCmdReactions[✔]
 $addReactions[✔;❌] 
$onlyIf[$getServerVar[suggestchannel]!=;This server has no suggest channel run **<setsuggestchannel** to set one!]
$onlyIf[$getServerVar[suggest_system]==true;Suggest system is not enabled!]

 `
 });
bot.command({
 name: "lock",
 aliases: ['l'],
 code: `$title[Locked channel!]
 $description[Locked: <#$mentionedChannels[1]>
 Moderator: <@$authorID>
 Reason:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]
Date:
> $day $month $year]
$color[ff0000]
$footer[$username#$discriminator]]
$addTimestamp
$onlyPerms[managechannels;**❌ Your missing permissions to run this command.**]
$onlyBotPerms[managechannels;**❌ I am missing the needed permissions!]
$modifyChannelPerms[$mentionedChannels[3];-sendmessages;$guildID]`
})
module.exports = ({
name: "botinfo",
code: `
$addField[<:Memory:795068245018542111> Ram;\`\`\` $round[$ram] MB / 1GB \`\`\`;yes]
$addField[<:Cpu:795068238156529726> Cpu;\`\`\` $cpu% / 100% \`\`\`;yes]
$addField[<:Channels:795068237993345095> Channels;\`\`\` $allChannelsCount \`\`\`;yes]
$addField[<:Users:795068259614326815> Users;\`\`\` $allMembersCount \`\`\`;yes]
$addField[<:Servers:795068269282197566> Servers;\`\`\` $serverCount \`\`\`;yes]
$addField[<:Uptime:795068260001120296> Uptime;\`\`\` $uptime \`\`\`;yes]
$addField[<:dev:795079498751410197> Devs;\`\`\` Growtoups#7062, MaCaKu#0369 \`\`\`;no]`
})
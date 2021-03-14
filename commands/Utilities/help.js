module.exports = ({
    name: "help",
    code: `$title[Command List]
$description[My Prefix is \`$getServerVar[prefix]\`

**__Utility Commands__**
\`\`\`$getServerVar[prefix]ping, $getServerVar[prefix]help, $getServerVar[prefix]user-info, $getServerVar[prefix]botinfo, $getServerVar[prefix]suggest, $getServerVar[prefix]invites\`\`\`

**__Fun Commands__**
\`\`\`$getServerVar[prefix]bell, $getServerVar[prefix]math \`\`\`

**__Moderation Commands__**
\`\`\`$getServerVar[prefix]ban, $getServerVar[prefix]unban, $getServerVar[prefix]set-mute, $getServerVar[prefix]mute \(not working\), $getServerVar[prefix]unmute, $getServerVar[prefix]warn, $getServerVar[prefix]warns, $getServerVar[prefix]removewarn, $getServerVar[prefix]clear, $getServerVar[prefix]server-info, $getServerVar[prefix]kick, $getServerVar[prefix]user-info, $getServerVar[prefix]enable-suggest, $getServerVar[prefix]disable-suggest, $getServerVar[prefix]set-suggest-channel\`\`\`

**__Music Commands__**
\`\`\`$getServerVar[prefix]lyrics, $getServerVar[prefix]np, $getServerVar[prefix]pause, $getServerVar[prefix]play, $getServerVar[prefix]resume, $getServerVar[prefix]queue, $getServerVar[prefix]skip\`\`\`

**__Level Commands__**
\`\`\`$getServerVar[prefix]rank, $getServerVar[prefix]setrankmsg, $getServerVar[prefix]resetlvchan, $getServerVar[prefix]setlvchan\`\`\`

**Notes:** 

\`Leveling System Note: To enable leveling, do $getServerVar[prefix]setlvchan #channel. \(use a channel where you want level up messages to go.\) \`

\`Leveling System Note 2: You can use these codes in $getServerVar[prefix]setlvmsg. \({user.tag}, user.mention}, level}, exp}\`)

[Support Server\\](https://discord.gg/7HZYxM3xEn) | [Discord Bot\\](https://discord.com/api/oauth2/authorize?client_id=782020846301741057&permissions=0&scope=bot)]

`
})
module.exports = ({
name: "reboot",
code: `**Rebooting...**
$djsEval[process.exit()
client.db.close()]
wait[5]
**Rebooting...**
$onlyForIDs[739943290966638652;310511835243741184;Error!]`
})
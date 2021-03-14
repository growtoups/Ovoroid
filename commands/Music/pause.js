module.exports = ({
    name: "pause",
    code: `$description[Stopped $songInfo[title]]
$pauseSong
$onlyIf[$voiceID!=;You are not in a VC.]
`
})
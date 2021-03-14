module.exports = ({
    name: "skip",
    code: `$description[Skipped $songInfo[title]]
$skipSong
$onlyIf[$voiceID!=;You are not in a VC.]
`
})
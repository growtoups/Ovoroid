module.exports = ({
    name: "resume",
    code: `$description[Resuming $songInfo[title]]
$resumeSong
$onlyIf[$voiceID!=;You are not in a VC.]
`
})
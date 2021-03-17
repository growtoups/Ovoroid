module.exports = ({
name: "baka",
code: `
$title[:dance: $userTag[$findUser[$message[1]]] BAKA]
$image[$jsonRequest[https://api.avux.ga/baka;message;]]
$addTimestamp
$color[RANDOM]
`});
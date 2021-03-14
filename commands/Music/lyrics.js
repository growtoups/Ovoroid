module.exports = ({
    name: "lyrics",
	code: `$title[$songInfo[title]'s Lyrics.] $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No Lyrics Found for this song.]]
$argsCheck[>0;]
$suppressErrors[Failed finding lyrics.]`
})
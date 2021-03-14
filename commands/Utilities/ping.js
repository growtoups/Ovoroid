module.exports = ({
 name: "ping",
 description: "Shows the bot's latency.",
 usage: "ping",
 code: `$if[$ping<51]
 $title[:ping_pong: Ping!]
 $description[<a:low_latency:817130492620439598> = $pingms]
 $color[dadada]
$addTimestamp
$elseIf[$ping<150]
$title[:ping_pong: Ping!]
 $description[<:medium_latency:817131800626724885> = $pingms]
 $color[YELLOW]
$addTimestamp
$endelseif
$elseIf[$ping<500]
$title[:ping_pong: Ping!]
 $description[<:big_latency:817132673637154846> = $pingms]
 $color[ORANGE]
 $addTimestamp
$endelseif
$elseIf[$ping<1000]
$title[ Ping!]
 $description[<:huge_latency:817132673671102516> = $pingms]
 $color[RED]
 $addTimestamp
$endelseif
$elseif[$ping>1000]
$title[:ping_pong: Ping!]
 $description[<a:xxx_extra_latency:817131084814352414> = $pingms]
 $color[BLACK]
$addTimestamp
$endelseif
$endif`
});
module.exports = ({
    name: "ticket-setup",
    code: `$title[Success!]
$description[The ticket category has been set! <#$message>]
$setserverVar[tc;<#$message>]
$footer[Make sure you set it as a category Name or it wont work!]
`
})
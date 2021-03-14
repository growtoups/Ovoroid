module.exports = ({
 name: "open",
 code: `
$newTicket[$username#$discriminator;{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!🎟️ Please give the information about your problem or feedback. The **Admin** or the **Moderators** will review your ticket shortly!

Thanks in advance for being patient}{footer:Use .ticketclose to close your ticket};$getServerVar[tc];no;<@$authorID>, I failed to create your ticket! Try again]
$sendMessage[Ticket Successfully opened! Hello, <@$authorID>. Go to **$toLowercase[#$username$discriminator]** to describe your issue!;Something went wrong]`
});
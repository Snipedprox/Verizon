module.exports = {
name: "invite",
$if: "v4",
code: `
$if[$getGlobalUserVar[lang]==french]
$color[1;$getVar[color]]
$description[1;:diamonds: **Invitez-moi maintenant** [Ici](https://discord.com/api/oauth2/authorize?client_id=915037953863061575&permissions=8&scope=bot%20applications.commands)]
$else
$color[1;$getVar[color]]
$description[1;<:iconshine:917444786087141396> **Invite me now [Here](https://discord.com/api/oauth2/authorize?client_id=915037953863061575&permissions=3533921&scope=bot%20applications.commands)

<:iconshine:917444786087141396> French version ( credits to $usertag[890919738597842944] ) [invite](https://discord.com/api/oauth2/authorize?client_id=914159114140151848&permissions=8&scope=bot%20applications.commands) **]
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
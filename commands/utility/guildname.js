module.exports = {
name: "setguildname",
$if: "v4",
code: `
$if[$getGlobalUserVar[lang]==french]
$color[1;$getVar[embed_color]]
$author[1;nom de serveur]
$description[1;**Le nom du serveur a été changé en** \`$message\`]
$setGuildName[$message]
$onlyIf[$ownerid==$authorid;Propriétaire du serveur uniquement]
$else
$color[1;$getVar[embed_color]]
$author[1;Guild name]
$description[1;**Server name has been changed to** \`$message\`]
$setGuildName[$message]
$onlyIf[$ownerid==$authorid;Server owner only]
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
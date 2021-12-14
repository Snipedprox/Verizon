module.exports = {
name: "setguildicon",
$if: "v4",
aliases: "setguildavatar",
code: `
$if[$getGlobalUserVar[lang]==french]
$image[1;$servericon]
$color[1;$getVar[embed_color]]
$description[1;**L'icône du serveur a été modifiée**]
$setGuildIcon[$message]
$onlyIf[$isValidLink[$message]==true;Pas un lien d'image valide]
$onlyIf[$ownerid==$authorid;Propriétaire du serveur uniquement]
$else
$image[1;$servericon]
$color[1;$getVar[embed_color]]
$description[1;**Server icon has been changed**]
$setGuildIcon[$message]
$onlyIf[$isValidLink[$message]==true;Not a valid image link]
$onlyIf[$ownerid==$authorid;Server owner only]
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
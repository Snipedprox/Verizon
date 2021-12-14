module.exports = {
name: "promocode",
aliases: ['pclaim','pc'],
code: `

$setServerVar[worth;0]

$setServerVar[promocode;@#€_&-+@#€_&-+#€_&-+++#+++++]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getServerVar[worth]]]

$color[1;$getVar[embed_color]]

$description[1;**<:arroww:915299668555096076> you claimed the promocode which was worth $numberSeparator[$getServerVar[worth];,]$getVar[symbol]
**]

$onlyIf[$toLowerCase[$message]==$getServerVar[promocode];Not a valid promocode]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`

}
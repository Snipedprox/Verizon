module.exports = {
name: "daily",
code: `

$author[1;Daily claimed!]
$color[1;$getVar[embed_color]]
$description[1;**You claimed your daily and you got $random[1;$getGlobalUserVar[dacap]]$getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;$getGlobalUserVar[dacap]]]]
$globalCooldown[24h;Its daily so wait \`%time%\`]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}
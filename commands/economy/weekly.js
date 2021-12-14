module.exports = {
name: "weekly",
code: `

$author[1;Weekly claimed!]
$color[1;$getVar[embed_color]]
$description[1;**You claimed your weekly and you got $random[70;$getGlobalUserVar[wecap]]$getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[70;$getGlobalUserVar[wecap]]]]
$globalCooldown[7d;Its weekly so wait \`%time%\`]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}
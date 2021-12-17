module.exports = {
name: "collect",
code: `
$setGlobalUserVar[allowence;$sub[$getGlobalUserVar[allowence];$getGlobalUserVar[allowence]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[allowence]]]
$color[1;$getvar[color]]
$description[1;**You claimed $numberSeparator[$getGlobalUserVar[allowence];,]$getVar[symbol]**]
$globalCooldown[3m;wait %time%]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}

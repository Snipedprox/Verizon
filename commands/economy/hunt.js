module.exports = {
name: "hunt",
$if: "v4",
code: `
$if[$getGlobalUserVar[con]==on]

$author[1;Hunting]
$color[1;$getVar[embed_color]]
$description[1;**You went hunting and found a $randomText[:tiger:;:bear:;:boar:] **
**And you sold that $randomText[:tiger:;:bear:;:boar:]  and got [$random[100;500]]($getBotInvite)$getVar[symbol]**]
$onlyIf[$getGlobalUserVar[rifle]>0;**You dont own a <:gunn:915383291765473330> , care to buy one first?]

$else

$author[1;Hunting]
$color[1;$getVar[embed_color]]
$description[1;**You went hunting and found a $randomText[:tiger:;:bear:;:boar:] **
**And you sold that $randomText[:tiger:;:bear:;:boar:]  and got [$random[1;50]]($getBotInvite)$getVar[symbol]**]
$onlyIf[$getGlobalUserVar[rifle]>0;**You dont own a <:gunn:915383291765473330> , care to buy one first?]

$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
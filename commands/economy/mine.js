module.exports = {
name: "mine",
code: `
**" $username you went mining and found"**
**Silver** <:silverore:915398370854572063> x $random[1;15]
**Crystal** <:crystal:915398448675696640> x $random[1;6]
**Ruby** <:ruby:915398513725173811> x $random[1;7]
**uranium** <:uranium:915398578728480828> x $random[1;4]
**Sulphur** <:sulphur:915398728477716503> x $random[1;5]

**and you also found $random[1;150]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;150]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[1;15]]]

$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[1;6]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[1;7]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[1;5]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[1;4]]]

$onlyIf[$getGlobalUserVar[pickaxe]>0;**Go buy <:pickaxee:915383399424868363>**]

$globalCooldown[5m;wait %time%]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}

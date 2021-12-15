module.exports = {
$if: "v4", 
name: "profile",
code: `
$title[1;**$username[$findUser[$message;yes]]\'s profile**]
$color[1;$getVar[color]]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message;yes]];null;$useravatar[$clientid]]]
$description[1;
**Progress
Money: $getVar[symbol]$numberSeparator[$getGlobalUserVar[cash;$findUser[$message;yes]];,]
Bank: $getVar[symbol]$numberSeparator[$getGlobalUserVar[bank;$findUser[$message;yes]];,]**

**Rings**
**<:collection:916313297077289021> Collected:** $replaceText[$replaceText[$getGlobalUserVar[coring;$findUser[$message;yes]];0; ];1;<:cocring:916288282994819072>] $replaceText[$replaceText[$getGlobalUserVar[uncoring;$findUser[$message;yes]];0; ];1;<:ucring:916288340158984192>] $replaceText[$replaceText[$getGlobalUserVar[epring;$findUser[$message;yes]];0; ];1;<:epiccc:916288471419736094>] $replaceText[$replaceText[$getGlobalUserVar[myring;$findUser[$message;yes]];0; ];1;<:mringg:916288561576292352>] $replaceText[$replaceText[$getGlobalUserVar[lering;$findUser[$message;yes]];0; ];1;<a:legendaryring:916288587203506198>] $replaceText[$replaceText[$getGlobalUserVar[faring;$findUser[$message;yes]];0; ];1;<a:fabled:916288646196379709>]

**Automation**
<:robotit:915697139206742087> **Earnings:** **$getVar[symbol]$numberSeparator[$getGlobalUserVar[alcap;$findUser[$message;yes]];,]/s**
<a:collect:915696684045058058> **Collect:** \`$getServerVar[prefix]collect\`
<:robotit:915697139206742087> **Available:** $getVar[symbol]**$numberSeparator[$getGlobalUserVar[allowence;$findUser[$message;yes]];,]**]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
module.exports = ({
name:"with",
aliases:"withdraw",
category:"Economy",
explanation:"Withdraw $getVar[symbol] from your bank!",
bot:"Embed Links",
user:"None",
usage:"with <amount>",
example:"with 1000",
explain:"Withdraw 1000 from your bank!",
code:`$color[1;$getVar[embed_color]]
$description[1;**You withdrew $numberSeparator[$get[amount];,]$getVar[symbol]**]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$get[amount]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$get[amount]]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot withraw 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot withdraw negative amounts!}{color:FF0000}}]
$onlyif[$getGlobalUserVar[bank]>=$get[amount];{newEmbed:{description:You do not have that much to withdraw!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[bank;$authorID];1];max;$getGlobalUserVar[bank;$authorID];1]]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`})
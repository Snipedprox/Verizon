module.exports = ({
name:"give",
aliases:"pay",
description:"Pay cash to someone!",
usage:"pay <amount> <user>",
code:`
$sendmessage[{newEmbed: {color:BLUE} {description:**<@$authorID> gave **$getVar[symbol] \`$numberSeparator[$get[amount];,]\` **(and paid** $getVar[symbol] \`$numberSeparator[$sub[$get[tax];$get[amount]];,]\`** tax) to $username[$get[user]]**}};no]

$setglobaluservar[cash;$sub[$getglobaluservar[cash;$authorID];$get[amount]];$authorID]

$setglobaluservar[cash;$sum[$getglobaluservar[cash;$get[user]];$get[amount]];$get[user]]

$onlyif[$get[amount]!=0;{newEmbed:{description:$getVar[x] Cannot pay 0!}{color:FF0000}}]

$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:$getVar[x] Cannot pay negative amounts!}{color:FF0000}}]

$onlyif[$get[amount]<=$getglobaluservar[cash;$authorID];{newEmbed:{description:$getVar[x] You do not have that much to give!}{color:FF0000}}]

$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:$getVar[x] Invalid Args
Usage:
\`pay <amount> <user>\`}{color:FF0000}}]



$let[tax;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1]]

$let[amount;$truncate[$sub[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1];$multi[$divide[5;100];$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1]]]]]



$onlyif[$get[user]!=$authorid;{newEmbed:{description:$getVar[x] Do you really want to share your cash?}{color:FF0000}}]

$onlyif[$memberexists[$get[user]]==true;{newEmbed:{description:$getVar[x] User not found!}{color:FF0000}}]

$let[user;$findUser[$message[2];no]]

$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]
`}) 

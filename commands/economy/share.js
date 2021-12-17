module.exports = ({
name:"share",
$if: "v4",
aliases:"gift",
category:"Economy",
explanation:"Pay money to someone!",
bot:"Embed Links",
user:"None",
usage:"pay <amount> <user>",
example:"pay 1000 Stickman",
explain:"Pay 1000 money to the user Stickman!",
code:`
$if[$message[3]==silver]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:silverore:915398370854572063> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[silver;$sub[$getglobaluservar[silver];$get[amount]]]
$setglobaluservar[silver;$sum[$getglobaluservar[silver;$findUser[$message[2];no]];$get[amount]];$findUser[$message[2];no]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[silver];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[silver;$authorID];1];max;$getglobalUserVar[silver;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]


$else

$if[$message[3]==crystal]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:crystal:915398448675696640> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[crystal;$sub[$getglobaluservar[crystal];$get[amount]]]
$setglobaluservar[crystal;$sum[$getglobaluservar[crystal;$findUser[$message[2];no]];$get[amount]]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[crystal];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[crystal;$authorID];1];max;$getglobalUserVar[crystal;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]


$else


$if[$message[3]==ruby]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:ruby:915398513725173811> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[ruby;$sub[$getglobaluservar[ruby];$get[amount]]]
$setglobaluservar[ruby;$sum[$getglobaluservar[ruby];$findUser[$message[2];no]];$get[amount]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[ruby];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[ruby;$authorID];1];max;$getglobalUserVar[ruby;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]


$else

$if[$message[3]==uranium]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:uranium:915398578728480828> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[uranium;$sub[$getglobaluservar[uranium];$get[amount]]]
$setglobaluservar[uranium;$sum[$getglobaluservar[uranium];$findUser[$message[2];no]];$get[amount]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[uranium];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[uranium;$authorID];1];max;$getglobalUserVar[uranium;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]


$else

$if[$message[3]==sulphur]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:sulphur:915398728477716503> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[sulphur;$sub[$getglobaluservar[sulphur];$get[amount]]]
$setglobaluservar[sulphur;$sum[$getglobaluservar[sulphur];$findUser[$message[2];no]];$get[amount]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[sulphur];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[sulphur;$authorID];1];max;$getglobalUserVar[sulphur;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]


$else

$if[$message[3]==common]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:common:915398728477716503> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[common;$sub[$getglobaluservar[common];$get[amount]]]
$setglobaluservar[common;$sum[$getglobaluservar[common];$findUser[$message[2];no]];$get[amount]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[common];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[common;$authorID];1];max;$getglobalUserVar[common;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]


$else

$if[$message[3]==uncommon]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:uncommonly:913557451800993852> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[uncommon;$sub[$getglobaluservar[uncommon];$get[amount]]]
$setglobaluservar[uncommon;$sum[$getglobaluservar[uncommon];$findUser[$message[2];no]];$get[amount]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[uncommon];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[uncommon;$authorID];1];max;$getglobalUserVar[uncommon;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]


$else

$if[$message[3]==rare]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:rare:913557619547979787> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[rare;$sub[$getglobaluservar[rare];$get[amount]]]
$setglobaluservar[rare;$sum[$getglobaluservar[rare];$findUser[$message[2];no]];$get[amount]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[rare];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[rare;$authorID];1];max;$getglobalUserVar[rare;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]


$else

$if[$message[3]==legendary]
$sendmessage[{newEmbed:{author:item transfered}{description:**Successfully gave $numberSeparator[$get[amount];,]<:legendary:913557686623273001> to** \`$username[$findUser[$message[2];no]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[legendary;$sub[$getglobaluservar[legendary];$get[amount]]]
$setglobaluservar[legendary;$sum[$getglobaluservar[legendary];$findUser[$message[2];no]];$get[amount]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot share 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot share negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[legendary];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[legendary;$authorID];1];max;$getglobalUserVar[legendary;$authorID];1]]
$onlyif[$findUser[$message[2];no]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$findUser[$message[2];no]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]

$else
\`$getServerVar[prefix]gift <amount> <user> <item>\`
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]
`})

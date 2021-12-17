module.exports = {
name: "smelt",
$if: "v4",
aliases: "melt",
code: `

$if[$message[1]==blaze]
$setGlobalUserVar[blaze;$sum[$getGlobalUserVar[blaze];$multi[$message[2];1]]]

$setGlobalUserVar[tin;$sub[$getGlobalUserVar[tin];$multi[$message[2];3]]]
$setGlobalUserVar[wood;$sub[$getGlobalUserVar[wood];$multi[$message[2];50]]]

$author[1;Item crafted;https://cdn.discordapp.com/emojis/920055199287095306.png?size=128]
$thumbnail[1;https://cdn.discordapp.com/emojis/920055199287095306.png?size=128]
$color[1;$getVar[color]]
$description[1;**You have successfully crafted** \`$numberSeparator[$multi[$message[2];1];,]\`<:blaxemate:920055199287095306>
\` - $numberSeparator[$multi[$message[2];50];,] \` <:logs:920037648054235167>
\` - $numberSeparator[$multi[$message[2];3];,] \` <:tinmetal:920059437614530570>
]


$onlyIf[$message[2]>0;**specify an amount please**]


$onlyIf[$getGlobalUserVar[tin]>$multi[$message[2];2];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**You do not have enough <:tinmetal:920059437614530570>** \`$numberSeparator[$getGlobalUserVar[tin];,] / $numberSeparator[$multi[$message[2];3];,]\` <:tinmetal:920059437614530570>}}]

$onlyIf[$getGlobalUserVar[wood]>$multi[$message[2];49];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**You do not have enough <:logs:920037648054235167>** \`$numberSeparator[$getGlobalUserVar[wood];,] / $numberSeparator[$multi[$message[2];50];,]\` <:logs:920037648054235167>}}]


$onlyIf[$getGlobalUserVar[campfire]>0;**Go buy a <:dfire:920026810048217138> first**]

$onlyIf[$checkContains[$message[2];-;+;minus]==false;{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured} {description:**Please do not us negative numbers**}}]

$else

$if[$message[1]==metal]
$setGlobalUserVar[tin;$sum[$getGlobalUserVar[tin];$multi[$message[2];1]]]

$setGlobalUserVar[silver;$sub[$getGlobalUserVar[silver];$multi[$message[2];20]]]

$author[1;Item crafted;https://cdn.discordapp.com/emojis/920059437614530570.png?size=128]
$thumbnail[1;https://cdn.discordapp.com/emojis/920059437614530570.png?size=128]
$color[1;$getVar[color]]
$description[1;**You have successfully crafted** \`$numberSeparator[$multi[$message[2];1];,]\`<:tinmetal:920059437614530570>
\` - $numberSeparator[$multi[$message[2];20];,] \` <​:silverore:915398370854572063>
]


$onlyIf[$message[2]>0;**specify an amount please**]


$onlyIf[$getGlobalUserVar[silver]>$multi[$message[2];19];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured} {description:**You do not have enough <:silverore:915398370854572063>** \`$numberSeparator[$getGlobalUserVar[silver];,] / $numberSeparator[$multi[$message[2];20];,]\` <:silverore:915398370854572063>}}]




$onlyIf[$getGlobalUserVar[campfire]>0;**Go craft a <:dfire:920026810048217138> first**]

$onlyIf[$checkContains[$message[2];-;+;minus]==false;{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**Please do not us negative numbers**}}]
$else
$getVar[x] **Invalid item**
$endif
$endif`}
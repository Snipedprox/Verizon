module.exports = {
name: "craft",
$if: "v4",
code: `
$if[$message[1]==lucky]
$setGlobalUserVar[lucky;$sum[$getGlobalUserVar[lucky];$multi[$message[2];1]]]
$setGlobalUserVar[wbottle;$sub[$getGlobalUserVar[wbottle];$multi[$message[2];1]]]
$setGlobalUserVar[leaf;$sub[$getGlobalUserVar[leaf];$multi[$message[2];25]]]
$setGlobalUserVar[wood;$sub[$getGlobalUserVar[wood];$multi[$message[2];50]]]

$author[1;Item crafted;https://cdn.discordapp.com/emojis/920052406467838013.png?size=128]
$thumbnail[1;https://cdn.discordapp.com/emojis/920052406467838013.png?size=128]
$color[1;$getVar[color]]
$description[1;**You have successfully crafted** \`$numberSeparator[$multi[$message[2];1];,]\`<:gpotion:920052406467838013>
\` - $numberSeparator[$multi[$message[2];25];,] \`<:leaf:920052030045818930>
\` - $numberSeparator[$multi[$message[2];1];,] \` <:woterbottle:920053202869682198>
\` - $numberSeparator[$multi[$message[2];50];,] \`<:logs:920037648054235167>
]


$onlyIf[$message[2]>0;**specify an amount please**]

$onlyIf[$getGlobalUserVar[leaf]>$multi[$message[2];24];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**You do not have enough <:leaf:920052030045818930>** \`$numberSeparator[$getGlobalUserVar[leaf];,] / $numberSeparator[$multi[$message[2];25];,]\` <:leaf:920052030045818930>}}]

$onlyIf[$getGlobalUserVar[wbottle]>$multi[$message[2];1];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**You do not have enough <:woterbottle:920053202869682198>** \`$numberSeparator[$getGlobalUserVar[wbottle];,] / $numberSeparator[$multi[$message[2];1];,]\` <:woterbottle:920053202869682198>}}]


$onlyIf[$getGlobalUserVar[wood]>$multi[$message[2];49];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**You do not have enough <:logs:920037648054235167>** \`$numberSeparator[$getGlobalUserVar[wood];,] / $numberSeparator[$multi[$message[2];50];,]\` <:logs:920037648054235167>}}]

$onlyIf[$checkContains[$message[2];-;+;minus]==false;{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**Please do not us negative numbers**}}]

$else

$if[$message[1]==magicwood]
$setGlobalUserVar[magicwood;$sum[$getGlobalUserVar[magicwood];$multi[$message[2];1]]]

$setGlobalUserVar[blaze;$sub[$getGlobalUserVar[blaze];$multi[$message[2];5]]]
$setGlobalUserVar[wood;$sub[$getGlobalUserVar[wood];$multi[$message[2];100]]]

$author[1;Item crafted;https://cdn.discordapp.com/emojis/920058962731225108.png?size=128]
$thumbnail[1;https://cdn.discordapp.com/emojis/920058962731225108.png?size=128]
$color[1;$getVar[color]]
$description[1;**You have successfully crafted** \`$numberSeparator[$multi[$message[2];1];,]\`<:mbwood:920058962731225108>
\` - $numberSeparator[$multi[$message[2];5];,] \` <:blaxemate:920055199287095306>
\` - $numberSeparator[$multi[$message[2];100];,] \`<:logs:920037648054235167>
]


$onlyIf[$message[2]>0;**specify an amount please**]

$onlyIf[$getGlobalUserVar[blaze]>$multi[$message[2];24];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**You do not have enough <:blaxemate:920055199287095306>** \`$numberSeparator[$getGlobalUserVar[blaze];,] / $numberSeparator[$multi[$message[2];5];,]\` <:blaxemate:920055199287095306>}}]



$onlyIf[$getGlobalUserVar[wood]>$multi[$message[2];99];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**You do not have enough <:logs:920037648054235167>** \`$numberSeparator[$getGlobalUserVar[wood];,] / $numberSeparator[$multi[$message[2];100];,]\` <:logs:920037648054235167>}}]

$onlyIf[$checkContains[$message[2];-;+;minus]==false;{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured**} {description:**Please do not us negative numbers**}}]

$else

$if[$message[1]==campfire]
$setGlobalUserVar[campfire;$sum[$getGlobalUserVar[campfire];$multi[$message[2];1]]]


$setGlobalUserVar[wood;$sub[$getGlobalUserVar[wood];$multi[$message[2];50]]]

$author[1;Item crafted;https://cdn.discordapp.com/emojis/920058962731225108.png?size=128]
$thumbnail[1;https://cdn.discordapp.com/emojis/920058962731225108.png?size=128]
$color[1;$getVar[color]]
$description[1;**You have successfully crafted** \`$numberSeparator[$multi[$message[2];1];,]\`<:dfire:920026810048217138>
\` - $numberSeparator[$multi[$message[2];50];,] \`<:logs:920037648054235167>
]


$onlyIf[$message[2]>0;**specify an amount please**]





$onlyIf[$getGlobalUserVar[wood]>$multi[$message[2];49];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured} {description:**You do not have enough ** <:logs:920037648054235167> \`$numberSeparator[$getGlobalUserVar[wood];,] / $numberSeparator[$multi[$message[2];50];,]\` <:logs:920037648054235167>}}]

$onlyIf[$checkContains[$message[2];-;+;minus]==false;{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:errorxx:920069896455454760> Error occured} {description:**Please do not us negative numbers**}}]
$endif
$endif
$endif
$suppressErrors[ {error} ]`}
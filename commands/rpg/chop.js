module.exports = {
name: "chop",
$if: "v4",
code: `
$if[$getGlobalUserVar[xpon]==on]
$title[1;**Swing swoop chop**]
$thumbnail[1;https://images-ext-2.discordapp.net/external/t4IQf4YzvaWNgn_17EutOwPUxP-aJmoofF7Qlm4C5FM/%3Fsize%3D56/https/cdn.discordapp.com/emojis/872905444421677056.gif]
$description[1;**You went into $randomText[a dark forest;a forest] and since you have an <:xpboost:920026566396870666> enabled you got**
** + $random[5;15] $getVar[xpsymbol]**
** + $random[20;40] <:logs:920037648054235167> **
** + $random[100;500] $getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;500]]]

$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$random[20;40]]]

$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[5;15]]]

$else

$if[$getGlobalUserVar[xpon]==off]
$title[1;**Swing swoop chop**]
$thumbnail[1;https://images-ext-2.discordapp.net/external/t4IQf4YzvaWNgn_17EutOwPUxP-aJmoofF7Qlm4C5FM/%3Fsize%3D56/https/cdn.discordapp.com/emojis/872905444421677056.gif]
$description[1;**You went into $randomText[a dark forest;a forest] and since you dont have an <:xpboost:920026566396870666> enabled you got**
** + $random[1;10] $getVar[xpsymbol]**
** + $random[10;20] <:logs:920037648054235167> **
** + $random[10;300] $getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;300]]]

$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$random[10;20]]]

$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;10]]]
$endif
$endif
$globalCooldown[5m;**Mhm seems like the forest is empty check back later in like ** \`%time%\`]
$onlyIf[$getGlobalUserVar[axe]>0;**You do not have an axe**]`}
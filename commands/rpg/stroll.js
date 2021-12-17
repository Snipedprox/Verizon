module.exports = {
name: "stroll",
$if: "v4",
code: `
$if[$getGlobalUserVar[lon]==off]
$title[1;**Strolling...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/867373558530441246.gif?size=56]
$description[1;**You are currently strolling through the $randomText[streets;hood;park;dark allyway]...**]


$editIn[2s;
{newEmbed: {title:**Strolling...**} {thumbnail:https://cdn.discordapp.com/emojis/867373558530441246.gif?size=56}
{description:**You are currently still strolling through that $randomText[streets;hood;park;dark allyway]... still looking :eyes:... wait is that a robber** *runs the other way*}};{newEmbed: {title:**Hollup what**} {thumbnail:https://cdn.discordapp.com/emojis/867373558530441246.gif?size=56}
{description:**You are currently still strolling through that $randomText[streets;hood;park;dark allyway]... still looking** :eyes:... **wait you found something** *walks*}};{newEmbed: {title:**Mhm lets see**} {thumbnail:https://cdn.discordapp.com/emojis/867373558530441246.gif?size=56}
{description:**Wow while strolling you found**
+ $random[1;10] <:leaf:920052030045818930>
+ $random[1;50] $getVar[symbol]
+ $random[1;5] $getVar[xpsymbol]}}]

$setGlobalUserVar[leaf;$sum[$getGlobalUserVar[leaf];$random[1;10]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;50]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;5]]]

$else

$if[$getGlobalUserVar[lon]==on]
$title[1;**Strolling...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/867373558530441246.gif?size=56]
$description[1;**You are currently strolling through the $randomText[streets;hood;park;dark allyway]...**]


$editIn[2s;
{newEmbed: {title:**Strolling...**} {thumbnail:https://cdn.discordapp.com/emojis/867373558530441246.gif?size=56}
{description:**You are currently still strolling through that $randomText[streets;hood;park;dark allyway]... still looking :eyes:... wait is that a robber** *runs the other way*}};{newEmbed: {title:**Hollup what**} {thumbnail:https://cdn.discordapp.com/emojis/867373558530441246.gif?size=56}
{description:**You are currently still strolling through that $randomText[streets;hood;park;dark allyway]... still looking** :eyes:... **wait you found something** *walks*}};{newEmbed: {title:**Mhm lets see**} {thumbnail:https://cdn.discordapp.com/emojis/867373558530441246.gif?size=56}
{description:**Wow while strolling you found
+ $random[10;100] <:leaf:920052030045818930>
+ $random[10;500] $getVar[symbol]
+ $random[10;50] $getVar[xpsymbol]**}}]

$setGlobalUserVar[leaf;$sum[$getGlobalUserVar[leaf];$random[10;100]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;500]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[10;50]]]

$endif
$endif

$globalCooldown[5m;**Oh shoot there is someone on the street i wouldnt go out at this time wait** \`%time%\`]`}

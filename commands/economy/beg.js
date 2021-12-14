module.exports = {
name: "beg",
$if: "v4",
code: `
$if[$getGlobalUserVar[con]==on]
$title[1;**Beggar**]
$color[1;$getVar[embed_color]]
$description[1;**You begged $randomText[another beggar which is terrible but he gave you $random[50;500]$getVar[symbol];Your mom for some money she said gtfo and get a job and she gave you $random[50;500]$getVar[symbol];Yourself for some $getVar[symbol] and you gave yourself $random[50;500]$getVar[symbol];God for some $getVar[symbol] even though your an atheist... god somehow gave you $random[50;500]$getVar[symbol] now do you belive in miracles?;Deez nuts and deez nuts gave you $random[50;500]$getVar[symbol];My owner who gave you $random[1;50]$getVar[symbol];nobody today wait what... well nobody gave you $random[50;500]$getVar[symbol]]**]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[50;500]]]
$globalCooldown[30s;Mhm try again in %time%]

$else

$title[1;**Beggar**]
$color[1;$getVar[embed_color]]
$description[1;**You begged $randomText[another beggar which is terrible but he gave you $random[1;50]$getVar[symbol];Your mom for some money she said gtfo and get a job and she gave you $random[1;50]$getVar[symbol];Yourself for some $getVar[symbol] and you gave yourself $random[1;50]$getVar[symbol];God for some $getVar[symbol] even though your an atheist... god somehow gave you $random[1;50]$getVar[symbol] now do you belive in miracles?;Deez nuts and deez nuts gave you $random[1;50]$getVar[symbol];My owner who gave you $random[1;50]$getVar[symbol];nobody today wait what... well nobody gave you $random[1;50]$getVar[symbol]]**]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;50]]]
$globalCooldown[30s;Mhm try again in %time%]
$endif

$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}
module.exports = {
name: "crime",
$if: "v4",
code: `
$if[$getGlobalUserVar[con]==on]

$author[1;Criminals be like]
$color[1;$getVar[embed_color]]
$description[1;<:iconfire:917445081890431066> **you commited a crime which is not so nice of you**
**You did get away with it and got [$numberSeparator[$random[100;1000];,]]($getBotInvite)$getVar[symbol] **
]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;1000]]]

$else

$author[1;Criminals be like]
$color[1;$getVar[embed_color]]
$description[1;<:iconfire:917445081890431066> **you commited a crime which is not so nice of you**
**You did get away with it and got [$numberSeparator[$random[1;100];,]]($getBotInvite)$getVar[symbol] **
]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;100]]]
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}
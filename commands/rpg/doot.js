module.exports = [{
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getGlobalUserVar[trumpet;$authorid]>0]
$awaitMessages[$channelId;everyone;50s;doot;doot;well nobody claimed the coins they just disapeared better luck next time tho;{}]

$author[1;Oh no its raining]
$color[1;YELLOW]
$thumbnail[1;https://images-ext-1.discordapp.net/external/7LZ10C9Ki_tsVfpKjDGqU7x4p5Ebk67w-IxerLtrKbk/%3Fsize%3D56/https/cdn.discordapp.com/emojis/587039929050071060.png]
$addTimeStamp[1;ms]
$description[1;<:ctumptet:920023394844565604> **Oh no its raining money... it looks like someone has a coin trumpet but you need to claim these coins,
in chat type** \`doot\` **to claim the coins**]
$onlyIf[$random[1;30]==15;]
$endif`
}, {
type: "awaited",
name: "doot",
code: `
$author[1;Coins claimed]
$color[1;GREEN]
$addTimeStamp[1;ms]
$deletecommand
$deleteIn[25s]
$description[1; **$username claimed the coins before anyone else could, well done dude you earned **\`$numberSeparator[$random[1;2000];,]\`$getVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;2000]]]`}]
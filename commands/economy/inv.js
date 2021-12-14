module.exports = {
name: "inv",
$if: "v4",
aliases: "inventory",
code: `
$if[$message[1]==]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;
<:rod:915383213944356865>**Fishing rod ─ **$getGlobalUserVar[rod;$findUser[$message[2];yes]]
**ID** \`rod\` **- Tool**

<:pcc:915383344106184795>**Laptops ─ **$getGlobalUserVar[laptop;$findUser[$message[2];yes]]
**ID** \`laptop\` **- Tool**

<:gunn:915383291765473330>**Hunting rifle ─ **$getGlobalUserVar[rifle;$findUser[$message[2];yes]]
**ID** \`rifle\` **- Tool**

<:pickaxee:915383399424868363>**Pickaxe ─ **$getGlobalUserVar[pickaxe;$findUser[$message[2];yes]]
**ID** \`pickaxe\` **- Tool**]
$footer[1;Page 1 of 6]
$else

$if[$message[1]==1]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;
<:rod:915383213944356865>**Fishing rod ─ **$getGlobalUserVar[rod;$findUser[$message[2];yes]]
**ID** \`rod\` **- Tool**

<:pcc:915383344106184795>**Laptops ─ **$getGlobalUserVar[laptop;$findUser[$message[2];yes]]
**ID** \`laptop\` **- Tool**

<:gunn:915383291765473330>**Hunting rifle ─ **$getGlobalUserVar[rifle;$findUser[$message[2];yes]]
**ID** \`rifle\` **- Tool**

<:pickaxee:915383399424868363>**Pickaxe ─ **$getGlobalUserVar[pickaxe;$findUser[$message[2];yes]]
**ID** \`pickaxe\` **- Tool**]
$footer[1;Page 1 of 6]
$else
$if[$message[1]==2]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:common:913557310486482974>**Common lootbox ─ **$numberSeparator[$getGlobalUserVar[common;$findUser[$message[2];yes]];,]
**ID** \`common\` **- Lootbox**

<:uncommonly:913557451800993852>**Uncommon lootbox ─ **$numberSeparator[$getGlobalUserVar[uncommon;$findUser[$message[2];yes]];,]
**ID** \`uncommon\` **- Lootbox**

<:rare:913557619547979787>**Rare lootbox ─ **$numberSeparator[$getGlobalUserVar[rare;$findUser[$message[2];yes]];,]
**ID** \`rare\` **- Lootbox**

<:legendary:913557686623273001>**Legendary lootbox ─ **$numberSeparator[$getGlobalUserVar[legendary;$findUser[$message[2];yes]];,]
**ID** \`legendary\` **- Lootbox**]
$footer[1;Page 2 / 6]
$else
$if[$message[1]==3]

$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$footer[1;Page 3 / 6]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:silverore:915398370854572063>**Silver gem ─ **$numberSeparator[$getGlobalUserVar[silver;$findUser[$message[2];yes]];,]
**ID** \`common\` **- Lootbox**

<:crystal:915398448675696640>**Crystal gem ─ **$numberSeparator[$getGlobalUserVar[crystal;$findUser[$message[2];yes]];,]
**ID** \`uncommon\` **- Lootbox**

<:ruby:915398513725173811>**Ruby gem ─ **$numberSeparator[$getGlobalUserVar[ruby;$findUser[$message[2];yes]];,]
**ID** \`rare\` **- Lootbox**

<:uranium:915398578728480828>**Uranium gem ─ **$numberSeparator[$getGlobalUserVar[uranium;$findUser[$message[2];yes]];,]
**ID** \`rare\` **- Lootbox**

<:sulphur:915398728477716503>**Sulphur gem ─ **$numberSeparator[$getGlobalUserVar[sulphur;$findUser[$message[2];yes]];,]
**ID** \`legendary\` **- Lootbox**]
$else
$if[$message[1]==4]

$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$footer[1;Page 4 / 6]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:common:916710762255372418>**Common box ─ **$numberSeparator[$getGlobalUserVar[cbox;$findUser[$message[2];yes]];,]
**ID** \`cbox\` **- Lootbox**

<:uncommon:916710813560082473>**Uncommon box ─ **$numberSeparator[$getGlobalUserVar[ubox;$findUser[$message[2];yes]];,]
**ID** \`ubox\` **- Lootbox**

<:rare:916710854429392957>**Rare box ─ **$numberSeparator[$getGlobalUserVar[rbox;$findUser[$message[2];yes]];,]
**ID** \`rbox\` **- Lootbox**

<:cpic:916710911711002675>**Epic box ─ **$numberSeparator[$getGlobalUserVar[ebox;$findUser[$message[2];yes]];,]
**ID** \`ebox\` **- Lootbox**

<:mythicaly:916711645026353202>**Mythical box ─ **$numberSeparator[$getGlobalUserVar[mbox;$findUser[$message[2];yes]];,]
**ID** \`mbox\` **- Lootbox**

<:legendary:916711006519054336>**Legendary box ─ **$numberSeparator[$getGlobalUserVar[lbox;$findUser[$message[2];yes]];,]
**ID** \`lbox\` **- Lootbox**]

$else

$if[$message[1]==5]

$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$footer[1;Page 5 / 6]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:dfire:920026810048217138>**Camp fire ─ **$numberSeparator[$getGlobalUserVar[campfire;$findUser[$message[2];yes]];,]
**ID** \`campfire\` **- rpg**

<:ctumptet:920023394844565604>**Coin trumpet ─ **$numberSeparator[$getGlobalUserVar[trumpet;$findUser[$message[2];yes]];,]
**ID** \`trumpet\` **- boost**

<:woterbottle:920053202869682198>**Water boost ─ **$numberSeparator[$getGlobalUserVar[wbottle;$findUser[$message[2];yes]];,]
**ID** \`bottle\` **- craftable**

<:pboost:920026637809098833>**Coin boost ─ **$numberSeparator[$getGlobalUserVar[cboost;$findUser[$message[2];yes]];,]
**ID** \`cboost\` **- boost**

<:xpboost:920026566396870666>**XPboost ─ **$numberSeparator[$getGlobalUserVar[xpboost;$findUser[$message[2];yes]];,]
**ID** \`xpboost\` **- boost**

<:gpotion:920052406467838013>**Luck potion ─ **$numberSeparator[$getGlobalUserVar[lucky;$findUser[$message[2];yes]];,]
**ID** \`luck\` **- boost**
]

$else

$if[$message[1]==6]

$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$footer[1;Page 6 / 6]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:leaf:920052030045818930>**Leaf ─ **$numberSeparator[$getGlobalUserVar[leaf;$findUser[$message[2];yes]];,]
**ID** \`leaf\` **- craftable**

<:logs:920037648054235167>**Wooden logs ─ **$numberSeparator[$getGlobalUserVar[wood;$findUser[$message[2];yes]];,]
**ID** \`wood\` **- craftable**

<:mbwood:920058962731225108>**Magic wood ─ **$numberSeparator[$getGlobalUserVar[magicwood;$findUser[$message[2];yes]];,]
**ID** \`magicwood\` **- craftable**

<:tinmetal:920059437614530570>**Silver ingot ─ **$numberSeparator[$getGlobalUserVar[tin;$findUser[$message[2];yes]];,]
**ID** \`tin\` **- craftable**

<:blaxemate:920055199287095306>**Blazing metal ─ **$numberSeparator[$getGlobalUserVar[blaze;$findUser[$message[2];yes]];,]
**ID** \`blaze\` **- craftable**
]

$endif
$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}
module.exports = {
name: "sell",
$if: "v4",
code: `
$if[$message[1]==rod]
**You sold $truncate[$multi[$message[2];1]] <:rod:915383213944356865> and earned $truncate[$multi[1500;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[1500;$message[2]]]]]
$setGlobalUserVar[rod;$sub[$getGlobalUserVar[rod];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[rod]>=$multi[$message[2];1];**You dont have enough <:rod:915383213944356865> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]
$else

$if[$message[1]==rifle]
**You sold $truncate[$multi[$message[2];1]] <:gunn:915383291765473330> and earned $truncate[$multi[1500;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[1500;$message[2]]]]]
$setGlobalUserVar[rifle;$sub[$getGlobalUserVar[rifle];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[rifle]>=$multi[$message[2];1];**You dont have enough <:gunn:915383291765473330> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]
$else
$if[$message[1]==laptop]
**You sold $truncate[$multi[$message[2];1]] <:pcc:915383344106184795> and earned $truncate[$multi[1500;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[1500;$message[2]]]]]
$setGlobalUserVar[laptop;$sub[$getGlobalUserVar[laptop];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[laptop]>=$multi[$message[2];1];**You dont have enough <:pcc:915383344106184795> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]
$else
$if[$message[1]==pickaxe]
**You sold $truncate[$multi[$message[2];1]] <:pickaxee:915383399424868363> and earned $truncate[$multi[1500;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[1500;$message[2]]]]]
$setGlobalUserVar[pickaxe;$sub[$getGlobalUserVar[pickaxe];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[pickaxe]>=$multi[$message[2];1];**You dont have enough <:pickaxee:915383399424868363> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]
$else

$if[$message[1]==silver]
**You sold $truncate[$multi[$message[2];1]] <:silverore:915398370854572063> and earned $truncate[$multi[5;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[5;$message[2]]]]]
$setGlobalUserVar[silver;$sub[$getGlobalUserVar[silver];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[silver]>$multi[$message[2];1];**You dont have enough <:silverore:915398370854572063> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]
$else

$if[$message[1]==crystal]
**You sold $truncate[$multi[$message[2];1]] <:crystal:915398448675696640> and earned $truncate[$multi[7;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[7;$message[2]]]]]
$setGlobalUserVar[crystal;$sub[$getGlobalUserVar[crystal];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[crystal]>$multi[$message[2];1];**You dont have enough <:crystal:915398448675696640> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]
$else
$if[$message[1]==ruby]

**You sold $truncate[$multi[$message[2];1]] <:ruby:915398513725173811> and earned $truncate[$multi[10;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[10;$message[2]]]]]
$setGlobalUserVar[ruby;$sub[$getGlobalUserVar[ruby];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[ruby]>$multi[$message[2];1];**You dont have enough <:ruby:915398513725173811> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]

$else
$if[$message[1]==uranium]
**You sold $truncate[$multi[$message[2];1]] <:uranium:915398578728480828> and earned $truncate[$multi[15;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[15;$message[2]]]]]
$setGlobalUserVar[uranium;$sub[$getGlobalUserVar[uranium];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[uranium]>$multi[$message[2];1];**You dont have enough <:uranium:915398578728480828> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]
$else
$if[$message[1]==sulphur]

**You sold $truncate[$multi[$message[2];1]] <:sulphur:915398728477716503> and earned $truncate[$multi[200;$message[2]]]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[200;$message[2]]]]]
$setGlobalUserVar[sulphur;$sub[$getGlobalUserVar[sulphur];$truncate[$multi[1;$message[2]]]]]


$onlyIf[$checkContains[$message[2];-;+;~]==false;Dont use symbols]
$onlyIf[$isNumber[$message[2]]==true;That is not a number]
$onlyIf[$getGlobalUserVar[sulphur]>$multi[$message[2];1];**You dont have enough <:sulphur:915398728477716503> to sell**]
$onlyIf[$message[2]>=1;Specify an amount to sell]
$else
:x: not a valid option you might want to try
\`rod  , rifle , laptop , pickaxe , silver , crystal , ruby , uranium , sulphur\`
\`Formate: $getServerVar[prefix]sell <item> <amount>\`
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$suppressErrors[ {error} ]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}
module.exports = {
name: "mine",
$if: "v4",
code: `
$if[$getGlobalUserVar[wood_pickaxe]==1]
$if[$getGlobalUserVar[xpon]==off]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;BROWN]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[1;50]\`<:silverore:915398370854572063>
\`+ $random[1;40]\`<:crystal:915398448675696640>
\`+ $random[1;30]\`<:ruby:915398513725173811>
\`+ $random[1;20]\`<:uranium:915398578728480828>
\`+ $random[1;10]\`<:sulphur:915398728477716503>
**And you also found $numberSeparator[$random[1000;2000];,]$getVar[symbol] and $random[1;10]$getVar[xpsymbol]
  And you also lost 1 durability bars**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2000]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;10]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[1;10]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[1;20]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[1;30]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[1;40]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[1;50]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]

$let[type;<:woodpick:921148995601055814> Wooden pickaxe]

$else
$if[$getGlobalUserVar[xpon]==on]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;BROWN]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[1;50]\`<:silverore:915398370854572063>
\`+ $random[1;40]\`<:crystal:915398448675696640>
\`+ $random[1;30]\`<:ruby:915398513725173811>
\`+ $random[1;20]\`<:uranium:915398578728480828>
\`+ $random[1;10]\`<:sulphur:915398728477716503>
**And you also found $numberSeparator[$random[1000;2000];,]$getVar[symbol] and $random[5;10]$getVar[xpsymbol]
  And you also lost 1 durability bars**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2000]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[5;10]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[1;10]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[1;20]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[1;30]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[1;40]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[1;50]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]

$let[type;<:woodpick:921148995601055814> Wooden pickaxe]








$endif
$endif
$else



$if[$getGlobalUserVar[iron_pickaxe]==1]
$if[$getGlobalUserVar[xpon]==off]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;GREY]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[5;60]\`<:silverore:915398370854572063>
\`+ $random[5;50]\`<:crystal:915398448675696640>
\`+ $random[5;40]\`<:ruby:915398513725173811>
\`+ $random[5;30]\`<:uranium:915398578728480828>
\`+ $random[5;20]\`<:sulphur:915398728477716503>
**And you also found $numberSeparator[$random[1000;3000];,]$getVar[symbol] and $random[1;10]$getVar[xpsymbol]
  And you also lost 1 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;3000]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;10]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[5;20]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[5;30]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[5;40]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[5;50]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[5;60]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]

$let[type;<:ironpick:921149161095712809> Iron pickaxe]
$if[$getGlobalUserVar[xpon]==on]

$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;GREY]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[5;60]\`<:silverore:915398370854572063>
\`+ $random[5;50]\`<:crystal:915398448675696640>
\`+ $random[5;40]\`<:ruby:915398513725173811>
\`+ $random[5;30]\`<:uranium:915398578728480828>
\`+ $random[5;20]\`<:sulphur:915398728477716503>
**And you also found $numberSeparator[$random[1000;3000];,]$getVar[symbol] and $random[5;15]$getVar[xpsymbol]
  And you also lost 1 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;3000]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[5;15]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[5;20]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[5;30]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[5;40]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[5;50]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[5;60]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]

$let[type;<:ironpick:921149161095712809> Iron pickaxe]
$endif
$endif
$else

$if[$getGlobalUserVar[gold_pickaxe]==1]
$if[$getGlobalUserVar[xpon]==off]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;YELLOW]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[10;60]\`<:silverore:915398370854572063>
\`+ $random[10;50]\`<:crystal:915398448675696640>
\`+ $random[10;40]\`<:ruby:915398513725173811>
\`+ $random[10;30]\`<:uranium:915398578728480828>
\`+ $random[10;20]\`<:sulphur:915398728477716503>
**And you also found $numberSeparator[$random[1000;3000];,]$getVar[symbol] and $random[1;10]$getVar[xpsymbol]
  And you also lost 1 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;3000]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;10]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[10;20]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[10;30]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[10;40]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[10;50]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[10;60]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]

$let[type;<:goldpick:921149173796048896> Gold pickaxe]
$if[$getGlobalUserVar[xpon]==on]

$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;YELLOW]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[10;60]\`<:silverore:915398370854572063>
\`+ $random[10;50]\`<:crystal:915398448675696640>
\`+ $random[10;40]\`<:ruby:915398513725173811>
\`+ $random[10;30]\`<:uranium:915398578728480828>
\`+ $random[10;20]\`<:sulphur:915398728477716503>
**And you also found $numberSeparator[$random[1000;3000];,]$getVar[symbol] and $random[1;20]$getVar[xpsymbol]
  And you also lost 1 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;3000]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;20]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[10;20]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[10;30]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[10;40]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[10;50]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[10;60]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]

$let[type;<:goldpick:921149173796048896> Gold pickaxe]
$endif
$endif
$else

$if[$getGlobalUserVar[diamond_pickaxe]==1]
$if[$getGlobalUserVar[xpon]==off]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;BLUE]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[20;60]\`<:silverore:915398370854572063>
\`+ $random[20;50]\`<:crystal:915398448675696640>
\`+ $random[20;40]\`<:ruby:915398513725173811>
\`+ $random[20;30]\`<:uranium:915398578728480828>
\`+ $random[20;25]\`<:sulphur:915398728477716503>
**And you also found $numberSeparator[$random[1000;5000];,]$getVar[symbol] and $random[1;10]$getVar[xpsymbol]
  And you also lost 2 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;10]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[20;25]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[20;30]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[20;40]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[20;50]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[20;60]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];2]]

$let[type;<:diamondpick:921149444878131312> Diamond pickaxe]
$else
$if[$getGlobalUserVar[xpon]==on]

$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;BLUE]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[20;60]\`<:silverore:915398370854572063>
\`+ $random[20;50]\`<:crystal:915398448675696640>
\`+ $random[20;40]\`<:ruby:915398513725173811>
\`+ $random[20;30]\`<:uranium:915398578728480828>
\`+ $random[20;25]\`<:sulphur:915398728477716503>
**And you also found $numberSeparator[$random[1000;5000];,]$getVar[symbol] and $random[10;20]$getVar[xpsymbol]
  And you also lost 2 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[10;20]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[20;25]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[20;30]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[20;40]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[20;50]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[20;60]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];2]]

$let[type;<:diamondpick:921149444878131312> Diamond pickaxe]
$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[durability]>0;**Oh no seems ike your pickaxe durability is at 0 bars go recharge it**]
$globalCooldown[5m;**Mineshafts getting looted way too often so wait %time%**]`}























module.exports = {
name: "buy",
$if: "v4",
code: `
$if[$message[1]==trumpet]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:ctumptet:920023394844565604> for 100$getVar[xpsymbol]**]

$setGlobalUserVar[xpt;$sub[$getGlobalUserVar[xpt];100]]

$setGlobalUserVar[trumpet;$sum[$getGlobalUserVar[trumpet];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[trumpet]<1;**Already purchased this item**]
$onlyIf[$getGlobalUserVar[xpt]>99;**You dont have enough $getVar[xpsymbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else


$if[$message[1]==bottle]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:woterbottle:920053202869682198> for $numberSeparator[$multi[1000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];1000]]]

$setGlobalUserVar[wbottle;$sum[$getGlobalUserVar[wbottle];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**

$else


$if[$message[1]==xpboost]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:xpboost:920026566396870666> for $numberSeparator[$multi[10000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];10000]]]

$setGlobalUserVar[xpboost;$sum[$getGlobalUserVar[xpboost];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];9999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==cboost]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:pboost:920026637809098833> for $numberSeparator[$multi[10000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];10000]]]

$setGlobalUserVar[cboost;$sum[$getGlobalUserVar[cboost];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];9999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==stars]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] 🌃 backgrounds for $numberSeparator[$multi[25000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]

$setGlobalUserVar[stars;$sum[$getGlobalUserVar[stars];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];24999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==forest]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] 🛤 backgrounds for $numberSeparator[$multi[25000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]

$setGlobalUserVar[forest;$sum[$getGlobalUserVar[forest];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];24999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==mountain]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] 🏔️ backgrounds for $numberSeparator[$multi[25000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]

$setGlobalUserVar[mountain;$sum[$getGlobalUserVar[mountain];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];24999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==colored]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] 🪵 backgrounds for $numberSeparator[$multi[25000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]

$setGlobalUserVar[colored;$sum[$getGlobalUserVar[colored];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];24999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==fog]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] 🌫️ backgrounds for $numberSeparator[$multi[25000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]

$setGlobalUserVar[fog;$sum[$getGlobalUserVar[fog];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];24999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==church]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] $else

$if[$message[1]==fog]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] ⛪ backgrounds for $numberSeparator[$multi[25000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]

$setGlobalUserVar[church;$sum[$getGlobalUserVar[church];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];24999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==rod]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:rod:915383213944356865> for 2,500$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]

$setGlobalUserVar[rod;$sum[$getGlobalUserVar[rod];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]


$onlyIf[$getGlobalUserVar[cash]>2499;**You dont have enough $getVar[symbol]**]

$onlyIf[$message[2]>=1;**please specify an amount**]

$else
$if[$message[1]==rifle]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:gunn:915383291765473330> for 2,500$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]
$setGlobalUserVar[rifle;$sum[$getGlobalUserVar[rifle];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>2499;**You dont have enough $getVar[symbol]**]

$onlyIf[$message[2]>=1;**please specify an amount**]

$else

$if[$message[1]==laptop]

$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:pcc:915383344106184795> for 2,500$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]

$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>2499;**You dont have enough $getVar[symbol]**]

$onlyIf[$message[2]>=1;**please specify an amount**]

$else

$if[$message[1]==axe]

$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:axes:920040112178462800> for 2,500$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]

$setGlobalUserVar[axe;$sum[$getGlobalUserVar[axe];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>2499;**You dont have enough $getVar[symbol]**]

$onlyIf[$message[2]>=1;**please specify an amount**]




$else

$if[$message[1]==common]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:common:913557310486482974> for $numberSeparator[$multi[2000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];2000]]]

$setGlobalUserVar[common;$sum[$getGlobalUserVar[common];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];1999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==uncommon]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:uncommonly:913557451800993852> for $numberSeparator[$multi[5000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];5000]]]

$setGlobalUserVar[uncommon;$sum[$getGlobalUserVar[uncommon];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];4999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==rare]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:rare:913557619547979787> for $numberSeparator[$multi[7500;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];7500]]]

$setGlobalUserVar[rare;$sum[$getGlobalUserVar[rare];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];7499];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==legendary]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:legendary:913557686623273001> for $numberSeparator[$multi[15000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];15000]]]

$setGlobalUserVar[legendary;$sum[$getGlobalUserVar[legendary];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];14999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]
$else
$if[$message[1]==income]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You paid [$numberSeparator[$multi[$message[2];750];,]]($getBotInvite)$getVar[symbol] and increased your 3s earnings by [$numberSeparator[$multi[5;$message[2]];,]]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];750]]]

$setGlobalUserVar[alcap;$sum[$getGlobalUserVar[alcap];$multi[5;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];749];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]
$else
$if[$message[1]==daily]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You paid [$numberSeparator[$multi[$message[2];1500];,]]($getBotInvite)$getVar[symbol] and increased your daily earnings by [$numberSeparator[$multi[15;$message[2]];,]]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];1500]]]

$setGlobalUserVar[dacap;$sum[$getGlobalUserVar[dacap];$multi[15;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];1499];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]
$else
$if[$message[1]==cring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<:cocring:916288282994819072> and paid [500]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash]500]]

$setGlobalUserVar[coring;$sum[$getGlobalUserVar[coring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>499;**You dont have enough $getVar[symbol]**]
$onlyIf[$getGlobalUserVar[coring]<1;Already purchased]
$else

$if[$message[1]==uring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<:ucring:916288340158984192> and paid [1,000]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1000]]

$setGlobalUserVar[uncoring;$sum[$getGlobalUserVar[uncoring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>999;**You dont have enough $getVar[symbol]**]
$onlyIf[$getGlobalUserVar[uncoring]<1;Already purchased]
$else

$if[$message[1]==ering]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<:epiccc:916288471419736094> and paid [1,500]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1500]]

$setGlobalUserVar[epring;$sum[$getGlobalUserVar[epring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>1499;**You dont have enough $getVar[symbol]**]
$onlyIf[$getGlobalUserVar[epring]<1;Already purchased]

$else

$if[$message[1]==mring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<:mringg:916288561576292352> and paid [5,000]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]

$setGlobalUserVar[myring;$sum[$getGlobalUserVar[myring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>4999;**You dont have enough $getVar[symbol]**]
$onlyIf[$getGlobalUserVar[myring]<1;Already purchased]



$else
$if[$message[1]==lring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<a:legendaryring:916288587203506198> and paid [10,000]($getBotInvite)$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];10000]]

$setGlobalUserVar[lering;$sum[$getGlobalUserVar[lering];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[lering]<1;Already purchased]
$onlyIf[$getGlobalUserVar[cash]>9999;**You dont have enough $getVar[symbol]**]
$else
$if[$message[1]==fring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<a:fabled:916288646196379709> and paid [15,000]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]

$setGlobalUserVar[faring;$sum[$getGlobalUserVar[faring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[faring]<1;Already purchased]

$onlyIf[$getGlobalUserVar[cash]>14999;**You dont have enough $getVar[symbol]**]

$else


$if[$message[1]==cbox]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:common:916710762255372418> for $numberSeparator[$multi[2000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];2000]]]

$setGlobalUserVar[cbox;$sum[$getGlobalUserVar[cbox];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];1999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==ubox]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:uncommon:916710813560082473> for $numberSeparator[$multi[4000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];4000]]]

$setGlobalUserVar[ubox;$sum[$getGlobalUserVar[ubox];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];3999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==rbox]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:rare:916710854429392957> for $numberSeparator[$multi[6000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];6000]]]

$setGlobalUserVar[rbox;$sum[$getGlobalUserVar[rbox];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];5999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==ebox]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:cpic:916710911711002675> for $numberSeparator[$multi[8000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];8000]]]

$setGlobalUserVar[ebox;$sum[$getGlobalUserVar[ebox];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];7999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==mbox]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:mythicaly:916711645026353202> for $numberSeparator[$multi[50;$message[2]];,]$getVar[gem]**]

$setGlobalUserVar[gems;$sub[$getGlobalUserVar[gems];$multi[$message[2];50]]]

$setGlobalUserVar[mbox;$sum[$getGlobalUserVar[mbox];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[gems]>$multi[$message[2];49];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]

$else

$if[$message[1]==lbox]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:legendary:916711006519054336> for $numberSeparator[$multi[100;$message[2]];,]$getVar[gem]**]

$setGlobalUserVar[gems;$sub[$getGlobalUserVar[gems];$multi[$message[2];100]]]

$setGlobalUserVar[lbox;$sum[$getGlobalUserVar[lbox];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[gems]>$multi[$message[2];99];**You dont have enough $getVar[gem]**]
$onlyIf[$message[2]>0;**please specify an amount**]
$else

$if[$message[1]==pfood]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:food:918944289713713163> for $numberSeparator[$multi[500;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];500]]]

$setGlobalUserVar[food;$sum[$getGlobalUserVar[food];$multi[5;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];499];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>0;**please specify an amount**]
$else



$if[$message[1]==wood]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:logs:920037648054235167> wooden logs for $numberSeparator[$multi[5;$message[2]];,]$getVar[xpsymbol]**]

$setGlobalUserVar[xpt;$sub[$getGlobalUserVar[xpt];$multi[$message[2];5]]]

$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];4];**You dont have enough $getVar[xpsymbol]**]

$onlyIf[$message[2]>0;**specify an amount ._.**]
$else



$if[$message[1]==magicwood]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:mbwood:920058962731225108> Magic wooden logs for $numberSeparator[$multi[50;$message[2]];,]$getVar[xpsymbol]**]

$setGlobalUserVar[xpt;$sub[$getGlobalUserVar[xpt];$multi[$message[2];50]]]

$setGlobalUserVar[magicwood;$sum[$getGlobalUserVar[magicwood];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];49];**You dont have enough $getVar[xpsymbol]**]

$onlyIf[$message[2]>0;**specify an amount ._.**]
$else

$if[$message[1]==campfire]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:dfire:920026810048217138> campfires for $numberSeparator[$multi[10;$message[2]];,]$getVar[xpsymbol]**]

$setGlobalUserVar[xpt;$sub[$getGlobalUserVar[xpt];$multi[$message[2];10]]]

$setGlobalUserVar[campfire;$sum[$getGlobalUserVar[campfire];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];9];**You dont have enough $getVar[xpsymbol]**]

$onlyIf[$message[2]>0;**specify an amount ._.**]

$else
**:x: not a valid item check the shop again**
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$isNumber[$message[2]]==true;**Thats not a number**]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}
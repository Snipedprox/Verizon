module.exports = {
name: "adventure",
$if: "v4",
code: `
$if[$getGlobalUserVar[xpon]==off]
$title[1;**Your on an adventure!**]
$color[1;GREEN]
$description[1;**You are on an adventure and found...**]
$editIn[3s;{newEmbed: {color:YELLOW} {author:Loot has been found} {description:
+ $random[1;5] $getVar[xpsymbol]
+ $random[10;500] $getVar[symbol] 
+ $random[10;100] <:logs:920037648054235167>}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;5]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;500]]]
$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$random[10;100]]]
$else
$if[$getGlobalUserVar[xpon]==on]
$title[1;**Your on an adventure!**]
$color[1;GREEN]
$description[1;**You are on an adventure and found...**]
$editIn[3s;{newEmbed: {color:YELLOW} {author:Loot has been found} {description:
+ $random[1;10] $getVar[xpsymbol]
+ $random[100;5000] $getVar[symbol] 
+ $random[100;1000] <:logs:920037648054235167>}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;10]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;5000]]]
$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$random[100;1000]]]
$else
$if[$getGlobalUserVar[lon]==on]
$title[1;**Your on an adventure!**]
$color[1;GREEN]
$description[1;**You are on an adventure and found...**]
$editIn[3s;{newEmbed: {color:YELLOW} {author:Loot has been found} {description:
+ $random[1;100] $getVar[xpsymbol]
+ $random[100;9000] $getVar[symbol] 
+ $random[100;5000] <:logs:920037648054235167>}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;100]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;9000]]]
$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$random[100;5000]]]
$else
$if[$getGlobalUserVar[lon]==off]
$title[1;**Your on an adventure!**]
$color[1;GREEN]
$description[1;**You are on an adventure and found...**]
$editIn[3s;{newEmbed: {color:YELLOW} {author:Loot has been found} {description:
+ $random[1;10] $getVar[xpsymbol]
+ $random[100;5000] $getVar[symbol] 
+ $random[100;1000] <:logs:920037648054235167>}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;10]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;5000]]]
$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$random[100;1000]]]
$endif
$endif
$endif
$endif
$globalCooldown[5m;**Oh shoot there is someone on the street i wouldnt go out at this time wait** \`%time%\`]
`
}

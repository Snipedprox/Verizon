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
+ $random[10;500] $getVar[cash] 
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
+ $random[100;5000] $getVar[cash] 
+ $random[100;1000] <:logs:920037648054235167>}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$random[1;10]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;5000]]]
$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$random[100;1000]]]
$endif
$endif
`
}
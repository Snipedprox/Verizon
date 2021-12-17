module.exports = {
name: "use",
$if: "v4",
code: `
$if[$message==xpboost]
$setGlobalUserVar[xpon;on]
$setGlobalUserVar[xpboost;$sub[$getGlobalUserVar[xpboost];1]]

**You used some <:xpboost:920026566396870666> and now youll get some more xp which you can use. but beware it can wear off randomly**


$onlyIf[$getGlobalUserVar[xpboost]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:xpboost:920026566396870666>**}}]
$onlyIf[$getGlobalUserVar[xpon]==off;**You already have used your <:xpboost:920026566396870666>**]

$else

$if[$message==cboost]
$setGlobalUserVar[con;on]
$setGlobalUserVar[cboost;$sub[$getGlobalUserVar[cboost];1]]
**You used some <:pboost:920026637809098833> and now get some more allowence. but beware it can wear off randomly**


$onlyIf[$getGlobalUserVar[cboost]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:pboost:920026637809098833>**}}]
$onlyIf[$getGlobalUserVar[con]==off;**You already have used your <:pboost:920026637809098833>**]

$else

$if[$message==lboost]
$setGlobalUserVar[lon;on]
$setGlobalUserVar[lucky;$sub[$getGlobalUserVar[lucky];1]]

**You used some <:gpotion:920052406467838013> now youll get some more lucky in** \`stroll , adventure\` **but beware it can wear off randomly**


$onlyIf[$getGlobalUserVar[lucky]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:gpotion:920052406467838013>**}}]
$onlyIf[$getGlobalUserVar[lon]==off;**You already have used your <:gpotion:920052406467838013>**]
$else
:x: **Invalid item**
$endif
$endif
$endif`
}

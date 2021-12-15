module.exports = [{
name: "use",
$if: "v4",
code: `
$if[$message==xpboost]
$setGlobalUserVar[xpon;on]
$setGlobalUserVar[xpboost;$sub[$getGlobalUserVar[xpboost];1]]

**You used some <:xpboost:920026566396870666> and for the next hour youll get some more xp which you can use**
$setTimeout[xpboost;1h;
userID: $authorID]

$onlyIf[$getGlobalUserVar[xpboost]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:xpboost:920026566396870666>**}}]
$onlyIf[$getGlobalUserVar[xpon]==off;**You already have used your <:xpboost:920026566396870666>**]

$else

$if[$message==cboost]
$setGlobalUserVar[con;on]
$setGlobalUserVar[cboost;$sub[$getGlobalUserVar[cboost];1]]
**You used some <:pboost:920026637809098833> and for the next hour youll get some more allowence**
$setTimeout[cboost;1h;
userID: $authorID]

$onlyIf[$getGlobalUserVar[cboost]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:pboost:920026637809098833>**}}]
$onlyIf[$getGlobalUserVar[con]==off;**You already have used your <:pboost:920026637809098833>**]

$else

$if[$message==lboost]
$setGlobalUserVar[lon;on]
$setGlobalUserVar[lucky;$sub[$getGlobalUserVar[lucky];1]]

**You used some <:gpotion:920052406467838013> and for the next hour youll get some more lucky in** \`stroll , adventure\`
$setTimeout[lboost;1h;
userID: $authorID]

$onlyIf[$getGlobalUserVar[lucky]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:gpotion:920052406467838013>**}}]
$onlyIf[$getGlobalUserVar[lon]==off;**You already have used your <:gpotion:920052406467838013>**]
$else
:x: **Invalid item**
$endif
$endif
$endif`
}, {
type: "timeout",	
name: "xpboost",
code: `
$sendDM[$timeoutData[userID];{newEmbed: {author:Oh no :#RIGHT_BRACKET#} {thumbnail:https://images-ext-1.discordapp.net/external/-auvCfOMdOEaafiCsxVy01eVZZ_ZW-qAh-3wFuqJwbI/%3Fsize%3D56/https/cdn.discordapp.com/emojis/795960400247128094.png} {color:PURPLE} {description: **Oh no seems like your <:xpboost:920026566396870666> ran out**}}]
$setGlobalUserVar[xpon;off]`
}, {
type: "timeout",
name: "cboost",
code: `
$sendDM[$timeoutData[userID];{newEmbed: {author:Oh no :#RIGHT_BRACKET#} {thumbnail:https://cdn.discordapp.com/emojis/836611984056778813.png?size=56} {color:ORANGE} {description: **Oh no seems like your <:pboost:920026637809098833> ran out**}}]
$setGlobalUserVar[con;off]`
}, {
type: "timeout",
name: "lboost",
code: `
$sendDM[$timeoutData[userID];{newEmbed: {author:Oh no :#RIGHT_BRACKET#} {thumbnail:https://cdn.discordapp.com/emojis/900087489203679272.png?size=56} {color:GREEN} {description: **Oh no seems like your <:gpotion:920052406467838013> ran out**}}]
$setGlobalUserVar[lon;off]`}]

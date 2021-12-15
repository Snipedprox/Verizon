module.exports = {
name: "slot",
$if: "v4",
aliases: "slots",
code: `
$if[$randomText[lost;lost;win]==win]
<:blanko:920474788932251790> ┊ <:blanko:920474788932251790> ┊ <:blanko:920474788932251790> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol] 
$editIn[0.8s;$randomText[
<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ <:blanko:920474788932251790> ┊ <:blanko:920474788932251790> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol];$randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ $randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ <:blanko:920474788932251790> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol];$randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ $randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ $randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol]
You won **$numberseparator[$multi[$truncate[$message[1]];2];,]** $getVar[symbol]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$truncate[$message[1]]];$authorID]

$else

$if[$randomText[lost;lost;win]==lost]

<:blanko:920474788932251790> ┊ <:blanko:920474788932251790> ┊ <:blanko:920474788932251790> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol] 
$editIn[0.8s; 
$randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ <:blanko:920474788932251790> ┊ <:blanko:920474788932251790> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol];$randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ $randomText[<:pboost:920026637809098833>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ <:blanko:920474788932251790> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol];$randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:bluefire:920026713470160897>;<:health:920454689504509952>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ $randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:blaxemate:920055199287095306>;<:wolfy:920453894704869398>] ┊ $randomText[<:pboost:920026637809098833>;<:xpboost:920026566396870666>;<:metalsa:920059340319248395>;<:mbwood:920058962731225108>;<:health:920454689504509952>;<:bluefire:920026713470160897>;<:wolfy:920453894704869398>;<:blaxemate:920055199287095306>] 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol]
You lost **$numberseparator[$multi[$truncate[$message[1]];2];,]** $getVar[symbol]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$authorID];$truncate[$message[1]]];$authorID]
$endif
$endif

$globalCooldown[15s;⏱️ You are on a **cooldown** of **%time%**]

$onlyIf[$isNumber[$message[1]]==true;🚫 | Please provide **valid number**]
$onlyIf[$getGlobalUserVar[cash;$authorID]>=$message[1];🚫 | You don't have enough **$getVar[money]** $getVar[symbol]]`}

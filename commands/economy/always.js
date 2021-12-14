module.exports = {
name: "$alwaysExecute",
$if: "v4",
cooldown: "3s",
code: `
$if[$getGlobalUserVar[con]==on]
$setGlobalUserVar[allowence;$sum[$getGlobalUserVar[allowence];$multi[$getGlobalUserVar[alcap];3]]]
$else
$setGlobalUserVar[allowence;$sum[$getGlobalUserVar[allowence];$getGlobalUserVar[alcap]]]
$endif
`}





module.exports = {
name: "$alwaysExecute",
code: `
$setGlobalUserVar[pcoin;$sum[$getGlobalUserVar[pcoin];$random[5;200]]]
$setGlobalUserVar[psleep;$sub[$getGlobalUserVar[psleep];2]]
$setGlobalUserVar[plove;$sub[$getGlobalUserVar[plove];2]]
$setGlobalUserVar[phunger;$sub[$getGlobalUserVar[phunger];2]]
$onlyIf[$getGlobalUserVar[psleep]>0;]
$onlyIf[$getGlobalUserVar[phunger]>0;]
$onlyIf[$getGlobalUserVar[plove]>0;]
$globalCooldown[5s;]
`
}
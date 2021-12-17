module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getGlobalUserVar[xpon]==on]


$setGlobalUserVar[xpon;off]

$onlyIf[$random[1;100]==50;]

$else

$if[$getGlobalUserVar[lon]==on]


$setGlobalUserVar[lon;off]

$onlyIf[$random[1;100]==50;]

$else
$if[$getGlobalUserVar[con]==on]


$setGlobalUserVar[con;off]

$onlyIf[$random[1;100]==50;]
$endif
$endif
$endif`
}
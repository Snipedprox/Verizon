module.exports = [{

  name: "setbg",

  $if: "v4", 

  usage: "\`$getServerVar[prefix]help <command>\`",

  code: `

$if[$message==]

$title[1;<:iconfire:917445081890431066> $username[$clientid] Select rank card;https://sayu.cextora.repl.co/]

$thumbnail[1;https://media.discordapp.net/attachments/891927058417074176/919987622296821800/Untitled12_20211213112207.png]

$description[1;

**Please select a rank card option below!**.]

$color[1;764Cf4]

$addSelectMenu[1;icon;Select your background;1;1;no;Please select:Option 1:1:no:🌆;Forest street:Option 2:2:no:🛣️;Mountain top:Option 3:3:no:⛰️;Colored wood:Option 4:4:no:🌳;Foggy horizon:Option 5:5:no:🌁;Church:Option 6:6:no:🕍]

$endif`

}, {

  name: "icon", 

  type: "interaction",

  prototype: "selectMenu", 

  code: `$interactionReply[;

  **Successfully changed your background to 🌆** \`Stars and sky\`

  

  $setGlobalUserVar[level_card;http://data.owobot.com/background/1.png]

  $onlyIf[$getGlobalUserVar[stars]>0;**You do not own that background** 🌆];;;yes]

$onlyif[$interactionData[values[0]]==1;]`

}, {

  name: "icon", 

  type: "interaction",

  prototype: "selectMenu", 

  code: `$interactionReply[;

  **Successfully changed your background to 🛣️** \`Forest street\`

  

  $setGlobalUserVar[level_card;http://data.owobot.com/background/2.png]

  $onlyIf[$getGlobalUserVar[forest]>0;**You do not own that background** 🛣️] ;;;yes]

$onlyif[$interactionData[values[0]]==2;]`

}, {

  name: "icon", 

  type: "interaction",

  prototype: "selectMenu", 

  code: `$interactionReply[;

  **Successfully changed your background to ⛰️** \`Mountain top\`

  

  $setGlobalUserVar[level_card;http://data.owobot.com/background/3.png]

  $onlyIf[$getGlobalUserVar[mountain]>0;**You do not own that background** ⛰️];;;yes]

$onlyif[$interactionData[values[0]]==3;]`

}, {

  name: "icon", 

  type: "interaction",

  prototype: "selectMenu", 

  code: `$interactionReply[;

  **Successfully changed your background to 🌳** \`Colored wood\`

  

  $setGlobalUserVar[level_card;http://data.owobot.com/background/4.png]

  $onlyIf[$getGlobalUserVar[colored]>0;**You do not own that background** 🌳] ;;;yes]

$onlyif[$interactionData[values[0]]==4;]`

}, {

  name: "icon", 

  type: "interaction",

  prototype: "selectMenu", 

  code: `$interactionReply[;

  **Successfully changed your background to 🌁** \`Foggy horizon\`

  

  $setGlobalUserVar[level_card;http://data.owobot.com/background/5.png]

  $onlyIf[$getGlobalUserVar[fog]>0;**You do not own that background** 🌁];;;yes]

$onlyif[$interactionData[values[0]]==5;]`

}, {

  name: "icon", 

  type: "interaction",

  prototype: "selectMenu", 

  code: `$interactionReply[;

  **Successfully changed your background to 🕍** \`Church\`

  

  $setGlobalUserVar[level_card;http://data.owobot.com/background/6.png]

  $onlyIf[$getGlobalUserVar[church]>0;**You do not own that background** 🕍];;;yes]

$onlyif[$interactionData[values[0]]==6;]`

  }];
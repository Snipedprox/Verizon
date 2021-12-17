module.exports = [{
  name: "shop",
  $if: "v4", 
  usage: "\`$getServerVar[prefix]help <command>\`",
  code: `
$if[$message==]
$title[1;<:iconfire:917445081890431066> $username[$clientid] shop list;https://sayu.cextora.repl.co/]
$description[1;
**Hey didnt know you would be here this early well lucky for you my shop is open i would suggest to use the select menu below to view all my cool items**.]
$color[1;764Cf4]
$addSelectMenu[1;helpcmd;Shop;1;1;no;Page 1:First page of the shop:1:no:<:carr:914294448811294740>;Page 2:Second page of the shop:2:no:<:carr:914294448811294740>;Page 3:Third page of the shop:3:no:<:carr:914294448811294740>;Page 4:Fourth page of the shop:4:no:<:carr:914294448811294740>;Page 5:Fifth page of the shop:5:no:<:carr:914294448811294740>;Page 6:Sixth page of the shop:6:no:<:carr:914294448811294740>;Page 7:Seventh page of the shop:7:no:<:carr:914294448811294740>]
$endif`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 1 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:rod:915383213944356865>**Fishing rod**
**ID | ** \`rod\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:gunn:915383291765473330>**Hunting rifle**
**ID | ** \`rifle\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:pcc:915383344106184795>**Laptop**
**ID | ** \`laptop\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:axes:920040112178462800>**Axe**
**ID | ** \`axe\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==1;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 2 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:common:913557310486482974> **Common lootbox**
**ID | ** \`common\`
**Buy:** **[2,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**

<:uncommonly:913557451800993852> **Uncommon lootbox**
**ID | ** \`uncommon\`
**Buy:** **[5,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**

<:rare:913557619547979787> **Rare lootbox**
**ID | ** \`rare\`
**Buy:** **[7,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**

<:legendary:913557686623273001>**Legendary lootbox**
**ID | ** \`legendary\`
**Buy:** **[15,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==2;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 3 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:robotit:915697139206742087>**Automation upgrade**
**ID | ** \`income\`
**Buy:** **[750]($getBotInvite)**$getVar[symbol]
**Upgrade:** **Increases earning $getVar[symbol] by 5$getVar[symbol]**
**Sell:** **[Not Sellable]($getBotInvite)**

<:expp:916080985102245898>**Daily upgrade**
**ID | ** \`daily\`
**Buy:** **[1,500]($getBotInvite)**$getVar[symbol]
**Upgrade:** **Increases daily earning by 15$getVar[symbol]**
**Sell:** **[Not Sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==3;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 4 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:cocring:916288282994819072>**Common ring**
**ID | ** \`coring\`
**Buy:** **[500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:ucring:916288340158984192>**Uncommon ring**
**ID | ** \`uncoring\`
**Buy:** **[1,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:epiccc:916288471419736094>**Epic ring**
**ID | ** \`epring\`
**Buy:** **[1,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:mringg:916288561576292352>**Mythical ring**
**ID | ** \`myring\`
**Buy:** **[5,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<a:legendaryring:916288587203506198>**Legendary ring**
**ID | ** \`lering\`
**Buy:** **[10,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<a:fabled:916288646196379709>**Fabled ring**
**ID | ** \`faring\`
**Buy:** **[15,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==4;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 5 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:common:916710762255372418>**Common box**
**ID | ** \`cbox\`
**Buy:** **[2,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:uncommon:916710813560082473>**Uncommon box**
**ID | ** \`ubox\`
**Buy:** **[4,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:rare:916710854429392957>**Rare box**
**ID | ** \`rbox\`
**Buy:** **[6,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:cpic:916710911711002675>**Epic box**
**ID | ** \`ebox\`
**Buy:** **[8,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:mythicaly:916711645026353202>**Mythical box**
**ID | ** \`mbox\`
**Buy:** **[50]($getBotInvite)**$getVar[xpsymbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:legendary:916711006519054336>**Legendary box**
**ID | ** \`lbox\`
**Buy:** **[100]($getBotInvite)**$getVar[xpsymbol]
**Sell:** **[Not Sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==5;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 6 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

**[Stars and sky](http://data.owobot.com/background/1.png)**
**ID | ** \`stars\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Forest street](http://data.owobot.com/background/2.png)**
**ID | ** \`forest\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Mountain top](http://data.owobot.com/background/3.png)**
**ID | ** \`mountain\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Colored wood](http://data.owobot.com/background/4.png)**
**ID | ** \`colored\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Foggy horizon](http://data.owobot.com/background/5.png)**
**ID | ** \`fog\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Church](http://data.owobot.com/background/6.png)**
**ID | ** \`church\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==6;]`
    }, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 7 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:xpboost:920026566396870666>**XPboost**
**ID | ** \`xpboost\`
**Buy:** **[10,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:woterbottle:920053202869682198>**Watter potion**
**ID | ** \`bottle\`
**Buy:** **[1,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:pboost:920026637809098833>**Coin boost**
**ID | ** \`cboost\`
**Buy:** **[10,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:ctumptet:920023394844565604>**Coin trumpet**
**ID | ** \`trumpet\`
**Buy:** **[100]($getBotInvite)**$getVar[xpsymbol]
**Sell:** **[Not Sellable]($getBotInvite)**
}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==7;]`
  }];
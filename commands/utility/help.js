module.exports = [{
  name: "help",
  aliases: ['hepl','hell','hepp','heep'], 
  $if: "v4", 
  usage: "\`$getServerVar[prefix]help <command>\`",
  code: `
$if[$message==]
$title[1;<:iconfire:917445081890431066> $username[$clientid] commandlist;https://Horizon.snipedprox.repl.co]
$description[1;
**Use the select menu below to view all my cool commands**.

<:ribbonn:917024966883545098> **[Offical server](https://discord.gg/8HbkqA73Jj)  [Invite link](https://discord.com/api/oauth2/authorize?client_id=915037953863061575&permissions=3533921&scope=bot%20applications.commands)  [Website](https://Horizon.snipedprox.repl.co) **<:ribbonn:917024966883545098>]
$color[1;$getVar[color]]
$addSelectMenu[1;helpcmd;Help categories;1;1;no;economy commands:All cool economy commands.:economy:no:<a:golddot:918967267147005952>;Utility commands:Utility commands.:utility:no:<a:golddot:918967267147005952>;Promocode commands:All of my promocode commands.:promocodes:no:<a:golddot:918967267147005952>;Music commands:All of my music commands.:music:no:<a:golddot:918967267147005952>;Pet commands:All of my pet commands.:pet:no:<a:golddot:918967267147005952>;Level commands:All of my level commands.:rank:no:<a:golddot:918967267147005952>]
$endif`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Utility commands}{thumbnail:$userAvatar[$clientID]}{description:\`setguildavatar\` **,** \`setguildname\` **,** \`prefix\` **,** \`help\` **,** \`avatar\` **,** \`servericon\` **,** \`guildname\` **,** \`invite\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==utility;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Economy commands}{thumbnail:$userAvatar[$clientID]}{description:\`job\` **,** \`work\` **,** \`beg\` **,** \`deposit\` **,** \`withdraw\` **,** \`stream\` **,** \`shop\` **,** \`mine\` **,** \`inventory\` **,** \`buy\` **,** \`balance\` **,** \`sell\` **,** \`fish\` **,** \`hunt\` **,** \`daily\` **,** \`weekly\` **,** \`collect\` **,** \`profile\` **,** \`xp\` **,** \`box\` **,** \`boxes\` **,** \`gift\` **,** \`use\` **,** \`stroll\` **,** \`adventure\` **,** \`craft\` **,** \`recipes\` **,** \`chop\` **,** \`melt\` **,** \`slots\` **,** \`woodshop\` **,** \`pickaxe\` **,** \`pickaxe upgrade\` **,** \`pickaxe recharge\` **,** \`pickaxe stats\` **,** \`pickaxe list\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getvar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==economy;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Promocode commands}{thumbnail:$userAvatar[$clientID]}{description:\`pgen\` **,** \`pclaim\` **,** \`pdelete\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==promocodes;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Music commands}{thumbnail:$userAvatar[$clientID]}{description:\`play\` **,** \`volume\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==music;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:pet commands}{thumbnail:$userAvatar[$clientID]}{description:\`pet\` **,** \`pet-sleep\` **,** \`pet-feed\` **,** \`pet-rename\` **,** \`pet-collect\` **,** \`pet-shop\` **,** \`adopt\` **,** \`pet-play\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==pet;]`
    }, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:level commands}{thumbnail:$userAvatar[$clientID]}{description:\`rank\` **,** \`setbg\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==rank;]`
  }];

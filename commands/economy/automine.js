module.exports = [{
    name: "automine",
    $if: "v4",
    code: `

$if[$getGlobalUserVar[amine;$authorID]==done]
$setGlobalUserVar[amine;false;$authorID]
$title[1;**I have returned**]
$thumbnail[1;$authorAvatar]
$color[1;blue]
$description[1;
<:robotmine:919234784151093268> \`I AM BACK WITH $getGlobalUserVar[speedmine;$authorID] ORES WITH $getGlobalUserVar[experiencemine;$authorID] EXPERIENCE IN $getGlobalUserVar[effimine;$authorID]h\`
<:silverore:915398370854572063> × **$truncate[$divide[$multi[$getGlobalUserVar[speedmine;$authorID];32];100]]**
<:crystal:915398448675696640> × **$truncate[$divide[$multi[$getGlobalUserVar[speedmine;$authorID];20];100]]**
<:ruby:915398513725173811> × **$truncate[$divide[$multi[$getGlobalUserVar[speedmine;$authorID];17];100]]**
<:uranium:915398578728480828> × **$truncate[$divide[$multi[$getGlobalUserVar[speedmine;$authorID];13];100]]**
<:sulphur:915398728477716503> × **$truncate[$divide[$multi[$getGlobalUserVar[speedmine;$authorID];8];100]]**

$else
$if[$message[1]==start]
$thumbnail[1;$authorAvatar]
$title[1;Automine bot]
$description[1;I will be back in **$getGlobalUserVar[effi;$authorID]**h with **$getGlobalUserVar[speed;$authorID]** ores ]
$color[1;$getVar[color]]




$setTimeout[$getGlobalUserVar[effi;$authorID]h;
channel: $channelID
user: $authorID]
$setGlobalUserVar[time;$datestamp;$authorID]
 $setGlobalUserVar[ms;$ms[$getGlobalUserVar[effi;$authorID]h];$authorID]
$setGlobalUserVar[amine;true;$authorID] 

$setGlobalUserVar[speedmine;$getGlobalUserVar[speed;$authorID];$authorID]

$setGlobalUserVar[effimine;$getGlobalUserVar[effi;$authorID];$authorID]

$setGlobalUserVar[experiencemine;$getGlobalUserVar[experience;$authorID];$authorID]

$setGlobalUserVar[luckmine;$getGlobalUserVar[luck;$authorID];$authorID]

$onlyIf[$getGlobalUserVar[amine;$authorID]==false;I am still mining for you , Master i will be back soon with **$getGlobalUserVar[speedmine;$authorID]** Ores]
$else
$if[$message[1]==]
$thumbnail[1;$authorAvatar]
$description[1;<:robotmine:919234784151093268> \`HI I AM   AUTOMINER BOT , I WILL MINE FOR YOU \`

\`To obtain more\` <:energyss:919236346713878668> \` just open some crates\` 

⚔️ **Experience** \`$getGlobalUserVar[experience;$authorID]exp\`
**\`Lvl $getGlobalUserVar[experiencelvl;$authorID] [$getGlobalUserVar[experiencexp;$authorID]/$getGlobalUserVar[experiencereq;$authorID]]
[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$truncate[$divide[$truncate[$divide[$multi[100;$getGlobalUserVar[experiencexp;$mentioned[1;yes]]];$getGlobalUserVar[experiencereq;$mentioned[1;yes]]]];10]];10;■■■■■■■■■■];2;■■□□□□□□□□];3;■■■□□□□□□□];4;■■■■□□□□□□];5;■■■■■□□□□□];6;■■■■■■□□□□];7;■■■■■■■□□□];8;■■■■■■■■□□];9;■■■■■■■■■□];1;■□□□□□□□□□];0;□□□□□□□□□□]]\`

<:gunn:915383291765473330> **Gain** - \`$getGlobalUserVar[speed;$authorID] ores\` 
**\`Lvl $getGlobalUserVar[speedlvl;$authorID] [$getGlobalUserVar[speedxp;$authorID]/$getGlobalUserVar[speedreq;$authorID]]
[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$truncate[$divide[$truncate[$divide[$multi[100;$getGlobalUserVar[speedxp;$mentioned[1;yes]]];$getGlobalUserVar[speedreq;$mentioned[1;yes]]]];10]];10;■■■■■■■■■■];2;■■□□□□□□□□];3;■■■□□□□□□□];4;■■■■□□□□□□];5;■■■■■□□□□□];6;■■■■■■□□□□];7;■■■■■■■□□□];8;■■■■■■■■□□];9;■■■■■■■■■□];1;■□□□□□□□□□];0;□□□□□□□□□□]]\`

⏲️ **Efficiency** - \`$getGlobalUserVar[effi;$authorID]h\`
**\`Lvl $getGlobalUserVar[effilvl;$authorID] [$getGlobalUserVar[effixp;$authorID]/$getGlobalUserVar[effireq;$authorID]]
[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$truncate[$divide[$truncate[$divide[$multi[100;$getGlobalUserVar[effixp;$mentioned[1;yes]]];$getGlobalUserVar[effireq;$mentioned[1;yes]]]];10]];10;■■■■■■■■■■];2;■■□□□□□□□□];3;■■■□□□□□□□];4;■■■■□□□□□□];5;■■■■■□□□□□];6;■■■■■■□□□□];7;■■■■■■■□□□];8;■■■■■■■■□□];9;■■■■■■■■■□];1;■□□□□□□□□□];0;□□□□□□□□□□]]\`

✨ **Luck**\` - $getGlobalUserVar[luck;$authorID]\`
**\`Lvl $getGlobalUserVar[lucklvl;$authorID] [$getGlobalUserVar[luckxp;$authorID]/$getGlobalUserVar[luckreq;$authorID]]
[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$truncate[$divide[$truncate[$divide[$multi[100;$getGlobalUserVar[luckxp;$mentioned[1;yes]]];$getGlobalUserVar[luckreq;$mentioned[1;yes]]]];10]];10;■■■■■■■■■■];2;■■□□□□□□□□];3;■■■□□□□□□□];4;■■■■□□□□□□];5;■■■■■□□□□□];6;■■■■■■□□□□];7;■■■■■■■□□□];8;■■■■■■■■□□];9;■■■■■■■■■□];1;■□□□□□□□□□];0;□□□□□□□□□□]]\`

<:energyss:919236346713878668> Mining elixer - **$getGlobalUserVar[elixer;$authorID]**
\`Mining bot will mine $getGlobalUserVar[speed;$authorID] Ores with 0.5% of chance to get rare ores in $getGlobalUserVar[effi;$authorID]h\` ]
$color[1;FF7300]
$endif
$endIf
$endif
    $globalCooldown[7s;⏱️ You are on a **cooldown** of **%time%**]
    $suppressErrors[{newEmbed:{description:There was an error whilst executing this **command** , these errors should __**not happen.**__

Please visit our **[support server](https://discord.gg/8HbkqA73Jj)** report this error, mentioning the command you are using.}
{color:RED}
{author:ERROR!!}
{timestamp}}]

 `} , { 
    type: "timeoutCommand",
    code: `
    $channelSendMessage[$timeoutData[channel];$setGlobalUserVar[amine;done;$timeoutData[user]]]
    
`
    }]
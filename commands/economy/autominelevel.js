module.exports = { 
    name: "upgrade",
    $if: "v4",
    aliases: "up",
    code: ` 
    $if[$toLowerCase[$message[1]]==efficiency]
    You sucessfully upgraded your **$toLowerCase[$message[1]]** with <:energyss:919236346713878668> **$message[2]** elixer , current level is
        $replaceText[Exp : **$splitText[1]/$splitText[2]**;Infinity;MAX]
        lvl : **$splitText[3] , \`$splitText[5]h\`**

$setGlobalUserVar[effixp;$replaceText[$splitText[1];Infinity;12000];$authorID]
$setGlobalUserVar[effireq;$replaceText[$splitText[2];Infinity;12000];$authorID]
$setGlobalUserVar[effilvl;$splitText[3];$authorID]
$setGlobalUserVar[total;$splitText[4];$authorID]
$setGlobalUserVar[effi;$splitText[5];$authorID]
$setGlobalUserVar[elixer;$sub[$getGlobalUserVar[elixer;$authorID];$message[2]];$authorID]

    $onlyIf[$getGlobalUserVar[elixer;$authorID]>=$sub[$message[2];$splitText[6]];🚫 | You dont have enough **elixer** <:energyss:919236346713878668>r]
    $onlyIf[$getGlobalUserVar[effilvl;$authorID]!=20;❗ | You are already at **max level**]
    $textSplit[$djsEval[var exp = $getGlobalUserVar[effixp;$authorID];
var req = $getGlobalUserVar[effireq;$authorID];
var lvl = $getGlobalUserVar[effilvl;$authorID];
var total = $getGlobalUserVar[total;$authorID];
var effi = $getGlobalUserVar[effi;$authorID];
var add = $message[2];

var min = Math.min(add, 131000-total);
var Return = add-min;
total+=min;

while(add!=0){
 if(add+exp>=req){
  add-=(req-exp)
  req = req+500
  lvl++
  effi = (effi*10-1)/10
  exp = 0
 } else {
  exp+=add
  add = 0
 }

 if(lvl>19){
  lvl = 20
  exp = Infinity
  req = Infinity
  total = 131000
  break
 }
}

//It is result, u can customize it
exp+"/"+req+"/"+lvl+"/"+total+"/"+effi+"/"+Return;yes];/]

$else 

    $if[$toLowerCase[$message[1]]==gain]
    You sucessfully upgraded your **$toLowerCase[$message[1]]** with <:energyss:919236346713878668> **$message[2]** elixer , current level is
        $replaceText[Exp : **$splitText[1]/$splitText[2]**;Infinity;MAX]
        lvl : **$splitText[3] , \`$splitText[5] ores\`**

$setGlobalUserVar[speedxp;$replaceText[$splitText[1];Infinity;12000];$authorID]
$setGlobalUserVar[speedreq;$replaceText[$splitText[2];Infinity;12000];$authorID]
$setGlobalUserVar[speedlvl;$splitText[3];$authorID]
$setGlobalUserVar[speedtotal;$splitText[4];$authorID]
$setGlobalUserVar[speed;$splitText[5];$authorID]
$setGlobalUserVar[elixer;$sub[$getGlobalUserVar[elixer;$authorID];$message[2]];$authorID]

    $onlyIf[$getGlobalUserVar[elixer;$authorID]>=$sub[$message[2];$splitText[6]];🚫 | You dont have enough **elixer** <:energyss:919236346713878668>r]
    $onlyIf[$getGlobalUserVar[speedlvl;$authorID]!=20;❗ | You are already at **max level**]
    $textSplit[$djsEval[var exp = $getGlobalUserVar[speedxp;$authorID];
var req = $getGlobalUserVar[speedreq;$authorID];
var lvl = $getGlobalUserVar[speedlvl;$authorID];
var total = $getGlobalUserVar[speedtotal;$authorID];
var effi = $getGlobalUserVar[speed;$authorID];
var add = $message[2];

var min = Math.min(add, 131000-total);
var Return = add-min;
total+=min;

while(add!=0){
 if(add+exp>=req){
  add-=(req-exp)
  req = req+500
  lvl++
  effi = effi+1000
  exp = 0
 } else {
  exp+=add
  add = 0
 }

 if(lvl>19){
  lvl = 20
  exp = Infinity
  req = Infinity
  total = 131000
  break
 }
}

//It is result, u can customize it
exp+"/"+req+"/"+lvl+"/"+total+"/"+effi+"/"+Return;yes];/]
$else 

$if[$toLowerCase[$message[1]]==experience]
    You sucessfully upgraded your **$toLowerCase[$message[1]]** with <:energyss:919236346713878668> **$message[2]** elixer , current level is
        $replaceText[Exp : **$splitText[1]/$splitText[2]**;Infinity;MAX]
        lvl : **$splitText[3] , \`$splitText[5]\`**

$setGlobalUserVar[experiencexp;$replaceText[$splitText[1];Infinity;12000];$authorID]
$setGlobalUserVar[experiencereq;$replaceText[$splitText[2];Infinity;12000];$authorID]
$setGlobalUserVar[experiencelvl;$splitText[3];$authorID]
$setGlobalUserVar[experiencetotal;$splitText[4];$authorID]
$setGlobalUserVar[experience;$splitText[5];$authorID]
$setGlobalUserVar[elixer;$sub[$getGlobalUserVar[elixer;$authorID];$message[2]];$authorID]

    $onlyIf[$getGlobalUserVar[elixer;$authorID]>=$sub[$message[2];$splitText[6]];🚫 | You dont have enough **elixer** <:energyss:919236346713878668>r]
    $onlyIf[$getGlobalUserVar[experiencelvl;$authorID]!=20;❗ | You are already at **max level**]
    $textSplit[$djsEval[var exp = $getGlobalUserVar[experiencexp;$authorID];
var req = $getGlobalUserVar[experiencereq;$authorID];
var lvl = $getGlobalUserVar[experiencelvl;$authorID];
var total = $getGlobalUserVar[experiencetotal;$authorID];
var effi = $getGlobalUserVar[experience;$authorID];
var add = $message[2];

var min = Math.min(add, 131000-total);
var Return = add-min;
total+=min;

while(add!=0){
 if(add+exp>=req){
  add-=(req-exp)
  req = req+500
  lvl++
  effi = effi+1000
  exp = 0
 } else {
  exp+=add
  add = 0
 }

 if(lvl>19){
  lvl = 20
  exp = Infinity
  req = Infinity
  total = 131000
  break
 }
}

//It is result, u can customize it
exp+"/"+req+"/"+lvl+"/"+total+"/"+effi+"/"+Return;yes];/]
$else

$if[$toLowerCase[$message[1]]==luck]
    You sucessfully upgraded your **$toLowerCase[$message[1]]** with <:energyss:919236346713878668> **$message[2]** elixer , current level is
        $replaceText[Exp : **$splitText[1]/$splitText[2]**;Infinity;MAX]
        lvl : **$splitText[3] , \`$splitText[5]\`**

$setGlobalUserVar[luckxp;$replaceText[$splitText[1];Infinity;420000];$authorID]
$setGlobalUserVar[luckreq;$replaceText[$splitText[2];Infinity;420000];$authorID]
$setGlobalUserVar[lucklvl;$splitText[3];$authorID]
$setGlobalUserVar[lucktotal;$splitText[4];$authorID]
$setGlobalUserVar[luck;$splitText[5];$authorID]
$setGlobalUserVar[elixer;$sub[$getGlobalUserVar[elixer;$authorID];$message[2]];$authorID]

    $onlyIf[$getGlobalUserVar[elixer;$authorID]>=$sub[$message[2];$splitText[6]];🚫 | You dont have enough **elixer** <:energyss:919236346713878668>r]
    $onlyIf[$getGlobalUserVar[lucklvl;$authorID]!=20;❗ | You are already at **max level**]
    $textSplit[$djsEval[var exp = $getGlobalUserVar[luckxp;$authorID];
var req = $getGlobalUserVar[luckreq;$authorID];
var lvl = $getGlobalUserVar[lucklvl;$authorID];
var total = $getGlobalUserVar[lucktotal;$authorID];
var effi = $getGlobalUserVar[luck;$authorID];
var add = $message[2];

var min = Math.min(add, 420000-total);
var Return = add-min;
total+=min;

while(add!=0){
 if(add+exp>=req){
  add-=(req-exp)
  req = req+1000
  lvl++
  effi = effi+1
  exp = 0
 } else {
  exp+=add
  add = 0
 }

 if(lvl>19){
  lvl = 20
  exp = Infinity
  req = Infinity
  total = 420000
  break
 }
}

//It is result, u can customize it
exp+"/"+req+"/"+lvl+"/"+total+"/"+effi+"/"+Return;yes];/]


$endif
$endif
$endif
$endif


$argsCheck[2;🚫 | Please provide **amount** to upgrade ]

$onlyIf[$checkContains[$toLowerCase[$message[1]];efficiency;gain;luck;experience]==true;🚫 | Please provide a **valid trait** to upgrade
Available traits 
\`experience\`
\`gain\`
\`efficiency\`
\`luck\`]

$onlyIF[$message[2]>0;🚫 | Try positive numbers]
$onlyIf[$isnumber[$message[2]]==true;🚫 | Please provide a valid number]
$suppressErrors[{newEmbed:{description:There was an error whilst executing this **command** , these errors should __**not happen.**__

Please visit our **[support server](https://discord.gg/8HbkqA73Jj)** report this error, mentioning the command you are using.
We will surely give you a **gift?** #COLON#-)}
{color:RED}
{author:ERROR!!}
{timestamp}}]

`
}
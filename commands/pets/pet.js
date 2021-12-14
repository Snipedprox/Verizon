module.exports = {
name: "pet",
$if: "v4",
aliases: ['animal','pett'],
code: `
$if[$getGlobalUserVar[panda]>0]
$author[1;Your panda;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$color[1;BORDO]
$footer[1;Your panda named $getGlobalUserVar[pname];https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$description[1;
<:panda:918918705050693642> **welcome to your pet panda named $getGlobalUserVar[pname]**
**✄... if you dont like your pandas name you can change it ㋡ by doing** \`$getGlobaluserVar[prefix]pet-rename [ new name ]\` 

<:bird_hunger:913156154660642926> **Hunger**
\`$getGlobalUserVar[phunger]%\`

$getVar[symbol] **Coins collected**
\`$numberSeparator[$getGlobalUserVar[pcoin];,]\`$getVar[symbol]

<:sleepy:913156081876865025> **Sleep**
\`$getGlobalUserVar[psleep]%\`

<:bird_love:913156214089728031> **Love**
\`$getGlobalUserVar[plove]%\`]

$else

$if[$getGlobalUserVar[dog]>0]
$author[1;Your dog;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$color[1;BORDO]
$footer[1;Your dog named $getGlobalUserVar[pname];https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$description[1;
**<:dog:918932976258129960> welcome to your pet dog named $getGlobalUserVar[pname]**
**✄... if you dont like your dogs name you can change it ㋡ by doing** \`$getGlobaluserVar[prefix]pet-rename [ new name ]\` 

<:bird_hunger:913156154660642926> **Hunger**
\`$getGlobalUserVar[phunger]%\`

$getVar[symbol] **Coins collected**
\`$numberSeparator[$getGlobalUserVar[pcoin];,]%\`

<:sleepy:913156081876865025> **Sleep**
\`$getGlobalUserVar[psleep]%\`

<:bird_love:913156214089728031> **Love**
\`$getGlobalUserVar[plove]%\`]

$else

$if[$getGlobalUserVar[cat]>0]
$author[1;Your cat;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$color[1;BORDO]
$footer[1;Your cat named $getGlobalUserVar[pname];https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$description[1;
**<:cat:918933580812537876> welcome to your pet cat named $getGlobalUserVar[pname]**
**✄... if you dont like your cats name you can change it ㋡ by doing** \`$getGlobaluserVar[prefix]pet-rename [ new name ]\` 

<:bird_hunger:913156154660642926> **Hunger**
\`$getGlobalUserVar[phunger]%\`

$getVar[symbol] **Coins collected**
\`$numberSeparator[$getGlobalUserVar[pcoin];,]\`

<:sleepy:913156081876865025> **Sleep**
\`$getGlobalUserVar[psleep]%\`

<:bird_love:913156214089728031> **Love**
\`$getGlobalUserVar[plove]%\`]
$else
**You fr that lonely? go buy a pet first bruh**
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
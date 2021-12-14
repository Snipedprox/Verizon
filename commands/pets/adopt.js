module.exports = {
name: "adopt",
$if: "v4",
code: `
$if[$message==panda]
$setGlobalUserVar[pname;paul]
$setGlobalUserVar[cat;0]
$setGlobalUserVar[dog;0]
$setGlobalUserVar[panda;1]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]
$setGlobalUserVar[psleep;100]
$setGlobalUserVar[phunger;100]
$setGlobalUserVar[plove;100]
$author[1;You adopted paul;$getVar[paul]]
$color[1;GREEN]
$footer[1;Make sure to feed paul every once a while;$getVar[paul]]
$thumbnail[1;$getVar[paul]]
$description[1;**You adopted <:panda:918918705050693642>** \`paul\` **and paid 15,000$getVar[symbol]**]
$onlyIf[$getGlobalUserVar[panda]<1;**Dont expect you can buy another <:panda:918918705050693642>**]
$onlyIf[$getGlobalUserVar[cash]>14999;**<:panda:918918705050693642> Paul wont come with you unless you get 15,000$getVar[symbol] **]

$else


$if[$message==dog]
$setGlobalUserVar[pname;brownie]
$setGlobalUserVar[cat;0]
$setGlobalUserVar[dog;1]
$setGlobalUserVar[panda;0]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];10000]]
$author[1;You adopted brownie;$getVar[brownie]]
$color[1;BROWN]
$footer[1;Make sure to feed brownie every once a while;$getVar[brownie]]
$thumbnail[1;$getVar[brownie]]
$description[1;**You adopted <:dog:918932976258129960>** \`brownie\` **and paid 10,000$getVar[symbol]**]
$setGlobalUserVar[psleep;100]
$setGlobalUserVar[phunger;100]
$setGlobalUserVar[plove;100]
$onlyIf[$getGlobalUserVar[dog]<1;**Dont expect you can buy another <:dog:918932976258129960>**]
$onlyIf[$getGlobalUserVar[cash]>9999;**<:dog:918932976258129960> brownie wont come with you unless you get 10,000$getVar[symbol] **]

$else

$if[$message==cat]
$setGlobalUserVar[pname;bella]
$setGlobalUserVar[cat;1]
$setGlobalUserVar[dog;0]
$setGlobalUserVar[panda;0]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1000]]
$setGlobalUserVar[psleep;100]
$setGlobalUserVar[phunger;100]
$setGlobalUserVar[plove;100]
$author[1;You adopted brownie;$getVar[bella]]
$color[1;grey]
$footer[1;Make sure to feed bella every once a while;$getVar[bella]]
$thumbnail[1;$getVar[bella]]
$description[1;**You adopted <:cat:918933580812537876>** \`bella\` **and paid 1,000$getVar[symbol]**]
$onlyIf[$getGlobalUserVar[cat]<1;**Dont expect you can buy another <:cat:918933580812537876>**]
$onlyIf[$getGlobalUserVar[cash]>999;**<:cat:918933580812537876> bella wont come with you unless you get 1,000$getVar[symbol] **]
$else
$getVar[x]**I see you are trying to adopt one of our pets but you used an invalid pet ID so please check the pet shop again by doing** \`$getServerVar[prefix]pet-shop\`
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
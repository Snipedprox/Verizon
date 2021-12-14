module.exports = {
name: "pet-play",
$if: "v4",
aliases: ['petplay','pplay','petp','peplay'],
code: `

$if[$getGlobalUserVar[panda]>0]
$author[1;Your panda;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$color[1;BORDO]
$footer[1;Your panda;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$description[1;
<:panda:918918705050693642> **You went playing with your panda in  $randomText[the park;a dark allyway;the forest;the zoo... wait hollu-] and that got his love bar back to ** \`100%\`]
$setGlobalUserVar[plove;100]
$onlyIf[$getGlobalUserVar[plove]<45;**Your pet doesnt wanna play right now bruh**]
$else

$if[$getGlobalUserVar[dog]>0]
$author[1;Your dog;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$color[1;BORDO]
$footer[1;Your dog;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$description[1;
<:dog:918932976258129960> **You went playing with your dog in  $randomText[the park;a dark allyway;the forest;the adoption center... wait hollu-] and that got his love bar back to ** \`100%\`]
$setGlobalUserVar[plove;100]
$onlyIf[$getGlobalUserVar[plove]<45;**Your pet doesnt wanna play right now bruh**]
$else

$if[$getGlobalUserVar[cat]>0]
$author[1;Your cat;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$color[1;BORDO]
$footer[1;Your cat;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$description[1;
<:cat:918933580812537876> **You went playing with your cat in  $randomText[the park;a dark allyway;the forest;a pool... wait hollu-] and that got his love bar back to ** \`100%\`]
$setGlobalUserVar[plove;100]
$onlyIf[$getGlobalUserVar[plove]<45;**Your pet doesnt wanna play right now bruh**]
$else
**You fr that lonely? go buy a pet bruh**
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
module.exports = {
name: "pet-rename",
$if: "v4",
aliases: ['petrename','prename','pname'],
code: `
$if[$getGlobalUserVar[panda]>0]
$author[1;Your panda;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$color[1;BORDO]
$footer[1;Your panda;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$description[1;
<:panda:918918705050693642> **You gave your panda a new name and $randomText[they kinda like it;they love it;they seem to like it;they are ok with it;they hate it...]**
**New name: $message**]
$setGlobalUserVar[pname;$message]
$onlyIf[$charCount[$message]>0;**Your pet doesnt want a blank name...**]
$else

$if[$getGlobalUserVar[dog]>0]
$author[1;Your dog;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$color[1;BORDO]
$footer[1;Your dog;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$description[1;
<:dog:918932976258129960> **You gave your dog a new name and $randomText[they kinda like it;they love it;they seem to like it;they are ok with it;they hate it...]**
**New name: $message**]
$setGlobalUserVar[pname;$message]
$onlyIf[$charCount[$message]>0;**Your pet doesnt want a blank name...**]

$else

$if[$getGlobalUserVar[cat]>0]
$author[1;Your cat;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$color[1;BORDO]
$footer[1;Your cat;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$description[1;
**<:cat:918933580812537876> You gave your cat a new name and $randomText[they kinda like it;they love it;they seem to like it;they are ok with it;they hate it...]**
**New name: $message**]
$setGlobalUserVar[pname;$message]
$onlyIf[$charCount[$message]>0;**Your pet doesnt want a blank name...**]
$else
**You fr that lonely? go buy a pet bruh**
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
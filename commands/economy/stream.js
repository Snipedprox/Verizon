module.exports = {
name: "stream",
$if: "v4",
code: `
$if[$getGlobalUserVar[con]==on]

$title[1;**Live stream**]
$color[1;$getVar[embed_color]]
$description[1;**$randomText[You went live on youtube;You went live on twitch] and streamed yourself playing $randomText[minecraft;roblox;deez nuts] and your fans donated $random[100;500]$getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;500]]]
$globalCooldown[3m;your laptop is wayy to hot to stream now, so wait %time%]
$else

$title[1;**Live stream**]
$color[1;$getVar[embed_color]]
$description[1;**$randomText[You went live on youtube;You went live on twitch] and streamed yourself playing $randomText[minecraft;roblox;deez nuts] and your fans donated $random[1;50]$getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;50]]]
$globalCooldown[3m;your laptop is wayy to hot to stream now, so wait %time%]
$endif
$onlyIf[$getGlobalUserVar[laptop]>0;You wont own a laptop]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`}
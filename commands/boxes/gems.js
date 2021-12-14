module.exports = {
name: "xp",
code: `
$title[1;**$username[$findUser[$message;yes]] xp**]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]
$description[1;**$usertag[$findUser[$message;yes]] has $numberSeparator[$getGlobalUserVar[xpt];,]$getVar[xpsymbol]**]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
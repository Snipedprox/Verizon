module.exports = {
 name: 'play',
 aliases: ['p'],
 $if: 'v4',
 code: `
$color[1;03CEA4]
$description[1;💿 **$replaceText[$replaceText[$lavalinkExecute[isPlaying];true;Added [$lavalinkExecute[songInfo;title;$get[position]]]($lavalinkExecute[songInfo;url;$get[position]]) to queue!];false;Playing [$lavalinkExecute[songInfo;title;$get[position]]]($lavalinkExecute[songInfo;url;$get[position]])]**]
$footer[1;Requested by $userTag[$authorID]]
$addTimestamp[1]
$let[position;$sub[$lavalinkExecute[queuetotal];1]]
$let[a;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[isIdling];true;play];false;volume]]]
$log[$lavalinkExecute[isIdling]|$lavalinkExecute[isPlaying]|$lavalinkExecute[isPaused]]
$let[a;$lavalinkExecute[addtrack;$get[key];1]]
$let[key;$lavalinkExecute[search;$message]]
$lavalinkExecute[connect]
$onlyIf[$message!=;{newEmbed: {description:**🚫 I need a song to play!**}{color:RED}}]
$onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel to use this command!**}{color:RED}}]
$suppressErrors
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
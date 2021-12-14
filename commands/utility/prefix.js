module.exports = {
name: "prefix",
$if: "v4",
code: `
$if[$getGlobalUserVar[lang]==french]
$setServerVar[prefix;$message]
Préfixe modifié de \`$getServerVar[prefix]\` à \`$message\`
$onlyIf[$charCount[$message]=<5;Le préfixe doit comporter 5 caractères ou moins]
$onlyIf[$charcount[$message]>=1;Le préfixe ne peut pas être vide ]
$onlyPerms[manageserver; permission manquantes \`MANAGE_SERVER\`]
$else
$setServerVar[prefix;$message]
**Prefix changed from **\`$getServerVar[prefix]\` **to** \`$message\`
$onlyIf[$charCount[$message]=<5;Prefix has to be 5 or less charactars long]
$onlyIf[$charcount[$message]>=1;Prefix cant be empty ]
$onlyPerms[manageserver;missing perms \`MANAGE_SERVER\`]
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
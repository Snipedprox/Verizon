module.exports = [{
name: "unlock",
aliases: ['ud','udown'],
code: `
$awaitMessages[$channelId;$authorid;5m;y,n;yy,nn;Command timed out;{}]

$title[1;**Command unlock**]
$color[1;ff9966]
$footer[1;Type in Y or N]
$thumbnail[1;https://cdn.discordapp.com/emojis/917445081890431066.png?size=56]
$description[1;**Are you sure you want to unlock all commands**
** Y or N **]
$onlyForIDS[$botownerid;896846485805744168;]`
}, {
type: "awaited",
name: "yy",
code: `
**All commands have been unlocked**
$setVar[lockdown;off]`
}, {
type: "awaited",
name: "nn",
code: `
**Action has been stopped**`
}]
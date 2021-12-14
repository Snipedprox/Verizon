module.exports = [{
name: "lockdown",
aliases: ['ld','lockd','ldown'],
code: `
$awaitMessages[$channelId;$authorid;5m;y,n;y,n;Command timed out;{}]

$title[1;**Command lockdown**]
$color[1;ff9966]
$footer[1;Type in Y or N]
$thumbnail[1;https://cdn.discordapp.com/emojis/917445081890431066.png?size=56]
$description[1;**Are you sure you want to lock all commands**
** Y or N **]
$onlyForIDS[$botownerid;896846485805744168;]`
}, {
type: "awaited",
name: "y",
code: `
**All commands have been locked**
$setVar[lockdown;on]`
}, {
type: "awaited",
name: "n",
code: `
**Action has been stopped**`
}]
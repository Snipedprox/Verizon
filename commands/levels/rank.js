module.exports = ({
name:"rank",
$if: "v4",
aliases:"level",
category:"Levelling",
description:"Check the rank of a user.",
usage:"rank <optional user>",
code:`$if[$message==]
$author[1;Rank of $usertag[$get[user]];$authoravatar]
$image[1;https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getGlobalUserVar[rank;$get[user]]&rank=&currentxp=$getGlobalUserVar[exp;$get[user]]&nextlevelxp=$getGlobalUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getGlobalUserVar[level_card]&xpcolor=fae7b5&isboosting=true]
$color[1;$getVar[color]]
$let[user;$authorid]
$else
$suppresserrors
$color[1;$getVar[color]]
$author[1;Rank of $usertag[$get[user]];$authoravatar]
$image[1;https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getGlobalUserVar[rank;$get[user]]&rank=&currentxp=$getGlobalUserVar[exp;$get[user]]&nextlevelxp=$getGlobalUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getGlobalUserVar[level_card]&xpcolor=fae7b5&isboosting=true]
$let[user;$replacetext[$replacetext[$checkcondition[$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]==undefined];true;$findmember[$message;yes]];false;$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]]]
$endif`})
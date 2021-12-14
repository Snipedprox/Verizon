module.exports = {
  name: "pet-shop",
  aliases: ['petshop','pshop','peshop'],
  code: `

  $author[1;Oh hey there fellow human;https://cdn.discordapp.com/emojis/913156214089728031.png?size=56]
  $thumbnail[1;https://cdn.discordapp.com/emojis/913156214089728031.png?size=56]
  $color[1;$getVar[color]]
  $footer[1;If you change from pet you atomaticly lose the other pets;https://cdn.discordapp.com/emojis/913156214089728031.png?size=56]
  $description[1;
  ▬▬ι═══════ﺤ **Welcome to the adoption center**
  **All of these pets need an owner :/ hopefully you can help them **
  <:panda:918918705050693642> **Panda paul**
  **Age: 9y/o**
  **ID: panda**
  **Price: 15,000$getVar[symbol]**
  
 <:dog:918932976258129960> **Brownie the dog**
  **Age: 3y/o**
  **ID: dog**
  **Price: 10,000$getVar[symbol]**

  <:cat:918933580812537876> **Bella the kitten**
  **Age: 5y/o**
  **ID: cat**
  **Price: 1,000$getVar[symbol]**

  <:food:918944289713713163> **Pet food**
  **ID:** \`pfood\`
  **Price: 500$getVar[symbol]**

\`\`\`kt
These animals cost money to adopt since yea we need the money if you are gonna buy the pets you wanna do $getServerVar[prefix]adopt < animal > and to buy you just do $getservervar[prefix]buy < id > < amount >\`\`\`
  $onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/8HbkqA73Jj)**}}]`
}
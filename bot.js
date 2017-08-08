/* A Twitterbot made by @Rossmallow
 * GitHub.com/Rossmallow
 * LinkedIn.com/in/RossNel
*/

var Twit = require('twit')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

var number = "";

var current_date = new Date();

var rand = 0;

var tips = [
  "The battle moves of Pokémon are limited by their Power Points, PP. To replenish PP, rest your tired Pokémon at a Pokémon Center!",
  "Catch Pokémon and expand your collection! The more you have, the easier it is to fight!",
  "Any Pokémon that takes part in battle, however short, earns EXP!",
  "Pressing B Button during evolution cancels the whole process.",
  "New Great Ball offers improved capture rates. Try it on those hard-to-catch Pokémon.",
  "Full Heal cures all ailments like sleep and burns. It costs a bit more, but it's more convenient.",
  "Weaken Pokémon before attempting capture! When healthy, they may escape!",
  "For poison, use Antidote! Get it at Pokémon Marts!",
  "If you want to avoid battles, stay away from grassy areas!",
  "Contact Prof. Oak via PC to get your Pokédex evaluated.",
  "No stealing of Pokémon from other trainers! Catch only wild Pokémon!",
  "All Pokémon are unique. Even Pokémon of the same type and level grow at different rates.",
  "Pokémon hide in tall grass! Zigzag through grassy areas to flush them out.",
  "A Pokémon holding a MiracleBerry will cure itself of any status problem.",
  "No stealing other people's Pokémon! Poké Balls are to be thrown only at wild Pokémon!",
  "Berry trees grow new Berries every day. Make a note of which trees bear which Berries.",
  "Print out Mail by opening it then pressing start.",
  "Use Dig to return to the entrance of any place. It is convenient for exploring caves and other landmarks.",
  "Use Headbutt on trees to shake Pokémon out. Different kinds of Pokémon drop out of trees. Use Headbutt on any tree you see!",
  "Advice on catching Pokémon with a Rod: Press the A Button if you get a bite.",
  "The foe can be made helpless by paralyzing it or causing it to sleep. It is an important technique for Pokémon battles.",
  "The battle moves of Pokémon are limited by their Power Points, PP. To replenish PP, rest your tired Pokémon at a Pokémon Center.",
  "Catch Pokémon and expand you collection. The more you have, the easier it is to battle.",
  "All Pokémon that appear in battle, however briefly, earn EXP Points.",
  "A Pokémon can be made to hold an item. Some items can even be used by the holding Pokémon in battle.",
  "Guard Spec. protects Pokémon from status-reduction moves during battle. Get your items at the Celadon Dept. Store!",
  "The new Great Ball offers improved catching rates. Try it on those hard-to-catch Pokémon.",
  "Weaken Pokémon before attempting capture! When healthy, they may escape!",
  "If your Pokémon are weak and you want to avoid battles, stay away from grassy areas!",
  "Contact Prof. Oak via a PC to get your Pokédex evaluated!",
  "You can't catch a Pokémon that belongs to someone else. Throw Poké Balls only at wild Pokémon to catch them!",
  "All Pokémon that are involved in a battle earn Exp. Points! The more your Pokémon battle, the stronger they will become.",
  "Pokémon moves use energy called Power Points, or PP for short. If the PP of moves runs low, head for any Pokémon Center.",
  "The items in the Bag can be reorganized by pressing select.",
  "No stealing other people's Pokémon! Poké Balls are to be thrown only at wild Pokémon!",
  "Ilex Forest is so overgrown with trees that you can't see the sky. Please watch out for items that may have been dropped.",
  "North to Goldenrod City The Radio Tower at Goldenrod is giving away Radio Cards. Answer their questions and receive a Radio Card",
  "Use Headbutt on trees to shake Pokémon out. Different kinds of Pokémon drop out of trees. Use Headbutt on any tree you see!",
  "The Musical Theater is always looking for participants! You might get more wonderful Props if you participate repeatedly!",
  "Make an effort to talk to all the people you meet during your journey! Chances are they will have something useful to tell you.",
  "Pokémon that participate in battle receive Exp. Points. Have your Pokémon battle often, and make them stronger and stronger!",
  "A forest is likely to contain many well-hidden items! They may be hard to find, so look carefully!",
  "You can register certain items with the Y Button to use them easily! Look for a square checkbox beside the name of a Key Item.",
  "Press SELECT to change the location of items in the Bag! Poink!",
  "Try pressing SELECT while organizing your PC Box. It'll let you move your Pokémon around more easily!",
  "Even the same kind of Pokémon can have different Abilities. Even if you've caught it before, try to catch another one!",
  "The maximum number of Boxes is now 24! In other words, you can store 720 Pokémon!",
  "The Musical Theater is always looking for participants! You might get more wonderful Props if you participate repeatedly!",
  "Make an effort to talk to all the people you meet during your journey! Chances are they will have something useful to tell you.",
  "Pokémon that participate in battle receive Exp. Points. Have your Pokémon battle often and make them stronger!",
  "Tap the yellow button at the top of a PC box to switch to Group Move mode. It lets you move groups of Pokémon in your PC Boxes.",
  "A forest is likely to contain many well-hidden items! They may be hard to find, so look carefully!",
  "You can register certain items with the Y Button to use them easily! Look for a square check box beside the name of a Key Item.",
  "Press SELECT to change the location of items in the Bag! Poink!",
  "One kind of Pokémon can have different Abilities. Try to catch Pokémon you've already caught before!",
  "The maximum number of Boxes is now 24! In other words, you can store 720 Pokémon!",
  "Make an effort to talk to all the people you meet during your journey! Chances are they will have something useful to tell you.",
  "Pokémon gain Experience Points and grow stronger by battling.",
  "The first Pokémon to appear in battle will be the one in the upper-left hand corner of the list!",
  "Use Pokémon-Amie to spend some quality time with your Pokémon!",
  "In Super Training, you can make your Pokémon strong by having them play sports in virtual space!",
  "Pokémon lured to you by the item Honey or the move Sweet Scent will appear in hordes!",
  "You can change the position of a Pocket in the Bag menu by holding the stylus down on its icon and moving it.",
  "You can immediately warp outside a cave you're in by using an Escape Rope!",
  "Tap a player's icon on the PSS! Then, tap the name to check that player's profile!",
  "Pokémon can use HM moves even when they aren't feeling well enough to battle!",
  "Electric-type Pokémon are immune to paralysis!",
  "Grass-type Pokémon are unaffected by powder and spore moves!",
  "Some Pokémon may evolve if they gain a level while it is raining.",
  "The move Grassy Terrain boosts the power of Grass-type moves by 50%! But it only affects Pokémon that are touching the ground.",
  "The move Misty Terrain cuts damage from Dragon-type moves in half! But it only protects Pokémon if they're touching the ground.",
  "The trick to catching Pokémon with a rod is to press the A Button as soon as you get a bite.",
  "The order of items can be changed by pressing START on the Bag menu.",
  "If you get stuck in a Secret Base, use an Escape Rope, and you can be out of your pickle in no time!",
  "The Pokémon that will appear first in a battle will be the one that you've put in the top-left position in your Pokémon list.",
  "The item known as an Escape Rope can get you out of a cave in an instant if you only use it!",
  "Traveling together makes your Pokémon grow friendlier toward you. Some Pokémon even evolve when they grow friendly enough!",
  "You can use the free space in your Bag to help you better organize your items.",
  "If you touch a Pokémon's icon during a Pokémon battle, you can see detailed information about how it will stack up in battle.",
  "You can move the icons around on the X menu to place them wherever you'd like. Try to touch one and drag it around!",
  "Some Z-Moves will increase your Pokémon's stats as long as it is enveloped in Z-Power.",
  "Wild Pokémon that appear on Poké Pelago's Isle Abeens sometimes decide to stay with you.",
  "If you collect lots of different kinds of Berries, try planting them on Poké Pelago's Isle Aplenny to grow and harvest more.",
  "You can drop off up to 18 Pokémon at a time on Poké Pelago's Isle Evelup.",
  "You can even drop off Pokémon Eggs in the hot springs baths on Poké Pelago's Isle Avue.",
  "Rumor has it there are some special Z-Moves that only certain Pokémon can use.",
  "I see! You can use the move Rock Smash! Use Rock Smash to break rocks, and you'll sometimes find Pokémon or items!",
  "You can cast a fishing line from a Pokémon's back when using Surf to move across the water!",
  "A Pokémon with the Scrappy Ability can hit a Ghost type with Fighting- or Normal-type moves!",
  "You can check the moves for any of your Pokémon right from inside the PC Box!",
  "Eevee is a Pokémon bursting with possibilities. Take it to different places, or even try some Evolution stones on it!"
  ];

function pick_random_tip() {
  rand = Math.floor(Math.random() * tips.length);
  return tips[rand];
}

function upload_random_tip() {
  console.log('Opening an image...');
    // Remove '_branding' to havae pictures without the PokéDemons's badge
  var image_path = path.join(__dirname, '/trainertips.jpg'),
      b64content = fs.readFileSync(image_path, { encoding: 'base64' });

  console.log('Uploading an image...');

  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    if (err){
      console.log('ERROR');
      console.log(err);
    }
    else{
      console.log('Uploaded an image!');
      pick_random_tip();

      T.post('statuses/update', {
        status: "#TTThursday\n" + tips[rand], media_ids: new Array(data.media_id_string)
      },
        function(err, data, response) {
          if (err){
            console.log('Error!');
            console.log(err);
          }
          else{
            console.log('Posted an image!');
          }
        }
      );
    }
  });
}

if (current_date.getDate() == 3) {
  setImmediate(upload_random_tip);
}
else {
  console.log("It's not Thursday.");
}

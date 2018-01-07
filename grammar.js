"use strict";

var grammar = {
  "@TITLE": [
    [2, "@NOUN"],
    [12, "@NOUN", " and ", "@NOUN"],
    [1, "@NOUN", " and ", "@NOUN", " and ", "@CREATURE"],
    [6, "@PLACE"],
    [2, "@FEMALE_NAME"],
    [1, "@FEMALE_TITLE", " ", "@FEMALE_NAME"]
  ],
  "@FEMALE_TITLE": [
    [1, "Lady"]
  ],
  "@PLACE": [
    [5, "@PLACE_FIRST_HALF", "@PLACE_SECOND_HALF", " ", "@PLACE_TYPE"],
    [1, "@PLACE_FIRST_OR_SECOND_HALF_CAPITALIZED", "@PLACE_SECOND_HALF", " ", "@PLACE_TYPE"],
    [1, "@PLACE_FIRST_HALF", "@PLACE_FIRST_OR_SECOND_HALF_LOWERCASE", " ", "@PLACE_TYPE"],
    [1, "@PLACE_FULL_NAME", " ", "@PLACE_TYPE"]
  ],
  "@NOUN": [
    [1, "Admiration"],
    [1, "Acquaintance"],
    [1, "Affinity"],
    [1, "Amity"],
    [1, "Amusement"],
    [1, "Assent"],
    [1, "Attachment"],
    [1, "Blandishment"],
    [1, "Certainty"],
    [1, "Chastisement"],
    [1, "Circumstance"],
    [1, "Civility"],
    [1, "Comity"],
    [1, "Comportment"],
    [1, "Condemnation"],
    [1, "Condescension"],
    [1, "Confidence"],
    [1, "Contempt"],
    [1, "Courtesy"],
    [1, "Discretion"],
    [1, "Dignity"],
    [1, "Disposition"],
    [1, "Duty"],
    [1, "Error"],
    [1, "Esteem"],
    [1, "Expectation"],
    [1, "Familiarity"],
    [1, "Faith"],
    [1, "Favour"],
    [1, "Felicity"],
    [1, "Flattery"],
    [1, "Folly"],
    [1, "Fortitude"],
    [1, "Fortune"],
    [1, "Freindship"],
    [1, "Gratitude"],
    [1, "Honour"],
    [1, "Hope"],
    [1, "Humour"],
    [1, "Inclination"],
    [1, "Indulgence"],
    [1, "Inspiration"],
    [1, "Judgement"],
    [1, "Love"],
    [1, "Merit"],
    [1, "Modesty"],
    [1, "Opportunity"],
    [1, "Partiality"],
    [1, "Persuasion"],
    [1, "Position"],
    [1, "Possession"],
    [1, "Predilection"],
    [1, "Prejudice"],
    [1, "Presumption"],
    [1, "Pretense"],
    [1, "Pride"],
    [1, "Principles"],
    [1, "Privilege"],
    [1, "Prudence"],
    [1, "Regard"],
    [1, "Respect"],
    [1, "Satisfaction"],
    [1, "Sense"],
    [1, "Sensibility"],
    [1, "Sentiment"],
    [1, "Sincerity"],
    [1, "Speculation"],
    [1, "Superiority"],
    [1, "Temper"],
    [1, "Temperance"],
    [1, "Tranquillity"],
    [1, "Understanding"],
    [1, "Vanity"],
    [1, "Virtue"],
    [1, "Wit"]
  ],
  "@CREATURE": [
    [1, "Demons"],
    [1, "Dragons"],
    [1, "Elves"],
    [1, "Fairies"],
    [1, "Genies"],
    [1, "Ghosts"],
    [1, "Harpies"],
    [1, "Mermaids"],
    [1, "Pegasus"],
    [1, "Phoenixes"],
    [1, "Robots"],
    [1, "Sea Monsters"],
    [1, "the Loch Ness Monster"],
    [1, "Unicorns"],
    [2, "Vampires"],
    [2, "Werewolves"],
    [1, "Yetis"],
    [2, "Zombies"]
  ],
  "@PLACE_FIRST_OR_SECOND_HALF_CAPITALIZED": [
    [1, "Brook"],
    [1, "Cliff"],
    [1, "Chester"],
    [1, "Cross"],
    [1, "Don"],
    [1, "Grove"],
    [1, "Ham"],
    [1, "Water"],
    [1, "Worth"]
  ],
  "@PLACE_FIRST_OR_SECOND_HALF_LOWERCASE": [
    [1, "brook"],
    [1, "cliff"],
    [1, "chester"],
    [1, "cross"],
    [1, "don"],
    [1, "grove"],
    [1, "ham"],
    [1, "water"],
    [1, "worth"]
  ],
  "@PLACE_FIRST_HALF":[
    [1, "Ar"],
    [1, "Ash"],
    [1, "Ast"],
    [1, "Bering"],
    [1, "Ben"],
    [1, "Billing"],
    [1, "Briar"],
    [1, "Bridge"],
    [1, "Bright"],
    [1, "Chat"],
    [1, "Cleve"],
    [1, "Cran"],
    [1, "Crimple"],
    [1, "Cumber"],
    [1, "Dun"],
    [1, "East"],
    [1, "Edge"],
    [1, "El"],
    [1, "Engle"],
    [1, "Ens"],
    [1, "Evering"],
    [1, "Fern"],
    [1, "Fiddle"],
    [1, "Grey"],
    [1, "Hamp"],
    [1, "Hart"],
    [1, "Harrow"],
    [1, "Haw"],
    [1, "Hazel"],
    [1, "Hid"],
    [1, "High"],
    [1, "Hog"],
    [1, "Hol"],
    [1, "Isling"],
    [1, "King"],
    [1, "Kirk"],
    [1, "Litch"],
    [1, "Long"],
    [1, "Low"],
    [1, "Lyd"],
    [1, "Mans"],
    [1, "Mil"],
    [1, "Middle"],
    [1, "New"],
    [1, "North"],
    [1, "Oak"],
    [1, "Over"],
    [1, "Rams"],
    [1, "Riddle"],
    [1, "Row"],
    [1, "Sandi"],
    [1, "Saw"],
    [1, "Sher"],
    [1, "South"],
    [1, "Still"],
    [1, "West"],
    [1, "Whit"],
    [1, "Wilder"],
    [1, "Windle"],
    [1, "Winning"],
    [1, "Wind"]
  ],
  "@PLACE_SECOND_HALF":[
    [1, "beck"],
    [1, "bourne"],
    [1, "borough"],
    [1, "brook"],
    [1, "bury"],
    [1, "by"],
    [1, "cote"],
    [1, "combe"],
    [1, "croft"],
    [1, "dale"],
    [1, "den"],
    [1, "end"],
    [1, "endon"],
    [1, "field"],
    [1, "ford"],
    [1, "gate"],
    [1, "hall"],
    [1, "hampton"],
    [1, "ington"],
    [1, "land"],
    [1, "leigh"],
    [1, "ley"],
    [1, "low"],
    [1, "more"],
    [1, "ridge"],
    [1, "shaw"],
    [1, "sey"],
    [1, "shire"],
    [1, "stead"],
    [1, "ston"],
    [1, "thorpe"],
    [1, "ton"],
    [1, "well"],
    [1, "wich"],
    [1, "wick"],
    [1, "wood"]
  ],
  "@PLACE_TYPE": [
    [3, "Abbey"],
    [3, "Hall"],
    [3, "House"],
    [3, "Park"],
    [2, "Court"],
    [1, "Estate"],
    [1, "Manor"],
    [1, "Cottage"]
  ],
  "@PLACE_FULL_NAME": [
    [1, "Anglesey"],
    [1, "Barlborough"],
    [1, "Ballard"],
    [1, "Biddulph"],
    [1, "Blickling"],
    [1, "Buttermere"],
    [1, "Chastleton"],
    [1, "Coombe"],
    [1, "Gloucester"],
    [1, "Greaves"],
    [1, "Hailes"],
    [1, "Hogwarts"],
    [1, "Ightham"],
    [1, "Moseley"],
    [1, "Tyringham"],
    [1, "Waddesdon"],
    [1, "Winkworth"]
   ],
  "@FEMALE_NAME": [
    [1, "Alice"],
    [1, "Alicia"],
    [1, "Anne"],
    [1, "Anna"],
    [1, "Annamaria"],
    [1, "Augusta"],
    [1, "Bridget"],
    [1, "Caroline"],
    [1, "Catharine"],
    [1, "Catherine"],
    [1, "Charlotte"],
    [1, "Clara"],
    [1, "Eleanor"],
    [1, "Elinor"],
    [1, "Elizabeth"],
    [1, "Emily"],
    [1, "Emma"],
    [1, "Flora"],
    [1, "Frances "],
    [1, "Frederica"],
    [1, "Georgiana"],
    [1, "Hannah"],
    [1, "Harriet"],
    [1, "Henrietta"],
    [1, "Isabella"],
    [1, "Jane"],
    [1, "Janet"],
    [1, "Jemima"],
    [1, "Julia"],
    [1, "Kitty"],
    [1, "Lizzy"],
    [1, "Louisa"],
    [1, "Lucy"],
    [1, "Lydia"],
    [1, "Margaret"],
    [1, "Maria"],
    [1, "Marianne"],
    [1, "Martha"],
    [1, "Mary"],
    [1, "Patricia"],
    [1, "Penelope"],
    [1, "Rebecca"],
    [1, "Sarah"],
    [1, "Selina"],
    [1, "Sophia"],
    [1, "Susan"]
  ],
  "@AGAIN": [
    [1, "It is a truth universally acknowledged that I am in want of another title."],
    [1, "I declare after all there is no enjoyment like book titles."],
    [1, "My feelings will not be repressed. You must allow me to generate another title."],
    [1, "The more I know of the world, the more I am convinced that I shall never have enough book titles."],
    [1, "I am half agony, half hope. These titles pierce my soul."],
    [1, "There is no charm equal to a new book title."],
    [1, "For what do we live, but to make sport with book titles, and laugh at them in our turn?"],
    [1, "It is only a book title, or, in short, only some work in which the greatest powers of the mind are displayed!"],
    [1, "Life seems but a quick succession of computer-generated book titles."],
    [1, "It is not everyone who has my passion for book titles."],
    [1, "If I could but generate another book title, everything would become easy."],
    [1, "This title is tolerable, but not handsome enough to tempt me."],
    [1, "Follies and nonsense, whims and inconsistencies do divert me, I own, and I generate book titles whenever I can."],
    [1, "Know your own happiness. You want nothing but another book title."]
  ]
};

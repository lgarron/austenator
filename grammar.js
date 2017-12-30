"use strict";

var grammar = {
  "@TITLE": [
    "@NOUN", "@NOUN","@NOUN","@NOUN","@NOUN","@NOUN",
    "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN", "@NOUN and @NOUN",
    "@NOUN and @NOUN and @CREATURE",
    "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE", "@PLACE",
    "@FEMALE_NAME", "@FEMALE_NAME", "@FEMALE_NAME", "@FEMALE_NAME",
    "@FEMALE_TITLE @FEMALE_NAME", "@FEMALE_TITLE @FEMALE_NAME"
  ],
  "@FEMALE_TITLE": [
    "Lady"
  ],
  "@PLACE": [
    "@PLACE_FIRST_HALF @PLACE_SECOND_HALF @PLACE_TYPE",
    "@PLACE_FIRST_OR_SECOND_HALF_CAPITALIZED @PLACE_SECOND_HALF @PLACE_TYPE",
    "@PLACE_FIRST_HALF @PLACE_FIRST_OR_SECOND_HALF_LOWERCASE @PLACE_TYPE",
    "@PLACE_FULL_NAME @PLACE_TYPE"
  ],
  "@NOUN": [
    "Admiration",
    "Acquaintance",
    "Affinity",
    "Amity",
    "Amusement",
    "Appreciation", // ?
    "Assent",
    "Attachment",
    "Blandishment",
    "Certainty",
    "Chastisement",
    "Circumstance",
    "Civility",
    "Comity",
    "Commendation",
    "Comportment",
    "Condemnation",
    "Condescension",
    "Confidence",
    "Consideration", // ?
    "Contempt",
    "Courtesy",
    "Discretion",
    "Dignity",
    "Disposition",
    "Duty",
    "Error",
    "Esteem",
    "Expectation",
    "Familiarity",
    "Faith",
    "Favour",
    "Felicity",
    "Flattery",
    "Folly",
    "Fortitude",
    "Fortune", // ?
    "Freindship",
    "Gratitude",
    "Honour",
    "Hope",
    "Humour",
    "Inclination",
    "Indulgence",
    "Influence", // ?
    "Inspiration",
    "Judgement",
    "Love",
    "Merit",
    "Modesty",
    "Opportunity",
    "Partiality",
    "Persuasion",
    "Position",
    "Possession",
    "Predilection",
    "Prejudice",
    "Presumption",
    "Pretense",
    "Pride",
    "Principles",
    "Privilege", // ?
    "Promise", // ?
    "Prudence",
    "Regard",
    "Respect", // ?
    "Satisfaction",
    "Sense",
    "Sensibility",
    "Sentiment",
    "Sincerity",
    "Speculation",
    "Superiority",
    "Surprise", // ?
    "Temper",
    "Temperance",
    "Tranquillity",
    "Understanding",
    "Valour", // ?
    "Vanity",
    "Virtue",
    "Wit"
  ],
  "@CREATURE": [
    "Angels",
    "Demons",
    "Dragons",
    "Elves",
    "Fairies",
    "Genies",
    "Ghosts",
    "Giants",
    "Harpies",
    "Mermaids",
    "Pegasus",
    "Phoenixes",
    "Pixies",
    "the Loch Ness Monster",
    "Unicorns",
    "Vampires",
    "Werewolves",
    "Yetis",
    "Zombies"
  ],
  "@PLACE_FIRST_OR_SECOND_HALF_CAPITALIZED": [
    "Cliff", // ?
    "Chester",
    "Cross",
    "Don",
    "Grove",
    "Ham",
    "Water"
  ],
  "@PLACE_FIRST_OR_SECOND_HALF_LOWERCASE": [
    "cliff", // ?
    "chester",
    "cross",
    "don",
    "grove",
    "ham",
    "water"
  ],
  "@PLACE_FIRST_HALF":[
    "Ar",
    "Ash",
    "Ast",
    "Bering",
    "Ben",
    "Billing", // ?
    "Blake", // ?
    "Bol", // ?
    "Briar",
    "Bridge",
    "Bright", // ?
    "Brook", // ?
    "Cad",
    "Chat",
    "Cleve",
    "Cran",
    "Crimple",
    "Cumber",
    "Dun",
    "East",
    "Edge",
    "El", // ?
    "Engle",
    "Ens",
    "Evering",
    "Fern",
    "Fiddle", // ?
    "Grey", // ?
    "Hamp", // ?
    "Hart",
    "Haw",
    "Hazel",
    "Hid",
    "High",
    "Hog",
    "Hol", // ?
    "Holt",
    "Isling",
    "King",
    "Kirk",
    "Litch",
    "Long",
    "Low",
    "Lyd",
    "Mans",
    "Mil",
    "Middle",
    "New",
    "North",
    "Oak",
    "Over",
    "Rams",
    "Reed", // ?
    "Riddle",
    "Row", // ?
    "Sandi",
    "Saw",
    "Sher",
    "Somer", // ?
    "South",
    "Still",
    "West",
    "Whit",
    "Wilder",
    "Windle",
    "Winning",
    "Wind",
    "Worth"
  ],
  "@PLACE_SECOND_HALF":[
    "beck",
    "bourne",
    "borough",
    "brook",
    "bury",
    "by",
    "cote",
    "combe",
    "court", // ?
    "croft",
    "dale",
    "den",
    "end", // ?
    "endon", // ?
    "field",
    "ford",
    "gate",
    "hall",
    "hampton",
    "ington",
    "land",
    "leigh",
    "ley",
    "low",
    "market",
    "more",
    "ridge",
    "shaw",
    "sey",
    "shire",
    "stead",
    "ston",
    "thorpe",
    "ton",
    "well",
    "wich",
    "wick",
    "wood"
  ],
  "@PLACE_TYPE": [
    "@QUESTIONABLE_PLACE_TYPE",
    "Abbey",
    "Hall",
    "House",
    "Park"
  ],
  "@QUESTIONABLE_PLACE_TYPE": [
    "Court", //?
    "Estate", //?
    "Manor" //?
  ],
  "@PLACE_FULL_NAME": [
    "Anglesey",
    "Barlborough",
    "Ballard",
    "Biddulph",
    "Blickling",
    "Buttermere",
    "Chastleton",
    "Coombe",
    "Gloucester",
    "Greaves",
    "Hailes",
    "Hogwarts",
    "Ightham",
    "Moseley",
    "Tyringham",
    "Waddesdon",
    "Winkworth"
   ],
  "@FEMALE_NAME": [
    "Alice",
    "Alicia",
    "Anne",
    "Anna",
    "Annamaria",
    "Augusta",
    "Bridget",
    "Caroline",
    "Catharine",
    "Catherine",
    "Charlotte",
    "Clara",
    "Eleanor",
    "Elinor",
    "Elizabeth",
    "Emily",
    "Emma",
    "Flora",
    "Frances ",
    "Frederica",
    "Georgiana",
    "Hannah",
    "Harriet",
    "Henrietta",
    "Isabella",
    "Jane",
    "Janet",
    "Jemima",
    "Julia",
    "Kitty",
    "Lizzy",
    "Louisa",
    "Lucy",
    "Lydia",
    "Margaret",
    "Maria",
    "Marianne",
    "Martha",
    "Mary",
    "Patricia",
    "Penelope",
    "Rebecca",
    "Sarah",
    "Selina",
    "Sophia",
    "Susan"
  ],
  "@AGAIN": [
    "It is a truth universally acknowledged that I am in want of another title.",
    "I declare after all there is no enjoyment like book titles.",
    "My feelings will not be repressed. You must allow me to generate another title.",
    "The more I know of the world, the more I am convinced that I shall never have enough book titles.",
    "I am half agony, half hope. These titles pierce my soul.",
    "There is no charm equal to a new book title.",
    "For what do we live, but to make sport with book titles, and laugh at them in our turn?",
    "It is only a book title, or, in short, only some work in which the greatest powers of the mind are displayed!",
    "Life seems but a quick succession of computer-generated book titles.",
    "It is not everyone who has my passion for book titles.",
    "If I could but generate another book title, everything would become easy.",
    "This title is tolerable, but not handsome enough to tempt me.",
    "Follies and nonsense, whims and inconsistencies do divert me, I own, and I generate book titles whenever I can.",
    "Know your own happiness. You want nothing but another book title."
  ]
};

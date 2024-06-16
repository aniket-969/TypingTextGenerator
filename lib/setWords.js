const words = [
    "about",
    "above",
    "ability",
    "accept",
    "add",
    "after",
    "again",
    "air",
    "all",
    "almost",
    "along",
    "also",
    "always",
    "America",
    "an",
    "and",
    "animal",
    "another",
    "answer",
    "any",
    "are",
    "around",
    "as",
    "ask",
    "at",
    "away",
    "back",
    "be",
    "because",
    "believe",
    "been",
    "behavior",
    "before",
    "began",
    "begin",
    "being",
    "below",
    "between",
    "business",
    "big",
    "book",
    "both",
    "boy",
    "but",
    "by",
    "call",
    "came",
    "can",
    "campaign",
    "cancer",
    "candidate",
    "capital",
    "car",
    "carry",
    "change",
    "children",
    "city",
    "close",
    "come",
    "could",
    "country",
    "cut",
    "day",
    "did",
    "dark",
    "data",
    "daughter",
    "debate",
    "different",
    "do",
    "does",
    "don't",
    "decision",
    "defense",
    "degree",
    "Democrat",
    "democratic",
    "down",
    "each",
    "earth",
    "eat",
    "end",
    "economic",
    "economy",
    "edge",
    "education",
    "effect",
    "effort",
    "eight",
    "either",
    "election",
    "enough",
    "even",
    "every",
    "example",
    "eye",
    "face",
    "family",
    "far",
    "father",
    "feet",
    "federal",
    "feel",
    "feeling",
    "few",
    "field",
    "fight",
    "figure",
    "fill",
    "film",
    "final",
    "finally",
    "financial",
    "few",
    "find",
    "first",
    "follow",
    "food",
    "for",
    "form",
    "found",
    "four",
    "from",
    "get",
    "girl",
    "give",
    "go",
    "good",
    "got",
    "great",
    "green",
    "ground",
    "group",
    "grow",
    "growth",
    "guess",
    "gun",
    "guy",
    "group",
    "grow",
    "had",
    "hand",
    "hard",
    "has",
    "have",
    "he",
    "head",
    "hear",
    "help",
    "her",
    "herself",
    "high",
    "him",
    "himself",
    "his",
    "history",
    "hit",
    "hold",
    "hope",
    "hospital",
    "hot",
    "hotel",
    "hour",
    "here",
    "high",
    "him",
    "his",
    "home",
    "house",
    "how",
    "idea",
    "if",
    "important",
    "in",
    "Indian",
    "into",
    "is",
    "it",
    "its",
    "it's",
    "image",
    "imagine",
    "impact",
    "important",
    "improve",
    "in",
    "include",
    "including",
    "increase",
    "indeed",
    "indicate",
    "just",
    "keep",
    "kind",
    "key",
    "kid",
    "kill",
    "kitchen",
    "knowledge",
    "know",
    "land",
    "large",
    "last",
    "later",
    "learn",
    "leave",
    "left",
    "let",
    "letter",
    "life",
    "light",
    "like",
    "line",
    "list",
    "little",
    "live",
    "long",
    "look",
    "made",
    "make",
    "man",
    "many",
    "may",
    "me",
    "mean",
    "men",
    "might",
    "mile",
    "miss",
    "more",
    "most",
    "mother",
    "mountain",
    "move",
    "much",
    "must",
    "my",
    "name",
    "near",
    "need",
    "never",
    "new",
    "next",
    "night",
    "no",
    "not",
    "now",
    "number",
    "of",
    "off",
    "often",
    "oil",
    "old",
    "on",
    "once",
    "one",
    "only",
    "open",
    "or",
    "other",
    "our",
    "out",
    "over",
    "own",
    "page",
    "paper",
    "part",
    "people",
    "picture",
    "place",
    "plant",
    "play",
    "point",
    "put",
    "question",
    "quick",
    "quickly",
    "quite",
    "race",
    "radio",
    "raise",
    "range",
    "rate",
    "rather",
    "reach",
    "read",
    "ready",
    "real",
    "reality",
    "realize",
    "read",
    "really",
    "right",
    "river",
    "run",
    "said",
    "same",
    "saw",
    "say",
    "school",
    "sea",
    "second",
    "see",
    "seem",
    "sentence",
    "set",
    "she",
    "should",
    "show",
    "side",
    "small",
    "so",
    "some",
    "something",
    "sometimes",
    "song",
    "soon",
    "sound",
    "spell",
    "start",
    "state",
    "still",
    "stop",
    "story",
    "study",
    "such",
    "take",
    "talk",
    "tell",
    "than",
    "that",
    "the",
    "their",
    "them",
    "then",
    "there",
    "these",
    "they",
    "thing",
    "think",
    "this",
    "those",
    "thought",
    "three",
    "through",
    "time",
    "to",
    "together",
    "too",
    "took",
    "tree",
    "try",
    "turn",
    "two",
    "travel",
    "treat",
    "treatment",
    "tree",
    "trial",
    "trip",
    "trouble",
    "true",
    "truth",
    "try",
    "turn",
    "TV",
    "two",
    "type",
    "under",
    "understand",
    "under",
    "until",
    "up",
    "us",
    "use",
    "very",
    "walk",
    "want",
    "was",
    "watch",
    "water",
    "way",
    "we",
    "well",
    "went",
    "were",
    "what",
    "when",
    "where",
    "which",
    "while",
    "white",
    "who",
    "why",
    "will",
    "with",
    "without",
    "word",
    "work",
    "world",
    "would",
    "write",
    "year",
    "you",
    "young",
    "your",
  ];
  const commonWordsByLetter = {
    A: [
      "apple",
      "animal",
      "ability",
      "accept",
      "access",
      "action",
      "activity",
      "actual",
      "address",
      "admit",
      "adopt",
      "advance",
      "advantage",
      "advice",
      "affect",
      "afraid",
      "agency",
      "agree",
      "ahead",
      "allow",
      "almost",
      "alone",
      "already",
      "also",
      "always",
      "amazing",
      "amount",
      "analysis",
      "ancient",
      "anger",
    ],
    B: [
      "baby",
      "back",
      "bad",
      "balance",
      "ball",
      "bank",
      "bar",
      "base",
      "basic",
      "basis",
      "be",
      "bear",
      "beat",
      "beautiful",
      "because",
      "become",
      "bed",
      "before",
      "begin",
      "behind",
      "believe",
      "benefit",
      "best",
      "better",
      "between",
      "beyond",
      "big",
      "bill",
      "billion",
      "bit",
    ],
    C: [
      "call",
      "camera",
      "campaign",
      "can",
      "cancer",
      "candidate",
      "capital",
      "car",
      "card",
      "care",
      "career",
      "carry",
      "case",
      "catch",
      "cause",
      "cell",
      "center",
      "central",
      "century",
      "certain",
      "certainly",
      "chair",
      "challenge",
      "chance",
      "change",
      "character",
      "charge",
      "check",
      "child",
      "choice",
    ],
    D: [
      "daily",
      "damage",
      "danger",
      "dark",
      "data",
      "date",
      "daughter",
      "day",
      "dead",
      "deal",
      "debate",
      "debt",
      "decade",
      "decide",
      "decision",
      "deep",
      "defense",
      "degree",
      "demand",
      "democratic",
      "describe",
      "design",
      "despite",
      "detail",
      "determine",
      "develop",
      "development",
      "die",
      "difference",
      "different",
    ],
    E: [
      "each",
      "early",
      "east",
      "easy",
      "economic",
      "economy",
      "edge",
      "education",
      "effect",
      "effort",
      "eight",
      "either",
      "election",
      "employee",
      "end",
      "energy",
      "enjoy",
      "enough",
      "enter",
      "entire",
      "environment",
      "environmental",
      "especially",
      "establish",
      "even",
      "evening",
      "event",
      "ever",
      "every",
      "everybody",
    ],
    F: [
      "face",
      "fact",
      "factor",
      "fail",
      "fall",
      "family",
      "far",
      "fast",
      "father",
      "fear",
      "federal",
      "feel",
      "feeling",
      "few",
      "field",
      "fight",
      "figure",
      "fill",
      "film",
      "final",
      "finally",
      "financial",
      "find",
      "fine",
      "finger",
      "finish",
      "fire",
      "firm",
      "first",
      "fish",
    ],
    G: [
      "game",
      "garden",
      "gas",
      "general",
      "generation",
      "get",
      "girl",
      "give",
      "glass",
      "go",
      "goal",
      "good",
      "government",
      "great",
      "green",
      "ground",
      "group",
      "grow",
      "growth",
      "guess",
      "gun",
      "guy",
      "gym",
    ],
    H: [
      "hair",
      "half",
      "hall",
      "hand",
      "handle",
      "hang",
      "happen",
      "happy",
      "hard",
      "have",
      "he",
      "head",
      "health",
      "hear",
      "heart",
      "heat",
      "heavy",
      "help",
      "her",
      "here",
      "herself",
      "high",
      "him",
      "himself",
      "his",
      "history",
      "hit",
      "hold",
      "home",
      "hope",
      "habit",
      "hair",
      "half",
      "hand",
      "hang",
      "happen",
      "happy",
    ],
    I: [
      "ice",
      "idea",
      "identify",
      "if",
      "image",
      "imagine",
      "impact",
      "important",
      "improve",
      "in",
      "include",
      "including",
      "increase",
      "indeed",
      "individual",
      "industry",
      "information",
      "inside",
      "instead",
      "institution",
      "interest",
      "interesting",
      "international",
      "interview",
      "into",
      "investment",
      "involve",
      "issue",
      "it",
      "item",
    ],
    J: [
      "job",
      "join",
      "joint",
      "judge",
      "jump",
      "just",
      "justice",
      "juice",
      "july",
      "january",
      "journal",
      "journey",
      "joy",
      "joke",
      "jumping",
      "junior",
      "jury",
      "jungle",
      "jacket",
      "jewel",
      "jogging",
      "jelly",
      "jazz",
      "jealous",
      "jigsaw",
      "junction",
      "journalist",
      "junk",
      "jam",
      "jet",
    ],
    K: [
      "keep",
      "key",
      "kid",
      "kill",
      "kind",
      "king",
      "kitchen",
      "know",
      "knowledge",
      "knock",
      "knee",
      "knife",
      "kick",
      "kite",
      "keyboard",
      "kitten",
      "kettle",
      "knot",
      "kangaroo",
      "kingdom",
      "keen",
      "knit",
      "knight",
      "kayak",
      "kilogram",
      "kilometer",
      "kerchief",
      "kickoff",
      "keel",
      "kin",
    ],
    L: [
      "lack",
      "lady",
      "land",
      "language",
      "large",
      "last",
      "late",
      "later",
      "laugh",
      "law",
      "lawyer",
      "lay",
      "lead",
      "leader",
      "learn",
      "least",
      "leave",
      "left",
      "leg",
      "legal",
      "less",
      "let",
      "letter",
      "level",
      "lie",
      "life",
      "light",
      "like",
      "likely",
      "line",
    ],
    M: [
      "machine",
      "magazine",
      "main",
      "maintain",
      "major",
      "majority",
      "make",
      "man",
      "manage",
      "management",
      "manager",
      "many",
      "market",
      "marriage",
      "material",
      "matter",
      "may",
      "maybe",
      "me",
      "mean",
      "measure",
      "media",
      "medical",
      "meet",
      "meeting",
      "member",
      "memory",
      "mention",
      "message",
      "method",
    ],
    N: [
      "name",
      "nation",
      "national",
      "natural",
      "nature",
      "near",
      "nearly",
      "necessary",
      "need",
      "network",
      "never",
      "new",
      "news",
      "newspaper",
      "next",
      "nice",
      "night",
      "no",
      "none",
      "nor",
      "north",
      "not",
      "note",
      "nothing",
      "notice",
      "now",
      "number",
    ],
    O: [
      "object",
      "observe",
      "occur",
      "offer",
      "office",
      "officer",
      "official",
      "often",
      "oil",
      "ok",
      "old",
      "on",
      "once",
      "one",
      "only",
      "open",
      "operation",
      "opportunity",
      "option",
      "or",
      "order",
      "organization",
      "other",
      "our",
      "out",
      "outside",
      "over",
      "own",
      "owner",
    ],
    P: [
      "page",
      "pain",
      "paint",
      "paper",
      "parent",
      "part",
      "participant",
      "particular",
      "particularly",
      "partner",
      "party",
      "pass",
      "past",
      "patient",
      "pattern",
      "pay",
      "peace",
      "people",
      "per",
      "perform",
      "performance",
      "perhaps",
      "period",
      "person",
      "personal",
      "phone",
      "physical",
      "pick",
      "picture",
      "piece",
    ],
    Q: [
      "quality",
      "question",
      "quick",
      "quiet",
      "quite",
      "quote",
      "quarter",
      "queen",
      "questionnaire",
      "queue",
      "quit",
      "quilt",
      "quota",
      "quiz",
      "quote",
      "quaint",
      "quake",
      "qualification",
      "qualify",
      "quantify",
      "quantity",
      "quart",
      "quartz",
      "quench",
      "query",
      "quest",
      "quicksand",
      "quickness",
      "quietness",
      "quill",
    ],
    R: [
      "race",
      "radio",
      "rain",
      "raise",
      "range",
      "rate",
      "rather",
      "reach",
      "read",
      "ready",
      "real",
      "reality",
      "realize",
      "really",
      "reason",
      "receive",
      "recent",
      "recently",
      "recognize",
      "record",
      "red",
      "reduce",
      "reflect",
      "region",
      "relate",
      "relationship",
      "religious",
      "remain",
      "remember",
      "remove",
    ],
    S: [
      "safe",
      "same",
      "save",
      "say",
      "scene",
      "school",
      "science",
      "scientist",
      "score",
      "sea",
      "season",
      "seat",
      "second",
      "section",
      "security",
      "see",
      "seek",
      "seem",
      "sell",
      "send",
      "senior",
      "sense",
      "series",
      "serious",
      "serve",
      "service",
      "set",
      "seven",
      "several",
      "sex",
    ],
    T: [
      "table",
      "take",
      "talk",
      "task",
      "tax",
      "teach",
      "teacher",
      "team",
      "technology",
      "television",
      "tell",
      "ten",
      "tend",
      "term",
      "test",
      "than",
      "thank",
      "that",
      "the",
    ],
    U: [
      "under",
      "understand",
      "unit",
      "until",
      "up",
      "upon",
      "us",
      "use",
      "usual",
      "usually",
      "ultimate",
      "umbrella",
      "uncle",
      "uncommon",
      "underground",
      "uniform",
      "unique",
      "unite",
      "universal",
      "unknown",
      "university",
      "unlike",
      "unlikely",
      "unnecessary",
      "unusual",
      "update",
      "upgrade",
      "upset",
      "urban",
      "urgent",
    ],
    V: [
      "vacation",
      "valid",
      "valuable",
      "value",
      "variety",
      "various",
      "vast",
      "vegetable",
      "vehicle",
      "venture",
      "version",
      "very",
      "vessel",
      "veteran",
      "via",
      "victim",
      "victory",
      "video",
      "view",
      "village",
      "violence",
      "virtually",
      "virtue",
      "virus",
      "visible",
      "vision",
      "visit",
      "visitor",
      "visual",
      "vital",
    ],
    W: [
      "wait",
      "walk",
      "wall",
      "want",
      "war",
      "warm",
      "warn",
      "was",
      "wash",
      "watch",
      "water",
      "wave",
      "way",
      "we",
      "wealth",
      "wear",
      "weather",
      "web",
      "website",
      "week",
      "weekend",
      "weight",
      "welcome",
      "well",
      "west",
      "western",
      "wet",
      "what",
      "whatever",
      "wheel",
    ],
    X: [
      "x-ray",
      "xenon",
      "xerox",
      "xylophone",
      "xenophobia",
      "xylem",
      "xanthan",
      "xenogenesis",
      "xenograft",
      "xenolith",
      "xenon",
      "xerophyte",
      "xeroderma",
      "xerophilous",
      "xenophobic",
      "xiphoid",
      "xenobiotic",
      "xenogamy",
      "xeroxed",
      "xenogeny",
      "xenoplastic",
      "xenotransplant",
      "xerotic",
      "xeroxes",
      "xenopus",
      "xenotime",
      "xiphosura",
      "xeriscape",
      "xylophone",
      "xylophonist",
    ],
    Y: [
      "yard",
      "year",
      "yell",
      "yellow",
      "yes",
      "yesterday",
      "yet",
      "yield",
      "you",
      "young",
      "your",
      "yours",
      "yourself",
      "youth",
      "yearly",
      "yawn",
      "yogurt",
      "yacht",
      "yoga",
      "yoke",
      "yolk",
      "yucca",
      "yummy",
      "yearn",
      "yammer",
      "yonder",
      "yodel",
      "yuppie",
      "yearbook",
      "yeast",
    ],
    Z: [
      "zero",
      "zebra",
      "zone",
      "zoo",
      "zoom",
      "zeal",
      "zealous",
      "zenith",
      "zest",
      "zinc",
      "zip",
      "zipper",
      "zodiac",
      "zombie",
      "zonal",
      "zealot",
      "zigzag",
      "zillion",
      "zappy",
      "zany",
      "zap",
      "zephyr",
      "zircon",
      "zodiacal",
      "zoology",
      "zoologist",
      "zooming",
      "zoological",
      "zucchini",
      "zygote",
    ],
  };
  const specialChar = "!@#$%^&*()-+=[]{}|;:,.<>?/`";
  const alhabets = "abcdefghijklmnopqrstuvwxyz";
  
  class SetWords {
    constructor() {
      this.typingtext = "";
    }
  
    removeConsecutiveSpaces() {
      this.typingtext = this.typingtext.replace(/ {2,}/g, " ");
    }
  
    addWords(length) {
      const shuffledWords = this.shuffleArray(words);
      // console.log(length);
      const selectedWords = shuffledWords.slice(0, length - 1);
      this.typingtext += selectedWords.join(" ");
      // console.log("After words",this.typingtext);
    }
  
    addNumbers(length) {
    //   console.log(length);
      for (let i = 0; i < length; i++) {
        this.typingtext += Math.floor(Math.random() * 10) + " ";
      }
      //   console.log('after numbers',this.typingtext);
    }
  
    addCharacters(length) {
      const specialCharLength = specialChar.length;
      for (let i = 0; i < length; i++) {
        this.typingtext +=
          specialChar.charAt(Math.floor(Math.random() * specialCharLength)) + " ";
      }
      //   console.log('after chara',this.typingtext);
    }
  
    addAlphabets(length) {
    //   console.log(length);
      for (let i = 0; i < length; i++) {
        this.typingtext += alhabets.charAt(Math.floor(Math.random() * 26)) + " ";
      }
      //   console.log("after alphabets",this.typingtext)
    }
  
    shuffleArray(array) {
      // Fisher-Yates shuffle algorithm
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    appendMajorityElement(element, count) {
      count = Math.min(500, count);
      // console.log(count);
      // console.log(element);
      
      const isInitialElementUppercase = /[A-Z]/.test(element);
      this.typingtext = " ";
      let addedCount = 0;
      // console.log(element);
      const isAlphabet = /^[a-zA-Z]$/.test(element);
  
      element = element.toLowerCase();
  
      if (isAlphabet) {
        const commonWordsStartingWithElement =
          commonWordsByLetter[element.toUpperCase()];
        // console.log(commonWordsStartingWithElement);
  
        for (
          let i = 0;
          i < count && i < commonWordsStartingWithElement.length;
          i++
        ) {
          this.typingtext += commonWordsStartingWithElement[i] + " ";
          addedCount++;
        }
        if (addedCount < count) {
          const additionalWords = words.filter((word) => word.includes(element));
          for (let i = 0; i < additionalWords.length && addedCount < count; i++) {
            this.typingtext += additionalWords[i] + " ";
            addedCount++;
          }
        }
  
        while (addedCount < count) {
          let newWord = element.repeat(Math.floor(Math.random() * 3) + 1); // Element repeated 1, 2, or 3 times
  
          // Add random alphabets (maximum 3) to the word
          const randomAlphabetsCount = Math.min(Math.floor(Math.random() * 4), 3);
          for (let j = 0; j < randomAlphabetsCount; j++) {
            newWord += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Random lowercase alphabet
          }
  
          this.typingtext += newWord + " ";
          addedCount++;
        }
      } else {
        while (addedCount < count) {
          let baseWord;
          if (Math.random() < 0.5) {
            // Pick a random word from the commonWordsByLetter array
            const randomLetter = String.fromCharCode(
              Math.floor(Math.random() * 26) + 65
            ); // Random uppercase letter
            const wordsList = commonWordsByLetter[randomLetter];
            baseWord = wordsList[Math.floor(Math.random() * wordsList.length)];
          } else {
            // Pick a random word from the words array
            baseWord = words[Math.floor(Math.random() * words.length)];
          }
  
          // Insert the element into the baseWord
          const insertPosition = Math.floor(
            Math.random() * (baseWord.length + 1)
          );
          const newWord =
            baseWord.slice(0, insertPosition) +
            element +
            baseWord.slice(insertPosition);
  
          this.typingtext += newWord + " ";
          addedCount++;
        }
      }
  
      const wordsArray = this.typingtext.split(" ").filter((word) => word.trim());
      const shuffledWordsArray = this.shuffleArray(wordsArray);
      this.typingtext = shuffledWordsArray.join(" ");
      if (isInitialElementUppercase) {
        const regex = new RegExp(element, "g");
        this.typingtext = this.typingtext.replace(regex, element.toUpperCase());
        this.removeConsecutiveSpaces();
      this.typingtext = this.typingtext.trim();
      
      }
    }
  
    appendFromArray(array) {
      if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
      }
  
      array.forEach((element) => {
        this.typingtext += element.toString() + " ";
      });
      const wordsArray = this.typingtext.split(" ");
  
      const shuffledWordsArray = this.shuffleArray(wordsArray);
  
      this.typingtext = shuffledWordsArray.join(" ");
      this.removeConsecutiveSpaces();
      this.typingtext = this.typingtext.trim();
      
    }
  
    generateTypingText(isNum, isAlpha, isCharacters, isWords, length) {
      this.typingtext = "";
      if (
        typeof isNum !== "boolean" ||
        typeof isAlpha !== "boolean" ||
        typeof isCharacters !== "boolean" ||
        typeof isWords !== "boolean"
      ) {
        throw new Error(
          "Invalid input type. All parameters isNum, isAlpha, isCharacters, isWords must be boolean."
        );
      }
      if (!Number.isInteger(length) || length <= 0) {
        throw new Error(
          "Invalid length. Length must be a natural number positive integer"
        );
      }
  
      if (length > 400) {
        length = 400;
      }
  
      const trueCount = [isNum, isAlpha, isCharacters, isWords].filter(
        (val) => val
      ).length;
  
      const divisor = Math.floor(length / trueCount) + 1;
  
      if (isNum && isCharacters && isWords) {
        
        for (let i = 0; i < length; i++) {
          const word = words[Math.floor(Math.random() * words.length)];
          const randomNumber = Math.floor(Math.random() * 10);
          const randomChar = specialChar.charAt(
            Math.floor(Math.random() * specialChar.length)
          );
          const numberAndChar = `${randomNumber}${randomChar}`;
          this.typingtext += `${word}${numberAndChar} `;
        }
      } else if ((isNum && isWords) || (isCharacters && isWords)) {
       
        for (let i = 0; i < length; i++) {
          const word = words[Math.floor(Math.random() * words.length)];
          let attachment = "";
          if (isNum) {
            const randomNumber = Math.floor(Math.random() * 10);
            attachment += randomNumber;
          }
          if (isCharacters) {
            const randomChar = specialChar.charAt(
              Math.floor(Math.random() * specialChar.length)
            );
            attachment += randomChar;
          }
          this.typingtext += `${word}${attachment} `;
        }
      } else {
        if (isNum) {
          this.addNumbers(divisor);
        }
  
        if (isAlpha) {
          this.addAlphabets(divisor);
        }
        if (isWords) {
          this.addWords(divisor);
        }
        if (isCharacters) {
          this.addCharacters(divisor);
        }
      }
  
      const wordsArray = this.typingtext.split(" ");
  
      const shuffledWordsArray = this.shuffleArray(wordsArray);
  
      this.typingtext = shuffledWordsArray.join(" ");
      this.removeConsecutiveSpaces();
      this.typingtext = this.typingtext.trim();
      
    }
  }
  
  export default SetWords;
  
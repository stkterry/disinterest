const Chance = require("chance");
chance = new Chance();

const TAGS = [
  "traffic",
  "math",
  "cleaningbathroom",
  "doingdishes",
  "takingouttrash",
  "dmv",
  "monopoly",
  "knitting",
  "gardening",
  "pottery",
  "books",
  "minecraft",
  "golf",
  "cricket",
  "curling",
  "chess",
  "onhold",
  "slowwifi",
  "airports",
  "crosswords",
  "sudoku",
  "puzzles",
  "yoga",
  "boardgames",
  "birding",
  "baking",
  "astronomy",
  "baseball",
  "sewing",
  "fishing",
  "programming"
]

const FREETAGS = [
  "boring",
  "snorefest",
  "lame",
  "imdead",
  "RIP",
  "sleepytime",
  "boredtotears",
  "pleasenomore",
  "thisisboring",
  "cantgetworse",
  "bored",
  "naptime",
  "alone",
  "unoriginal",
  "firstworldproblems",
  "struggleisreal",
  "susanalbumparty"
]

const TOPICS = {
  traffic: {
    titles: [
      "Stuck again",
      "What a bore",
      "This drive is killing me",
      "Traffic FTW",
      "Get off my ass",
      "Blinker is still on",
      "Why god?",
      "Kill me",
      "Couldn't get worse",
    ],
    urls: [
      "https://www.wsbtv.com/traffic",
      "https://www.history.com/topics/inventions/automobiles",
      "https://www.nationwide.com/driving-safety-tips.jsp",
      "https://en.wikipedia.org/wiki/Traffic_congestion",
      "https://www.smartmotorist.com/traffic-jams",
      "http://nautil.us/issue/71/flow/why-a-traffic-flow-suddenly-turns-into-a-traffic-jam",
      "https://www.bloomberg.com/opinion/articles/2019-06-06/traffic-jams-are-a-sign-of-income-inequality",
      "https://www.adweek.com/brand-marketing/burger-king-wants-to-deliver-whoppers-right-to-your-car-during-nightmarish-traffic-jams/",
    ],
  },
  math : {
    titles: [
      "This Problem",
      "Ugh, math is lame",
      "Calculus puts me to sleep",
      "Check out this problem",
      "Why do I need Alegbra again?",
      "Complex Analysis",
      "Algebra!",
      "Topologic Manifolds",
      "Time-Invariant Differentials",
      "Knot Theory",
      "String Theory",
      "Math Methods",
      "Calculus",
      "Number Theory",
      "Combinatronics"
    ],
    urls: [
      "http://www.math.com/",
      "https://www.mathsisfun.com/calculus/differential-equations.html",
      "https://en.wikipedia.org/wiki/Mathematics",
      "https://www.mathway.com/Algebra",
      "http://www.corestandards.org/Math/",
      "https://www.popbuzz.com/internet/viral/8-2-math-sum-equation-tweet/",
      "http://www.bbc.com/future/story/20190411-the-violent-attack-that-turned-a-man-into-a-maths-genius",
      "https://mathematics.stanford.edu/"
    ]
  },
  cleaningbathroom: {
    titles: [
      "Cleaning Tips",
      "How to REALLY clean a toilet",
      "Bathroom News",
      "Scrubbing Sinks",
      "Tubs",
      "Bathroom Tile Mold",
      "Bath Mats",
      "Mopping Floors"
    ],
    urls: [
      "https://www.realsimple.com/home-organizing/cleaning/cleaning-bathroom/how-clean-bathroom",
      "https://www.mollymaid.com/practically-spotless/2013/january/10-steps-on-how-to-clean-a-bathroom-fast-and-eff/",
      "https://housewifehowtos.com/clean/tips-to-deep-clean-a-bathroom/",
      "https://www.wikihow.life/Clean-a-Bathroom",
      "https://www.diynetwork.com/how-to/maintenance-and-repair/cleaning/the-most-efficient-easiest-way-to-clean-your-bathroom",
      "https://www.familyhandyman.com/cleaning/how-to-clean-a-bathroom/"
    ]
  },
  doingdishes: {
    titles: [
      "Shiny Plates",
      "Scrubbing Forks",
      "Polishing Glasware",
      "Tupperware Stains",
      "Doing Dishes Faster",
      "Best Way to Clean a Thing",
      "Soap Bubbles",
      "Best Dish Soaps",
      "Cleaning is Fun",
      "Why god no more dirty spoons",
      "Scrubbing Plates",
      "The Joy of Doing Dishes"
    ],
    urls: [
      "https://www.cleaninginstitute.org/cleaning-tips/dishes/hand-dishwashing-made-easy",
      "https://www.theatlantic.com/family/archive/2018/04/doing-dishes-is-the-worst/557087/",
      "https://www.thekitchn.com/12-ways-to-make-washing-dishes-better-faster-and-more-fun-237657",
      "https://giphy.com/explore/washing-dishes",
      "https://www.littlethings.com/hand-wash-dishes/",
      "https://www.buzzfeed.com/emofly/37-hacks-to-make-dish-washing-easier"

    ]
  }
}

randFromArray = arr => arr[Math.floor(Math.random() * arr.length)];

randomPin = () => {
  let key = randFromArray(Object.keys(TOPICS));
  let topic = TOPICS[key];
  
  return {
    title: randFromArray(topic.titles),
    url: randFromArray(topic.urls),
    tags: [key, randFromArray(FREETAGS)],
    description: chance.paragraph()
  }
};

randNIntsInMax = (num, max) => {
  let arr = [...Array(max).keys()];
  arr = arr.sort(_ => Math.random() - 0.5);
  return arr.slice(0, num);
}

randFromInterval = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min);


module.exports = {
  TOPICS: TOPICS,
  TAGS: TAGS,
  FREETAGS: FREETAGS,
  randomPin: randomPin,
  randFromInterval: randFromInterval,
  randFromArray: randFromArray,
  randNIntsInMax: randNIntsInMax
}
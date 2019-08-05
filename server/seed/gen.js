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
  "readingbooks",
  "onhold",
  "slowwifi",
  "airports",
  "crosswordpuzzles",
  "sudoku",
  "puzzles",
  "yoga",
  "boardgames",
  "birding",
  "bakingbread",
  "astronomy",
  "baseball",
  "sewing",
  "fishing",
  "baseballcards"
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

    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Traffic1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Traffic2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Traffic3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Traffic4.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Traffic5.jpg"
    ]
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
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Math1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Math2.png",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Math3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Math4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Math5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Math6.jpg"
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
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cleaning_Bathroom_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cleaning_Bathroom_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cleaning_Bathroom_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cleaning_Bathroom_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cleaning_Bathroom_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cleaning_Bathroom_6.jpg"
    ]
  },
  doingdishes: {
    titles: [
      "Shiny Plates",
      "Scrubbing Forks",
      "Polishing Glassware",
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

    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Doing_Dishes_1.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Doing_Dishes_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Doing_Dishes_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Doing_Dishes_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Doing_Dishes_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Doing_Dishes_6.jpg"
    ]
  },
  takingouttrash: {
    titles: [
      "This Stinks",
      "Lord of Hordes",
      "Garbage Guys",
      "Taking Out the Trash",
      "Trash Talk",
      "Throw it Out",
      "Throwing Things Away",
      "The Art of Trash",
      "Trash Monsters",
      "All About Trash",
      "Trash Tips"
    ],
    urls: [
      "https://www.wikihow.com/Take-out-the-Trash",
      "https://tiphero.com/trash-tricks",
      "https://giphy.com/explore/taking-out-the-trash",
      "https://www.aljazeera.com/ajimpact/trash-space-190716213037055.html",
      "https://www.imdb.com/title/tt1921149/",
      "http://robgreenfield.tv/trashme/",
      "https://www.fastcompany.com/90382101/this-startup-just-raised-33-million-to-vaporize-trash",
      "https://www.wsj.com/articles/we-are-swamped-how-a-global-trash-glut-hurt-a-25-billion-industry-11564343534",
      "https://bgr.com/2019/07/29/iss-garbage-disposal-space-station/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Taking_Out_Trash_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Taking_Out_Trash_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Taking_Out_Trash_3.png",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Taking_Out_Trash_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Taking_Out_Trash_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Taking_Out_Trash_6.jpg"
    ]
  },
  dmv: {
    titles: [
      "DMV Hell",
      "I'd Rather Be Dead",
      "DMV Hours",
      "DMV Deloreans",
      "Politics of the DMV",
      "Dept of Motor Vehicles",
      "DMV Tricks"
    ],
    urls: [
      "https://jalopnik.com/here-are-the-some-of-the-most-bizarre-dmv-horror-storie-1711970247",
      "https://www.governing.com/topics/transportation-infrastructure/Whos-Afraid-of-The-DMV.html",
      "https://www.latimes.com/travel/la-tr-travel-real-id-fix-from-dmv-20190522-story.html",
      "https://www.rd.com/advice/how-to-avoid-the-dmv-line/",
      "https://grownandflown.com/hate-dmv-instructor-failed-daughter/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_In_Line_At_DMV_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_In_Line_At_DMV_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_In_Line_At_DMV_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_In_Line_At_DMV_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_In_Line_At_DMV_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_In_Line_At_DMV_6.jpg"
    ]
  },
  monopoly: {
    titles: [
      "Family Night Monopoly",
      "Best Way to End Relationships", 
      "The Game Everyone Hates",
      "Monopoly Money",
      "Monopoly Board",
      "Top 10 Unusual Gift Ideas for Monopoly Fans",
      "Rich Kids Monopoly",
      "Go to Jail!"
    ], 
    urls: [
      "https://exviver.com/product/monopoly-wall-art-monopoly-art-monopoly-print-monopoly-artwork-canvas-wall-art-hustle-art-monopoly-gift-monopoly-card/",
      "https://diygamer.maxi.pw/diy-gamer/ultimate-monopoly/",
      "https://www.fun.com/monopoly-scooby-doo-board-game.html",
      "https://theverybesttop10.com/gift-ideas-for-monopoly-fans/",
      "https://www.shopdisney.com/disney-theme-park-edition-iii-monopoly-game-1277089",
      "http://clipart-library.com/monopoly-cliparts.html",
    ],
  imgs: [
    "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Monopoly/Monopoly_1.jpg",
    "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Monopoly/Monopoly_2.jpg",
    "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Monopoly/Monopoly_3.jpg",
    "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Monopoly/Monopoly_4.jpg",
    "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Monopoly/Monopoly_5.jpg",
    "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Monopoly/Monopoly_6.jpg"
  ]
  },
  knitting: {
    titles: [
      "How to Knit Herringbone",
      "Chunky Knit Blankets",
      "How to knit a bunny rabbit",
      "Socks",
      "The Downtown Cardigan",
      "Knitting Bathmats",
      "How to Knit the Seed Stich Pattern",
      "Crochet Patterns",
      "Knit a Hat"
    ],
    urls: [
      "https://www.mamainastitch.com/how-to-knit-the-horizontal-herringbone-stitch/",
      "https://www.frombritainwithlove.com/how-to-knit-an-easter-bunny-free-pattern-and-step-by-step-tutorial/",
      "http://www.apronbasket.com/archives/2761/38",
      "https://www.allaboutami.com/the-downtown-cardigan/",
      "http://craftevangelist.ca/blog/2019/03/10/spring-patterns/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=642521212_24592098_248493",
      "https://startknitting.org/bag-purse/market-bag-free-knitting-pattern/",
      "https://www.littleyellowwheelbarrow.com/make-chunky-knit-pillow/",
      "https://www.etsy.com/uk/listing/678843679/knitting-pattern-little-duckling?ref=shop_home_active_5&crt=1",
      "https://www.studioknitsf.com/diagonal-basket-weave-knit-stitch-pattern-with-braided-woven-cable-design/",
      "https://patterncenter.com/point-of-flowers-knitting-free/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Knitting/Knitting_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Knitting/Knitting_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Knitting/Knitting_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Knitting/Knitting_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Knitting/Knitting_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Knitting/Knitting_6.jpeg"
    ]
  },
  gardening: {
    titles: [
      "Put these 8 Things In Your Tomato Planting Hole",
      "Solar Gardens",
      "Vegetables in the Shade",
      "How to Grow Blueberries",
      "25 Fruits",
      "Free Planters",
      "Vegetable Schedule",
      "White Vinegar in ur Gardens",
      "Grow Stuff",
      "Yay Plants",
      "Veggie Luver",
      "Gardeners Rule!"
    ],
    urls: [
      "https://plantinstructions.com/vegetables/how-to-grow-vanilla-beans-vanilla-bean-plant-info/",
      "https://www.naturallivingideas.com/cut-and-come-again-veggies/",
      "https://homehacks.co/40-diy-cinder-block-projects/",
      "https://homehacks.co/uses-for-white-vinegar-in-the-garden/?utm_source=divas&utm_medium=pinterest&utm_campaign=gardening",
      "https://audreyslittlefarm.com/vegetable-garden-planting-schedule/",
      "https://www.onehundreddollarsamonth.com/8-places-find-free-gardening-containers/",
      "https://oldworldgardenfarms.com/2017/06/15/prune-tomatoes-peppers/",
      "https://urbansurvivalsite.com/fruits-and-veggies-you-can-grow-in-buckets/",
      "http://gardenng.com/how-to-grow-blueberries/",
      "https://www.healthygreensavvy.com/vegetables-that-grow-in-shade/",
      "https://homegardenist.com/put-these-8-things-in-your-tomato-planting-hole/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Gardening/Gardening_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Gardening/Gardening_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Gardening/Gardening_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Gardening/Gardening_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Gardening/Gardening_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Gardening/Gardening_6.jpg"
    ]
  },
  minecraft: {
    titles: [
      "Made A Thing",
      "How to make Minecraft Things",
      "Oh look more blocky crap",
      "Blocky Bridge",
      "Retro Garbage Graphics - Minecraft",
      "Do YoU pLaY mInEcRaFt?!?!",
      "Oh Look Minecraft",
      "Minecraft Art",
      "Chisels and Bits",
      "Minecraft is Kewl",
      "Yet another thing",
      "Minecraft thing",
      "Thing Thing Thing - Minecraft"
    ], 
    urls: [
      "https://dekoration2019.tudoaqui2019.com/dekoration/minecraft-fare-un-ponte-3/",
      "http://gaming.superfleek.com/wookieelocks/",
      "https://www.youtube.com/watch?v=oqb59XNk0Wg",
      "https://homemydesign.com/2018/25-most-adorable-room-ideas-with-video-game-theme/",
      "https://www.grabcraft.com/minecraft/adacia-greenhouse/farm-buildings#general",
      "https://diygamer.maxi.pw/diy-gamer/image-result-for-minecraft-survival-houses/",
      "https://www.planetminecraft.com/",
      "https://gifteee.com/products/trends-international-wall-poster-minecraft-world-22-375-x-34",
      "https://www.reddit.com/r/Minecraft/comments/9zvab6/the_chickenator_9000_a_selfreloading_aesthetic/?st=JOVR5R4T&sh=f9113f7d",
      "https://imgur.com/a/0ITF60c"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Minecraft/Minecraft_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Minecraft/Minecraft_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Minecraft/Minecraft_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Minecraft/Minecraft_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Minecraft/Minecraft_5.png",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Minecraft/Minecraft_6.jpg"
    ]
  },
  golf: {
    titles: [
      "Hitting Balls",
      "Smacking ur balls - Golf",
      "Cleaning Balls",
      "Golf Tees",
      "6 Ways to Improve Your Golf Game",
      "Keeping Your Balls Clean",
      "Polishing Your Balls to Improve Your Game",
      "How to Swing",
      "Watching Grass Grow",
      "The Device will up your Golf Skills"
    ],
    urls: [
      "https://nickfoygolf.com/driving-range-practice-routine-golf-swing-drills/",
      "https://golfersauthority.com/how-to-clean-golf-clubs/",
      "https://practical-golf.com/golf-drills/",
      "https://www.wayfair.com/Suncast--Suncast-Golf-Organizer-in-Black-GO3216D-L3255-K~XA1451.html?refid=PINTO49-XA1451",
      "https://www.beginnergolfswingtips.com/how-to-stop-topping-your-iron-shots/",
      "https://www.underpargoals.com/golf-club-names-and-uses/",
      "https://www.golfdigest.com/story/the-unlikely-flotation-device-that-will-fix-your-swing-plane?mbid=social_facebook",
      "http://www.golfwrx.com/391696/learning-golf-from-the-best-instructors-on-twitter/#21331",
      "https://golfersauthority.com/how-to-hit-a-draw/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Golf/Golf_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Golf/Golf_2.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Golf/Golf_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Golf/Golf_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Golf/Golf_5.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Golf/Golf_6.jpg"
    ]
  },
  cricket: {
    titles: [
      "Some Cricket Guy",
      "Some Other Cricket Guy",
      "Oh Lookaway, it's a Cricket Match",
      "Even Cricket Fans Admit Cricket Is Boring",
      "Cricket World News",
      "A Game of Cricket",
      "Even Our Game's Name Puts people to sleep",
      "Shouldn't have named a sport after a bug",
      "Cricket Bats",
      "Cricket Balls"
    ],
    urls: [
      "http://www.zimbio.com/photos/Jos+Buttler/England+Pakistan+Net+Sessions/uoE6LqSLrYL",
      "https://www.theguardian.com/sport/gallery/2009/nov/16/sachin-tendulkar-career-highlights#img-1",
      "https://www.buzzfeed.com/shayanroy/the-gentlemans-game",
      "https://www.cricketworld.com/highest-paid-cricketers-and-history-of-the-cricket-bat/39134.htm",,
      "http://www.freepdfbook.com/ab-the-autobiography/",
      "https://www.facebook.com/MyCricketTrolls/photos/a.581597615308366.1073741828.581587018642759/1210162119118576/?type=3",      
      "https://www.sprinklr.com/",
      "https://fineartamerica.com/featured/vintage-cricket-ryan-jorgensen.html?product=art-print",
      "https://www.behance.net/gallery/15932135/Rules-of-Cricket",
      "https://www.buzzfeed.com/gavon/24-awesome-photos-of-maasai-warriors-playing-crick?utm_term=.se04x8QLA#.pbVmPpxQe",
      "https://www.msn.com/en-za/sport/cricket/cricket-world-cup-2015-players-to-watch/ss-AA9iuI3"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cricket/Cricket_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cricket/Cricket_2.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cricket/Cricket_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cricket/Cricket_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cricket/Cricket_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Cricket/Cricket_6.jpg"
    ]
  },
  curling: {
    titles: [
      "Do You Even Curl Bro?",
      "Curling Bros",
      "The Science Of Curling",
      "A Country So Boring That They Slide Stones On Ice",
      "Oh Look, Curling",
      "Why is this A Sport?",
      "Curling Legends",
      "13 Reasons Why Curling Will Make You Sleepy",
      "Will you sweep with me?",
      "History of Curling"
    ],
    urls: [
      "https://www.csmonitor.com/Commentary/Opinion/2010/0225/The-perfect-Winter-Olympics-sport-curling-really",
      "http://teamjenniferjones.com/",
      "https://www.zazzle.com/mens_curling_winter_sports_stickman_and_house_coffee_mug-168634613239926723",
      "http://www.worldcurling.org/history-of-curling",
      "https://www.turbosquid.com/3d-models/curling-broom-stone-3d-1236453?referral=3d_molier-International",
      "http://www.irish-curling.org/about-curling/",
      "https://imgur.com/IaolLPt",
      "https://www.zazzle.com/will_you_sweep_with_me_sport_of_curling_coffee_mug-168783401665228073",
      "https://designbundles.net/tarareeddesigns/161147-curling-legend-curling-sport-svg-files-for-crafter/rel=aWYBuA",
      "http://www.aveleyman.com/TVEpisode.aspx?FilmID=696&Episode=20100214",
      "http://teamhoman.com/photo-gallery/#itemId=543f3ecce4b09468ab222999",
      "https://ftw.usatoday.com/2014/02/curling-sochi-olympics-why-is-curling-a-sport",
      "https://adventuremomblog.com/13-reasons-need-try-curling-now/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Curling/Curling_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Curling/Curling_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Curling/Curling_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Curling/Curling_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Curling/Curling_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Curling/Curling_6.jpg"
    ]
  },
  chess: {
    titles: [
      "The Dark Knight Rises",
      "Check and mate",
      "The horse looking thing moves in an L shape",
      "Keep calm and play chess",
      "Game of chess",
      "Even more boring than baseball, can you imagine?",
      "Boooooooooooooooooring",
      "People actually play this for a living",
      "Us common people just wouldn't understand",
      "When you intentionally feed so the game is over quicker"
    ],
    urls: [
      "https://chesssmarts.com/best-way-for-beginners-to-learn-chess/",
      "https://chesstoppers.com/shop/chess-artwork/chess-board-pieces-variant-1/",
      "https://project.theownerbuildernetwork.co/2018/10/16/diy-garden-chess-board/#!fancybox/6cc0ccf6/Outdoor-Chess-Board-06.jpg",
      "http://www.home-designing.com/2014/04/30-unique-home-chess-sets",
      "https://www.homedepot.com/p/Benzara-Handmade-Magnetic-Rosewood-Folding-Board-Chess-Set-with-Storage-BM174943/307563756?cm_mmc=socialmedia%7CP%7CFY18%7CBase%7CPIN_Shopping%7CD59%7C59-6_HOME_DECOR&pp=0&epik=dj0yJnU9MjF0TUtNQTdyWDljSXVxMDlSeURsY1NzOFJIN1B5TlQmbj1rYjYwQXdSVHNKNENyVFdvN0UxZWt3JnQ9QUFBQUFGMUhnSHc",
      "https://ronbeckdesigns.tumblr.com/post/178128330169/chess-set-bj%C3%B6rn-k%C3%B6hler-via-98-pinterest",
      "https://www.lookwerelearning.com/online-chess-lessons-for-kids/",

    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Chess/Chess_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Chess/Chess_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Chess/Chess_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Chess/Chess_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Chess/Chess_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Chess/Chess_6.jpeg"
    ]
  },
  pottery: {
    titles: [
      "Get your hands messy for a high price!",
      "Looks easy, is hard",
      "Pottery Pro",
      "Pottery Legends",
      "Make your very own lop-sided pottery",
      "Guaranteed fun for the first 2 seconds",
      "Pffffffffffffft pottery",
      "Look ma no hands! Oh wait...",
      "PeOpLe oN InStAgRaM DoN't cArE AbOuT YoUr dAmN CuP, KaReN"
    ],
    urls: [
      "https://www.shihoriobata.com/blog/ceramic-ideas/",
      "https://www.wayfair.com/Arthur-Court--Western-Cowboy-Hat-2-Piece-Salt-and-Pepper-Set-103930-L640-K~ARCT1561.html?refid=PINSHOP&pin_campaign=626740698772&pin_adgroup=2680063876128&pin_productgroup=4260607568622&device=desktop",
      "http://www.skratchceramics.com/",
      "http://hobbylesson.com/pottery-painting-ideas/",
      "http://ceramic.webriyota.xyz/25-ingenious-craft-ideas-for-diy-gifts-for-christmas/",
      "https://www.instagram.com/p/62h0B2mIgF/",
      "https://www.worldmarket.com/product/small+white+textured+stoneware+bowls+set+of+4.do?camp=ban%3Apinterest%3Ashopping_pins_evergreen&utm_medium=display&utm_source=pinterest&utm_campaign=shopping_pins_evergreen&pp=0&epik=dj0yJnU9U3EyQUZpd0U4N0lvY2E3UUNUVnpIMTRYLVd0TVFFTXMmbj1CVVQ5RURyMVdUQk92Zk1UbzBtOVJnJnQ9QUFBQUFGMUhoQ0U",
      "https://www.instagram.com/p/BxivrlTJn0L/",
      "https://freckledpottery.com/",
      "https://www.anthropologie.com/shop/chrysanthemum-pot"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Pottery/Pottery_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Pottery/Pottery_2.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Pottery/Pottery_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Pottery/Pottery_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Pottery/Pottery_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Pottery/Pottery_6.jpeg"
    ]
  },
  readingbooks: {
    titles: [
      "When melatonin just doesn't do the trick",
      "Boring Books",
      "Sorry, I'm Booked",
      "Tequila Mockingbird",
      "You're nothing but a Wilde thing",
      "Bad spelling makes me [sic]",
      "Practice safe text: use commas",
      "When I think about books, I touch my shelf",
      "Living an alternative life because yours is just too boring",
      "Harry Potter Is Best Book"
    ],
    urls: [
      "https://www.perpetualpageturner.com/most-anticipated-books-of-2019/",
      "https://theinspirationlady.com/12-new-books-to-read-this-spring-summer-2019/",
      "https://www.bookbub.com/blog/addictive-page-turners-publishers-blurbs?popupdelay=0&source=pinterest_design",
      "https://thefab20s.com/best-books-on-self-compassion/",
      "https://anintentionallife.me/memes/",
      "https://www.bookbub.com/blog/books-that-will-make-you-happy?popupdelay=0&source=pinterest_design",
      "https://www.perpetualpageturner.com/books-to-movies-2019/",
      "https://www.buzzfeed.com/amphtml/alannaokun/insanely-clever-gifts-for-book-lovers",
      "https://wellsbaum.blog/the-worlds-most-beautiful-libraries/",
      "https://www.listchallenges.com/the-most-addictive-books-of-the-last-25-years?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=658090388_25808784_388752"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Reading_Boring_Books/Reading_boring_books_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Reading_Boring_Books/Reading_boring_books_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Reading_Boring_Books/Reading_boring_books_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Reading_Boring_Books/Reading_boring_books_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Reading_Boring_Books/Reading_boring_books_5.jpg"
    ]
  },
  onhold: {
    titles: [
      "They put you on hold for fun",
      "Listen to this background music while we laugh at you",
      "Being rude? You're on hold",
      "Most exciting thing since watching paint dry",
      "Mostest Boringest Phone Call",
      "AT&T perfected being put on hold",
      "When I said I wanted to be hold, I didn't mean this",
      "Freeze! This is a hold up, no one move",
      "Zzzzzzzzzzz",
      "They're waiting for you to hang up btw"
    ],
    urls: [
      "https://www.thesun.co.uk/living/3710311/call-centres-put-on-hold-hear-everything-you-say/",
      "http://www.jenniferalambert.com/putting-dreams-on-hold/",
      "https://iamandco.com/blog/long-phone-calls",
      "https://ios.gadgethacks.com/how-to/record-phone-calls-your-iphone-0163651/",
      "https://www.makeuseof.com/tag/how-to-record-a-phone-call-on-iphone/",
      "https://differenttech.co.uk/cell-phone-tips-and-tricks-for-novices/",
      "https://www.wish.com/c/5865d42e9c763a4ef732f214?hide_login_modal=true&from_ad=pinterest_web&_display_country_code=US&_force_currency_code=usd&pid=pinterest_int&c=%7BcampaignId%7D&ad_cid=5865d42e9c763a4ef732f214&ad_cc=US&ad_curr=USD&ad_price=23.00&fallback_cids=5c4818f32c2572544bbee4565b07822b504fec7d0a80b7915a6a9792ff96b6184d2d581b5aa10fc4918dae08bce311ca",
      "https://www.popsugar.com/love/Why-Important-Talk-Phone-Instead-Texting-45909858",
      "https://www.pcmag.com/feature/366982/how-to-make-and-receive-phone-calls-on-your-ipad-or-mac"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Being_Put_On_Hold/Being_Put_On_Hold_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Being_Put_On_Hold/Being_Put_On_Hold_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Being_Put_On_Hold/Being_Put_On_Hold_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Being_Put_On_Hold/Being_Put_On_Hold_4.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Being_Put_On_Hold/Being_Put_On_Hold_5.jpg"
    ]
  },
  slowwifi: {
    titles: [
      "Dial-up",
      "Kings LANding",
      "Tell my wifi I love her",
      "Life in the fast LAN",
      "It hurts when IP",
      "Bill Wi the science Fi",
      "Who misses the sound of connecting to dial-up?",
      "Pretty fly for a wifi",
      "Drop it like its hotspot",
      "Winternet is coming"
    ],
    urls: [
      "https://www.etsy.com/au/MouseAndMePrints/listing/647523591/wifi-password-sign-editable-wifi-sign?utm_campaign=Share&utm_medium=social_organic&utm_source=MSMT&utm_term=so.smt&share_time=1538307279000",
      "https://www.etsy.com/uk/listing/577498893/wifi-password-sign-wifi-password",
      "https://rvboondocker.com/top-rv-wifi-solutions/",
      "https://www.zazzle.com/wifi_password_sign_simply_right_plaque-200905286150498558",
      "https://www.disclose.tv/new-5g-wifi-coming-and-it-will-kill-us-all-this-is-serious-314497",
      "https://tips4lives.com/aprende-como-triplicar-tu-senal-de-wifi-con-este-simple-truco-casero/",
      "https://www.incpak.com/tech/homemade-wifi-extender-diy/",
      "https://designbundles.net/grace-lynn-designs/261774-wifi-password-svg-cut-file/rel=oueSmS",
      "https://www.etsy.com/listing/261717123/wifi-password-sign-wifi-password?ref=shop_home_active_2",
      "https://www.staples.com/Adams-Co-Wifi-Chalkboard-Sign-11-x9-x1-5-White-Gold-ST18006/product_1950562"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Slow_Wifi/Slow_Wifi_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Slow_Wifi/Slow_Wifi_2.png",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Slow_Wifi/Slow_Wifi_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Slow_Wifi/Slow_Wifi_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Slow_Wifi/Slow_Wifi_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Slow_Wifi/Slow_Wifi_6.jpeg"
    ]
  },
  airports: {
    titles: [
      "Endless waiting and no power outlets nearby",
      "Trying to sleep but not wanting to miss your flight",
      "No comfortable spot to rest at this airport",
      "Parents be like, WE'RE GONNA MISS OUR FLIGHT, yet arrive at the airport 5 hours early",
      "Comparable to waiting at the DMV",
      "Worlds most boring award goes to...",
      "Waiting at the airport to get on a plane to wait some more",
      "We hope you like lines and waiting",
      "When the restaurant you like is at a different terminal",
      "Two words: Flight Delay"
    ],
    urls: [
      "https://moderntrekker.com/long-layover/",
      "http://mercytravelblog.salaovirtual.ru/894347-travel-airport-pictures-planes-26-new-ideas.html",
      "https://www.wanderherway.com/best-tips-for-long-haul-flights/",
      "https://fiveno.com/60-airport-fashion-travel-outfits-ideas/",
      "https://fashionjackson.com/my-go-to-travel-style/",
      "https://i.pinimg.com/736x/42/66/5b/42665b2e7a203cbe1891962ba22d780a.jpg",
      "https://www.instagram.com/p/Br0UmSCAFOE/?utm_source=ig_share_sheet&igshid=1uk5jw0w4b0vv",
      "http://glamisse.com/2018/11/11/35-fabulous-bling-women-outfits-for-travel-airport-style/fabulous-bling-women-outfits-for-travel-airport-style-12/#main",
      "https://www.hercampus.com/school/hofstra/what-pack-airport-carry",
      "https://www.pinterest.com/pin/614459942885510885/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_At_The_Airport/Waiting_At_The_Airport_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_At_The_Airport/Waiting_At_The_Airport_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_At_The_Airport/Waiting_At_The_Airport_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_At_The_Airport/Waiting_At_The_Airport_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_At_The_Airport/Waiting_At_The_Airport_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Waiting_At_The_Airport/Waiting_At_The_Airport_6.png"
    ]
  },
  crosswordpuzzles: {
    titles: [
      "Kind of like scrabble with 100% of the boring",
      "People call this a sport?",
      "6 letters: boring",
      "What opens and closes? The trash lid when I throw this crossword puzzle in the trash",
      "Just another addition to make the newspaper more boring",
      "Not all people dislike crossword puzzles! My grandma likes them",
      "The worst type of puzzle",
      "I feel bad for people who enjoy these",
      "I like crossword puzzles said no one ever",
      "Yawn.com"
    ],
    urls: [
      "http://www.printablee.com/post_large-print-easy-crossword-puzzles-printable_263418/",
      "https://www.education.com/worksheet-generator/reading/crossword-puzzle/?utm_medium=social&utm_source=pinterest&utm_campaign=evergreen&utm_term=01142019_img+s8_ws_hs_r_&utm_content=crossword_generator",
      "https://www.apost.com/en/blog/only-a-math-whiz-can-complete-this-math-crossword-puzzle-in-less-than-5-minutes/5435/?p=eyJ2dCI6MTU0MjIwMTU0OCwic2wiOjAsInV0bV9zb3VyY2UiOiJwaW50ZXJlc3QiLCJ1dG1fbWVkaXVtIjoicGludGVyZXN0X3VzZXJzaGFyZXMiLCJ1dG1fY2FtcGFpZ24iOiJibG9nXzU0MzUifQ",
      "https://www.reallifeathome.com/state-abbreviations-crossword/",
      "https://images.search.yahoo.com/images/view;_ylt=AwrExo.cU3lciGoAbNSInIlQ;_ylu=X3oDMTIza3UwOG5tBHNlYwNzcgRzbGsDaW1nBG9pZAM1NzcxMzViZjVmZDQxZGI0NmU3YzU1MzUxNDM2NGRmMARncG9zAzEzBGl0A2Jpbmc-?back=https://images.search.yahoo.com/search/images%3Fp%3Dprintable%2Beasy%2Bcrossword%2Bpuzzle%26fr%3Dfp-yie9%26fr2%3Dpiv-web%26ri%3D115%26tab%3Dorganic%26ri%3D13&w=512&h=654&imgurl=www.paperduke.com/wp-content/uploads/2017/10/printable-crossword-puzzles-easy-e1508561273778.png&rurl=http://www.paperduke.com/free-printable-crossword-puzzles-easy.html&size=237.4KB&name=Free+%3Cb%3EPrintable%3C/b%3E+%3Cb%3ECrossword+Puzzles%3C/b%3E&p=printable+easy+crossword+puzzle&oid=577135bf5fd41db46e7c553514364df0&fr2=piv-web&fr=fp-yie9&tt=Free+%3Cb%3EPrintable%3C/b%3E+%3Cb%3ECrossword+Puzzles%3C/b%3E&b=0&ni=21&no=13&ts=&tab=organic&sigr=123onohj8&sigb=13vsu86qt&sigi=130g4m903&sigt=11emctn0j&sign=11emctn0j&.crumb=8z8syjYY0eG&fr=fp-yie9&fr2=piv-web",
      "https://www.teacherspayteachers.com/Product/Biology-Crosswords-I-432434",
      "https://www.puzzles-to-print.com/crossword-puzzles-for-kids/insects.shtml",
      "https://www.englishwsheets.com/fast-food.html",
      "https://www.puzzles-to-print.com/crossword-puzzles-for-kids/state-capitals-crossword.shtml#sthash.ywpnltW0.qjtu",
      "https://learnwithpuzzles.com/index.php?function=DisplaySheet&sheet=summer-activities-crossword-04&links=3&link1=75&link2=209&link3=206"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Crossword_Puzzles/Crossword_Puzzle_1.webp",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Crossword_Puzzles/Crossword_Puzzle_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Crossword_Puzzles/Crossword_Puzzle_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Crossword_Puzzles/Crossword_Puzzle_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Crossword_Puzzles/Crossword_Puzzle_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Crossword_Puzzles/Crossword_Puzzle_6.jpg"
    ]
  },
  sudoku: {
    titles: [
      "Crossword puzzle but numbers",
      "Just when you thought crossword puzzles were the most boring puzzles",
      "A undelightful mix of boring and numbers",
      "It's like a math puzzle. Ew.",
      "Plays sudoku with a pen",
      "Plays sudoku with a calculator",
      "suDONTku",
      "If crossword puzzles won't put you to sleep, this will",
      "You can either die or finish this sudoku; Dies",
      "Sudoku? More like suNOku"
    ],
    urls: [
      "http://www.printable-sudoku-puzzles.com/kids.php",
      "http://www.livredesapienta.fr/2017/03/sudoku-trois-niveaux.html",
      "https://pianetabambini.it/sudoku-bambini-facili-stampabili/",
      "https://www.funwithpuzzles.com/2010/05/hindu-newspapers-sudoku-of-day.html?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_smartloop&utm_content=smartloop&utm_term=6871858",
      "http://www.desmoulins.fr/index.php?pg=divers!jeux!sudoku",
      "https://www.dadsworksheets.com/puzzles/sudoku.html",
      "https://de.m.wikipedia.org/wiki/Datei:A_nonomino_sudoku.svg",
      "https://www.sudokuweb.org/de/leicht-kinder-sudoku-6x6/sudoku-kids-6x6-09/",
      "https://www.teteamodeler.com/education/soutien-scolaire/fiches-soutien-scolaire-a-imprimer/sudoku-primaire-a-imprimer",
      "https://atividadesparaprofessores.com.br/10-atividades-de-sudoku-para-imprimir/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sudoku/Sudoku_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sudoku/Sudoku_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sudoku/Sudoku_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sudoku/Sudoku_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sudoku/Sudoku_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sudoku/Sudoku_6.jpg"
    ]
  },
  puzzles: {
    titles: [
      "Less boring than sudoku at least",
      "Great activity to make you bored",
      "Great game for parties! For 5 year olds",
      "Jigsaws can be fragile things. They always end up going to pieces",
      "I always find completed jigsaws to be quite relaxing. Very piece-full",
      "Delighted to finish my jigsaw in only three weeks when the label on it says 12-24 months",
      "I like all sorts of puzzles, like jigsaws and crosswords, but dot to dots are where I draw the line",
      "Woke up the other day with a puzzled look on my face. Had fallen asleep on my jigsaw",
      "Someone hit me over the head with a jigsaw the other day. I’m still piecing the evidence together",
      "Went to a fancy dress party as a jigsaw piece but didn’t like it. I just didn’t fit in"
    ],
    urls: [
      "https://crafts.lovetoknow.com/paper-crafts/printable-puzzle-pieces-template",
      "https://www.uncommongoods.com/product/geode-puzzle",
      "http://robbygurlscreations.blogspot.com/2013/06/diy-print-color-cut-jigsaw-puzzles.html?m=1",
      "https://www.pianetadonne.blog/20-idee-pazzesche-per-riciclare-vecchi-puzzle-davvero-geniale/",
      "https://designeddecor.com/puzzle-coffee-table-build-plans/",
      "https://m.spilsbury.com/product/porta-puzzle-caddy",
      "https://www.comment-economiser.fr/11-idees-geniales-pour-recycler-facilement-vos-vieux-objets.html",
      "https://www.crateandbarrel.com/kids/#fromNod",
      "https://thethriftycouple.com/16-ingenious-ways-to-reuse-puzzle-pieces-dont-throw-them-away/",
      "http://www.supercoloring.com/puzzle-games/triceratops-dinosaur-jigsaw-puzzle"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Puzzles/Puzzles_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Puzzles/Puzzles_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Puzzles/Puzzles_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Puzzles/Puzzles_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Puzzles/Puzzles_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Puzzles/Puzzles_6.png"
    ]
  },
  yoga: {
    titles: [
      "Yoga?! I thought I was going to meet Yoda...",
      "Should I go? Namaste",
      "I brang a yo-yo to class and called it yo-yoga",
      "I Think When I Tell People I Do Yoga They Just Think I’m A Poser",
      "I Got Chucked Out Of Yoga Class After Misinterpreting The Half-Moon Pose",
      "Warning: You might fall asleep",
      "Fell asleep during downward dog",
      "Falling asleep just thinking about yoga",
      "My favourite yoga position is sleeping",
      "Yoga? No thank you"
    ],
    urls: [
      "https://sproutorigin.com/yoga-workout-for-flexibility/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes",
      "https://groundedpanda.com/full-body-yoga-workout/",
      "https://funesfitness.com/10-best-yoga-poses-for-fat-loss/",
      "https://www.yogiapproved.com/yoga/9-yoga-poses-for-a-perky-booty/",
      "https://www.gymguider.com/yoga-stretching-exercises-correct-form/",
      "https://sporteluxe.com/us/yoga-brain/",
      "https://insomniatips.win/want-to-know-all-of-the-tricks-regarding-insomnia-check-this-out/",
      "https://www.thehealthymaven.com/yoga-for-sleep",
      "https://glaminati.com/yoga-poses-limber-up-hump-day/?utm_source=Pinterest&utm_medium=Social&utm_campaign=PIN-YogaPosestoLimberUsUpBeforeHumpDay&utm_content=yoga-poses-limber-up-hu",
      "https://www.fitnessmom.online/yoga/12-tips-to-start-yoga-at-home-for-beginners/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Yoga/Yoga_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Yoga/Yoga_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Yoga/Yoga_3.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Yoga/Yoga_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Yoga/Yoga_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Yoga/Yoga_6.jpeg"
    ]
  },
  boardgames: {
    titles: [
      "Bored games",
      "Board games? More like bored games",
      "I'm board",
      "Taking boardness to a whole new level",
      "Told my doctor I couldn't sleep. He recommended Catan",
      "You call this fun?",
      "4 players staring at a piece of colored cardboard",
      "People sitting around a piece of cardboard",
      "Guaranteed to make you fall asleep",
      "What does this piece do?"
    ],
    urls: [
      "https://toybuzz.org/best-family-board-games/",
      "https://smallstuffcounts.com/board-games-for-adults/",
      "https://www.theguardian.com/lifeandstyle/2015/aug/28/20-awesome-board-games-you-may-never-have-heard-of",
      "http://homeschoolgameschool.com/free-printable-board-games/",
      "https://makingmrsm.com/top-ten-board-games/",
      "https://www.thesprucecrafts.com/how-to-play-mancala-409424?utm_campaign=mobilesharebutton2&utm_medium=social&utm_source=pinterest",
      "https://www.bestcoloringpagesforkids.com/printable-board-games.html",
      "https://www.teacherspayteachers.com/Product/Game-Board-Template-Clipart-Zip-A-Dee-Doo-Dah-Designs-2513583",
      "https://www.sunshineandhurricanes.com/best-board-games-for-teens/",
      "https://storemyboardgames.com/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Board_Games/Board_Games_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Board_Games/Board_Games_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Board_Games/Board_Games_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Board_Games/Board_Games_4.png",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Board_Games/Board_Games_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Board_Games/Board_Games_6.jpg"
    ]
  },
  birding: {
    titles: [
      "Don't forgot the binoculars",
      "We're... Watching birds...?",
      "Who thought of this idea?",
      "Hawkward...",
      "Toucan play that game",
      "Sounds like a bit of ostrich",
      "Don't forget to bring a pillow for when you fall asleep",
      "TFW you realize you're bird watching",
      "Couldn't think of a more interesting species to watch?",
      "Tree watching 99% of the time"
    ],
    urls: [
      "https://inforamaart.com/products/common-backyard-bird-species-infographic-poster-by-diana-sudyka",
      "https://soaringonwingslikeeagles.com/how-to-bird-watch/",
      "http://jakesnatureblog.com/2016/06/20/bird-watching-tips/",
      "https://www.kaytee.com/learn-care/wild-bird/common-backyard-birding-mistakes?utm_source=0317&utm_campaign=Wild-Bird-Social-Media&utm_medium=Pinterest&utm_content=common_birding_mistakes",
      "https://www.bostonmamas.com/blog/2012/4/12/bird-watching-for-beginners.html?utm_content=tribes&utm_term=467695926_16392144_523494",
      "https://birdwatchinghq.com/birdingapps/",
      "https://www.birdwatchersdigest.com/bwdsite/learn/feeding/foodchart.php",
      "https://www.thebirdhousechick.com/collections/hummingbird-feeders?utm_medium=Social&utm_source=Pinterest",
      "https://birdwatchinghq.com/how-to-attract-orioles/",
      "https://midexy.com/2444224836/feel-good-bird-santuary/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Bird_Watching/Bird_Watching_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Bird_Watching/Bird_Watching_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Bird_Watching/Bird_Watching_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Bird_Watching/Bird_Watching_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Bird_Watching/Bird_Watching_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Bird_Watching/Bird_Watching_6.jpg"
    ]
  },
  bakingbread: {
    titles: [
      "I thought we were watching Breaking Bad, not baking bread",
      "Before I break down and rye, I want to say I loaf you",
      "Ciabatta stay away from me. I don't want naan of that",
      "Whole-y grain, you bread my mind!",
      "You knead me in your loaf",
      "Biscuit's the yeast I could do",
      "They bánh mì from their restaurant!",
      "You focaccia bag, crumb back and get it",
      "Crust me, I'm on a roll",
      "Not what I had in mind when I said let's get this bread"
    ],
    urls: [
      "https://www.chickenscratchdiaries.com/thrifty-homemade-sandwich-bread-recipe/",
      "https://houseofnasheats.com/roasted-garlic-rosemary-no-knead-artisan-bread/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes",
      "https://thestayathomechef.com/the-best-homemade-dinner-rolls-ever/",
      "https://mildlymeandering.com/hokkaido-milk-bread-shokupan/",
      "https://ciaoflorentina.com/rustic-crusty-bread-recipe/",
      "https://thebusybaker.ca/no-knead-jalapeno-cheese-artisan-bread/",
      "https://damndelicious.net/2017/12/05/no-knead-rosemary-bread/",
      "https://thewoksoflife.com/homemade-brioche-recipe/",
      "https://thebusybaker.ca/no-knead-cranberry-honey-walnut-artisan-bread/",
      "https://www.itsalwaysautumn.com/better-olive-garden-garlic-breadsticks-recipe.html"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baking_Bread/Baking_Bread_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baking_Bread/Baking_Bread_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baking_Bread/Baking_Bread_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baking_Bread/Baking_Bread_4.webp",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baking_Bread/Baking_Bread_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baking_Bread/Baking_Bread_6.jpg"
    ]
  },
  astronomy: {
    titles: [
      "Orion’s Belt is a big waist of space",
      "Black holes are most commonly found in black socks",
      "What kind of songs do the planets like to sing? Nep-tunes",
      "Why so Sirius?",
      "Planets and stars are actually kinda cool",
      "Io you some money",
      "How do you organize a party in space? You planet",
      "Keep the Earth clean, it's not Uranus",
      "Don't need a telescope to see how boring this is",
      "I miss Pluto"
    ],
    urls: [
      "https://www.zapista.com/products/constellations-art-print-1",
      "https://apod.nasa.gov/apod/astropix.html",
      "https://www.instructables.com/id/How-to-Get-Started-in-Amateur-Astronomy/",
      "https://www.dailypost.today/2019/01/astronomy-daily-picture-for-january-15.html",
      "https://www.learningonlineblog.com/2017/08/17/astronomy-youtube-channels-for-learning-about-space/",
      "https://www.dailypost.today/2019/04/astronomy-daily-picture-for-april-11.html",
      "https://upscaleexistence.blogspot.com/2018/04/why-do-galaxies-in-universe-align.html",
      "https://savagefacts.com/cool-facts-about-exoplanets/",
      "https://celestialworld.co.uk/hubbles-contribution-modern-astronomy/?1396313323",
      "https://astrobackyard.com/buying-your-first-telescope/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Astronomy/Astronomy_1.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Astronomy/Astronomy_2.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Astronomy/Astronomy_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Astronomy/Astronomy_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Astronomy/Astronomy_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Astronomy/Astronomy_6.jpg"
    ]
  },
  baseball: {
    titles: [
      "Like bird watching, but humans",
      "Give me 3 strikes because I wanna be outta here",
      "I wondered why the baseball was getting bigger. Then it hit me",
      "Why was Cinderella so bad at baseball?... She had a pumpkin for a coach!",
      "I think I glove you!",
      "Second best place to fall asleep",
      "How is this more boring than golf?",
      "Never hit the ump… The Umpire Strikes Back.",
      "Hitting balls",
      "Wood and ball"
    ],
    urls: [
      "https://baseballboom.com/youth-catcher-drills/",
      "https://www.domestically-speaking.com/baseball-rice-krispie-treats/",
      "https://lifeinleftfield.com/baseball-bracelet/",
      "https://www.etsy.com/listing/190450565/baseball-cross-shadow-box?ref=cat_gallery_14&ga_ref=auto-1&ga_search_query=baseball&ga_order=most_relevant&ga_view_type=gallery&ga_ship_to=US&ga_search_type=all",
      "https://planforawesome.com/baseball-mom-hacks/",
      "https://www.etsy.com/listing/663698704/baseball-svg-fastpitch-tshirt-dad-heart?social_invites=1&si_uuid=18576a6c-da84-4a18-b03a-f8836a1847c9&user_id=8267848&si_time=1550634767&si_page=ui.search.v2.SearchV2Activity&si_trigger=fi&si_object_id=663698704&platform=android",
      "https://kidsroomideas.net/rustic-industrial-baseball/",
      "http://www.toxbee.top/its-not-hard-to-get-into-the-game-of-baseball-13/",
      "https://www.ebay.com/itm/Youre-Killing-Me-Smalls-Baseball-Vinyl-Decal-Sticker-Yeti-Car-Tablet-3-25-/112912374025?oid=112262169073",
      "https://planforawesome.com/baseball-mom-wagon/"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball/Baseball_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball/Baseball_2.gif",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball/Baseball_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball/Baseball_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball/Baseball_5.jpg"
    ]
  },
  sewing: {
    titles: [
      "For aspiring surgeons",
      "Surprisingly boring",
      "You are sew lovely",
      "Certified sewciopath",
      "Keepin' it reel",
      "Sewing mends the soul",
      "And sew it begins",
      "Sew much puns",
      "I needle little love",
      "I'm sew awesome"
    ],
    urls: [
      "http://mygirlfriendsquiltshoppe.com/blog/2018/08/09/sew-your-own-scrunchies/",
      "https://livebetterlifestyle.com/sewing-projects-that-are-actually-useful/",
      "https://www.shrimpsaladcircus.com/how-to-make-a-diy-weighted-blanket-for-anxiety/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=577720710_21579764_288",
      "http://makingthingsisawesome.com/10-free-womans-casual-shorts-sewing-patterns/",
      "https://sewing.craftgossip.com/sewing-tutorial-9-seam-finishes-you-should-know/2018/11/06/",
      "https://alittlecraftinyourday.com/2018/10/17/15-beginning-sewing-patterns-can-make-hour/",
      "https://www.theyellowbirdhouse.com/diy-toothbrush-travel-wrap/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=332382420_10138390_223135",
      "https://sewing.com/hand-sewing-stitching-basics/",
      "https://www.positivelysplendid.com/easy-sewing-projects-for-beginners/?cuid=878871325da8756002adeebb4319340e",
      "http://www.vavoomvintage.net/p/free-patterns.html"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sewing/Sewing_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sewing/Sewing_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sewing/Sewing_3.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sewing/Sewing_4.png",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sewing/Sewing_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Sewing/Sewing_6.jpg"
    ]
  },
  fishing: {
    titles: [
      "99% waiting, 1% catching fish",
      "Bring a pillow, you'll need it",
      "Person holding pole stick thing",
      "I don't see the a-lure about fishing",
      "You're so sofishticated",
      "These fish puns are kraken me up",
      "Whale whale whale... What do we have here",
      "Seems a bit fishy to me",
      "What a load of pollocks",
      "I fish this wasn't so boring"
    ],
    urls: [
      "https://www.buzzfeed.com/peggy/fishing-hacks-that-are-borderline-genius#122580018?utm_source=dynamic&utm_campaign=bfsharepinterest",
      "https://pikecaster.com/fishing-trip-gear-checklist/",
      "https://24homely.com/outdoor-living/35-best-brilliant-fishing-tips-to-steal/attachment/brilliant-fishing-tips-to-steal-20/",
      "https://www.wildernesstoday.com/how-to-catch-big-bass/",
      "https://az-fish.com/products/you-are-the-greatest-catch-of-my-life-fishing-lure",
      "https://24homely.com/outdoor-living/35-best-brilliant-fishing-tips-to-steal/",
      "https://letscampsmore.com/fishing-pole-cover/",
      "https://www.shaddockfishing.com/collections/monofilament-fishing-line/products/547yds-monofilament-fishing-line-white",
      "https://www.wildernesstoday.com/trout-fishing/",
      "https://pikecaster.com/make-fishing-fun-for-kids/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=536194248_19524640_514090"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Fishing_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Fishing_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Fishing_3.jpeg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Fishing_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Fishing_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Fishing_6.jpg"
    ]
  },
  baseballcards: {
    titles: [
      "Even more boring than baseball itself",
      "You're a great catch",
      "World's most boring hobby",
      "But... Why?",
      "Wow. Just wow",
      "Guaranteed to make you sleep",
      "I need a new hobby",
      "Guy collects thousands of baseball cards and he doesn't know why",
      "Mint condition Barry Bonds card",
      "Quick, look serious"
    ],
    urls: [
      "https://moneyinc.com/most-expensive-baseball-cards-as-of-2019/",
      "http://www.toxbee.top/baseball-may-just-be-the-best-game-there-is-12/",
      "https://www.cardboardconnection.com/best-bonus-feature-ever-the-sandlot-blu-ray-includes-baseball-cards",
      "https://www.cardboardandcoins.com/products/1968-topps-177-nolan-ryan-rookie-card-mets-strikeouts-rc-please-read?utm_medium=Social&utm_source=Pinterest",
      "https://www.instagram.com/p/BuEjukugC8x/?utm_source=ig_share_sheet&igshid=1281iv6x5czbj",
      "https://www.smithsonianmag.com/smithsonian-institution/would-baseball-have-become-americas-national-pastime-without-baseball-cards-180970406/",
      "https://www.ebay.com/n/error",
      "https://www.instagram.com/dodgers/p/BtWgJwehAHq/?utm_source=ig_share_sheet&igshid=1tyvoynpxyz72",
      "https://www.etsy.com/ca/SportyPrintsbyMBM/listing/545060127/in-baseball-as-in-life-all-the-important?utm_campaign=Share&utm_medium=social_organic&utm_source=DSMT2&utm_term=so.smt&share_time=1548700176000",
      "https://entertainment.howstuffworks.com/mickey-mantle.htm"
    ],
    imgs: [
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball_Cards/Baseball_Cards_1.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball_Cards/Baseball_Cards_2.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball_Cards/Baseball_Cards_3.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball_Cards/Baseball_Cards_4.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball_Cards/Baseball_Cards_5.jpg",
      "https://node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12.s3.amazonaws.com/Baseball_Cards/Baseball_Cards_6.jpg"
    ]
  }
}

randFromArray = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

randomPin = () => {
  let key = randFromArray(Object.keys(TOPICS));
  let topic = TOPICS[key];
  return {
    title: randFromArray(topic.titles),
    url: randFromArray(topic.urls),
    tags: [key, randFromArray(FREETAGS)],
    description: chance.paragraph(),
    image_url: randFromArray(topic.imgs)
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
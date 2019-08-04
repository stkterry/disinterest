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
      "A Country So Bored that Slide Stones On Ice",
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
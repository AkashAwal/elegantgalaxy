// ─────────────────────────────────────────────────────────────────────────────
// Blog post data  —  static seed content (will migrate to Sanity.io)
// When Sanity is set up, replace BLOG_POSTS array with a groq query and keep
// the same BlogPost / BlogSection shape so page components need zero changes.
// ─────────────────────────────────────────────────────────────────────────────

export type BlogCategory =
  | "buying-guide"
  | "comparison"
  | "maintenance"
  | "trends"
  | "tips";

export const BLOG_CATEGORIES: Record<
  BlogCategory,
  { label: string; color: string; gradient: string }
> = {
  "buying-guide": {
    label:    "Buying Guide",
    color:    "#0071e3",
    gradient: "linear-gradient(135deg,#0071e3 0%,#38bdf8 100%)",
  },
  "comparison": {
    label:    "Comparison",
    color:    "#7c3aed",
    gradient: "linear-gradient(135deg,#7c3aed 0%,#a78bfa 100%)",
  },
  "maintenance": {
    label:    "Maintenance",
    color:    "#059669",
    gradient: "linear-gradient(135deg,#059669 0%,#34d399 100%)",
  },
  "trends": {
    label:    "Trends",
    color:    "#db2777",
    gradient: "linear-gradient(135deg,#db2777 0%,#f472b6 100%)",
  },
  "tips": {
    label:    "Tips & Tricks",
    color:    "#d97706",
    gradient: "linear-gradient(135deg,#d97706 0%,#fbbf24 100%)",
  },
};

// ── Section types ─────────────────────────────────────────────────────────────

type TextSection  = { type: "text";    heading?: string; body: string };
type ListSection  = { type: "list";    heading?: string; items: string[] };
type TipSection   = { type: "tip";     body: string };
type WarnSection  = { type: "warning"; body: string };
type QuoteSection = { type: "quote";   body: string; attribution?: string };
type TableSection = {
  type: "table"; heading?: string; headers: string[]; rows: string[][];
};
type CtaSection = { type: "cta"; heading?: string; body: string; href: string; label: string };

export type BlogSection =
  | TextSection
  | ListSection
  | TipSection
  | WarnSection
  | QuoteSection
  | TableSection
  | CtaSection;

// ── BlogPost shape ────────────────────────────────────────────────────────────

export interface BlogPost {
  slug:         string;
  title:        string;
  excerpt:      string;
  category:     BlogCategory;
  readTime:     number;        // minutes
  publishedAt:  string;        // YYYY-MM-DD
  author:       { name: string; role: string };
  tags:         string[];
  featured?:    boolean;
  content:      BlogSection[];
  relatedSlugs?: string[];
}

// ── Helper ────────────────────────────────────────────────────────────────────

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find(p => p.slug === slug) ?? null;
}

export function getBlogPostsByCategory(cat: BlogCategory) {
  return BLOG_POSTS.filter(p => p.category === cat);
}

export function searchBlogPosts(query: string) {
  const q = query.toLowerCase();
  return BLOG_POSTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}

// ── Posts ─────────────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [

  // ── 1 ── TV size guide (featured) ──────────────────────────────────────────
  {
    slug:        "how-to-choose-tv-size",
    title:       "How to Choose the Right TV Size for Any Room",
    excerpt:     "The formula is simpler than you think - and getting it right is the single biggest factor in how much you'll enjoy your TV.",
    category:    "buying-guide",
    readTime:    5,
    publishedAt: "2025-04-14",
    featured:    true,
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["LED TV", "buying guide", "home theatre", "room size"],
    relatedSlugs: ["led-tv-buying-guide-features", "smart-home-appliances-2025", "lower-electricity-bill-appliances"],
    content: [
      {
        type: "text",
        body: "Getting the TV size wrong is the most common home-theatre mistake people make. Too small and you're squinting; too big and it feels like sitting in the front row of a cinema. The good news: the formula is simple, and you only need a tape measure.",
      },
      {
        type: "text",
        heading: "The Viewing Distance Formula",
        body: "Measure the distance (in feet) from your sofa to where your TV will sit. Multiply by 12 to get inches, then divide by 2. That's your ideal screen size in inches. If your couch is 8 feet away: (8 × 12) ÷ 2 = 48 inches. Rounding up or down by 5 inches is perfectly fine.",
      },
      {
        type: "table",
        heading: "Room-by-Room Quick Reference",
        headers: ["Room", "Typical Viewing Distance", "Recommended TV Size"],
        rows: [
          ["Bedroom",              "5 – 7 ft",  "32 – 43 inches"],
          ["Small living room",   "7 – 9 ft",  "43 – 55 inches"],
          ["Standard living room","9 – 12 ft", "55 – 65 inches"],
          ["Large living room",   "12 – 15 ft","65 – 75 inches"],
          ["Home theatre / hall", "15 ft+",    "75 inches+"],
        ],
      },
      {
        type: "text",
        heading: "Resolution and Viewing Distance",
        body: "If you're going 55 inches or larger, opt for 4K - at that size and typical living-room distances, you'll notice the extra sharpness. For a bedroom 32–43 inch screen viewed at 6 feet, Full HD is completely fine and usually costs meaningfully less.",
      },
      {
        type: "tip",
        body: "Mount your TV so the centre of the screen is at eye level when seated, not when standing. Most people mount too high, leading to neck strain after long sessions.",
      },
      {
        type: "text",
        heading: "Don't Forget the Physical Dimensions",
        body: "Modern TVs have slim bezels, so the screen nearly fills the quoted size. But always check the actual body dimensions before mounting - a 65-inch TV is roughly 144 × 84 cm in body size. Make sure your wall bracket or entertainment unit can handle the width and weight.",
      },
      {
        type: "text",
        heading: "Match the Sound to the Screen",
        body: "Bigger screen, bigger room - and built-in speakers often fall short. If you're buying 55 inches or above for a living room, budget for a soundbar. Our LED TV range includes models with Dolby Audio passthrough, so pairing with any soundbar is straightforward.",
      },
    ],
  },

  // ── 2 ── Air cooler buying tips ────────────────────────────────────────────
  {
    slug:        "air-cooler-buying-tips",
    title:       "5 Things Nobody Tells You Before You Buy an Air Cooler",
    excerpt:     "Air coolers are brilliant for Indian summers - but only if you pick the right one and use it correctly. Here's what the product page leaves out.",
    category:    "buying-guide",
    readTime:    4,
    publishedAt: "2025-03-28",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["air cooler", "buying guide", "summer", "humidity", "India"],
    relatedSlugs: ["commercial-vs-domestic-air-cooler", "air-cooler-care-season", "lower-electricity-bill-appliances"],
    content: [
      {
        type: "text",
        body: "Air coolers are one of the smartest buys for India's dry-heat months - cheap to run, easy to maintain, and genuinely effective. But most buyers discover their limitations the hard way, after purchase. Here are five things the product listing won't mention.",
      },
      {
        type: "text",
        heading: "1. They Only Work Well in Low Humidity",
        body: "Air coolers cool by evaporating water - which lowers temperature but adds moisture to the air. Once humidity crosses 60%, the air is already saturated and can't absorb more, so the cooling effect drops sharply. In Delhi, Jaipur, or Nagpur during April–May they're excellent. In Mumbai or coastal cities during monsoon, they're near-useless. Check your city's pre-monsoon humidity before buying.",
      },
      {
        type: "text",
        heading: "2. Tank Size Determines Overnight Usability",
        body: "A 20-litre tank runs roughly 6–8 hours before needing a refill. A 30-litre tank gets you through the night. For a bedroom, always go 25 litres or above. For a living room or large hall, 35–45 litres is practical. Don't buy based on cooling area alone - check the tank.",
      },
      {
        type: "text",
        heading: "3. Cooling Area Ratings Are Generous",
        body: "Manufacturers rate coolers for open, well-ventilated spaces. A cooler rated for 200 sq. ft. will realistically cool 120–150 sq. ft. in a furnished, semi-closed room. Buy slightly above your actual room size. Also - cross-ventilation makes a dramatic difference. A window or door cracked open on the opposite wall keeps the cooling cycle working.",
      },
      {
        type: "tip",
        body: "Keep a window or door slightly open on the wall opposite the cooler. This creates airflow: cool air pushes in, warm humid air exits - and the cooler works far more effectively than in a sealed room.",
      },
      {
        type: "text",
        heading: "4. Hard Water Clogs the Pads Fast",
        body: "Hard water (common in most Indian cities) causes mineral deposits on cooling pads within a few weeks, cutting efficiency noticeably. Add a tablespoon of white vinegar to the tank once a week to dissolve deposits. The pads themselves are replaceable - plan to swap them once per season for consistent performance.",
      },
      {
        type: "text",
        heading: "5. End-of-Season Care Is Non-Negotiable",
        body: "Unlike an air conditioner, an air cooler needs to be drained, dried, and stored properly at the end of the season. Leave water sitting for months and you'll return to mould, algae, and damaged pads. Before storing: drain fully, wipe the tank dry, and run the fan (without water) for 30 minutes to dry the internals.",
      },
      {
        type: "warning",
        body: "Never leave water sitting in the tank for more than 3 days if the cooler isn't running. Stagnant water breeds bacteria quickly and causes persistent musty odour that's difficult to eliminate.",
      },
    ],
  },

  // ── 3 ── Infrared vs gas ───────────────────────────────────────────────────
  {
    slug:        "infrared-vs-gas-cooktop",
    title:       "Infrared Cooktop vs Gas Burner: An Honest Comparison for Indian Kitchens",
    excerpt:     "Gas has been the default for decades. Infrared cooktops are quietly winning more households - not because they're trendy, but because they solve real problems.",
    category:    "comparison",
    readTime:    5,
    publishedAt: "2025-02-10",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["infrared cooktop", "gas burner", "kitchen", "comparison", "cooking"],
    relatedSlugs: ["infrared-cooktop-buying-guide", "lower-electricity-bill-appliances", "how-to-choose-tv-size"],
    content: [
      {
        type: "text",
        body: "Most Indian households have cooked on gas for decades. Infrared cooktops have been available for years but are only now seeing mass adoption - not because of marketing, but because people who switch tend to stay switched. Here's a clear-eyed look at both.",
      },
      {
        type: "text",
        heading: "How They Heat Differently",
        body: "A gas burner heats through an open flame - fast and familiar, but exposed. An infrared cooktop uses a glass-ceramic surface with a radiant heating element beneath it. Heat transfers directly into the cookware through contact, not through open flame. There's no combustion, no gas line, and nothing to ignite accidentally.",
      },
      {
        type: "list",
        heading: "What Works Well on Infrared",
        items: [
          "Roti and paratha - flat tawa makes excellent contact",
          "Dal and curries - pressure cooker and heavy-bottomed pots work perfectly",
          "Rice - any flat-based vessel",
          "Stir-frying and bhuna - once you adapt to the heat response",
          "Boiling, simmering, steaming - infrared excels at consistent low heat",
        ],
      },
      {
        type: "text",
        heading: "The Flat-Bottom Requirement",
        body: "This is the main adjustment. Infrared cooktops need flat-bottomed cookware for efficient heat transfer. Traditional Indian kadai (wok-shaped) and curved-base tawas won't make full contact with the surface. A flat-based stainless steel tawa and a flat-bottomed kadai solve this - both are widely available and affordable.",
      },
      {
        type: "tip",
        body: "If you're switching from gas, start with just one flat-bottomed kadai and one flat tawa. Cook on infrared for two weeks. You'll have a clear sense of compatibility before replacing your full cookware set.",
      },
      {
        type: "text",
        heading: "Safety: Infrared Wins Clearly",
        body: "No open flame means no gas leaks, no accidental fires, and no risk from children reaching over a burner. The glass surface heats the cookware but stays significantly cooler than a gas grate - reducing burn risk. For homes with children or older family members, this is a meaningful upgrade in daily safety.",
      },
      {
        type: "table",
        heading: "Side-by-Side Comparison",
        headers: ["Factor", "Gas Burner", "Infrared Cooktop"],
        rows: [
          ["Heat source",       "Open flame",       "Radiant element under glass"],
          ["Open flame",        "Yes",              "No"],
          ["Cookware needs",    "Any shape",        "Flat bottom required"],
          ["Safety",           "Moderate",         "High"],
          ["Maintenance",      "Clean grates",     "Wipe glass surface"],
          ["Running cost",     "₹5–8/hr (LPG)",   "₹10–14/hr (electricity)"],
          ["Power cut impact", "Unaffected",       "Cannot use"],
        ],
      },
      {
        type: "text",
        heading: "Running Cost Reality",
        body: "At high-intensity cooking, LPG is slightly cheaper per hour than electricity at average Indian rates. But infrared wins on zero maintenance cost, no cylinder dependency, and no regulator or pipe upkeep. For most households, the total cost of ownership is comparable over 3–5 years.",
      },
      {
        type: "text",
        heading: "Our Take",
        body: "If you cook daily Indian meals - roti, dal, sabzi, rice - an infrared cooktop handles it well once you have flat-based cookware. It's cleaner, safer, and easier to maintain. Gas still edges it for tasks like charring or direct-flame cooking. The ideal setup for many households: infrared as primary, gas cylinder as backup.",
      },
    ],
  },

  // ── 4 ── Washing machine care ──────────────────────────────────────────────
  {
    slug:        "washing-machine-care-tips",
    title:       "7 Habits That Double Your Washing Machine's Lifespan",
    excerpt:     "A washing machine is built to last 10–12 years. Most fail at 6–7 because of avoidable habits. Each of these takes under a minute.",
    category:    "maintenance",
    readTime:    4,
    publishedAt: "2025-01-22",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["washing machine", "maintenance", "lifespan", "care", "tips"],
    relatedSlugs: ["front-load-vs-top-load-washing-machine", "lower-electricity-bill-appliances", "air-cooler-buying-tips"],
    content: [
      {
        type: "text",
        body: "Washing machines are engineered to last a decade or more. The ones that fail early almost always do so because of the same handful of avoidable habits. None of these fixes take more than a minute - but together they make a real difference.",
      },
      {
        type: "text",
        heading: "1. Don't Overload - Ever",
        body: "Overloading strains the motor, drum bearings, and suspension springs - all expensive to replace. A simple rule: your laundry should fill no more than three-quarters of the drum. Clothes need space to tumble freely; packed loads also wash poorly. If in doubt, run two smaller loads.",
      },
      {
        type: "text",
        heading: "2. Use the Right Amount of Detergent",
        body: "More detergent does not mean cleaner clothes. Excess soap leaves residue on clothes and inside the drum, creating a breeding ground for mould. Use the measured amount on the detergent pack - and if you have soft water, go even slightly less. Always use HE (High Efficiency) detergent for front-load machines.",
      },
      {
        type: "warning",
        body: "Never use regular detergent in a front-load washing machine. The low-suds HE formula is specifically required - regular detergent overfoams, damages seals, and triggers error codes.",
      },
      {
        type: "text",
        heading: "3. Leave the Door Open After Every Wash",
        body: "This applies especially to front-loaders. A closed door traps moisture inside the drum and rubber gasket, creating the ideal environment for mould and that distinctive musty smell. After every wash, leave the door and detergent drawer slightly open for 30–60 minutes to let the interior dry out.",
      },
      {
        type: "text",
        heading: "4. Clean the Filter Monthly",
        body: "The coin trap / pump filter catches lint, coins, hair, and debris. If it's not cleaned, water drains slowly, clothes come out wet, and the pump motor overworks. On most machines it's behind a small panel at the front base. Pull it out, rinse under running water, wipe the housing, and push it back - 3 minutes, once a month.",
      },
      {
        type: "tip",
        body: "Set a recurring reminder on your phone: 'Clean washing machine filter' - once a month. You'll thank yourself when the machine is still running perfectly in year eight.",
      },
      {
        type: "text",
        heading: "5. Run a Drum Clean Cycle Monthly",
        body: "Most modern washing machines have a dedicated 'Drum Clean' or 'Tub Clean' mode that runs at high temperature with no clothes inside. Run it once a month - it kills bacteria, removes detergent buildup, and keeps the drum fresh. If your machine doesn't have this mode, run an empty hot wash (60°C or above) with a cup of white vinegar in the drum.",
      },
      {
        type: "text",
        heading: "6. Check Pockets Before Loading",
        body: "Coins, keys, and hair grips are the most common cause of drum damage and pump failure. A quick pocket check before each load takes five seconds and prevents damage that can cost thousands to repair.",
      },
      {
        type: "text",
        heading: "7. Level the Machine Properly",
        body: "An unlevel washing machine vibrates excessively during the spin cycle, slowly loosening drum bearings and damaging the motor mounts. All four feet should make firm, even contact with the floor. Use a spirit level app on your phone to check, and adjust the threaded feet until the machine sits flat and stable.",
      },
    ],
  },

  // ── 5 ── Smart home trends ────────────────────────────────────────────────
  {
    slug:        "smart-home-appliances-2025",
    title:       "Smart Home Appliances: What's Actually Worth It in 2025",
    excerpt:     "The 'smart' label is on almost everything now. Here's how to separate the features that genuinely improve daily life from the ones you'll use twice.",
    category:    "trends",
    readTime:    4,
    publishedAt: "2025-05-02",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["smart home", "technology", "2025", "IoT", "buying guide"],
    relatedSlugs: ["how-to-choose-tv-size", "lower-electricity-bill-appliances"],
    content: [
      {
        type: "text",
        body: "Every appliance category now has a 'smart' variant - smart TVs, smart washing machines, smart cooktops. The challenge isn't finding them; it's knowing which connected features actually change daily life and which ones sound impressive in a spec sheet and get ignored within a month.",
      },
      {
        type: "text",
        heading: "What 'Smart' Actually Means",
        body: "At its core, a smart appliance connects to your home Wi-Fi and can be controlled or monitored through an app. The useful extensions of that: remote start/stop, energy monitoring, error alerts, voice assistant integration (Alexa, Google Assistant), and OTA firmware updates that improve the appliance over time.",
      },
      {
        type: "list",
        heading: "Features That Genuinely Get Used",
        items: [
          "Remote start - start the washing machine before you get home",
          "Energy monitoring - see exactly what each appliance costs you monthly",
          "Push notifications for errors - know the machine stopped before a load is ruined",
          "Voice control for TVs - 'Hey Google, turn volume to 30' is actually useful",
          "Smart scheduling - run the dishwasher or washing machine at off-peak electricity tariff hours",
        ],
      },
      {
        type: "list",
        heading: "Features That Sound Better Than They Are",
        items: [
          "Automatic reordering (washing machine ordering detergent) - adds a subscription lock-in",
          "Facial recognition / mood-based TV recommendations - privacy cost outweighs convenience",
          "Smart cooktop auto-recipe mode - cooking is faster manually once you know the recipe",
          "App-controlled lighting in appliances - gimmick, not a daily driver feature",
        ],
      },
      {
        type: "quote",
        body: "The best smart features are the ones that work even when you don't actively use them - energy monitoring, error alerts, and firmware updates run in the background and pay off consistently.",
        attribution: "Sanjeev Awal, Owner and Founder, Elegant Galaxy",
      },
      {
        type: "text",
        heading: "Wi-Fi Dependency: The Real Risk",
        body: "Smart appliances depend on a server - usually the manufacturer's cloud - to function remotely. If the company discontinues the app or the server goes down, you lose smart features (but the appliance still works manually). When buying, check: does the appliance work fully without the app? Is it a known brand with a long-term service commitment? Elegant Galaxy appliances all operate fully offline - smart features are an addition, not a requirement.",
      },
      {
        type: "text",
        heading: "BEE Star Rating: More Important Than Smart Features",
        body: "Before asking 'is it smart?', ask 'what's the star rating?'. A 5-star rated conventional AC will cost you less over five years than a 3-star smart AC with a fancy app. Energy efficiency directly affects your electricity bill every month for the appliance's entire life. Smart features affect convenience occasionally.",
      },
      {
        type: "tip",
        body: "When comparing two appliances, calculate the annual electricity cost difference first (BEE website has a calculator). If the smarter model saves ₹2,000/year and costs ₹5,000 more, it pays back in 2.5 years. If the savings are minimal, buy on build quality and warranty instead.",
      },
    ],
  },

  // ── 6 ── Electricity bill ─────────────────────────────────────────────────
  {
    slug:        "lower-electricity-bill-appliances",
    title:       "Cut Your Electricity Bill Without Sacrificing Comfort",
    excerpt:     "Most Indian households overpay on electricity because of a few fixable habits. Small changes, appliance by appliance, add up to ₹2,000–₹5,000 saved per year.",
    category:    "tips",
    readTime:    5,
    publishedAt: "2025-05-15",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["electricity bill", "energy saving", "tips", "appliances", "India"],
    relatedSlugs: ["smart-home-appliances-2025", "washing-machine-care-tips"],
    content: [
      {
        type: "text",
        body: "The average Indian household's electricity bill has climbed 15–20% in the last two years. The appliances you already own are often the biggest levers - not because they're inefficient, but because they're used inefficiently. Here's what actually moves the needle, appliance by appliance.",
      },
      {
        type: "text",
        heading: "Television: Standby Power Is Real",
        body: "A TV left in standby mode draws 2–8W continuously. That's 70–280 units per year just sitting idle - up to ₹280 at ₹1/unit. Use the power strip switch or the TV's energy-saving 'auto power off' feature. Also: drop screen brightness from default (usually 80–100%) to 50–60%. Manufacturers ship TVs with high brightness for showroom lighting - at home it's unnecessarily bright and wastes 20–30% of screen power.",
      },
      {
        type: "tip",
        body: "Enable 'Auto Brightness' or 'Ambient Light Sensing' on your Elegant Galaxy TV - it adjusts brightness based on room lighting and can cut display power consumption by up to 25% with no visible quality difference.",
      },
      {
        type: "text",
        heading: "Washing Machine: Temperature Is Everything",
        body: "Heating water accounts for up to 90% of washing machine electricity consumption. Washing at 40°C instead of 60°C uses roughly half the energy, and modern detergents are formulated to work effectively in cold water. Reserve hot washes for bedsheets, towels, and heavily soiled items - not everyday clothing.",
      },
      {
        type: "table",
        heading: "Washing Temperature vs Energy Use",
        headers: ["Temperature", "Relative Energy Use", "Best For"],
        rows: [
          ["Cold / 20°C", "Lowest",   "Lightly worn clothes, synthetics, colours"],
          ["40°C",        "Moderate", "Regular cottons, everyday laundry"],
          ["60°C",        "High",     "Bedsheets, towels, baby clothes"],
          ["90°C",        "Highest",  "Heavily soiled items, sanitising"],
        ],
      },
      {
        type: "text",
        heading: "Air Cooler vs Air Conditioner",
        body: "An air cooler running at full speed draws 150–200W. A 1-ton AC draws 800–1200W. On a summer afternoon, that's a difference of 600–1000W every hour. Using a cooler during dry months (before monsoon) and switching to AC only when humidity makes the cooler ineffective can save ₹1,500–₹3,000 per season for a typical household.",
      },
      {
        type: "text",
        heading: "Infrared Cooktop: Use the Right Wattage Setting",
        body: "Infrared cooktops offer multiple power levels. Most people leave them on maximum and waste energy. Bringing water to a boil? Full power. Simmering dal? 40–50% power is enough. Cooking roti? 70% is sufficient after the first one. Getting familiar with the lower settings on your cooktop takes one week and makes a noticeable difference.",
      },
      {
        type: "list",
        heading: "Quick Wins That Require Zero Habit Change",
        items: [
          "Enable auto power-off on your TV (Settings → Energy → Auto Standby)",
          "Switch to cold wash as your washing machine's default cycle",
          "Use a power strip for your TV and set-top box - one switch cuts all standby draw",
          "Set your cooler to 'low' or 'medium' fan speed at night - you won't notice the difference while sleeping",
          "Cover pots and pans when boiling - cuts boiling time by 30%, saving cooktop energy",
        ],
      },
      {
        type: "text",
        heading: "The Bigger Picture: BEE Star Ratings",
        body: "The most effective long-term action is replacing old, low-rated appliances with 4- or 5-star BEE rated ones when they're due for replacement. A 5-star rated 1-ton AC can cost ₹3,000–₹5,000 less per year to run than a 10-year-old 2-star model. The payback period on a modern appliance is often 2–3 years - then you're saving every year after that.",
      },
      {
        type: "quote",
        body: "The best time to care about a star rating is before you buy - not after. Every year you run a low-efficiency appliance is a year you pay for the cheaper purchase price.",
        attribution: "Ansh Awal, Operations Manager, Elegant Galaxy",
      },
    ],
  },

  // ── 7 ── Commercial vs domestic air cooler ────────────────────────────────
  {
    slug:        "commercial-vs-domestic-air-cooler",
    title:       "Commercial Air Cooler vs Domestic Air Cooler: Which One Do You Need?",
    excerpt:     "A commercial air cooler and a domestic air cooler solve different problems. Pick the wrong one and you either overpay or undercool. Here's how to tell them apart.",
    category:    "buying-guide",
    readTime:    5,
    publishedAt: "2025-06-04",
    featured:    true,
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["commercial air cooler", "domestic air cooler", "industrial air cooler", "buying guide"],
    relatedSlugs: ["air-cooler-buying-tips", "become-appliance-distributor-india", "lower-electricity-bill-appliances"],
    content: [
      {
        type: "text",
        body: "Search for an air cooler today and you will see two very different product families: the commercial air cooler built for shops, factories, and large halls, and the domestic air cooler built for bedrooms and living rooms. They look similar from a distance, but the engineering underneath is not. Choosing the right category matters more than choosing the right brand.",
      },
      {
        type: "text",
        heading: "What Makes an Air Cooler Commercial",
        body: "A commercial air cooler is built around a bigger tank, a stronger motor, and a taller cabinet designed to move a large volume of air across an open floor. Elegant Galaxy commercial models range from 100 litres to 160 litres, with air delivery around 8,000 CMH and a 120W motor rated for continuous, all day operation. These units are meant to run for 10 to 14 hours a day in a shop, warehouse, or workshop without strain.",
      },
      {
        type: "text",
        heading: "What Makes an Air Cooler Domestic",
        body: "A domestic air cooler is compact by design. Our domestic range runs from 90 litres to 110 litres, uses a 93W motor, and is tuned for a bedroom or living room rather than an open hall. Domestic units typically run 6 to 10 hours a day, often overnight, so quieter operation and a smaller footprint matter more than raw air delivery.",
      },
      {
        type: "table",
        heading: "Commercial vs Domestic: A Direct Comparison",
        headers: ["Factor", "Commercial Air Cooler", "Domestic Air Cooler"],
        rows: [
          ["Tank capacity", "100L to 160L", "90L to 110L"],
          ["Motor", "120W Nirosha", "93W Nirosha"],
          ["Air delivery", "About 8,000 CMH", "About 5,000 CMH"],
          ["Typical daily use", "10 to 14 hours", "6 to 10 hours"],
          ["Best suited for", "Shops, factories, halls, godowns", "Bedrooms, living rooms, small offices"],
          ["Honeycomb sides", "1 or 3 side options", "3 side (all round cooling)"],
        ],
      },
      {
        type: "list",
        heading: "Questions to Ask Before You Choose",
        items: [
          "What is the floor area of the space? Above 300 sq ft, a commercial air cooler is almost always the better fit",
          "How many hours a day will it run? Continuous, long duration use favours a commercial motor and a bigger tank",
          "Is the space open or enclosed? Godowns, showrooms, and shop floors need higher air throw",
          "Do you need it to run quietly overnight? Domestic models are tuned for bedroom use",
          "Will one unit serve multiple rooms or one dedicated space? Multi room coverage usually needs a commercial unit per zone",
        ],
      },
      {
        type: "tip",
        body: "If you are cooling a retail counter, workshop floor, or godown, always size up rather than down. A commercial air cooler running comfortably below its maximum setting lasts longer than a smaller unit pushed to its limit all day.",
      },
      {
        type: "warning",
        body: "Do not use a domestic air cooler in a commercial space to save on cost. The smaller motor and tank are not built for long duty cycles, and the pump and blower wear out far sooner than expected.",
      },
      {
        type: "cta",
        heading: "Compare Every Model Side by Side",
        body: "Elegant Galaxy makes both ranges: commercial air coolers with ICE COOL and ICE STORM series, and domestic air coolers with ICE WIND and WIND STORM series. See full specifications, capacities, and pricing for every model.",
        href: "/products/air-coolers",
        label: "View All Air Coolers",
      },
      {
        type: "quote",
        body: "Most complaints about air coolers not performing come down to one thing: the wrong category was bought for the space. A commercial and a domestic cooler are not interchangeable, they are two different tools.",
        attribution: "Sanjeev Awal, Owner and Founder, Elegant Galaxy",
      },
    ],
  },

  // ── 8 ── LED TV buying guide ───────────────────────────────────────────────
  {
    slug:        "led-tv-buying-guide-features",
    title:       "LED TV Buying Guide: The Features Actually Worth Paying For",
    excerpt:     "Every LED TV spec sheet reads like a checklist of impressive sounding words. Here is which LED TV features genuinely improve what you watch, and which ones you can skip.",
    category:    "buying-guide",
    readTime:    5,
    publishedAt: "2025-06-18",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["LED TV", "smart TV", "4K TV", "buying guide"],
    relatedSlugs: ["how-to-choose-tv-size", "smart-home-appliances-2025", "lower-electricity-bill-appliances"],
    content: [
      {
        type: "text",
        body: "Walk into any electronics store and every LED TV on the wall claims to have the sharpest picture and the smartest features. Some of those claims genuinely change how good your TV looks and feels to use every day. Others are marketing language that rarely gets used after the first week. This guide separates the two before you spend a rupee.",
      },
      {
        type: "text",
        heading: "Resolution: 4K Is Worth It Above 43 Inches",
        body: "A Full HD LED TV has 1920 by 1080 pixels. A 4K LED TV has close to four times that detail. On a screen 43 inches or smaller viewed from a normal living room distance, the human eye struggles to tell the difference. On 50 inches and above, 4K becomes clearly visible, especially with streaming content and sports.",
      },
      {
        type: "text",
        heading: "Smart TV Platform: Check the App Support First",
        body: "A smart TV is only as good as the apps it runs. Before buying, confirm the platform supports the streaming services your household actually uses, plus regular software updates. A smart TV that stops receiving updates after two years will feel outdated fast, no matter how good the panel is.",
      },
      {
        type: "list",
        heading: "LED TV Features Worth Paying Extra For",
        items: [
          "Higher refresh rate (50Hz or above) for smoother motion during sports and action scenes",
          "HDR support for better contrast between bright and dark areas of the picture",
          "Multiple HDMI ports, at least three, for a set top box, gaming console, and soundbar together",
          "Voice remote with Google Assistant or Alexa built in",
          "Dolby Audio passthrough so an external soundbar reproduces sound properly",
        ],
      },
      {
        type: "list",
        heading: "Features That Rarely Get Used Day to Day",
        items: [
          "8K resolution, since almost no content is filmed or streamed in 8K yet",
          "Curved screens, which mainly help on very large displays viewed up close",
          "Built in cameras for video calling, used by a small fraction of buyers",
          "Extremely high peak brightness ratings that only matter in very bright rooms",
        ],
      },
      {
        type: "tip",
        body: "Ask to see the TV playing fast motion content in the store, not a still demo image. Motion handling and upscaling quality vary far more between models than the spec sheet suggests.",
      },
      {
        type: "table",
        heading: "Quick Reference by Room",
        headers: ["Room", "Recommended Resolution", "Refresh Rate"],
        rows: [
          ["Bedroom (32 to 43 inch)", "Full HD is fine", "50Hz"],
          ["Living room (43 to 55 inch)", "4K recommended", "50Hz or 60Hz"],
          ["Large hall (55 inch and above)", "4K essential", "60Hz preferred"],
        ],
      },
      {
        type: "cta",
        heading: "See the Full LED TV Range",
        body: "Elegant Galaxy LED TVs pair 4K and Full HD panels with a smart platform, Dolby Audio passthrough, and a voice enabled remote. Compare screen sizes, panel types, and pricing across the full lineup.",
        href: "/products/led-tvs",
        label: "Browse LED TVs",
      },
      {
        type: "text",
        heading: "Warranty Matters More Than an Extra Feature",
        body: "A panel defect or backlight issue is expensive to repair outside warranty. Before comparing features between two similarly priced LED TVs, compare the warranty period and what it actually covers, including the panel itself and not just the frame and remote.",
      },
    ],
  },

  // ── 9 ── Front load vs top load washing machine ───────────────────────────
  {
    slug:        "front-load-vs-top-load-washing-machine",
    title:       "Front Load vs Top Load Washing Machine: A Complete Buying Guide",
    excerpt:     "The front load versus top load washing machine debate comes down to your water pressure, laundry habits, and floor space. Here is how to decide with confidence.",
    category:    "comparison",
    readTime:    5,
    publishedAt: "2025-07-01",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["washing machine", "front load", "top load", "comparison", "buying guide"],
    relatedSlugs: ["washing-machine-care-tips", "lower-electricity-bill-appliances", "commercial-vs-domestic-air-cooler"],
    content: [
      {
        type: "text",
        body: "A front load washing machine and a top load washing machine both clean clothes well, but they get there in different ways, and each suits a different household. Before choosing a washing machine, it helps to understand what actually changes between the two designs, beyond just how the door opens.",
      },
      {
        type: "text",
        heading: "How Each Washing Machine Type Works",
        body: "A top load washing machine uses a central agitator or an impeller that moves water and clothes around a vertical drum. A front load washing machine tumbles clothes through a smaller amount of water in a horizontal drum, using gravity instead of an agitator. This single difference explains almost every gap between the two categories.",
      },
      {
        type: "table",
        heading: "Front Load vs Top Load at a Glance",
        headers: ["Factor", "Front Load Washing Machine", "Top Load Washing Machine"],
        rows: [
          ["Water usage", "Lower", "Higher"],
          ["Wash quality", "Gentler on fabric, thorough", "Fast, effective for everyday loads"],
          ["Water pressure needed", "Higher pressure preferred", "Works with low pressure"],
          ["Loading and unloading", "Requires bending down", "Easier at standing height"],
          ["Wash cycle time", "Longer, 60 to 120 minutes", "Shorter, 30 to 60 minutes"],
          ["Detergent required", "HE detergent only", "Regular or HE detergent"],
          ["Typical price range", "Higher", "Lower"],
        ],
      },
      {
        type: "text",
        heading: "Choose Front Load If",
        body: "You have consistent water pressure, want the gentlest possible wash for good clothes, and are comfortable paying more for lower water and energy use over the machine's life. A front load washing machine is also the better choice in homes where laundry space is limited, since units can often be stacked with a dryer.",
      },
      {
        type: "text",
        heading: "Choose Top Load If",
        body: "You want faster wash cycles, easier loading without bending, and water pressure that fluctuates through the day. A top load washing machine is generally the simpler, more forgiving choice for large families doing frequent, quick loads of everyday clothing.",
      },
      {
        type: "tip",
        body: "If you are unsure about your home's water pressure, run a simple test: fill a one litre bottle from the tap and time it. Under 10 seconds is strong pressure, suited to either type. Over 20 seconds means a top load washing machine will likely perform more reliably.",
      },
      {
        type: "warning",
        body: "Never use regular detergent in a front load washing machine. It is a low suds design, and regular detergent causes overflowing foam, damaged door seals, and repeated error codes.",
      },
      {
        type: "list",
        heading: "Capacity Guide by Household Size",
        items: [
          "2 to 3 members: 6 to 7 kg washing machine",
          "4 to 5 members: 7 to 8 kg washing machine",
          "6 or more members, or frequent bedding washes: 8 kg and above",
        ],
      },
      {
        type: "cta",
        heading: "Compare Elegant Galaxy Washing Machines",
        body: "See capacities, wash programs, and pricing across our full washing machine range before you decide.",
        href: "/products/washing-machines",
        label: "View Washing Machines",
      },
    ],
  },

  // ── 10 ── Infrared cooktop buying guide ────────────────────────────────────
  {
    slug:        "infrared-cooktop-buying-guide",
    title:       "Infrared Cooktop Buying Guide: Wattage, Safety, and What to Check",
    excerpt:     "An infrared cooktop looks simple on the shelf, but wattage, cookware compatibility, and safety features vary a lot between models. Here is what actually matters.",
    category:    "buying-guide",
    readTime:    4,
    publishedAt: "2025-07-10",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["infrared cooktop", "induction alternative", "kitchen appliances", "buying guide"],
    relatedSlugs: ["infrared-vs-gas-cooktop", "lower-electricity-bill-appliances", "led-tv-buying-guide-features"],
    content: [
      {
        type: "text",
        body: "An infrared cooktop is one of the simplest kitchen upgrades a household can make, but not every model on the shelf is built the same way. Wattage, glass surface quality, and safety cut offs vary widely between budget and better built infrared cooktops. Here is what to actually check before buying.",
      },
      {
        type: "text",
        heading: "Wattage: Match It to How You Cook",
        body: "Most infrared cooktops sit between 1200W and 2000W. A higher wattage infrared cooktop boils water faster and handles bulk cooking better, while a lower wattage model is fine for a single person or a household that mostly simmers and reheats. If you regularly cook for a family of four or more, choose 1800W or above.",
      },
      {
        type: "list",
        heading: "What to Check Before Buying an Infrared Cooktop",
        items: [
          "Flat glass ceramic surface rated for daily, repeated heating and cooling",
          "Multiple power levels, not just high, medium, and low",
          "Automatic shut off if the cooktop overheats or is left on too long",
          "A residual heat indicator so you know the surface is still hot after switching off",
          "Compatibility with flat bottomed cookware you already own, or a plan to buy some",
        ],
      },
      {
        type: "text",
        heading: "Cookware Compatibility Is the Real Deciding Factor",
        body: "An infrared cooktop transfers heat through direct surface contact, so a flat bottomed tawa, kadai, or pot performs far better than a curved or warped one. Before buying, check whether your existing cookware sits flush against a flat surface. If most of it does not, budget for one flat tawa and one flat kadai alongside the cooktop.",
      },
      {
        type: "tip",
        body: "Test cookware compatibility with a simple trick: place the pot upside down on a flat table. If it wobbles or rocks, the base is not flat enough for efficient infrared cooking.",
      },
      {
        type: "warning",
        body: "Never place empty cookware on an infrared cooktop at high power for more than a few seconds. Empty vessels heat up far faster than expected and can warp or scorch quickly.",
      },
      {
        type: "table",
        heading: "Infrared Cooktop Wattage Guide",
        headers: ["Household Size", "Recommended Wattage", "Best For"],
        rows: [
          ["1 to 2 people", "1200W to 1400W", "Daily cooking, simmering, reheating"],
          ["3 to 4 people", "1600W to 1800W", "Regular family cooking, roti, rice, dal"],
          ["5 or more people", "2000W and above", "Bulk cooking, faster boiling"],
        ],
      },
      {
        type: "cta",
        heading: "See Elegant Galaxy Infrared Cooktops",
        body: "Check wattage options, safety features, and pricing across our infrared cooktop range.",
        href: "/products/infrared-cooktops",
        label: "View Infrared Cooktops",
      },
      {
        type: "quote",
        body: "The biggest infrared cooktop complaints we hear are almost always about cookware, not the cooktop itself. Get the cookware right and the appliance performs exactly as expected.",
        attribution: "Ansh Awal, Operations Manager, Elegant Galaxy",
      },
    ],
  },

  // ── 11 ── Becoming an appliance distributor ────────────────────────────────
  {
    slug:        "become-appliance-distributor-india",
    title:       "How to Become an Appliance Distributor in India: A Practical Guide",
    excerpt:     "Home appliance distribution remains one of the steadiest retail businesses in India. Here is what it actually takes to become an appliance distributor and what to look for in a manufacturer partner.",
    category:    "trends",
    readTime:    5,
    publishedAt: "2025-07-15",
    author:      { name: "Elegant Galaxy", role: "Team" },
    tags:        ["appliance distributor", "distributorship", "business", "India"],
    relatedSlugs: ["commercial-vs-domestic-air-cooler", "smart-home-appliances-2025", "lower-electricity-bill-appliances"],
    content: [
      {
        type: "text",
        body: "Home appliance demand in India keeps climbing every summer and festival season, and manufacturers are constantly looking for reliable regional and city level distributors. Becoming an appliance distributor is a real, steady business opportunity, but it requires more than just capital. Here is what actually goes into it.",
      },
      {
        type: "text",
        heading: "What an Appliance Distributor Actually Does",
        body: "An appliance distributor buys stock from a manufacturer at wholesale rates and supplies it to retailers, dealers, or directly to bulk buyers in a defined territory. The role includes warehousing, local logistics, after sales support coordination, and building relationships with retail shops in the region.",
      },
      {
        type: "list",
        heading: "What You Need to Get Started",
        items: [
          "Warehouse or godown space to store stock, sized to your territory's demand",
          "Working capital for initial stock purchase and ongoing inventory",
          "A local delivery and logistics setup, owned or outsourced",
          "GST registration and the standard business documentation a manufacturer will require",
          "Existing or reachable relationships with local retailers and electronics shops",
        ],
      },
      {
        type: "text",
        heading: "Choosing the Right Manufacturer Partner",
        body: "Not every manufacturer offers the same distributor terms. Before committing, compare margin structure, minimum order quantity, marketing support, and how disputes or damaged stock are handled. A manufacturer that offers a genuinely exclusive territory protects your investment far better than one that appoints multiple distributors in the same city.",
      },
      {
        type: "table",
        heading: "What to Compare Between Manufacturer Offers",
        headers: ["Factor", "Why It Matters"],
        rows: [
          ["Margin structure", "Determines your actual profit per unit sold"],
          ["Minimum order quantity", "Affects how much capital you need upfront"],
          ["Territory exclusivity", "Protects you from being undercut locally"],
          ["Marketing and promotional support", "Reduces your own marketing spend"],
          ["After sales and warranty support", "Impacts retailer and customer trust in your territory"],
        ],
      },
      {
        type: "tip",
        body: "Ask any prospective manufacturer partner for the contact details of two or three existing distributors in other territories. A manufacturer confident in its distributor relationships will share this without hesitation.",
      },
      {
        type: "warning",
        body: "Be cautious of any distributorship offer that asks for a large upfront fee before sharing clear margin and territory terms in writing. Legitimate manufacturers put these terms on paper before any payment changes hands.",
      },
      {
        type: "text",
        heading: "Product Categories Worth Distributing",
        body: "Home appliances with year round or seasonal demand, such as air coolers, washing machines, LED TVs, and infrared cooktops, tend to give distributors steadier cash flow than single season products alone. A manufacturer with a diverse product range across these categories lets one distributor cover multiple demand cycles through the year.",
      },
      {
        type: "cta",
        heading: "Partner With Elegant Galaxy",
        body: "Elegant Galaxy is actively appointing distributors across air coolers, washing machines, LED TVs, and infrared cooktops. Learn about territory availability, margins, and how to apply.",
        href: "/distributors",
        label: "Apply as a Distributor",
      },
    ],
  },

];

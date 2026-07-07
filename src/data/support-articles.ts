// ── Types ─────────────────────────────────────────────────────────────────────

export type Category = "led-tvs" | "washing-machines" | "air-coolers" | "infrared-cooktops";

export type StepSection = {
  type:      "steps";
  heading?:  string;
  steps:     Array<{ title: string; body: string; tip?: string }>;
};
export type TextSection    = { type: "text";    heading?: string; body: string };
export type TipSection     = { type: "tip";     body: string };
export type WarningSection = { type: "warning"; body: string };
export type ListSection    = { type: "list";    heading?: string; items: string[] };
export type TableSection   = { type: "table";   heading?: string; headers: string[]; rows: string[][] };

export type Section =
  | StepSection | TextSection | TipSection
  | WarningSection | ListSection | TableSection;

export type SupportArticle = {
  slug:          string;
  title:         string;
  category:      Category;
  categoryLabel: string;
  description:   string;
  readTime:      number;   // minutes
  tags:          string[];
  sections:      Section[];
  relatedSlugs?: string[];
};

// ── Category meta ─────────────────────────────────────────────────────────────

export const CATEGORIES: Record<Category, { label: string; href: string; color: string }> = {
  "led-tvs":            { label: "LED TVs",           href: "/products/led-tvs",           color: "#3b82f6" },
  "washing-machines":   { label: "Washing Machines",  href: "/products/washing-machines",  color: "#8b5cf6" },
  "air-coolers":        { label: "Air Coolers",        href: "/products/air-coolers",        color: "#06b6d4" },
  "infrared-cooktops":  { label: "Infrared Cooktops", href: "/products/infrared-cooktops", color: "#f97316" },
};

// ── Articles ──────────────────────────────────────────────────────────────────

export const ARTICLES: SupportArticle[] = [

  // ── LED TVs ──────────────────────────────────────────────────────────────────

  {
    slug:          "connect-tv-to-wifi",
    title:         "How to connect your Elegant TV to WiFi",
    category:      "led-tvs",
    categoryLabel: "LED TVs",
    description:   "Step-by-step guide to connecting your Elegant Smart TV to your home WiFi network.",
    readTime:      3,
    tags:          ["wifi", "internet", "setup", "network", "tv"],
    relatedSlugs:  ["pair-magic-air-remote", "tv-picture-modes", "screen-mirroring"],
    sections: [
      {
        type: "text",
        body: "Before you begin, make sure your WiFi router is switched on and working. Have your WiFi password ready - you can usually find it on a sticker on the back of your router.",
      },
      {
        type: "steps",
        heading: "Connecting to WiFi",
        steps: [
          {
            title: "Press the Home button on your remote",
            body:  "The Home button looks like a small house icon. Pressing it will take you to the main Smart TV menu.",
          },
          {
            title: "Go to Settings",
            body:  "Use the arrow keys on your remote to navigate to the Settings icon (it looks like a gear ⚙). Press OK to open it.",
          },
          {
            title: "Open Network settings",
            body:  "Inside Settings, scroll down to find 'Network'. Press OK, then select 'WiFi' from the options.",
          },
          {
            title: "Choose your WiFi network",
            body:  "Your TV will scan and show a list of nearby WiFi networks. Use the arrow keys to highlight your home network name, then press OK.",
          },
          {
            title: "Enter your WiFi password",
            body:  "An on-screen keyboard will appear. Use the arrow keys to select each letter of your password. Take your time - passwords are case-sensitive.",
            tip:   "Pressing the coloured buttons on your remote can switch between uppercase, lowercase, and numbers on the keyboard.",
          },
          {
            title: "Select Connect",
            body:  "Move to the 'Connect' or 'OK' button on screen and press OK on your remote. Your TV will connect within a few seconds.",
          },
        ],
      },
      {
        type: "tip",
        body: "If your WiFi network doesn't appear in the list, move the TV closer to your router, or restart the router by unplugging it for 30 seconds and plugging it back in.",
      },
      {
        type: "warning",
        body: "If you see a 'Connection Failed' message, double-check your password. A single wrong character will prevent connection. Make sure Caps Lock on the on-screen keyboard is set correctly.",
      },
    ],
  },

  {
    slug:          "pair-magic-air-remote",
    title:         "How to pair your Magic Air Remote with your TV",
    category:      "led-tvs",
    categoryLabel: "LED TVs",
    description:   "Learn how to pair, reset, and troubleshoot your Elegant Magic Air Remote control.",
    readTime:      3,
    tags:          ["remote", "magic air", "pair", "bluetooth", "setup"],
    relatedSlugs:  ["connect-tv-to-wifi", "tv-picture-modes"],
    sections: [
      {
        type: "text",
        body: "The Magic Air Remote connects to your TV over Bluetooth, which is why it needs to be paired before the motion controls and voice features work. The basic IR buttons (volume, power) work immediately without pairing.",
      },
      {
        type: "steps",
        heading: "Pairing for the first time",
        steps: [
          {
            title: "Insert the batteries",
            body:  "Open the battery cover on the back of the remote. Insert 2 AA batteries, making sure the + and − ends match the markings inside.",
          },
          {
            title: "Turn on the TV",
            body:  "Use the power button on the remote or the side of the TV to switch it on. Wait for it to fully boot up (about 30 seconds).",
          },
          {
            title: "Point the remote at the TV",
            body:  "Hold the remote within 1 metre of the TV and point it directly at the screen.",
          },
          {
            title: "Press and hold Home + Back",
            body:  "Press and hold the Home button (house icon) and the Back button at the same time for 5 seconds. The remote's LED will blink twice to confirm pairing has started.',",
            tip:   "The Home button is in the centre of the remote and the Back button is usually just above the D-pad.",
          },
          {
            title: "Wait for confirmation",
            body:  "A message will appear on screen saying the remote has been paired. This takes about 5 seconds.",
          },
        ],
      },
      {
        type: "tip",
        body: "If pairing fails, remove the batteries from the remote, wait 30 seconds, reinsert them, then try the steps again from Step 3.",
      },
      {
        type: "steps",
        heading: "Re-pairing or resetting the remote",
        steps: [
          {
            title: "Go to Settings > Remote & Accessories",
            body:  "From the Home screen, go to Settings and find the 'Remote & Accessories' or 'Bluetooth Remotes' section.",
          },
          {
            title: "Remove the old remote",
            body:  "Find your Magic Air Remote in the list and select 'Unpair' or 'Forget Device'.",
          },
          {
            title: "Pair again",
            body:  "Follow the pairing steps above from Step 3.",
          },
        ],
      },
    ],
  },

  {
    slug:          "tv-picture-modes",
    title:         "Understanding picture modes on your Elegant TV",
    category:      "led-tvs",
    categoryLabel: "LED TVs",
    description:   "A plain-English guide to every picture mode on your Elegant Smart TV and when to use each one.",
    readTime:      4,
    tags:          ["picture", "display", "modes", "settings", "4k", "hdr"],
    relatedSlugs:  ["connect-tv-to-wifi", "screen-mirroring"],
    sections: [
      {
        type: "text",
        body: "Picture modes change how your TV processes and displays the image. The right mode can make a big difference to how your content looks. Here's what each one does.",
      },
      {
        type: "table",
        heading: "Picture modes explained",
        headers: ["Mode", "Best for", "What it does"],
        rows: [
          ["Standard",  "Everyday viewing",           "A balanced setting - not too bright, not too dim. Good starting point for most rooms."],
          ["Cinema",    "Movies in a dark room",       "Warmer, more natural colours with lower brightness. Designed to match how films are meant to look."],
          ["Sports",    "Live sports",                 "High contrast and motion smoothing to keep fast-moving action sharp and clear."],
          ["Game",      "Gaming consoles",             "Reduces input lag so your controller feels more responsive. Turns off processing that would slow things down."],
          ["Vivid",     "Bright rooms or demos",       "Maximum brightness and saturation. Makes the screen pop but can look unnatural for long viewing."],
          ["HDR",       "HDR content",                 "Automatically activated when you play HDR10 or Dolby Vision content. Brings out detail in bright and dark areas."],
          ["Custom",    "Your own preference",         "Lets you manually adjust brightness, contrast, sharpness, colour, and backlight to your liking."],
        ],
      },
      {
        type: "steps",
        heading: "How to change the picture mode",
        steps: [
          { title: "Press the Settings button on your remote", body: "This is usually marked with a gear icon ⚙ or the word 'Settings'." },
          { title: "Go to Picture", body: "Select 'Picture' or 'Display Settings' from the menu." },
          { title: "Select Picture Mode", body: "Highlight 'Picture Mode' and press OK. You'll see all the available modes." },
          { title: "Choose a mode", body: "Press OK on the mode you want. The change happens instantly so you can see the difference." },
        ],
      },
      {
        type: "tip",
        body: "For most people watching in a normally lit living room, Standard or Cinema mode gives the most natural, comfortable picture. Vivid mode uses more electricity and can cause eye strain over long periods.",
      },
    ],
  },

  {
    slug:          "screen-mirroring",
    title:         "How to mirror your phone screen to your Elegant TV",
    category:      "led-tvs",
    categoryLabel: "LED TVs",
    description:   "Cast or mirror your Android or iPhone screen to your Elegant Smart TV wirelessly.",
    readTime:      4,
    tags:          ["screen mirror", "cast", "android", "iphone", "wireless", "phone"],
    relatedSlugs:  ["connect-tv-to-wifi", "pair-magic-air-remote"],
    sections: [
      {
        type: "warning",
        body: "Both your phone and TV must be connected to the same WiFi network for screen mirroring to work.",
      },
      {
        type: "steps",
        heading: "Android phones",
        steps: [
          {
            title: "Enable Screen Mirror on your TV",
            body:  "Press the Input or Source button on your remote and select 'Screen Mirror' or 'Miracast' from the list.",
          },
          {
            title: "Open Quick Settings on your phone",
            body:  "Swipe down from the top of your screen to open the notification panel. Swipe down again to see all Quick Settings tiles.",
          },
          {
            title: "Tap Smart View, Cast, or Screen Mirror",
            body:  "The exact name depends on your phone brand. Samsung calls it 'Smart View', others call it 'Cast' or 'Screen Share'.",
          },
          {
            title: "Select your Elegant TV",
            body:  "Your TV name will appear in the list. Tap it to start mirroring.',",
            tip:   "If your TV doesn't appear, make sure both devices are on the same WiFi. Try turning WiFi off and on again on your phone.",
          },
        ],
      },
      {
        type: "steps",
        heading: "iPhone and iPad",
        steps: [
          {
            title: "Make sure your TV has AirPlay turned on",
            body:  "Go to Settings > AirPlay on your TV and make sure it is set to 'On' or 'Everyone on the same network'.",
          },
          {
            title: "Open Control Centre on your iPhone",
            body:  "Swipe down from the top-right corner of your screen (or swipe up from the bottom on older iPhones).",
          },
          {
            title: "Tap Screen Mirroring",
            body:  "It looks like two overlapping rectangles. Tap it and wait a moment for devices to appear.",
          },
          {
            title: "Select your Elegant TV",
            body:  "Tap your TV name in the list. Your iPhone screen will appear on the TV within a few seconds.",
          },
        ],
      },
      {
        type: "tip",
        body: "To stop mirroring, open the Screen Mirroring / Smart View panel on your phone again and tap 'Stop Mirroring' or 'Disconnect'.",
      },
    ],
  },

  // ── Washing Machines ──────────────────────────────────────────────────────────

  {
    slug:          "washing-machine-first-use",
    title:         "Setting up your washing machine for the first time",
    category:      "washing-machines",
    categoryLabel: "Washing Machines",
    description:   "Everything you need to do before running your first load in a new Elegant washing machine.",
    readTime:      5,
    tags:          ["setup", "installation", "first use", "washing machine", "new"],
    relatedSlugs:  ["washing-machine-modes", "washing-machine-error-codes"],
    sections: [
      {
        type: "warning",
        body: "Do not run a laundry load in a brand-new machine without completing these steps first. There are protective materials and residues from the factory that need to be removed.",
      },
      {
        type: "steps",
        heading: "Before the first wash",
        steps: [
          {
            title: "Remove all packaging",
            body:  "Remove the machine from the box and peel off any protective plastic film from the body and control panel. Check inside the drum - there may be foam padding or polystyrene pieces.",
          },
          {
            title: "Remove the transit bolts (front-load only)",
            body:  "If you have a front-load machine, look at the back. There will be 3–4 red or yellow plastic bolts. Remove all of them with a spanner before using the machine. Keep them in case you ever need to move the machine again.",
            tip:   "Failing to remove transit bolts will cause loud banging during the spin cycle and can permanently damage the machine.",
          },
          {
            title: "Connect the water inlet hose",
            body:  "Attach the inlet hose from the back of the machine to your tap. Tighten by hand, then give it a quarter-turn with a spanner. Do not overtighten.",
          },
          {
            title: "Place the drain hose correctly",
            body:  "The drain hose should sit in your standpipe or drain, at a height of 60–90 cm from the floor. Use the plastic guide clip that came in the box to secure it.",
          },
          {
            title: "Level the machine",
            body:  "The machine must sit flat on the floor. Adjust the feet at the bottom by turning them clockwise (to raise) or anti-clockwise (to lower). Use a spirit level or the bubble in a glass of water to check.",
          },
          {
            title: "Run a drum clean cycle empty",
            body:  "Add a small amount of liquid detergent to the detergent drawer. Set the machine to its hottest cycle (usually 90°C or 'Drum Clean'). Run the machine empty. This removes any factory residue.",
          },
        ],
      },
      {
        type: "tip",
        body: "Place the washing machine on an anti-vibration mat to reduce noise and movement, especially on hard floors.",
      },
    ],
  },

  {
    slug:          "washing-machine-modes",
    title:         "Washing machine modes and cycles - complete guide",
    category:      "washing-machines",
    categoryLabel: "Washing Machines",
    description:   "Understand every wash cycle on your Elegant washing machine and which clothes to use each one for.",
    readTime:      5,
    tags:          ["modes", "cycles", "settings", "wash", "cotton", "delicate", "quick wash"],
    relatedSlugs:  ["washing-machine-first-use", "washing-machine-error-codes"],
    sections: [
      {
        type: "text",
        body: "Each cycle is designed for a specific type of fabric or level of soiling. Using the right cycle keeps your clothes in better condition and gets them cleaner.",
      },
      {
        type: "table",
        heading: "Wash cycles explained",
        headers: ["Cycle", "Best for", "Temperature", "Spin speed"],
        rows: [
          ["Quick Wash",     "Lightly worn clothes, daily refresh",       "30°C",      "800–1000 rpm"],
          ["Cotton",         "Everyday cotton: jeans, towels, bedsheets", "40–60°C",   "1200–1400 rpm"],
          ["Synthetic",      "Polyester, nylon, blended fabrics",         "30–40°C",   "800–1000 rpm"],
          ["Delicate / Silk","Delicate fabrics, silk, lingerie",          "Cold–30°C", "400–600 rpm"],
          ["Wool",           "Woollen sweaters, hand-wash items",         "Cold–30°C", "400 rpm"],
          ["Baby Care",      "Baby clothes and bedding",                  "60°C",      "1000 rpm"],
          ["Rinse & Spin",   "Items that only need rinsing",              "Cold",      "1200 rpm"],
          ["Spin Only",      "Removing extra water after hand washing",   "-",         "1200–1400 rpm"],
          ["Drum Clean",     "Cleaning the drum itself, no laundry",      "90°C",      "800 rpm"],
        ],
      },
      {
        type: "tip",
        body: "Always check the label sewn inside your garment. The symbols on it tell you exactly what temperature and spin speed are safe for that fabric.",
      },
      {
        type: "list",
        heading: "Detergent tips",
        items: [
          "Use liquid detergent for cold or low-temperature washes - powder may not dissolve fully.",
          "Never exceed the MAX line in the detergent drawer. Too much detergent leaves residue on clothes and inside the machine.",
          "Use a separate fabric softener in the softener compartment (usually marked with a flower symbol).",
          "For a drum clean cycle, use a washing machine cleaner tablet instead of normal detergent.",
        ],
      },
    ],
  },

  {
    slug:          "washing-machine-error-codes",
    title:         "Washing machine error codes explained",
    category:      "washing-machines",
    categoryLabel: "Washing Machines",
    description:   "What each error code on your Elegant washing machine display means and how to fix it.",
    readTime:      4,
    tags:          ["error", "fault", "code", "E1", "E2", "repair", "fix", "blinking"],
    relatedSlugs:  ["washing-machine-first-use", "washing-machine-modes"],
    sections: [
      {
        type: "text",
        body: "When your washing machine detects a problem, it shows an error code on the display and usually stops the cycle. Most errors are easy to fix yourself without needing an engineer.",
      },
      {
        type: "table",
        heading: "Common error codes",
        headers: ["Code", "Meaning", "What to do"],
        rows: [
          ["E1", "Water is not filling up", "Check the tap is fully open. Check the inlet hose is not kinked. Check the inlet filter for blockages."],
          ["E2", "Water is not draining",    "Check the drain hose is not kinked or blocked. Clean the pump filter (see your manual for location). Make sure the drain is not higher than 90 cm."],
          ["E3", "Drum not spinning",        "The load may be unbalanced - open the door, rearrange clothes, and restart. Check nothing is blocking the drum."],
          ["E4", "Water overflowing",        "Too much detergent was used. Run a rinse-only cycle. Reduce detergent in future washes."],
          ["E5", "Temperature sensor error", "Turn the machine off and on. If it persists, contact our service team."],
          ["E6", "Motor error",              "Turn the machine off at the wall, wait 2 minutes, and try again. If the error returns, contact service."],
          ["E7", "Door not closed",          "Push the door firmly until it clicks. Make sure no clothes are caught in the door seal."],
          ["E8", "Unbalanced load",          "Open the door, redistribute the clothes evenly, and restart the cycle."],
        ],
      },
      {
        type: "tip",
        body: "For any error not listed above, or if an error keeps returning after you've tried the fix, call our customer care team on +91 95406 99333. Have your machine's model number ready (found on the sticker inside the door).",
      },
    ],
  },

  // ── Air Coolers ───────────────────────────────────────────────────────────────

  {
    slug:          "air-cooler-setup",
    title:         "Setting up your Elegant air cooler for the first time",
    category:      "air-coolers",
    categoryLabel: "Air Coolers",
    description:   "How to position, fill, and start your Elegant air cooler for the best cooling performance.",
    readTime:      4,
    tags:          ["setup", "first use", "cooler", "water", "installation", "position"],
    relatedSlugs:  ["air-cooler-cleaning", "air-cooler-modes"],
    sections: [
      {
        type: "steps",
        heading: "Setting up your cooler",
        steps: [
          {
            title: "Choose the right position",
            body:  "Place the cooler near a window or open door. Air coolers work by evaporating water - they need a flow of fresh, dry air to work well. Avoid placing them in the centre of a closed room.",
            tip:   "Cross-ventilation gives the best results. Place the cooler opposite an open window so fresh air is drawn in from one side and humid air exits the other.",
          },
          {
            title: "Fill the water tank",
            body:  "Remove the water tank or open the fill panel on top (depending on your model). Fill with clean, cold water up to the MAX line. Do not overfill.",
          },
          {
            title: "Add ice for extra cooling (optional)",
            body:  "Most Elegant coolers have an ice compartment. Adding a tray of ice cubes will cool the air by an extra 3–5°C for about 30–45 minutes.",
          },
          {
            title: "Plug in and switch on",
            body:  "Plug the cooler into a standard 5-amp socket. Press the Power button. Start with the Fan speed on Low and the Water Pump switched on.",
          },
          {
            title: "Adjust the louvers",
            body:  "Use the direction controls or manually move the louvers (the horizontal slats) to direct airflow towards you. Most models also have an auto-swing function.",
          },
        ],
      },
      {
        type: "warning",
        body: "Do not run the cooler without water. Running it dry will damage the cooling pads and may burn out the pump. Always check the water level before switching on.",
      },
      {
        type: "tip",
        body: "Air coolers work best in dry climates. In very humid weather (above 80% humidity) the cooling effect is reduced because the air is already saturated with moisture.",
      },
    ],
  },

  {
    slug:          "air-cooler-cleaning",
    title:         "How to clean your air cooler - pads, tank, and body",
    category:      "air-coolers",
    categoryLabel: "Air Coolers",
    description:   "Keep your Elegant air cooler performing at its best with this regular cleaning guide.",
    readTime:      5,
    tags:          ["clean", "maintenance", "pads", "tank", "hygiene", "smell"],
    relatedSlugs:  ["air-cooler-setup", "air-cooler-modes"],
    sections: [
      {
        type: "text",
        body: "Regular cleaning prevents the musty smell that can develop in air coolers, and keeps the cooling pads working efficiently. Clean the water tank weekly and the pads once a month.",
      },
      {
        type: "warning",
        body: "Always switch the cooler off and unplug it from the wall before cleaning. Never clean electrical components with water.",
      },
      {
        type: "steps",
        heading: "Cleaning the water tank (weekly)",
        steps: [
          { title: "Drain all the water", body: "Use the drain plug at the bottom of the tank (or tilt the cooler if there is no plug). Empty all the water out." },
          { title: "Wipe the inside of the tank", body: "Use a soft cloth dampened with a diluted vinegar solution (1 part white vinegar, 4 parts water) to wipe the inside of the tank. This removes mineral deposits and prevents algae." },
          { title: "Rinse thoroughly", body: "Rinse the tank with clean water two or three times until there is no vinegar smell. Refill with fresh water." },
        ],
      },
      {
        type: "steps",
        heading: "Cleaning the cooling pads (monthly)",
        steps: [
          { title: "Remove the side panels", body: "Most Elegant coolers have clip-on side panels that you can gently pull off to access the cooling pads. Check your model's manual if you're unsure." },
          {
            title: "Take out the pads",
            body:  "The pads are the thick honeycomb panels. Lift them out carefully.",
            tip:   "Note which way the pads were facing before removing them so you can put them back the right way.",
          },
          { title: "Rinse the pads under running water", body: "Hold each pad under a tap or use a gentle shower spray. Do not scrub - the honeycomb structure is delicate. Let the water run through until it comes out clear." },
          { title: "Let them dry completely", body: "Leave the pads in the sun or a well-ventilated area for at least 2 hours before refitting. Fitting wet pads is fine but fitting pads with mould or heavy deposits is not." },
          { title: "Refit the pads and panels", body: "Slide the pads back in the correct orientation and snap the panels back on." },
        ],
      },
      {
        type: "tip",
        body: "At the end of the summer season, drain all water, clean the pads, and store the cooler in a dry place with the tank empty. This prevents mould from forming during storage.",
      },
    ],
  },

  {
    slug:          "air-cooler-modes",
    title:         "Air cooler modes and settings guide",
    category:      "air-coolers",
    categoryLabel: "Air Coolers",
    description:   "What every mode and button on your Elegant air cooler does and when to use it.",
    readTime:      3,
    tags:          ["modes", "settings", "fan", "sleep", "timer", "speed", "controls"],
    relatedSlugs:  ["air-cooler-setup", "air-cooler-cleaning"],
    sections: [
      {
        type: "table",
        heading: "Modes and buttons",
        headers: ["Mode / Button", "What it does", "When to use it"],
        rows: [
          ["Fan Only",       "Runs the fan without the water pump. No evaporative cooling.",         "When you just want air circulation, or in very humid weather."],
          ["Cool (Pump On)", "Runs the fan AND the water pump. Full evaporative cooling.",           "Normal use on hot, dry days."],
          ["Sleep Mode",     "Gradually reduces fan speed over 30 minutes for quieter operation.",   "At night - it won't disturb sleep and uses less power."],
          ["Timer",          "Automatically turns the cooler off after the set time.",               "Set it for 2–4 hours before bed so it turns off while you sleep."],
          ["Speed: Low",     "Quieter, gentle airflow.",                                             "Sleeping, working, reading."],
          ["Speed: Medium",  "Balanced airflow and noise.",                                          "Daily use."],
          ["Speed: High",    "Maximum airflow.",                                                     "Very hot days, large rooms, quick cooling."],
          ["Swing / Auto",   "Automatically moves the louvers side to side to spread cool air.",     "General use for wider coverage."],
        ],
      },
      {
        type: "tip",
        body: "For the most efficient cooling: set the fan speed to High, turn the pump on, open a window behind you, and use the Swing function to spread the airflow across the room.",
      },
    ],
  },

  // ── Infrared Cooktops ─────────────────────────────────────────────────────────

  {
    slug:          "cooktop-safety",
    title:         "Infrared cooktop safety guide",
    category:      "infrared-cooktops",
    categoryLabel: "Infrared Cooktops",
    description:   "Important safety information for using your Elegant infrared cooktop safely at home.",
    readTime:      4,
    tags:          ["safety", "cooktop", "infrared", "fire", "burns", "precautions"],
    relatedSlugs:  ["cooktop-cookware", "cooktop-cleaning"],
    sections: [
      {
        type: "text",
        body: "Infrared cooktops are safe and efficient when used correctly. The glass surface does get very hot during cooking. Please read these safety points before using your cooktop for the first time.",
      },
      {
        type: "list",
        heading: "Safety rules to always follow",
        items: [
          "Never touch the glass surface during or immediately after cooking - it stays hot for up to 15 minutes after switching off.",
          "Never leave the cooktop unattended while in use.",
          "Keep children away from the cooktop. The surface looks the same whether it is hot or cold.",
          "Never place plastic, paper, cloth, or aluminium foil directly on the glass surface.",
          "Do not use cracked or broken cookware - it can crack the glass.",
          "Always place the cooktop on a flat, stable, heat-resistant surface with at least 10 cm of space on all sides.",
          "Never block the air vents on the bottom and sides of the cooktop.",
          "Do not use the cooktop outdoors or in a wet environment.",
          "Unplug the cooktop from the wall when not in use and before cleaning.",
        ],
      },
      {
        type: "warning",
        body: "If the glass surface cracks or chips, stop using the cooktop immediately and contact our service team. Do not use a cooktop with a damaged glass surface.",
      },
      {
        type: "tip",
        body: "The cooktop will automatically shut off if it overheats or if no cookware is detected on the surface for more than 60 seconds. This is a built-in safety feature - not a fault.",
      },
    ],
  },

  {
    slug:          "cooktop-cookware",
    title:         "Compatible cookware for your infrared cooktop",
    category:      "infrared-cooktops",
    categoryLabel: "Infrared Cooktops",
    description:   "Find out which pots and pans work with your Elegant infrared cooktop and which to avoid.",
    readTime:      3,
    tags:          ["cookware", "pots", "pans", "compatible", "vessels", "utensils"],
    relatedSlugs:  ["cooktop-safety", "cooktop-cleaning"],
    sections: [
      {
        type: "text",
        body: "Infrared cooktops heat the cookware directly using radiation - unlike induction which requires a magnetic base. This means a much wider range of cookware is compatible.",
      },
      {
        type: "table",
        heading: "Cookware compatibility",
        headers: ["Cookware type", "Compatible?", "Notes"],
        rows: [
          ["Stainless steel",    "✅ Yes",  "Works perfectly. The most common choice."],
          ["Aluminium",          "✅ Yes",  "Works well. Heats quickly."],
          ["Cast iron",          "✅ Yes",  "Works well. Retains heat excellently."],
          ["Copper",             "✅ Yes",  "Works, but heats very quickly - watch carefully."],
          ["Non-stick pans",     "✅ Yes",  "Works well. Use medium heat to protect the coating."],
          ["Glass / Pyrex",      "✅ Yes",  "Works, but glass heats slowly."],
          ["Clay / terracotta",  "⚠️ Partial", "Only if the base is flat and smooth. Uneven bases may crack."],
          ["Plastic containers", "❌ No",   "Will melt. Never place plastic on the cooktop."],
          ["Paper / cardboard",  "❌ No",   "Fire hazard."],
        ],
      },
      {
        type: "tip",
        body: "For best results, use flat-bottomed cookware. A curved or warped base reduces contact with the glass and leads to uneven heating.",
      },
      {
        type: "list",
        heading: "Size guidelines",
        items: [
          "Use cookware that matches the size of the heating zone - too small and heat is wasted, too large and the edges don't heat evenly.",
          "Minimum recommended base diameter: 12 cm.",
          "Maximum recommended base diameter: 26 cm for a standard burner.",
        ],
      },
    ],
  },

  {
    slug:          "cooktop-cleaning",
    title:         "How to clean your infrared cooktop glass surface",
    category:      "infrared-cooktops",
    categoryLabel: "Infrared Cooktops",
    description:   "Keep your Elegant infrared cooktop looking new with these simple cleaning steps.",
    readTime:      3,
    tags:          ["clean", "maintenance", "glass", "stains", "spills", "cooktop"],
    relatedSlugs:  ["cooktop-safety", "cooktop-cookware"],
    sections: [
      {
        type: "warning",
        body: "Never clean the cooktop while it is hot or plugged in. Always unplug it and wait until it is completely cool before cleaning.",
      },
      {
        type: "steps",
        heading: "Daily cleaning (after every use)",
        steps: [
          { title: "Let it cool completely", body: "Wait at least 15–20 minutes after cooking before cleaning. The glass retains heat long after the burner turns off." },
          { title: "Wipe with a damp cloth", body: "Use a soft microfibre cloth dampened with warm water. Wipe the glass surface in circular motions." },
          { title: "Dry immediately", body: "Wipe dry with a clean cloth. Do not leave water on the glass." },
        ],
      },
      {
        type: "steps",
        heading: "For stubborn stains and burnt food",
        steps: [
          {
            title: "Apply cooktop cleaning cream",
            body:  "Use a dedicated glass cooktop cleaner (available at most supermarkets). Apply a small amount to the stain.",
            tip:   "A few drops of white vinegar on a cloth also works well for light grease and mineral deposits.",
          },
          {
            title: "Use a cooktop scraper for burnt-on residue",
            body:  "Hold the scraper at a shallow angle (about 30 degrees) and gently push it under the burnt residue. Use slow, flat strokes. Do not use a sharp knife or scouring pad.",
          },
          { title: "Wipe clean and dry", body: "Remove all cleaning product with a damp cloth, then dry with a clean cloth." },
        ],
      },
      {
        type: "list",
        heading: "Things to never use on the glass surface",
        items: [
          "Steel wool or abrasive scouring pads - they will permanently scratch the glass.",
          "Harsh chemical cleaners or oven cleaners.",
          "Bleach or ammonia-based products.",
          "Rough cloths or paper towels with abrasive texture.",
        ],
      },
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

export function getArticle(slug: string): SupportArticle | undefined {
  return ARTICLES.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: Category): SupportArticle[] {
  return ARTICLES.filter(a => a.category === category);
}

export function searchArticles(query: string): SupportArticle[] {
  const q = query.toLowerCase().trim();
  if (!q) return ARTICLES;
  return ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.description.toLowerCase().includes(q) ||
    a.tags.some(t => t.includes(q))
  );
}

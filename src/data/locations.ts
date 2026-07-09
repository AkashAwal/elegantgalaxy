export interface LocationFaq {
  q: string;
  a: string;
}

export interface Location {
  /** URL slug, e.g. "rajasthan" -> /distributors/rajasthan */
  slug:  string;
  state: string;
  /** Major cities/hubs within the state we regularly ship bulk orders to - used for on-page copy, not a claim of local offices. */
  cities: string[];
  /** One honest, state-specific paragraph - not templated boilerplate. */
  intro: string;
  /** State-specific operational detail (transport route, hub, lead time) - must be true, not invented. */
  logistics: {
    dispatchHub:   string;
    leadTime:      string;
    note:          string;
  };
  faqs: LocationFaq[];
}

export const LOCATIONS: Location[] = [
  {
    slug:  "rajasthan",
    state: "Rajasthan",
    cities: [
      "Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Bhilwara", "Alwar",
    ],
    intro:
      "Rajasthan is one of our fastest-growing distribution regions, driven by retailers stocking up ahead of the wedding and summer cooling seasons. We regularly ship LED TVs, washing machines, and air coolers in bulk to dealers across Jaipur, Jodhpur, Udaipur and Kota, with air coolers seeing the sharpest seasonal demand given the state's dry-heat climate.",
    logistics: {
      dispatchHub: "Our consignments to Rajasthan route through our Delhi-NCR warehouse via road freight.",
      leadTime:    "5-7 business days to Jaipur and other major cities; 7-9 days to smaller towns.",
      note:        "Air coolers are our highest-volume category in this region during March-June.",
    },
    faqs: [
      {
        q: "What is the minimum bulk order quantity for Rajasthan?",
        a: "Our standard minimum order for distributors is 50 units per product line, though this can vary by category - reach out with your requirement and we'll confirm pricing and MOQ for your order.",
      },
      {
        q: "Do you provide GST-compliant invoicing for orders shipped to Rajasthan?",
        a: "Yes. Every bulk order ships with a proper GST invoice, and we require a valid GSTIN and PAN as part of the distributor application.",
      },
      {
        q: "How long does delivery take to Jaipur, Jodhpur, or Udaipur?",
        a: "Most orders reach major Rajasthan cities within 5-7 business days of dispatch from our warehouse. Smaller towns can take 7-9 days depending on the last-mile carrier.",
      },
      {
        q: "Which products see the most demand in Rajasthan?",
        a: "Air coolers lead by volume given the state's hot, dry summers, followed by LED TVs and semi-automatic washing machines. Most of our Rajasthan distributors stock all three categories together.",
      },
      {
        q: "How do I become an authorised distributor in Rajasthan?",
        a: "Fill out the distributor application below with your business and GST details. Our distribution team reviews every application and responds within 3-5 business days.",
      },
    ],
  },
];

export const getLocation = (slug: string) =>
  LOCATIONS.find((l) => l.slug === slug);

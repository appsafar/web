const plans = [
  {
    key: "base",
    isPro: false,
    features: [
      {
        key: "activeGroups",
        included: true,
      },
      {
        key: "aiItineraries",
        included: false,
      },
    ],
  },
  {
    key: "pro",
    isPro: true,
    features: [
      {
        key: "activeGroups",
        included: true,
      },
      {
        key: "aiItineraries",
        included: false,
      },
    ],
  },
  {
    key: "max",
    isPro: false,
    features: [
      {
        key: "activeGroups",
        included: true,
      },
      {
        key: "aiItineraries",
        included: true,
      },
    ],
  },
];

export { plans };

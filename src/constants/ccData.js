export const ccData = {
  el_ccUnknown: "cc_type_unknown",
  el_ccTypePrefix: "cc_type_",
  default_format: "xxxx xxxx xxxx xxxx",
  cardTypes: {
    ax: {
      name: "American Express",
      code: "ax",
      max_length: 17,
      security: 4,
      pattern: /^3[47]/,
      valid_length: [15],
      formats: {
        length: 15,
        format: "xxxx xxxxxxx xxxx",
      },
    },
    ds: {
      name: "Discover",
      code: "ds",
      max_length: 19,
      security: 3,
      pattern: /^6011/,
      valid_length: [16],
      formats: {
        length: 16,
        format: "xxxx xxxx xxxx xxxx",
      },
    },
    vs: {
      name: "Visa",
      code: "vs",
      max_length: 19,
      security: 3,
      pattern: /^4/,
      valid_length: [16],
      formats: {
        length: 16,
        format: "xxxx xxxx xxxx xxxx",
      },
    },
    ma: {
      name: "Maestro",
      code: "ma",
      max_length: 19,
      security: 3,
      pattern: /^(50(18|20|38)|5612|5893|63(04|90)|67(59|6[1-3])|0604)/,
      valid_length: [16],
      formats: {
        length: 16,
        format: "xxxx xxxx xxxx xxxx",
      },
    },
    mc: {
      name: "Mastercard",
      code: "mc",
      security: 3,
      max_length: 19,
      pattern: /^5[1-5]/,
      valid_length: [16],
      formats: {
        length: 16,
        format: "xxxx xxxx xxxx xxxx",
      },
    },
  },
};

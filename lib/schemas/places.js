PlacesSchema = new SimpleSchema({
  name: { 
    type: String,
    max: 100,
    optional: false,
    label: "Place's name",
    autoform: {
      "label-type": "stacked",
      placeholder: "Ex.: 'Santos Tenis Club'"
    }
  },
  courts: {
    type: Number,
    min: 1,
    max: 99,
    defaultValue: 1,
    label: "Number of courts",
    autoform: {
      "label-type": "stacked"
    }
  },
  approved: {
    type: Boolean,
    label: "Approved?",
    defaultValue: false
  },
  city: {
    type: String,
    optional: false,
    label: "City",
    autoform: {
      "label-type": "stacked",
      placeholder: "Ex.: 'Santos'"
    }
  },
  neighborhood: {
    type: String,
    optional: false,
    label: "Neighborhood",
    autoform: {
      "label-type": "stacked",
      placeholder: "Ex.: 'Vila Mathias'"
    }
  },
  zipCode: {
    type: String,
    optional: false,
    label: "Zipcode",
    autoform: {
      "label-type": "stacked",
      placeholder: "Ex.: '11333404'"
    }
  }
});
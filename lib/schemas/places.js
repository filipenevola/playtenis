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
  openHour: {
    type: Number,
    min: 0,
    max: 23,
    defaultValue: 8,
    optional: false,
    label: "Open hour",
    autoform: {
      "label-type": "stacked"
    }
  },
  closeHour: {
    type: Number,
    min: 0,
    max: 23,
    defaultValue: 20,
    optional: false,
    label: "Close hour",
    autoform: {
      "label-type": "stacked"
    },
    custom: function() {
      if (this.value <= this.field("openHour").value) {
        return "wrongCloseHour";
      }
    }
  },
  courts: {
    type: [Object],
    optional: false
  },
  "courts.$.slugname": {
    type: String,
    optional: true
  },
  "courts.$.name": {
    type: String,
    optional: false,
    label: "Courts's name",
    autoform: {
      "label-type": "stacked",
      placeholder: "Ex.: 'Court #1'"
    }
  },
  approved: {
    type: Boolean,
    label: "Approved?",
    defaultValue: false
  },
  street: {
    type: String,
    optional: false,
    label: "Street",
    autoform: {
      "label-type": "stacked",
      placeholder: "Ex.: 'Street Hollywood, 88'"
    }
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
  state: {
    type: String,
    optional: false,
    label: "State",
    autoform: {
      "label-type": "stacked",
      placeholder: "Ex.: 'SP'"
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
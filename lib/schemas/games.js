GamesSchema = new SimpleSchema({
  playDate: { 
    type: Date,
    optional: false,
    label: "Play's date",
    min: new Date(),
    autoform: {
      "label-type": "stacked"
    }
  },
  placeId: {
    type: String,
    optional: true
  },
  courtId: {
    type: String,
    optional: true
  }
});
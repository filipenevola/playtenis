GamesSchema = new SimpleSchema({
  playDate: { 
    type: Date,
    optional: false,
    label: "Play's date",
    min: function() {
      var date = new Date();
      date.setTime(date.getTime() - 86400000); // -1 day
      return date;
    },
    defaultValue: new Date(),
    autoform: {
      "label-type": "stacked"
    }
  },
  startHour: {
    type: Number,
    min: 0,
    max: 23,
    optional: false,
    label: "Start hour",
    autoform: {
      "label-type": "stacked"
    }
  },
  endHour: {
    type: Number,
    min: 0,
    max: 23,
    optional: false,
    label: "End hour",
    autoform: {
      "label-type": "stacked"
    },
    custom: function() {
      if (this.value <= this.field("startHour").value) {
        return "wrongEndHour";
      }
    }
  },
  players: {
    type: [Object],
    optional: false
  },
  "players.$.email": {
    type: String,
    optional: false,
    autoform: {
      "label-type": "stacked"
    },
    custom: function() {
      if (this.value === Meteor.user().email) {
        return "wrongEmail";
      }
    }
  },
  placeId: {
    type: String,
    optional: true
  },
  courtId: {
    type: String,
    optional: true
  },
  userId: {
    type: String,
    optional: true
  }
});
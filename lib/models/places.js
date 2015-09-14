Places = new Mongo.Collection("places");

Places.findApproved = function() {
  return this.find({approved: true});
};
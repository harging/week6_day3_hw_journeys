const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let startLocations = this.journeys.map(journey => journey.startLocation)
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = this.journeys.map(journey => journey.endLocation)
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const found = this.journeys.filter(journey => journey.transport === transport);
  return found;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const found = this.journeys.filter(journey => journey.distance > minDistance);
  return found;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let lengths = this.journeys.map(journey => journey.distance)
  const total = lengths.reduce((total, dist) => total += dist);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let modesOfTransport = this.journeys.map(journey => journey.transport);
 
};


module.exports = Traveller;

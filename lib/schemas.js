var EventSchema = new SimpleSchema({
  name: {
    type: String,
    max: 100
  },
  description: {
    type: String
  },
  eventDate: {
    type: Date
  },
  presenter: {
    type: String,
    max: 100
  },
  participants: {
    type: [String]
  }
});

// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  add: function(message, callback) {
    Messages._data[message.objectId] = message;
    callback(Object.values(Messages._data));
  },

  update: function(messages, callback) {
    // concat for object
    // push for array
    // Messages._data = Messages._data.concat(messages);
    for (const message of messages) {
      Message._data[message.objectId] = message;
    }
    callback(Object.values(Messages._data)); // what is this callback something about reusing this
  }

};
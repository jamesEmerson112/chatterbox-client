// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // console.log('MessagesView');
    Parse.readAll(function(messages) {
      Messages._data = messages;
    });
    MessagesView.render(Messages._data);

  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    if (!messages) {
      return;
    }
    for (let index = 0; index < messages.length; index++) {
      MessagesView.renderMessage(messages[index]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $newMessage = MessageView.render(message) || 'hello world';
    MessagesView.$chats.append($newMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list). Is this the only function?
    // could event be different types of events? befriend someone, like someone's message, acknowledge message
  }

};
// THIS CODE ADAPTED FROM STACKOVERFLOW
// https://stackoverflow.com/questions/20188792/is-there-any-way-to-insert-action-buttons-in-notification-in-google-chrome#answer-20190702

var myNotificationID = null;

/* For demonstration purposes, the notification creation
 * is attached to the browser-action's `onClicked` event.
 * Change according to your needs. */
chrome.runtime.onMessage.addListener(function() {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "cool.png",
    title: "PrivacyAlert Message",
    message: "Are you trying to sign up for a site?\nIf so, would you like to read about how your data might be used?",
    contextMessage: "PrivacyAlert v1.0",
    buttons: [{
      title: "Yes, inform me!"
    }, {
      title: "No, thanks"
    }]
  }, function(id) {
    myNotificationID = id;
  });
});

/* Respond to the user's clicking one of the buttons */
chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
  if (notifId === myNotificationID) {
    if (btnIdx === 0) {
      window.open("https://dig211.dacowan.com");
    } else if (btnIdx === 1) {
      saySorry();
    }
  }
});

/* Add this to also handle the user's clicking
 * the small 'x' on the top right corner */
chrome.notifications.onClosed.addListener(function() {
  saySorry();
});

/* Handle the user's rejection
 * (simple ignore if you just want to hide the notification) */
function saySorry() {
  alert("Keep your data safe!");
}
// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//   sample_setting: "This is how you use Store.js to remember values",
// });

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  chrome.pageAction.show(sender.tab.id);
  sendResponse();
});
// chrome.identity.getAuthToken({ interactive: true }, function (token) {
//   console.log(token);
// });
// chrome.browserAction.onClicked.addListener(function () {
//   chrome.tabs.create({ url: chrome.extension.geturl("index.html") });
// });
// window.onload = function () {
//   console.log(document.querySelector("#btn-meet"));
//   document.querySelector("#btn-meet").addEventListener("click", function () {
//     chrome.identity.getAuthToken({ interactive: true }, function (token) {
//       console.log(token);
//     });
//   });
// };

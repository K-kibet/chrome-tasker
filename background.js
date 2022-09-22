

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: chrome.extension.getURL('index.html')});
});

/*
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});*/
let color = 'green';

chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello world!");

    chrome.storage.sync.set({ color });

    chrome.notifications.create("id", {
        type: "basic",
        title: "ETH Price Alert",
        message: "ETH has reached $3400",
        iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
    }, function () {});
});


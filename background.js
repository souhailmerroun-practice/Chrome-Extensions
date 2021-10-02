let color = 'green';

chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello world!");

    chrome.storage.sync.set({ color });
});
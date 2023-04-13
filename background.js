
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("this will be blocked:", details.url)
        return { cancel: true }
    },
    { urls: currentFilters },
    ["blocking"]
)
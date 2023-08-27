chrome.contextMenus.create({
  id: "Strong",
  title: "Strong",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Strong") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date 
    const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
    const x = yup.split("").map(Number)
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://www.gematrix.org/?word=${result}` });
  }0
});

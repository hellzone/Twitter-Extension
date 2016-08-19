/**
 * Created by Owais on 13-02-2016.
 */
var contextsList=["selection","link","image","page"];
for(i=0;i<contextsList.length;i++)
{
    // chrome.contextMenus.create({
    var context=contextsList[i];
    var titleX="Twitter Toolkit:Share this "+context+" on your twitter profile";
    chrome.contextMenus.create({title: titleX, contexts:[context],onclick: clickHandler,id:context});

    /* chrome.contextMenus.create({
     title:"Twitter Social Toolkit",
     contexts:["selection"],
     onclick: myFunction
     });*/

}


function clickHandler(data,tab){
    // alert();
    switch(data.menuItemId){
        case 'selection':
            chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText),type:"panel"});
            break;
        case 'link':
            chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl),type:"panel"});
            break;
        case 'image':
            chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl),type:"panel"});
            break;
        case 'page':
            chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+(data.pageUrl),type:"panel"});
            break;
    }
    //chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+selectedText.selectionText})
}

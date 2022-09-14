function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function addbutton(){
	waitForElm("div#actions").then((menu) =>{
		btn = document.createElement("button")
		btn.textContent = "Full Player"
		btn.addEventListener("click", function(){location.href =  location.href.replace("shorts/","watch?v=")})
		menu.appendChild(btn)
})}

window.addEventListener('yt-page-data-updated',() => addbutton())

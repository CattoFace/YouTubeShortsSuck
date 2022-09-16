pattern = /.*(:\/\/).*(\.youtube\.).*(\/shorts\/).*/g

function redirect(){
	if(location.href.match(pattern)){
		location.href  =  location.href.replace("shorts/","watch?v=")
	}
}

redirect()
window.addEventListener('yt-page-data-updated',() => redirect())


function url():void{
    const url = new URL("https://www.acedev.com/users/page=2&limit=15&sort=lates")
    console.log(url.hostname)
    console.log(url.host)
    console.log(url.pathname)
    console.log(url.href)
    console.log(url.protocol)
    console.log(url.search)
}

url()
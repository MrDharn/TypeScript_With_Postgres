
function url(): void {
    const url = new URL("https://www.acedev.com/users/?page=2&limit=15&sort=lates")
    // console.log(url.host, url.hostname, url.href, url.protocol, url.search)

    const page = url.searchParams.get("page")
    const sort = url.searchParams.get("sort")
    const limit = url.searchParams.get("limit")

    console.log(page, sort, limit)

    url.searchParams.set("page", "30")
    url.searchParams.set("limit", "30")
    url.searchParams.set("sort", "questions")

    console.log(url.href)

    const queryParams = new URLSearchParams({
        page: "40", 
        limit: "40",
        sort: "dealings"

    })

    console.log(queryParams)
    console.log(queryParams.toString())
}


url()
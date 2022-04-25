//mouseover

$( "img" ).mouseover( function () {
    var src = this.getAttribute("src")
    console.log(src)
    $(".big_one").html(`<img src="${src}" alt="manga">`)
})

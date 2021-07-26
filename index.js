function updateCirclePosition(){
    var circles = document.getElementsByClassName('outerCircle')
    
    // six items
    var theta = [0, Math.PI / 3, (Math.PI * 2)/ 3, Math.PI, (Math.PI * 4) / 3, (Math.PI * 5) / 3]
    
    var screen = document.getElementById('screen')
    
    var centreX = screen.offsetHeight / 2
    var centreY = screen.offsetWidth / 2
    
    var radius = document.getElementById('middleCircle').offsetHeight
    
    for(i = 0; i < circles.length; i++){
        var x = Math.round(Math.cos(theta[i]) * radius)
        var y = Math.round(Math.sin(theta[i]) * radius)
    
        var offset = circles[i].offsetHeight / 2
    
        circles[i].style.top = (centreX + x) - offset  + 'px'
        circles[i].style.left = (centreY - y) - offset  + 'px'
    }
}

window.onresize = updateCirclePosition
window.onload = updateCirclePosition


var circles = document.getElementsByClassName('outerCircle')
for(i = 0; i < circles.length; i++){
    circles[i].onclick = (event) => {
        // Swal.fire('Hello')
        var target = event.target

        var brand = target.dataset.brand
        var shoeName = target.dataset.shoename
        var price = target.dataset.price
        var description = target.dataset.description
        var shoeImageUrl = target.dataset.imageurl

        console.log(shoeImageUrl)

        var modalText = `
            <h2 style='padding-bottom: 1rem;'>${shoeName}</h2>
            <div style='padding-bottom: 1rem;'>${description}</div>
            <h3>Price: ${price}</h3>
        
        `

        Swal.fire({
            title: brand.toUpperCase(),
            html: modalText,
            imageUrl: shoeImageUrl,
            imageHeight: 300,
            width: 1000,
            footer:"If interested in buying, please DM me <a style='padding-left: 0.25rem;' href='https://www.instagram.com/creppluglc/' target='blank;'>@creppluglc</h1>"
        })

    }
}


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
        var target = event.target


        var brand = target.dataset.brand
        var shoeName = target.dataset.shoename
        var price = target.dataset.price
        var description = target.dataset.description
        var shoeImageUrl = target.dataset.imageurl

        var modal = document.getElementById('modal')

        document.getElementById('modalImage').src = shoeImageUrl
        document.getElementById('modalBrand').innerText = brand.toUpperCase()
        document.getElementById('modalTitle').innerText = shoeName
        document.getElementById('modalDescription').innerText = description
        document.getElementById('modalPrice').innerText = price

        document.getElementById('closeButton').onclick = () => {
            modal.style.display = 'none'
        }

        modal.style.display = 'block'
    }
}

window.onclick = event => {
    let modal = document.getElementById('modal')

    if (event.target == modal){
        modal.style.display = 'none'
    }
}

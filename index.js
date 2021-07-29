// align outer circles in a circle around the middle circles
function updateCirclePosition(){
    var circles = document.querySelector('.currentPage').children
    
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

// window.onresize = updateCirclePosition()
window.onload = updateCirclePosition()

// Set modal information for each shoe
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

// Click outside modal to close
window.onclick = event => {
    let modal = document.getElementById('modal')

    if (event.target == modal){
        modal.style.display = 'none'
    }
}

// buttons cause the 'page' to change
var leftButton = document.getElementById('leftButton')
var rightButton = document.getElementById('rightButton')

var pageOrder = ['leftPage', 'mainPage', 'rightPage']

function scrollPage(direction){    
    let currentPage = document.querySelector('.currentPage')
    
    // Get current index of page 
    let currentPageIndex = 0
    for(i = 0; i < pageOrder.length; i++){
        if(currentPage.classList.contains(pageOrder[i])){
            currentPageIndex = i
        }
    }

    pageIndexToScrollTo = -1

    if(direction === "left"){
        if(currentPageIndex !== 0){
            var pageIndexToScrollTo = currentPageIndex - 1
        }
    }
    else if(direction === "right"){
        if(currentPageIndex !== 2){
            var pageIndexToScrollTo = currentPageIndex + 1
        }
    }

    if(pageIndexToScrollTo !== -1){
        currentPage.classList.remove('currentPage')
        currentPage.classList.add('hiddenPage')
        
        var pageToScrollTo = document.querySelector('.' + pageOrder[pageIndexToScrollTo])

        pageToScrollTo.classList.remove('hiddenPage')
        pageToScrollTo.classList.add('currentPage')
        updateCirclePosition()
    }
}

leftButton.onclick = () => {
    scrollPage('left')
}

rightButton.onclick = () => {
    scrollPage('right')
}
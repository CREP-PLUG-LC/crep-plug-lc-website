function updateCirclePosition(){
    var circles = document.getElementsByClassName('outerCircle')
    
    var theta = [0, Math.PI / 3, (Math.PI * 2)/ 3, Math.PI, (Math.PI * 4) / 3, (Math.PI * 5) / 3]
    
    var screen = document.getElementById('screen')
    
    var centreX = screen.offsetHeight / 2
    var centreY = screen.offsetWidth / 2
    
    var radius = 600 / 2
    
    
    for(i = 0; i < circles.length; i++){
        var x = Math.round(Math.cos(theta[i]) * radius)
        var y = Math.round(Math.sin(theta[i]) * radius)
    
        console.log(theta[i] + ' degrees')
        console.log(circles[i])
    
        var offset = circles[i].offsetHeight / 2
    
        circles[i].style.top = (centreX + x) - offset  + 'px'
        circles[i].style.left = (centreY - y) - offset  + 'px'
    }
}

window.onresize = updateCirclePosition
window.onload = updateCirclePosition



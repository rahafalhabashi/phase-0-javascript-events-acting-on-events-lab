function addEventListener() {
}

const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#FF69B4"

 document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
          moveDodgerLeft();   
        }
        else if (event.key === "ArrowRight") {
            moveDodgerRight();
        }  
    })
    
    function moveDodgerLeft() {
            const leftNumbers = dodger.style.left.replace("px", "")
            const left = parseInt(leftNumbers, 10)

            if (left > 0) {
                dodger.style.left = `${left - 10}px`
            }
        }

        function moveDodgerRight() {
                const rightNumbers = dodger.style.left.replace("px", "")
                const right = parseInt(rightNumbers, 10)
    
                if (right < 360)
                dodger.style.left = `${right + 10}px` 
            }  
const buttons = document.querySelectorAll(".tab-header button");
const content = document.querySelectorAll(".tabcontent");
// console.log(buttons);
buttons.forEach((btn) => {
    btn.addEventListener("click", function() {
        // console.log(this);
        for (i = 0; i < content.length; i++) {
            content[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let sc = this.nextElementSibling;
                console.log(this);
                console.log(sc);
                // if (sc.style.display === "block") {
                //     sc.style.display = "none";
                // } else {
                //     sc.style.display = "block";
                // }
            });
        }
    })
})
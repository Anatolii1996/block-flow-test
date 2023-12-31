let asside_buttons = document.querySelectorAll(".aside_button");
let togglerButton = document.querySelector(".navbar-toggler");
let containerPage = document.querySelector(".container_page");

for (const button of asside_buttons) {
    button.addEventListener("mouseover", () => {
        button.classList.add("view");
        let icons = button.querySelectorAll("svg  >  g > path");
        for (const icon of icons) {
            icon.setAttribute('stroke', '#1b1b1b');
        }


    })
    button.addEventListener("mouseout", () => {
        button.classList.remove("view");
        let icons = button.querySelectorAll("svg  >  g > path");
        for (const icon of icons) {
            icon.setAttribute('stroke', '#667085');
        }

    })
}



const checkWindowSize = () => {
    if (window.innerWidth > 991) {
        containerPage.classList.remove("column");
    }
}

window.addEventListener("resize", checkWindowSize);



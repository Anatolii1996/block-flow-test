let asside_buttons = document.querySelectorAll(".aside_button");

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



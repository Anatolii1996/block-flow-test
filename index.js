let asside_buttons = document.querySelectorAll(".aside_button");

for (const button of asside_buttons) {
    button.addEventListener("mouseover", () => {
        button.classList.add("view");
        let icon = button.querySelector("svg  >  g > path");
        icon.setAttribute('stroke', '#1b1b1b');

    })
    button.addEventListener("mouseout", () => {
        button.classList.remove("view");
        let icon = button.querySelector("svg  >  g > path");
        icon.setAttribute('stroke', '#667085');
    })
}

// let footer_botton=document.querySelector(".footer_button");
// footer_botton.addEventListener("mouseover", () => {
//     button.classList.add("view");
// });

footer_botton.addEventListener("mouseout", () => {
    button.classList.remove("view");
});

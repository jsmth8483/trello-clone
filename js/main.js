document.addEventListener("DOMContentLoaded", () => {
    const boardPickerBtn = document.querySelector(".board-picker-btn");
    console.log(boardPickerBtn);

    boardPickerBtn.addEventListener("click", () => {
        const boardPickerPane = document.querySelector(".board-picker-pane");
        boardPickerPane.classList.toggle("open");
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const body = document.querySelector("body");
//     const boardPickerPane = document.querySelector(".board-picker-pane");
//     const boardPickerBtn = document.querySelector(".board-picker-btn");

//     body.addEventListener("click", (e) => {
//         if (
//             boardPickerPane.classList.contains("open") &&
//             e.target !== boardPickerBtn &&
//             e.target != boardPickerPane
//         ) {
//             boardPickerPane.classList.remove("open");
//         }
//     });
// });

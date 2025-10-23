document.addEventListener("DOMContentLoaded", () => {
    const boardPickerBtn = document.querySelector(".board-picker-btn");
    console.log(boardPickerBtn);

    boardPickerBtn.addEventListener("click", () => {
        const boardPickerPane = document.querySelector(".board-picker-pane");
        boardPickerPane.classList.toggle("open");
    });
});

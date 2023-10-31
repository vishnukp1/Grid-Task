// script.js
const button = document.getElementById('button');
let isDragging = false;
let isResizing = false;
let startCol, startRow;
let startWidth, startHeight;

// Add a mousedown event listener to the button for dragging
button.addEventListener('mousedown', (e) => {
    isDragging = true;
    startCol = e.target.style.gridColumn;
    startRow = e.target.style.gridRow;
});

// Add a mouseup event listener to stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
    isResizing = false;
});

// Add a mousemove event listener for dragging
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        if (e.buttons === 1) {
            // Calculate new grid position based on mouse position
            const col = Math.floor((e.clientX - button.offsetLeft) / (button.offsetWidth / 10)) + 1;
            const row = Math.floor((e.clientY - button.offsetTop) / (button.offsetHeight / 10)) + 1;
            // Set the new grid position
            button.style.gridColumn = col;
            button.style.gridRow = row;
        }
    }
});

// Add a mousedown event listener for resizing
button.addEventListener('mousedown', (e) => {
    if (e.target === button && e.offsetX >= button.offsetWidth - 10 && e.offsetY >= button.offsetHeight - 10) {
        isResizing = true;
        startWidth = button.style.width;
        startHeight = button.style.height;
    }
});

// Add a mousemove event listener for resizing
document.addEventListener('mousemove', (e) => {
    if (isResizing) {
        if (e.buttons === 1) {
            // Calculate new size based on mouse position
            const newColSpan = Math.floor((e.clientX - button.offsetLeft) / (button.offsetWidth / 10)) + 1 - startCol;
            const newRowSpan = Math.floor((e.clientY - button.offsetTop) / (button.offsetHeight / 10)) + 1 - startRow;

            // Set the new size
            button.style.gridColumn = startCol + " / span " + newColSpan;
            button.style.gridRow = startRow + " / span " + newRowSpan;
        }
    }
});

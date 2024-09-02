let widthItem = 974;
let currentWidth = 0;

document.getElementById("next").onclick = function () {
    const listItem = document.querySelectorAll(".review-item");
    let length = listItem.length;
    const maxWidthListItem = (length - 1) * widthItem;
    if (currentWidth < maxWidthListItem) {
        currentWidth += widthItem;
        listItem.forEach((item) => {
            item.style.transform = `translateX(-${currentWidth}px)`;
        });
    }
};

document.getElementById("previous").onclick = function () {
    const listItem = document.querySelectorAll(".review-item");
    if (currentWidth > 0) {
        currentWidth -= widthItem;
        listItem.forEach((item) => {
            item.style.transform = `translateX(-${currentWidth}px)`;
        });
    }
};

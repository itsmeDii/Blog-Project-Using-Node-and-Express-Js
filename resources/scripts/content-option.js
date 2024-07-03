document.addEventListener("DOMContentLoaded", function() {
    const optionButtons = document.querySelectorAll(".option-btn");
    const optionContainers = document.querySelectorAll(".option-item");
    const deleteButtons = document.querySelectorAll(".delete-btn");
    const contentDiv = document.querySelector('.content');
    const containerPosts = contentDiv.querySelectorAll('.container-post');

    optionButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            optionContainers.forEach((container, containerIndex) => {
                if (containerIndex === index) {
                    container.classList.toggle("active");
                } else {
                    container.classList.remove("active");
                }
            });
        });
    });
});

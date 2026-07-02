const no = document.getElementById("no");
const yesBtn = document.getElementById("yes-btn");
const submitBtn = document.getElementById("submit-btn");
const page3SubmitBtn = document.getElementById("page3-submit-btn");

const responses = {
  answer: "Not selected",
  date: "",
  time: "",
  food: ""
};

no.addEventListener("mouseover", (event) => {
    const rect = no.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 120) {
        const x = Math.random() * (window.innerWidth - no.offsetWidth);
        const y = Math.random() * (window.innerHeight - no.offsetHeight);
        no.style.position = "fixed";
        no.style.left = x + "px";
        no.style.top = y + "px";
    }
});

no.addEventListener("click", () => {
    responses.answer = "No";
});

yesBtn.addEventListener("click", () => {
    responses.answer = "Yes";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    responses.date = document.getElementById("date-picker").value;
    responses.time = document.getElementById("time-picker").value;
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
});

const imageButtons = document.querySelectorAll(".image-option");
const selectedImage = document.getElementById("selected-image");

imageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        imageButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        responses.food = button.querySelector("img").alt;

        if (selectedImage) {
            selectedImage.src = button.getAttribute("data-image");
            selectedImage.alt = button.querySelector("img").alt;
        }
    });
});

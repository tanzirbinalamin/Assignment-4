
const totalCount = document.getElementById("total");
const interviewCount = document.getElementById("interview");
const rejectedCount = document.getElementById("rejected");

const allTab = document.getElementById("all-filter-btn");
const interviewTab = document.getElementById("interview-filter-btn");
const rejectedTab = document.getElementById("rejected-filter-btn");

const tabButtons = document.querySelectorAll(".tab-btn");


function calculate() {
    const allCards = document.querySelectorAll(".job-card");
    let interview = 0;
    let rejected = 0;

    allCards.forEach(card => {
        const status = card.dataset.status;
        if (status === "interview") interview++;
        if (status === "rejected") rejected++;
    });

    totalCount.textContent = allCards.length;
    interviewCount.textContent = interview;
    rejectedCount.textContent = rejected;
}


function toggleStyle(id){

     allTab.classList.add('bg-gray-100')
    interviewTab.classList.add('bg-gray-100')
    rejectedTab.classList.add('bg-gray-100')


     allTab.classList.remove('bg-sky-100')
    interviewTab.classList.remove('bg-sky-100')
    rejectedTab.classList.remove('bg-sky-100')

    const selected=document.getElementById(id);

    selected.classList.remove('bg-gray-100')
    selected.classList.add('bg-sky-100')
 
}


tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        toggleStyle(button.id); // Active tab style

        const filter = button.dataset.filter;

        // Always query all job cards fresh
        const jobCards = document.querySelectorAll(".job-card");

        jobCards.forEach(card => {
            if (filter === "all") {
                card.classList.remove("hidden");
            } else {
                card.classList.toggle("hidden", card.dataset.status !== filter);
            }
        });
    });
});


document.addEventListener("click", e => {
    if (e.target.classList.contains("interview-btn")) {
        const card = e.target.closest(".job-card");
        const statusText = card.querySelector(".job-status");

        statusText.textContent = "Interview";
        statusText.className =
            "job-status mt-2 px-4 py-2 bg-green-200 inline-block";

        card.dataset.status = "interview";
        calculate();
    }

    if (e.target.classList.contains("rejected-btn")) {
        const card = e.target.closest(".job-card");
        const statusText = card.querySelector(".job-status");

        statusText.textContent = "Rejected";
        statusText.className =
            "job-status mt-2 px-4 py-2 bg-red-200 inline-block";

        card.dataset.status = "rejected";
        calculate();
    }
});


window.addEventListener("DOMContentLoaded", () => {
    toggleStyle("all-filter-btn");

    const jobCards = document.querySelectorAll(".job-card");
    jobCards.forEach(card => card.classList.remove("hidden"));

    calculate();
});

const dateElement = document.getElementById("current-date");
const dueElement = document.getElementById("due");
const totalElement = document.getElementById("total");
const addButton = document.getElementById("add-button");
const duelist = document.querySelector("#due-list");
const totalList = document.querySelector("#total-list-body");
const inputform = document.getElementById("input-form");



function updateDate(dateElement) {
    dateElement.textContent = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return dateElement.textContent;
}
updateDate(dateElement);

function formatDate(d) {
    d = new Date(d);
    const year = String(d.getFullYear());
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function addDays(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return formatDate(d);
}

let problems = [];

inputform.addEventListener("submit", (e) => {
    e.preventDefault();


    const id = Date.now();
    const problemInput = document.getElementById("input-field").value.trim();
    const typeInput = document.getElementById("problem-type").value;
    const linkInput = document.getElementById("link-field").value;
    const difficultyInput = document.getElementById("difficulty").value;

     if(!problemInput || !typeInput || !linkInput || !difficultyInput) {
        alert("fill");
        return;
    }
    problems.push({
        id: id,
        problem: problemInput,
        type: typeInput,
        link: linkInput,
        difficulty: difficultyInput,
        solved: false
    });

    totalElement.textContent = `Total problems: ${problems.length}`;

    localStorage.setItem("problems", JSON.stringify(problems));
    console.log(problems);
    inputform.reset();


    totalList.replaceChildren();
    problems.forEach((problem) => {
        const row = document.createElement("tr");
        [problem.id, problem.problem, problem.link, problem.type, problem.difficulty].forEach((value, index) => {
            const cell = document.createElement("td");
            if (index === 2) {
                const link = document.createElement("a");
                link.href = value;
                link.textContent = value;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                cell.append(link);
            } else {
                cell.textContent = value;
            }
            row.append(cell);
        });
        totalList.append(row);
    });

});

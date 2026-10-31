const dateElement = document.getElementById("current-date");
const dueElement = document.getElementById("due");
const totalElement = document.getElementById("total");
const addButton = document.getElementById("add-button");
const duelist = document.querySelector("#due-list-body");
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


let problems  = JSON.parse(localStorage.getItem("problems")) || []
render();

function render() {
    totalElement.textContent = `Total problems: ${problems.length}`;
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


        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.dataset.id = problem.id;
        deleteCell.append(deleteButton);
        row.append(deleteCell);
        totalList.append(row);
    });
    duerender();

}
function duerender(){
    const today = addDays(0)
    const dueproblems = problems.filter((problem) => problem.due <= today);
    console.log("due problems are", dueproblems);
    dueElement.textContent = `due problems: ${dueproblems.length}`;
    duelist.replaceChildren();

    dueproblems.forEach((problem) => {
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

        const resolvecell = document.createElement("td");
        const resolveButton = document.createElement("button");
        resolveButton.type = "button";
        resolveButton.textContent = "resolve";
        resolveButton.classList.add("resolve-btn");
        resolveButton.dataset.id = problem.id;
        resolvecell.append(resolveButton);
        row.append(resolvecell);
        duelist.append(row);
    });

}


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
        solved: false,
        due:addDays(7)
    });

    localStorage.setItem("problems", JSON.stringify(problems));
    console.log(problems);
    inputform.reset();
    render();
});

totalList.addEventListener("click", (event) => {
    if (!event.target.classList.contains('delete-btn')) return;
    const btn = event.target.closest(".delete-btn");
    const id = Number(btn.dataset.id);

    problems = problems.filter((problem) => problem.id !== id);

    localStorage.setItem("problems", JSON.stringify(problems));
    render();
});

duelist.addEventListener("click", (event) =>{
    if(!event.target.classList.contains('resolve-btn')) return;

    const duebtn = event.target.closest('.resolve-btn');
    const id = Number(duebtn.dataset.id);
    const problem = problems.find((p) => p.id === id);
    problem.due = addDays(7);
    localStorage.setItem("problems", JSON.stringify(problems));
    render();


})
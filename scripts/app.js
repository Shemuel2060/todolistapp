

const addtaskBtn = document.querySelector(".task-btn");
const printBtn = document.querySelector(".print-btn");


function addTask(){
    // adds row to the table
    const tbody = document.querySelector("tbody");
   const trow = document.createElement("tr");
   const cell1 = document.createElement("td")
   const cell2 = document.createElement("td")

   // append both cells to the row
   trow.appendChild(cell1);
   trow.appendChild(cell2);

   // append the row to the tbody
   tbody.append(trow);
}

addtaskBtn.addEventListener("click",addTask);

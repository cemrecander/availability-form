const form = document.getElementById("form");
const table = document.getElementById("table");

form.addEventListener("submit", // when I click submit button
    function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        const checkedTimeSlots = form.querySelectorAll('input[name=time_slot]:checked'); //Getting whole checked boxes
        availableTimeSlots = [];
        for (const timeSlot of checkedTimeSlots) {
            availableTimeSlots.push(timeSlot.value);
        }
        if (table.innerHTML === '') {
            //console.log("div is empty");
            // Adding table element into the div 
            table.innerHTML += `<table class="table table-dark table-striped"><thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Available Time Slot</th>
                                        <th></th>
                                    </tr></thead>
                                    <tbody>
                                    </tbody>`
            addRowToTable();
        }
        else {
            addRowToTable();
        }
        function addRowToTable() {
            //Adding rows to table 
            var tbodyRef = table.getElementsByTagName('tbody')[0];
            var newRow = tbodyRef.insertRow();
            var nameCell = newRow.insertCell();
            var timeCell = newRow.insertCell();
            var deleteButton = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>`
            deleteCell = newRow.insertCell();
            var nameText = document.createTextNode(name);
            var timeText = document.createTextNode(availableTimeSlots);
            nameCell.appendChild(nameText);
            timeCell.appendChild(timeText);
            clearInputs();
        }
        function clearInputs() {
            //Cleaning textbox and checkboxes
            form.elements.name.value = ""
            checkedTimeSlots.forEach(timeSlot => {
                timeSlot.checked = false;
            });
        }
    })
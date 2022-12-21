const form = document.getElementById("form");
const table = document.getElementById("table");
//const namesAndTimeSlots = {};
form.addEventListener("submit",
    function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        const checkedTimeSlots = form.querySelectorAll('input[name=time_slot]:checked'); //Getting whole checked boxes
        tempArray = [];
        for (const timeSlot of checkedTimeSlots) {
            tempArray.push(timeSlot.value);
        }
        //TimeSlots.push(tempArray);
        //namesAndTimeSlots[name] = tempArray;

        // for (var name in namesAndTimeSlots) {
        //     console.log(name + " : " + namesAndTimeSlots[name]);
        // }

        if (table.innerHTML === '') {
            //console.log("div is empty");
            table.innerHTML += `<table class="table table-secondary table-striped"><thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Available Time Slot</th>
                                    </tr></thead>
                                    <tbody>
                                    </tbody>`
        }
        else {
            var tbodyRef = table.getElementsByTagName('tbody')[0];
            var newRow = tbodyRef.insertRow();
            var nameCell = newRow.insertCell();
            var timeCell = newRow.insertCell();
            var nameText = document.createTextNode(name);
            var timeText = document.createTextNode(tempArray);
            nameCell.appendChild(nameText);
            timeCell.appendChild(timeText);
        }
    })
//---------------------------------------------------------------
// const form = document.getElementById("form");
// const table = document.getElementById("table");
// const Names = [];
// const TimeSlots = [];
// form.addEventListener("submit",
//     function (event) {
//         event.preventDefault();
//         var name = document.getElementById("name").value;
//         Names.push(name);
//         const checkedTimeSlots = form.querySelectorAll('input[name=time_slot]:checked'); //Getting whole checked boxes
//         tempArray = [];
//         for (const timeSlot of checkedTimeSlots) {
//             tempArray.push(timeSlot.value);
//         }
//         addToArray(tempArray);
//         Names.forEach(name => console.log(name));
//         if (table.innerHTML === '') {
//             //console.log("div is empty");
//             table.innerHTML += `<table class="table table-secondary table-striped">
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Available Time Slot</th>
//                                     </tr>`
//         }
//         else {

//             table.innerHTML += `<tr>
//                                     <td>${name}</td>
//                                     <td>${checkbox}</td>
//                                 </tr>`
//         }
//     })
// function addToArray(availableTimeSlots) {
//     TimeSlots.push(availableTimeSlots);
//     TimeSlots.forEach(element => console.log(element));
// }
//----------------------------------------------------------------
// function onAddWebsite(e) {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     checkboxes = [];
//     for (var i = 1; i < 6; i++) {

//         checkbox = document.getElementById('checkbox' + String(i));
//         if (checkbox.checked == true)
//             checkboxes.push(checkbox.value)
//     }
//     console.log(checkboxes)
//     table.innerHTML += `
//     <table class="table table-secondary table-striped">
//     <tr>
//         <th>Name</th>
//         <th>Available Time Slot</th>
//     </tr>
//     <tr>
//         <td>${name}</td>
//         <td>${checkbox}</td>
//     </tr>
//     </table>`;

// }

// form.addEventListener('submit', onAddWebsite)
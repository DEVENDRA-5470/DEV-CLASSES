let mainf=document.getElementById('main');
let deposite=document.getElementById('deposite');
let withdraw=document.getElementById('withdraw');
function main(){
        mainf.style.display="block";
        deposite.style.display="none";
        withdraw.style.display="none";


}

function depo(){
    deposite.style.display="block";
    mainf.style.display="none";
    withdraw.style.display="none";

}

function withd(){
    withdraw.style.display="block";
    deposite.style.display="none";
}




let entries = [];

function save_me(event) {
    event.preventDefault();

    // Retrieve input values
    let email = document.getElementById("customer-email").value;
    let mobile = document.getElementById("customer-mobile").value;
    let name = document.getElementById("customer-name").value;
    let balance = document.getElementById("customer-balance").value;

    // Generate a unique ac_no for the entry
    let customer_ac_no = document.getElementById('customer-ac-no').value || String(Math.round(Math.random() * 1000));

    // Create an object to store the entry
    let entry = {
        ac_no: customer_ac_no,
        email: email,
        mobile: mobile,
        name: name,
        balance: balance
    };

    // Store the entry in localStorage using the ac_no as the key
    localStorage.setItem(`entry_${entry.ac_no}`, JSON.stringify(entry));

    document.querySelector("form").reset(); // Clears the form fields
    get_data(); // Update the UI with the new entry
}


// --------------------------------

function del(button, entry_ac_no) {
    // Remove the entry from localStorage
    localStorage.removeItem(`entry_${entry_ac_no}`);

    // Remove the row from the table (permanent removal from the DOM)
    let row = button.closest('tr'); // Find the closest <tr> ancestor
    row.remove(); // Remove the row from the DOM
}

// --------------------------------------------------------

function get_data() {
    let entriesContainer = document.getElementById("list");
    entriesContainer.innerHTML = ''; // Clear existing entries

    // Iterate over localStorage keys to find entries
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith('entry_')) { // Check if the key starts with 'entry_'
            let entry = JSON.parse(localStorage.getItem(key));

            // Create a row for the entry
            let row = `
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-black-500 dark:hover:bg-blue-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase">
                    ${"DREMER"+entry.ac_no}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase">
                    ${entry.name}
                </th>
                <td class="px-6 py-4 text-white">
                    ${entry.mobile}
                </td>
                <td class="px-6 py-4 text-white">
                    ${entry.email}
                </td>
                <td class="px-6 py-4 text-white">
                    ${entry.balance}
                </td>
                <td class="px-6 py-4 text-white text-center">
                  <button class="bg-green-500 px-1 py-0.5 w-full rounded mt-1" onclick="edit(${entry.ac_no})">EDIT</button>
                  <br>
                  <button class="bg-red-500 px-1 py-0.5 rounded w-full mt-1" onclick="del(this, ${entry.ac_no})">DELETE</button>
                  <br>
                  <button class="bg-blue-600 px-1 py-0.5 rounded w-full mt-1" onclick="depo()">DEPOSIT</button>
                  <br>
                  <button class="bg-yellow-600 px-1 py-0.5 rounded w-full mt-1" onclick="withd()">WITHDRAW</button>
                </td>
            </tr>
            `;
            entriesContainer.innerHTML += row;
        }
    }
}


// --------------------------------------------
function edit(entry_ac_no) {
    // Retrieve the specific entry from localStorage using the ac_no
    let entry = JSON.parse(localStorage.getItem(`entry_${entry_ac_no}`));

    if (!entry) {
        alert("Entry not found.");
        return;
    }

    // Populate the form fields with the entry data for editing
    document.getElementById('customer-ac-no').value = entry.ac_no;
    document.getElementById("customer-name").value = entry.name;
    document.getElementById("customer-mobile").value = entry.mobile;
    document.getElementById("customer-email").value = entry.email;
    document.getElementById("customer-balance").value = entry.balance;
}

get_data(); // Load the data on page load


// ------------------------------------------------------

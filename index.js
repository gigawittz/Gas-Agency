document.body.style.backgroundColor="#f01648";
document.body.style.fontFamily="mono-space";
const home=document.body.innerHTML=`<h1>Gas Refill Centre</h1><span id="base">
<button id="home" style="background-color:#c1d6ab;padding:10px;border-radius:25px;margin:10px auto;">Home</button>
</span>
<span><button id="status" style="background-color:#c1d6ab;padding:10px;border-radius:25px;margin:10px auto;">Status</button></span>
<hr>
<div id="main" style="margin:10px auto;padding:10px;display:flex;">
<span><strong>Cust. Name:-<input type="text" id="name" placeholder="please enter full name"></strong><br><br>
<strong>Last delivery date:-<input type="date" id="Ldate" placeholder="please enter date"></strong><br><br>
</span><strong>Connection Type:-<select id="connectionType"><option>select</option><option value="house-hold">house-hold</option><option value="Commercial">Commercial</option></select></strong>
</div><hr>
<div id="result"></div>`;

const status = document.querySelector('#status');
status.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const lastDateInput = document.querySelector('#Ldate').value;
    const connectionType = document.querySelector('#connectionType').value;
    
    const today = new Date();
    const lastDate = new Date(lastDateInput);

    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    const yyyy = today.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedDate = mm + '/' + dd + '/' + yyyy;

    // Rectified: Math logic for day difference
    const diffInMs = today - lastDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const resultDiv = document.querySelector('#result');
    
    if(connectionType === "house-hold" && diffInDays >= 25) {
        resultDiv.innerHTML = `Hi ${name}, your refill cylinder will be delivered by (${formattedDate} +3) days.`;
    }
    else if(connectionType === "Commercial" && diffInDays >= 15) {
        resultDiv.innerHTML = `Hi ${name}, your refill cylinder will be delivered by (${formattedDate} +3) days.`;
    }
    else {
        resultDiv.innerHTML = `Sorry ${name}, you are not eligible for the cylinder as of today. Please try later.`;
    }
});

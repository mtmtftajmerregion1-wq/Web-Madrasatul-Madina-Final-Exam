console.log("✅ script.js is working!");
alert("JavaScript Connected Successfully!");

function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      document.getElementById("page-content").innerHTML = html;

      // 🚀 اس لائن سے داخلہ فارم کے بٹن دوبارہ attach ہو جائیں گے
      if (page.includes("admission.html")) {
        initAdmissionPage();
      }
    });
}

function initAdmissionPage() {
  const formDiv = document.getElementById("addAdmissionForm");
  const table = document.getElementById("admissionTable");
  const newBtn = document.getElementById("newEntryBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const form = document.getElementById("admissionFormInner");

  if (!newBtn) return; // safety check

  newBtn.addEventListener("click", () => {
    table.style.display = "none";
    formDiv.style.display = "block";
  });

  cancelBtn.addEventListener("click", () => {
    formDiv.style.display = "none";
    table.style.display = "table";
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = {
      studentName: document.getElementById("studentName").value,
      fatherName: document.getElementById("fatherName").value,
      className: document.getElementById("className").value,
      dob: document.getElementById("dob").value,
      mobile: document.getElementById("mobile").value,
      address: document.getElementById("address").value
    };
    const list = JSON.parse(localStorage.getItem("admissions")) || [];
    list.push(data);
    localStorage.setItem("admissions", JSON.stringify(list));
    displayAdmissions();
    form.reset();
    formDiv.style.display = "none";
    table.style.display = "table";
  });

  document.querySelector("#admissionTable tbody").addEventListener("click", e => {
    if (e.target.classList.contains("delete-btn")) {
      const index = e.target.dataset.index;
      deleteAdmission(index);
    }
  });

  displayAdmissions();
}

function displayAdmissions() {
  const tbody = document.querySelector("#admissionTable tbody");
  tbody.innerHTML = "";
  const list = JSON.parse(localStorage.getItem("admissions")) || [];
  list.forEach((a, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${a.studentName}</td>
        <td>${a.fatherName}</td>
        <td>${a.className}</td>
        <td>${a.dob}</td>
        <td>${a.mobile}</td>
        <td>${a.address}</td>
        <td><button class="delete-btn" data-index="${i}">حذف</button></td>
      </tr>`;
  });
}

function deleteAdmission(index) {
  const list = JSON.parse(localStorage.getItem("admissions")) || [];
  list.splice(index, 1);
  localStorage.setItem("admissions", JSON.stringify(list));
  displayAdmissions();
}
function openForm(formId) {
  const content = document.getElementById(formId).innerHTML;
  document.getElementById("mainContent").innerHTML = content;

  if (formId === "userForm") initUserForm();
  if (formId === "admissionForm") initAdmissionForm();
}
if (formId === "admissionForm") initAdmissionForm();
<a href="#" onclick="openForm('admissionForm')">داخلہ فارم</a>
// ----- داخلہ فارم Control -----
function initAdmissionForm() {
  // Event listeners attach only once
  document.getElementById("newAdmissionBtn").onclick = showAdmissionEntry;
  document.getElementById("viewAdmissionsBtn").onclick = showAdmissionTable;
  document.getElementById("admissionEntryForm").onsubmit = addAdmission;

  displayAdmissions(); // Start with showing all records
  showAdmissionTable();
}

function showAdmissionEntry() {
  document.getElementById("addAdmissionForm").style.display = "block";
  document.getElementById("admissionTableContainer").style.display = "none";
}

function showAdmissionTable() {
  document.getElementById("addAdmissionForm").style.display = "none";
  document.getElementById("admissionTableContainer").style.display = "block";
  displayAdmissions();
}

function addAdmission(event) {
  event.preventDefault();
  const studentName = document.getElementById("studentName").value.trim();
  const fatherName = document.getElementById("fatherName").value.trim();
  const className = document.getElementById("className").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!studentName || !fatherName || !className || !mobile || !address) {
    alert("تمام خانے پُر کریں!");
    return;
  }

  const admissions = JSON.parse(localStorage.getItem("admissions")) || [];
  admissions.push({ studentName, fatherName, className, mobile, address });
  localStorage.setItem("admissions", JSON.stringify(admissions));

  event.target.reset();
  showAdmissionTable();
}

function displayAdmissions() {
  const tbody = document.querySelector("#admissionTable tbody");
  tbody.innerHTML = "";
  const admissions = JSON.parse(localStorage.getItem("admissions")) || [];
  admissions.forEach((a, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${a.studentName}</td>
        <td>${a.fatherName}</td>
        <td>${a.className}</td>
        <td>${a.mobile}</td>
        <td>${a.address}</td>
        <td><button class="delete-btn" onclick="deleteAdmission(${i})">❌ حذف</button></td>
      </tr>`;
  });
}

function deleteAdmission(i) {
  const admissions = JSON.parse(localStorage.getItem("admissions")) || [];
  admissions.splice(i, 1);
  localStorage.setItem("admissions", JSON.stringify(admissions));
  displayAdmissions();
}
if (formId === "admissionForm") initAdmissionForm();
if (user === "admin" && pass === "12345") {
  window.location.href = "dashboard.html"; // Redirect to dashboard
}
if (user === "admin" && pass === "12345") {
  localStorage.setItem("loggedIn", "true"); // login remember
  window.location.href = "dashboard.html";
}

function openForm(formId) {
  const content = document.getElementById(formId).innerHTML;
  document.getElementById("mainContent").innerHTML = content;
}
OnlineWebFonts_Com({
  'Id': '.div',
  'Data': __Animations['657591'],
}).Play();

function toggleSearch() {
  const query = prompt("جس طالب علم کا نام تلاش کرنا چاہتے ہیں، وہ درج کریں:");
  if (!query) return;

  const table = document.getElementById('dataTable');
  const rows = table.querySelectorAll('tbody tr');
  let found = false;

  rows.forEach(row => {
    const nameCell = row.cells[0].textContent.trim();
    if (nameCell.includes(query)) {
      row.style.background = '#c8e6c9'; // ملا ہوا ریکارڈ ہلکے سبز رنگ میں
      found = true;
    } else {
      row.style.background = '';
    }
  });

  if (!found) alert("📄 کوئی ریکارڈ نہیں ملا۔");
  else table.scrollIntoView({ behavior: "smooth" });
}
import { ref, push } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
push(ref(db, "nazraRecords"), data);
import { onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
onValue(ref(db, "nazraRecords"), (snapshot) => {
  const allData = snapshot.val();
  // یہاں ٹیبل میں سب ریکارڈز دکھا دو
});

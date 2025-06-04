let users = JSON.parse(localStorage.getItem("goldEarnUsers") || "[]");
let currentUser = null;

function showLogin() {
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("registerPage").style.display = "none";
  document.getElementById("mainPage").style.display = "none";
}

function showRegister() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("registerPage").style.display = "block";
  document.getElementById("mainPage").style.display = "none";
}

function showMain() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("registerPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
  showHome();
}

function register() {
  let name = document.getElementById("regName").value.trim();
  let phone = document.getElementById("regPhone").value.trim();
  let pass = document.getElementById("regPassword").value.trim();

  if (name && phone && pass) {
    users.push({ name, phone, pass });
    localStorage.setItem("goldEarnUsers", JSON.stringify(users));
    alert("Registration successful! Please login.");
    showLogin();
  } else {
    alert("All fields are required.");
  }
}

function login() {
  let phone = document.getElementById("loginPhone").value.trim();
  let pass = document.getElementById("loginPassword").value.trim();
  currentUser = users.find(u => u.phone === phone && u.pass === pass);
  if (currentUser) {
    showMain();
  } else {
    alert("Invalid login details");
  }
}

function showHome() {
  document.getElementById("contentArea").innerHTML = `
    <h2>Welcome to Gold Earn</h2>
    <img src="https://i.imgur.com/nZjXPKr.jpg" style="width:90%;border-radius:12px;margin:10px 0;">
    <img src="https://i.imgur.com/qv7cfCj.jpg" style="width:90%;border-radius:12px;margin:10px 0;">
  `;
}

function showPackages() {
  const packages = [2000, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 80000, 100000];
  let html = "<h2>Choose Package</h2>";
  packages.forEach(amount => {
    html += `
      <div style="margin:10px 0;padding:10px;border:1px solid gold;border-radius:8px;">
        <strong>₦${amount.toLocaleString()}</strong><br>
        <button onclick="alert('Pay to 8068427920 (OPAY - GOODNEWS AMBROSE)')">Select Package</button>
      </div>`;
  });
  document.getElementById("contentArea").innerHTML = html;
}

function showProfile() {
  document.getElementById("contentArea").innerHTML = `
    <h2>Your Profile</h2>
    <p><strong>Name:</strong> ${currentUser.name}</p>
    <p><strong>Phone:</strong> ${currentUser.phone}</p>
  `;
}

showLogin(); // start from login
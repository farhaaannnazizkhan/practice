// ============================================================
// INDCIVIC - Full Client-Side Auth (No Backend Required)
// All user data stored in browser localStorage
// ============================================================

// Indian Location Database for Residence Selectors
const locationData = {
  "Andhra Pradesh": {
    "Visakhapatnam": ["Visakhapatnam City", "Gajuwaka", "Anakapalle"],
    "Vijayawada": ["Vijayawada City", "Machilipatnam", "Gudivada"],
    "Guntur": ["Guntur City", "Tenali", "Narasaraopet"]
  },
  "Arunachal Pradesh": {
    "Itanagar": ["Itanagar City", "Naharlagun", "Banderdewa"],
    "Tawang": ["Tawang Town", "Lumla", "Jang"],
    "Pasighat": ["Pasighat Town", "Mebo", "Ruksin"]
  },
  "Assam": {
    "Guwahati": ["Dispur", "Paltan Bazaar", "Khanapara"],
    "Dibrugarh": ["Dibrugarh Town", "Chabua", "Naharkatia"],
    "Silchar": ["Silchar Town", "Lakhipur", "Sonai"]
  },
  "Bihar": {
    "Patna": ["Patna City", "Danapur", "Khagaul"],
    "Gaya": ["Gaya City", "Bodh Gaya", "Sherghati"],
    "Muzaffarpur": ["Muzaffarpur City", "Kanti", "Motipur"]
  },
  "Chhattisgarh": {
    "Raipur": ["Raipur City", "Arang", "Abhanpur"],
    "Bhilai": ["Bhilai Town", "Durg City", "Patan"],
    "Bilaspur": ["Bilaspur City", "Kota", "Takhatpur"]
  },
  "Goa": {
    "North Goa": ["Panaji", "Mapusa", "Calangute"],
    "South Goa": ["Margao", "Vasco da Gama", "Ponda"]
  },
  "Gujarat": {
    "Ahmedabad": ["Ahmedabad City", "Sanand", "Bavla"],
    "Surat": ["Surat City", "Bardoli", "Vyara"],
    "Vadodara": ["Vadodara City", "Dabhoi", "Padra"]
  },
  "Haryana": {
    "Gurugram": ["Gurugram City", "Sohna", "Manesar"],
    "Faridabad": ["Faridabad City", "Ballabhgarh", "Tigaon"],
    "Panipat": ["Panipat City", "Samalkha", "Israna"]
  },
  "Himachal Pradesh": {
    "Shimla": ["Shimla City", "Rampur", "Theog"],
    "Dharamshala": ["Dharamshala Town", "Kangra City", "Palampur"],
    "Manali": ["Manali Town", "Kullu City", "Bhuntar"]
  },
  "Jharkhand": {
    "Ranchi": ["Ranchi City", "Khelari", "Bundu"],
    "Jamshedpur": ["Jamshedpur City", "Mango", "Jugsalai"],
    "Dhanbad": ["Dhanbad City", "Jharia", "Sindri"]
  },
  "Karnataka": {
    "Bengaluru Urban": ["Bengaluru City", "Yelahanka", "Kengeri"],
    "Mysuru": ["Mysuru City", "Nanjangud", "Hunsur"],
    "Hubli-Dharwad": ["Hubli City", "Dharwad City", "Navalgund"]
  },
  "Kerala": {
    "Thiruvananthapuram": ["Trivandrum City", "Neyyattinkara", "Attingal"],
    "Kochi": ["Kochi City", "Ernakulam", "Aluva"],
    "Kozhikode": ["Calicut City", "Vadakara", "Quilandy"]
  },
  "Madhya Pradesh": {
    "Bhopal": ["Bhopal City", "Berasia", "Kolar"],
    "Indore": ["Indore City", "Mhow", "Depalpur"],
    "Gwalior": ["Gwalior City", "Dabra", "Bhitarwar"]
  },
  "Maharashtra": {
    "Mumbai City": ["Mumbai Colaba", "Dadar", "Bandra"],
    "Pune": ["Pune City", "Pimpri-Chinchwad", "Lonavala"],
    "Nagpur": ["Nagpur City", "Kamptee", "Kalmeshwar"]
  },
  "Manipur": {
    "Imphal West": ["Imphal City", "Lamphelpat", "Patsoi"],
    "Thoubal": ["Thoubal Town", "Lilong", "Yairipok"]
  },
  "Meghalaya": {
    "East Khasi Hills": ["Shillong", "Mawsynram", "Sohra"],
    "West Garo Hills": ["Tura", "Phulbari", "Dadenggre"]
  },
  "Mizoram": {
    "Aizawl": ["Aizawl City", "Sairang", "Darlawn"],
    "Lunglei": ["Lunglei Town", "Hnahthial", "Tlabung"]
  },
  "Nagaland": {
    "Kohima": ["Kohima Town", "Chiephobozou", "Tseminyu"],
    "Dimapur": ["Dimapur City", "Chumoukedima", "Medziphema"]
  },
  "Odisha": {
    "Khurda": ["Bhubaneswar City", "Khurda Town", "Jatni"],
    "Cuttack": ["Cuttack City", "Choudwar", "Athagarh"],
    "Ganjam": ["Berhampur City", "Chhatrapur", "Hinjilicut"]
  },
  "Punjab": {
    "Amritsar": ["Amritsar City", "Ajnala", "Baba Bakala"],
    "Ludhiana": ["Ludhiana City", "Khanna", "Jagraon"],
    "Jalandhar": ["Jalandhar City", "Nakodar", "Phillaur"]
  },
  "Rajasthan": {
    "Jaipur": ["Jaipur City", "Sanganer", "Amer"],
    "Jodhpur": ["Jodhpur City", "Luni", "Bilara"],
    "Udaipur": ["Udaipur City", "Vallabhnagar", "Mavli"]
  },
  "Sikkim": {
    "Gangtok": ["Gangtok City", "Singtam", "Rangpo"],
    "Namchi": ["Namchi Town", "Jorethang", "Ravangla"]
  },
  "Tamil Nadu": {
    "Chennai": ["Chennai City", "Adyar", "Tambaram"],
    "Coimbatore": ["Coimbatore City", "Pollachi", "Mettupalayam"],
    "Madurai": ["Madurai City", "Tirumangalam", "Melur"]
  },
  "Telangana": {
    "Hyderabad": ["Hyderabad City", "Secunderabad", "Charminar"],
    "Rangareddy": ["Gachibowli", "Madhapur", "Sherilingampally"],
    "Warangal": ["Warangal City", "Hanamkonda", "Kazipet"]
  },
  "Tripura": {
    "West Tripura": ["Agartala City", "Ranirbazar", "Mohanpur"],
    "South Tripura": ["Belonia", "Sabroom", "Santirbazar"]
  },
  "Uttar Pradesh": {
    "Lucknow": ["Lucknow City", "Malihabad", "Chinhat"],
    "Gautam Buddha Nagar": ["Noida", "Greater Noida", "Dadri"],
    "Kanpur Nagar": ["Kanpur City", "Bilhaur", "Ghatampur"]
  },
  "Uttarakhand": {
    "Dehradun": ["Dehradun City", "Rishikesh", "Mussoorie"],
    "Haridwar": ["Haridwar City", "Roorkee", "Laksar"],
    "Nainital": ["Nainital Town", "Haldwani", "Ramnagar"]
  },
  "West Bengal": {
    "Kolkata": ["Kolkata City", "Alipore", "Salt Lake"],
    "North 24 Parganas": ["Bidhannagar", "Barasat", "Barrackpore"],
    "Howrah": ["Howrah City", "Bally", "Uluberia"]
  },
  "Delhi": {
    "New Delhi": ["Connaught Place", "Dwarka", "Chanakyapuri"],
    "North Delhi": ["Rohini", "Model Town", "Narela"],
    "South Delhi": ["Saket", "Vasant Kunj", "Hauz Khas"]
  }
};

// ============================================================
//  Client-Side "Database" using localStorage
// ============================================================
const DB = {
  getUsers() {
    try { return JSON.parse(localStorage.getItem('ic_users') || '[]'); } catch { return []; }
  },
  saveUsers(users) {
    localStorage.setItem('ic_users', JSON.stringify(users));
  },
  findUserByEmail(email) {
    return this.getUsers().find(u => u.email === email.toLowerCase()) || null;
  },
  findUserById(id) {
    return this.getUsers().find(u => u.id === id) || null;
  },
  createUser(data) {
    const users = this.getUsers();
    if (users.find(u => u.email === data.email.toLowerCase())) return null; // already exists
    const newUser = {
      id: 'usr_' + Date.now() + Math.random().toString(36).slice(2, 7),
      name: data.name,
      email: data.email.toLowerCase(),
      // Simple hash: store password salted – NOT for production; fine for a demo
      passwordHash: btoa(data.email.toLowerCase() + ':' + data.password),
      role: data.role || 'citizen',
      residence: data.residence || {}
    };
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  },
  verifyPassword(user, password) {
    return user.passwordHash === btoa(user.email + ':' + password);
  }
};

// Simple session token using localStorage (no JWT needed)
const Session = {
  // Store a lightweight "token" = base64 of userId + timestamp
  set(user) {
    const token = btoa(JSON.stringify({ id: user.id, ts: Date.now() }));
    localStorage.setItem('ic_token', token);
    localStorage.setItem('ic_userName', user.name);
  },
  get() {
    try {
      const raw = localStorage.getItem('ic_token');
      if (!raw) return null;
      return JSON.parse(atob(raw));
    } catch { return null; }
  },
  clear() {
    localStorage.removeItem('ic_token');
    localStorage.removeItem('ic_userName');
  },
  getCurrentUser() {
    const sess = this.get();
    if (!sess) return null;
    return DB.findUserById(sess.id);
  }
};

// ============================================================
//  UI Elements
// ============================================================
const authModal     = document.getElementById('auth-modal');
const closeBtn      = document.getElementById('close-modal-btn');
const tabBtns       = document.querySelectorAll('.auth-tab-btn');
const panes         = document.querySelectorAll('.auth-pane');
const loadingOverlay = document.getElementById('auth-loading-overlay');
const successOverlay = document.getElementById('auth-success-overlay');
const toastElement  = document.getElementById('toast');

// ============================================================
//  Modal Controllers
// ============================================================
function openModal(defaultTab = 'login') {
  authModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  switchTab(defaultTab);
  showRoleSelection();
  loadingOverlay.classList.remove('active');
  successOverlay.classList.remove('active');
}

function closeModal() {
  authModal.classList.remove('active');
  document.body.style.overflow = '';
}

function switchTab(tabId) {
  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  panes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `pane-${tabId}`);
  });
}

function showCitizenSignupForm() {
  document.getElementById('role-selection-wrapper').style.display = 'none';
  document.getElementById('citizen-signup-wrapper').style.display  = 'block';
  initLocationDropdowns();
}

function showRoleSelection() {
  const container = document.getElementById('citizen-signup-wrapper');
  const selection  = document.getElementById('role-selection-wrapper');
  if (container && selection) {
    container.style.display = 'none';
    selection.style.display  = 'block';
  }
  document.getElementById('citizen-signup-form')?.reset();
  const dist = document.getElementById('reg-district');
  const city = document.getElementById('reg-city');
  if (dist) dist.disabled = true;
  if (city) city.disabled = true;
}

// ============================================================
//  Toast System
// ============================================================
function showToast(title, message, isError = false) {
  const toastTitle = document.getElementById('toast-title');
  const toastMsg   = document.getElementById('toast-message');
  const toastIcon  = document.querySelector('.toast-icon');

  if (toastTitle && toastMsg) {
    toastTitle.innerText = title;
    toastMsg.innerText   = message;
  }

  if (toastIcon) {
    if (isError) {
      toastElement.style.borderColor = 'var(--danger)';
      toastElement.style.boxShadow   = '0 10px 30px rgba(239,68,68,0.15)';
      toastIcon.innerText            = '✕';
      toastIcon.style.color          = 'var(--danger)';
      toastIcon.style.backgroundColor = 'rgba(239,68,68,0.1)';
    } else {
      toastElement.style.borderColor = 'var(--success)';
      toastElement.style.boxShadow   = '0 10px 30px rgba(16,185,129,0.15)';
      toastIcon.innerText            = '✓';
      toastIcon.style.color          = 'var(--success)';
      toastIcon.style.backgroundColor = 'rgba(16,185,129,0.1)';
    }
  }

  toastElement.classList.add('active');
  setTimeout(() => toastElement.classList.remove('active'), 4000);
}

// ============================================================
//  Location Dropdowns
// ============================================================
function initLocationDropdowns() {
  const stateSelect = document.getElementById('reg-state');
  if (!stateSelect || stateSelect.options.length > 1) return;

  Object.keys(locationData).sort().forEach(state => {
    const opt = document.createElement('option');
    opt.value   = state;
    opt.innerText = state;
    stateSelect.appendChild(opt);
  });
}

function populateDistricts() {
  const stateSelect    = document.getElementById('reg-state');
  const districtSelect = document.getElementById('reg-district');
  const citySelect     = document.getElementById('reg-city');

  districtSelect.innerHTML = '<option value="">Select District</option>';
  citySelect.innerHTML     = '<option value="">Select City/Town</option>';
  districtSelect.disabled  = true;
  citySelect.disabled      = true;

  const selectedState = stateSelect.value;
  if (!selectedState || !locationData[selectedState]) return;

  Object.keys(locationData[selectedState]).sort().forEach(dist => {
    const opt = document.createElement('option');
    opt.value   = dist;
    opt.innerText = dist;
    districtSelect.appendChild(opt);
  });
  districtSelect.disabled = false;
}

function populateCities() {
  const stateSelect    = document.getElementById('reg-state');
  const districtSelect = document.getElementById('reg-district');
  const citySelect     = document.getElementById('reg-city');

  citySelect.innerHTML = '<option value="">Select City/Town</option>';
  citySelect.disabled  = true;

  const s = stateSelect.value;
  const d = districtSelect.value;
  if (!s || !d || !locationData[s] || !locationData[s][d]) return;

  locationData[s][d].sort().forEach(city => {
    const opt = document.createElement('option');
    opt.value   = city;
    opt.innerText = city;
    citySelect.appendChild(opt);
  });
  citySelect.disabled = false;
}

// ============================================================
//  Google Sign-In Simulation (UI only)
// ============================================================
function simulateGoogleLogin(role) {
  document.getElementById('loading-title').innerText    = 'Connecting Google Authentication...';
  document.getElementById('loading-subtitle').innerText = `Role verification: ${role}`;
  loadingOverlay.classList.add('active');

  setTimeout(() => {
    loadingOverlay.classList.remove('active');
    showToast('Simulation Notice', `Google Sign-in as ${role} is a UI demonstration. Please use the registration form to create an account.`, true);
  }, 1200);
}

// ============================================================
//  AUTH ACTIONS – 100% Client-Side, No Backend Needed
// ============================================================

/** Log In with email + password */
function handleEmailLogin() {
  const email    = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  // Basic validation
  if (!email || !password) {
    showToast('Missing Fields', 'Please enter your email and password.', true);
    return;
  }

  const user = DB.findUserByEmail(email);
  if (!user || !DB.verifyPassword(user, password)) {
    showToast('Authentication Failed', 'Invalid email or password. Try again.', true);
    return;
  }

  // Show loading → success → redirect
  document.getElementById('loading-title').innerText    = 'Logging you in...';
  document.getElementById('loading-subtitle').innerText = 'Fetching your profile...';
  loadingOverlay.classList.add('active');

  setTimeout(() => {
    loadingOverlay.classList.remove('active');
    document.getElementById('success-title').innerText    = 'Welcome Back!';
    document.getElementById('success-subtitle').innerText = `Authenticated as ${user.name}`;
    successOverlay.classList.add('active');

    setTimeout(() => {
      Session.set(user);
      closeModal();
      window.location.href = 'dashboard.html';
    }, 1200);
  }, 800);
}

/** Register a new Citizen account */
function handleCitizenRegister() {
  const email           = document.getElementById('reg-email').value.trim();
  const username        = document.getElementById('reg-username').value.trim();
  const password        = document.getElementById('reg-password').value;
  const confirmPassword = document.getElementById('reg-confirm-password').value;
  const state           = document.getElementById('reg-state').value;
  const district        = document.getElementById('reg-district').value;
  const city            = document.getElementById('reg-city').value;
  const ward            = document.getElementById('reg-ward').value;

  // Field validation
  if (!email || !username || !password || !state || !district || !city || !ward) {
    showToast('Missing Fields', 'Please fill in all required fields.', true);
    return;
  }
  if (password !== confirmPassword) {
    showToast('Password Error', 'Passwords do not match. Please verify.', true);
    return;
  }
  if (password.length < 6) {
    showToast('Weak Password', 'Password must be at least 6 characters.', true);
    return;
  }

  const newUser = DB.createUser({
    name: username,
    email,
    password,
    role: 'citizen',
    residence: { state, district, city, ward }
  });

  if (!newUser) {
    showToast('Email Taken', 'An account with this email already exists. Please log in.', true);
    return;
  }

  // Show loading → success → auto-login → redirect
  document.getElementById('loading-title').innerText    = 'Creating Account...';
  document.getElementById('loading-subtitle').innerText = 'Saving your residency details...';
  loadingOverlay.classList.add('active');

  setTimeout(() => {
    loadingOverlay.classList.remove('active');
    document.getElementById('success-title').innerText    = 'Registration Complete!';
    document.getElementById('success-subtitle').innerText = `Welcome to indcivic, ${username}!`;
    successOverlay.classList.add('active');

    setTimeout(() => {
      Session.set(newUser);          // auto-login
      closeModal();
      window.location.href = 'dashboard.html';
    }, 1200);
  }, 800);
}

// ============================================================
//  Bind global window refs (needed by inline HTML handlers)
// ============================================================
window.showRoleSelection    = showRoleSelection;
window.showCitizenSignupForm = showCitizenSignupForm;
window.simulateGoogleLogin  = simulateGoogleLogin;
window.populateDistricts    = populateDistricts;
window.populateCities       = populateCities;
window.handleEmailLogin     = handleEmailLogin;
window.handleCitizenRegister = handleCitizenRegister;

// ============================================================
//  Event Bindings
// ============================================================
document.getElementById('nav-login-btn')?.addEventListener('click',  () => openModal('login'));
document.getElementById('nav-signin-btn')?.addEventListener('click', () => openModal('signin'));
document.getElementById('hero-login-btn')?.addEventListener('click', () => openModal('login'));
document.getElementById('hero-signin-btn')?.addEventListener('click', () => openModal('signin'));
document.getElementById('cta-signin-btn')?.addEventListener('click', () => openModal('signin'));
closeBtn?.addEventListener('click', closeModal);

authModal?.addEventListener('click', e => {
  if (e.target === authModal) closeModal();
});

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
});

// Mobile menu toggle
const menuBtn  = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
}

// If already logged in, show a "Go to Dashboard" toast hint
if (Session.get()) {
  const userName = localStorage.getItem('ic_userName');
  setTimeout(() => {
    showToast('Already Logged In', `Welcome back, ${userName || 'User'}! Click Log In to go to your dashboard.`);
  }, 1000);
}
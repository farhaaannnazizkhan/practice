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

// UI Elements
const authModal = document.getElementById('auth-modal');
const closeBtn = document.getElementById('close-modal-btn');
const tabBtns = document.querySelectorAll('.auth-tab-btn');
const panes = document.querySelectorAll('.auth-pane');
const loadingOverlay = document.getElementById('auth-loading-overlay');
const successOverlay = document.getElementById('auth-success-overlay');
const toastElement = document.getElementById('toast');

// Modal Controller Functions
function openModal(defaultTab = 'login') {
  authModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
  switchTab(defaultTab);
  showRoleSelection();
  loadingOverlay.classList.remove('active');
  successOverlay.classList.remove('active');
}

function closeModal() {
  authModal.classList.remove('active');
  document.body.style.overflow = ''; // restore scrolling
}

function switchTab(tabId) {
  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  panes.forEach(pane => {
    if (pane.id === `pane-${tabId}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });
}

function showCitizenSignupForm() {
  document.getElementById('role-selection-wrapper').style.display = 'none';
  document.getElementById('citizen-signup-wrapper').style.display = 'block';
  initLocationDropdowns();
}

function showRoleSelection() {
  const container = document.getElementById('citizen-signup-wrapper');
  const selection = document.getElementById('role-selection-wrapper');
  if (container && selection) {
    container.style.display = 'none';
    selection.style.display = 'block';
  }
  document.getElementById('citizen-signup-form')?.reset();
  const dist = document.getElementById('reg-district');
  const city = document.getElementById('reg-city');
  if (dist) dist.disabled = true;
  if (city) city.disabled = true;
}

// Toast System
function showToast(title, message, isError = false) {
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.querySelector('.toast-icon');

  if (toastTitle && toastMsg) {
    toastTitle.innerText = title;
    toastMsg.innerText = message;
  }

  if (toastIcon) {
    if (isError) {
      toastElement.style.borderColor = 'var(--danger)';
      toastElement.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.15)';
      toastIcon.innerText = '✕';
      toastIcon.style.color = 'var(--danger)';
      toastIcon.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
    } else {
      toastElement.style.borderColor = 'var(--success)';
      toastElement.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.15)';
      toastIcon.innerText = '✓';
      toastIcon.style.color = 'var(--success)';
      toastIcon.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
    }
  }

  toastElement.classList.add('active');
  setTimeout(() => {
    toastElement.classList.remove('active');
  }, 4000);
}

// Location Dropdowns
function initLocationDropdowns() {
  const stateSelect = document.getElementById('reg-state');
  if (!stateSelect || stateSelect.options.length > 1) return; // Already initialized

  const states = Object.keys(locationData).sort();
  states.forEach(state => {
    const opt = document.createElement('option');
    opt.value = state;
    opt.innerText = state;
    stateSelect.appendChild(opt);
  });
}

function populateDistricts() {
  const stateSelect = document.getElementById('reg-state');
  const districtSelect = document.getElementById('reg-district');
  const citySelect = document.getElementById('reg-city');
  
  const selectedState = stateSelect.value;
  
  districtSelect.innerHTML = '<option value="">Select District</option>';
  citySelect.innerHTML = '<option value="">Select City/Town</option>';
  districtSelect.disabled = true;
  citySelect.disabled = true;
  
  if (!selectedState || !locationData[selectedState]) return;
  
  const districts = Object.keys(locationData[selectedState]).sort();
  districts.forEach(dist => {
    const opt = document.createElement('option');
    opt.value = dist;
    opt.innerText = dist;
    districtSelect.appendChild(opt);
  });
  districtSelect.disabled = false;
}

function populateCities() {
  const stateSelect = document.getElementById('reg-state');
  const districtSelect = document.getElementById('reg-district');
  const citySelect = document.getElementById('reg-city');
  
  const selectedState = stateSelect.value;
  const selectedDistrict = districtSelect.value;
  
  citySelect.innerHTML = '<option value="">Select City/Town</option>';
  citySelect.disabled = true;
  
  if (!selectedState || !selectedDistrict || !locationData[selectedState][selectedDistrict]) return;
  
  const cities = locationData[selectedState][selectedDistrict].sort();
  cities.forEach(city => {
    const opt = document.createElement('option');
    opt.value = city;
    opt.innerText = city;
    citySelect.appendChild(opt);
  });
  citySelect.disabled = false;
}

// Simulated Google Sign In (since backend only supports local database auth)
function simulateGoogleLogin(role) {
  document.getElementById('loading-title').innerText = `Connecting Google Authentication...`;
  document.getElementById('loading-subtitle').innerText = `Role verification: ${role}`;
  loadingOverlay.classList.add('active');

  setTimeout(() => {
    loadingOverlay.classList.remove('active');
    showToast('Simulation Notice', `Google Sign-in as ${role} is a UI demonstration. Please use register or credentials to authenticate.`, true);
  }, 1200);
}

// Express Backend Actions
async function handleEmailLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    
    if (res.ok && data.token) {
      // Login Successful
      document.getElementById('loading-title').innerText = 'Logging you in...';
      document.getElementById('loading-subtitle').innerText = 'Fetching user profile...';
      loadingOverlay.classList.add('active');

      setTimeout(() => {
        loadingOverlay.classList.remove('active');
        document.getElementById('success-title').innerText = `Welcome Back!`;
        document.getElementById('success-subtitle').innerText = `Authenticated as ${data.user.name}`;
        successOverlay.classList.add('active');

        setTimeout(() => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userName", data.user.name);
          closeModal();
          window.location.href = "dashboard.html";
        }, 1200);
      }, 800);
    } else {
      // Login failed
      showToast('Authentication Failed', data.message || 'Invalid email or password', true);
    }
  } catch (err) {
    showToast('Connection Error', 'Cannot connect to backend server. Make sure it is running.', true);
  }
}

async function handleCitizenRegister() {
  const email = document.getElementById('reg-email').value;
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const confirmPassword = document.getElementById('reg-confirm-password').value;
  const state = document.getElementById('reg-state').value;
  const district = document.getElementById('reg-district').value;
  const city = document.getElementById('reg-city').value;
  const ward = document.getElementById('reg-ward').value;

  if (password !== confirmPassword) {
    showToast('Password Error', 'Passwords do not match. Please verify.', true);
    return;
  }

  if (password.length < 6) {
    showToast('Password Weak', 'Password must be at least 6 characters.', true);
    return;
  }

  const residence = { state, district, city, ward };

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username, email, password, role: "citizen", residence })
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById('loading-title').innerText = 'Creating Account...';
      document.getElementById('loading-subtitle').innerText = 'Saving residency details...';
      loadingOverlay.classList.add('active');

      setTimeout(() => {
        loadingOverlay.classList.remove('active');
        document.getElementById('success-title').innerText = 'Registration Complete!';
        document.getElementById('success-subtitle').innerText = `Welcome to indcivic, ${username}!`;
        successOverlay.classList.add('active');

        setTimeout(async () => {
          // Attempt automatic login to make a seamless experience
          try {
            const loginRes = await fetch("http://localhost:5000/api/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password })
            });
            const loginData = await loginRes.json();
            if (loginRes.ok && loginData.token) {
              localStorage.setItem("token", loginData.token);
              localStorage.setItem("userName", loginData.user.name);
              closeModal();
              window.location.href = "dashboard.html";
              return;
            }
          } catch(e) {}
          
          // Fallback if autologin fails: switch to login panel
          closeModal();
          openModal('login');
          showToast('Account Created', 'Please log in with your credentials.');
        }, 1200);
      }, 800);
    } else {
      showToast('Registration Failed', data.message || 'Error occurred during registration', true);
    }
  } catch (err) {
    showToast('Connection Error', 'Cannot connect to backend server. Make sure it is running.', true);
  }
}

// Bind Global Window references so inline event attributes in index.html work correctly
window.showRoleSelection = showRoleSelection;
window.showCitizenSignupForm = showCitizenSignupForm;
window.simulateGoogleLogin = simulateGoogleLogin;
window.populateDistricts = populateDistricts;
window.populateCities = populateCities;
window.handleEmailLogin = handleEmailLogin;
window.handleCitizenRegister = handleCitizenRegister;

// Bind UI triggers
document.getElementById('nav-login-btn')?.addEventListener('click', () => openModal('login'));
document.getElementById('nav-signin-btn')?.addEventListener('click', () => openModal('signin'));
document.getElementById('hero-login-btn')?.addEventListener('click', () => openModal('login'));
document.getElementById('hero-signin-btn')?.addEventListener('click', () => openModal('signin'));
document.getElementById('cta-signin-btn')?.addEventListener('click', () => openModal('signin'));
closeBtn?.addEventListener('click', closeModal);

authModal?.addEventListener('click', (e) => {
  if (e.target === authModal) {
    closeModal();
  }
});

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    switchTab(btn.getAttribute('data-tab'));
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
}
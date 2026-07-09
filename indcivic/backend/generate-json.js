const fs = require("fs");
const path = require("path");

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

function generate() {
  const dataDir = path.join(__dirname, "../india_data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write states.json
  const states = Object.keys(locationData).sort();
  fs.writeFileSync(path.join(dataDir, "states.json"), JSON.stringify(states, null, 2));

  // Write each state JSON
  for (const state of states) {
    const fileName = state.replace(/\s+/g, "") + ".json";
    fs.writeFileSync(path.join(dataDir, fileName), JSON.stringify(locationData[state], null, 2));
  }

  console.log("India location data directory and files verified/created successfully.");
}

module.exports = { generate };

if (require.main === module) {
  generate();
}

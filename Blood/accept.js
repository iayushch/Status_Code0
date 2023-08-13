let group;
function callback(e){
    event.preventDefault();
    group = document.getElementById('blood-group').value;


console.log(group)


// Iterate through the JSON object properties

jsonData ={
    "id":"1",
    "Name": "Nabadwip State General Hospital Blood Centre",
    "Phone": "9733022688",
    "Email": "nsghbloodbank@gmail.com",
    "location": "kalyani",
    "Catogery": "Nadia",


    "A+ve": "10",
    "B+ve": "6",
    "AB+ve": "0",
    "A-ve": "10",
    "B-ve": "0",
    "AB-ve": "0",
    "O+ve": "4",
    "O-ve": "0"

}

for (var key in jsonData) {
  if (jsonData.hasOwnProperty(key)) {
    if (key === group) {
      console.log("Key found:", group, "Value:", jsonData[key]);
    //   console.log("Key found:", group, "Value:", jsonData["Name"]);
      break; // Exit loop once key is found
    }
  }
}

// If the loop finishes and the key is not found
if (key !== group) {
  console.log("Key not found:", group);
}
else if(parseInt(jsonData[key]) >0){


    document.write("Name of the Hospital: ",jsonData["Name"]);
    document.write("Email of the Hospital: ",jsonData["Email"]);
    document.write("Phone number of the hospital: ",jsonData["Phone"]);
    document.write("Location of the hospital: \n",jsonData["Location"]);
    document.write("Blood Group: ",group,"  No of bottle available: \n",jsonData[group]);
}

}
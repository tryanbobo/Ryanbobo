var mymap = L.map('mapid');


var options = {
  key: geocoder_api_key,
  limit: 10
};
var control = L.Control.openCageSearch(options).addTo(mymap);
//leaflet-ruler
L.control.ruler().addTo(mymap);

//Leaflet.MousePostion
L.control.mousePosition().addTo(mymap);

L.graticule({
  style:{
    color: 'white',
    weight: 1,
    interval: 100
  }
}).addTo(mymap);


/*
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,\
  <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href=\
  "https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: mapbox_access_token
}).addTo(mymap);
*///http://a.tile.stamen.com/toner/2/2/2.png
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(mymap);

//Icon Class
var LeafIcon = L.Icon.extend({
  options:{
    iconSize: [30,30],
    iconAnchor: [20,20],
    popupAnchor:[-3, -76]
  }
});


// Icon creation
var skillIcon = new LeafIcon({iconUrl:'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-skills-business-and-management-kiranshastry-solid-kiranshastry-4.png'}),
    wallIcon = new LeafIcon({iconUrl:'https://img.icons8.com/pastel-glyph/64/000000/great-wall.png'}),
    certiIcon = new LeafIcon({iconUrl:'https://img.icons8.com/ios/50/000000/certificate.png'}),
    eduIcon = new LeafIcon({iconUrl:'https://img.icons8.com/ios/50/000000/education.png'}),
    workIcon = new LeafIcon({iconUrl:'https://img.icons8.com/ios/50/000000/work.png'}),
    eduAltIcon = new LeafIcon({iconUrl:'https://img.icons8.com/pastel-glyph/64/000000/boarding-pass--v2.png'}),
    welcIcon = new LeafIcon({iconUrl:'https://img.icons8.com/pastel-glyph/64/000000/handshake--v2.png'});
// Markers
var skills = L.marker([27.174961, 78.042385], {icon: skillIcon})
  .bindTooltip('Skills', { permanent: true, direction: 'auto', offset: [18, -18] }).addTo(mymap);
  skills.bindPopup("<div id='skills'><b><strong> Skill / Years </strong><b> <br>\
  <img src='images/skill.png' alt='Taj_Mahal' width='128px' height='100'>\<br><p>\
  Python / 6<br>Arcpy / 5<br>Javascript / 3<br>ArcGIS API for JavaScript / 2<br>SQL / 9<br>ESRI products / 9<br> AutoDesk / 8<br> \
  FME / 7<br>Mapcom products / 8 \
  </p></div>").openPopup();

var project = L.marker([40.334245, 116.477652], {icon: wallIcon})
  .bindTooltip('Projects', { permanent: true, direction: 'auto', offset: [18, -18] }).addTo(mymap);
  project.bindPopup("<div id='project'><b><strong> List of projects </strong><b><br>\
  <img src='images/greatwall.jpg' width='128px' height='100'><br><p>The Great Wall \
  of China (traditional Chinese: è¬é‡Œé•·åŸŽ) is the collective name of a series of \
  fortification systems generally built across the historical northern borders of \
  China to protect and consolidate territories of Chinese states and empires against \
  various nomadic groups of the steppe and their polities.</p></div>").openPopup();

var certificates = L.marker([30.328611, 35.441944], {icon: certiIcon})
  .bindTooltip('Certificates', { permanent: true, direction: 'auto', offset: [18, -18] }).addTo(mymap);
  certificates.bindPopup("<div id='certificates'><b><strong> Certificates </strong><b><br>\
  <br><p><a href=certificates/EsriSpacialAnalyst2012.pdf target=blank rel=noopener noreferrer>Esri - Learning Spatial Analyst</a><br> \
	<a href=certificates/GoingPlaceswithSpatialAnalysis.pdf target=blank rel=noopener noreferrer>Esri - Going Places with Spatial Analysis</a><br> \
  <a href=certificates/GIS_PythonForEveryone.pdf target=blank rel=noopener noreferrer>Python for Everyone</a><br> \
  <a href=certificates/BasicsOfPython.pdf target=blank rel=noopener noreferrer>Esri - Basics of Python</a><br> \
  <a href=certificates/PythonScriptingforGeoprocessionWorkflows.pdf target=blank rel=noopener noreferrer>Esri - Python Scripting for Geoprocessing Workflows</a><br> \
	<a href=certificates/ArcGISEssentialTraining_CertificateOfCompletion.pdf target=blank rel=noopener noreferrer>Lynda - ArcGIS Essential Training</a><br> \
	<a href=certificates/FoundationsofProgramming_Databases_CertificateOfCompletion.pdf target=blank rel=noopener noreferrer>Lynda - Foundations of Programming: Databases</a><br> \
	<a href=certificates/GIS_NetworkBuisnessAnalysis1.pdf target=blank rel=noopener noreferrer>Texas State University Library - Network/Business Analysis - Part 1</a><br> \
	<a href=certificates/GIS_NetworkBuisnessAnalysis2.pdf target=blank rel=noopener noreferrer>Texas State University Library - Network/Business Analysis - Part 2</a><br> \
	<a href=certificates/GIS_WherethereisnoArcGIS.pdf target=blank rel=noopener noreferrer>Texas State University Library - Exploring Open Source GIS</a><br> \
  </p></div>", {
    minWidth : 350
  }).openPopup();

var education = L.marker([29.8833, -97.9414], {icon: eduIcon})
  .bindTooltip('Education', { permanent: true, direction: 'auto', offset: [18, -18] }).addTo(mymap);
  education.bindPopup("<div id='Education'><b><strong> Texas State University - San Marcos, TX \
  </strong><b><br> <img src='images/txst.jpg' width='128px' height='100'><br><p>\
  Master's of Applied Geography, <br>Geographic Information Science / 2018-2022 <br><br> \
  Bachelor's of Science, Water Resources / 2009-2013 <br><br> \
  Certificates in Geographic Information Science and Envrionmental Interpretation / 2009-2013 <br><br> \
  </p></div>").openPopup();

var work = L.marker([-13.163056, -72.54556], {icon: workIcon})
  .bindTooltip('Work Experience', { permanent: true, direction: 'auto', offset: [18, -18] }).addTo(mymap);
  work.bindPopup("<div id='work'><b><strong> Texas State Univerity <br>Network Operations / 2012 - present\
  </strong><b><br> <img src='images/work.jpg' width='128px' height='100'><br><p>\
  The majority of my relivant work experience is centered around Network Operations \
  managing fiber optic and copper telephone cables using various spatial solutions \
  <br> Responsibilities Include: \
  <br><br> Design and manage the installation of outside plant telecom cables. \
  <br> Maintain GIS database using SQL Server Manager. \
  <br> Manage the creation of CAD diagrams of telecom enclosures and rooms. \
  <br> Train Network Operations staff on M4 Solutions and Pinnacle software. \
  <br> Ensure inside and outside plant cabling database records are current.\
  </p></div>",{
    minWidth : 400
  }).openPopup();

var eduAlt = L.marker([54.3233, 10.1228], {icon: eduAltIcon})
  .bindTooltip('Study Abroad', { permanent: true, direction: 'auto', offset: [18, -18] }).addTo(mymap);
  eduAlt.bindPopup("<div id='eduAlt'><b><strong> Christian-Albrechts-University, Kiel, Germany \
  </strong><b><br> <img src='images/kiel.jpg' width='128px' height='100'><br><p>\
  Study abroad that saw the completion of two undergraduate courses: <br><br> \
  GIS Design and Implementation and Regional Field Studies <br><br> \
  GPA: 4.0 - Project Manager \
  </p></div>").openPopup();

var welcome = L.marker([0, 0], {icon: welcIcon})
  .bindTooltip('Welcome!', { permanent: true, direction: 'auto', offset: [18, -18] }).addTo(mymap);
  welcome.bindPopup("<div id='welcome'><b><strong> Hi, my name is Ryan Bobo \
  </strong><b><br> <img src='images/RYAN.jpg' width='100px' height='100'><br><p>\
  I solve problems with geospatial technologies. <br> \
  Zoom out to learn more about me, <br>and thanks for stoping by! \
  </p></div>").openPopup();


/*
var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

var circle = L.circle([51.508, -0.11],{
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
circle.bindPopup("I am a circle.");
circle.on('click', function(e){
  mymap.setView(e.latlng, 13);
});

var polygon = L.polygon([
  [51.509, -0.08],
  [51.502, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
polygon.bindPopup("I am a polygon.");
polygon.on('click', function(e){
  mymap.setView(e.latlng, 13);
});

var polyline = L.polyline([
  [51.506, -0.08],
  [51.502, -0.06],
  [51.507, -0.047]
]).addTo(mymap);
*/


var ZoomViewer = L.Control.extend({
  onAdd: function(){
    var gauge = L.DomUtil.create('div');
    gauge.style.width = '200px';
    gauge.style.background = 'rpga(255,255,255,0.5)';
    gauge.style.textAlign = 'left';
    mymap.on('zoomstart zoom zoomend', function(ev){
      gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
    })
    return gauge;
  }
});

(new ZoomViewer).addTo(mymap);
mymap.setView([0,0], 7);

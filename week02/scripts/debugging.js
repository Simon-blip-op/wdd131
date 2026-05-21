// Get elements from the document
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

let area = 0;
const PI = 3.14159;

let radius = 10;

// First calculation
area = PI * radius * radius;

radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Second calculation
radius = 20;

area = PI * radius * radius;

radiusOutput.textContent = radius;
areaOutput.textContent = area;
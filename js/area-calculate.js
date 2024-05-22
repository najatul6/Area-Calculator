// Calculate Triangle Area
function calculateTriangleArea() {
    // Get The Triangle base value
    const base = getInputValue('triangle-base');

    // Get The Triangle height value
    const height = getInputValue('triangle-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please Enter a Valid Number!!');
        return;
    }


    const areaDecimal = 0.5 * base * height;
    const area = areaDecimal.toFixed(2);

    // Show Area
    setElementText('triangle-area', area);

}

// Calculate Rectangle Area

function calculateRectangleArea() {
    // Get The Rectangle base value
    const width = getInputValue('rectangle-width');
    // Get The Rectangle height value
    const length = getInputValue('rectangle-length');

    if(isNaN(width) || isNaN(length)){
        alert('Please Enter a Valid Number!!');
        return;
    }

    const areaDecimal = width * length;
    const area = areaDecimal.toFixed(2);
    // Show Area
    setElementText('Length-area', area);

}

// Calculate Parallelogram Area
function calculateParallelogramArea() {
    const base = getInputValue('Parallelogram-base');
    const height = getInputValue('Parallelogram-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please Enter a Valid Number!!');
        return;
    }

    const areaDecimal = base * height;
    const area = areaDecimal.toFixed(2);
    setElementText('Parallelogram-area', area);
}

// Calculate Rhombus Area
function calculateRhombusArea(){
    const length = getInputValue('Rhombus-length');
    const height = getInputValue('Rhombus-height');

    if(isNaN(length) || isNaN(height)){
        alert('Please Enter a Valid Number!!');
        return;
    }

    const areaDecimal = 0.5 * length * height;
    const area = areaDecimal.toFixed(2);
    setElementText('Rhombus-area', area);
}

// Calculate Pentagon Area
function calculatePentagonArea(){
    const base = getInputValue('pentagon-base');
    const height = getInputValue('pentagon-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please Enter a Valid Number!!');
        return;
    }

    const areaDecimal = 0.5 * base * height;
    const area = areaDecimal.toFixed(2);
    setElementText('pentagon-area', area);

}


// Calculate Ellipse Area
function calculateEllipseArea() {
    const major = getInputValue('ellipse-major');
    const minor = getInputValue('ellipse-minor');

    if(isNaN(major) || isNaN(minor)){
        alert('Please Enter a Valid Number!!');
        return;
    }

    const areaDecimal = 3.14 * major * minor;
    const area = areaDecimal.toFixed(2);
    setElementText('ellipse-area', area);

    
    addCalculationEntry('Ellipse', area);
}

// Reuseable get input Function
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// Reuseable Set Text Function

function setElementText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Add to Calculation Entry 

function addCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    p.classList.add('my-4')
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success">Convert</button>`;

    calculationEntry.appendChild(p)
}
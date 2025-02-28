let data = [];

document.getElementById('calculate').addEventListener('click', (e) => {
    const name = document.getElementById('name').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const cost = parseFloat(document.getElementById('cost').value);
    const height = parseFloat(document.getElementById('height').value);
    const diameter = parseFloat(document.getElementById('diameter').value);
    const volume = Math.PI * Math.pow(diameter / 2, 2) * height;
    let efficiencyMetric = weight / (cost * volume);
    console.log(efficiencyMetric);
    // efficiencyMetric = efficiencyMetric.toFixed(2);
    
    data.push({name, weight, cost, volume, efficiencyMetric});
    
    document.getElementById('name').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('cost').value = '';
    document.getElementById('height').value = '';
    document.getElementById('diameter').value = '';
    console.log(data);

    sort(data);
    reloadTable(document.querySelector('table'), data);
});

function sort(data) {
    return data.sort((a, b) => b.efficiencyMetric - a.efficiencyMetric);
}

function reloadTable(table, data) {
    let header = table.firstElementChild;

    // Clear the table except the header
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    table.appendChild(header);

    // Iterate over the data array
    data.forEach((datum) => {
        console.log(datum);
        const row = document.createElement('tr');
        row.innerHTML = `<td>${datum.name}</td><td>${datum.weight}</td><td>${datum.cost}</td><td>${datum.volume}</td><td>${datum.efficiencyMetric}</td>`;
        table.appendChild(row);
    });
}

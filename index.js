document.getElementById('calculate').addEventListener('click', (e) => {

    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const cost = document.getElementById('cost').value;
    const height = document.getElementById('height').value;
    const diameter = document.getElementById('diameter').value;
    const volume = Math.PI * Math.pow(diameter / 2, 2) * height;
    const efficiencyMetric = weight / (cost * volume);
    efficiencyMetric = efficiencyMetric.toFixed(2);
    const table = document.querySelector('table');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td><td>${weight}</td><td>${cost}</td><td>${volume}</td><td>${efficiencyMetric}</td>`;
    table.appendChild(row);
    document.getElementById('name').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('cost').value = '';
    document.getElementById('height').value = '';
    document.getElementById('diameter').value = '';
})
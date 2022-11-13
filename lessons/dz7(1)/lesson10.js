
const body = document.querySelector('body');
const table = document.createElement('table');
const tbodyTable = document.createElement('tbody')



function getRandomNumberInTable() {
	const array = [];
	for (let i = 0; i < 10; i++) {
		array[i] = [];
		const trTable = document.createElement('tr');
		for (let j = 0; j < 10; j++) {
			const tdTable = document.createElement('td');
			array[i][j] = Math.floor((Math.random() * 100) + 1);
			tdTable.innerHTML = array[i][j];
			trTable.append(tdTable)
		}
		tbodyTable.append(trTable)
	}
	table.append(tbodyTable)
	table.setAttribute('border','2')
	body.append(table);
}

getRandomNumberInTable();




interface Data {
    // define the structure of the data retrieved from the API
    // e.g. { id: number; name: string; email: string; }
  }
  

  // random table data api 

  const url = 'https://random-data-api.com/api/users/random_user?size=10';


  // fetch data from api

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  // create table

  const createTable = (data: Data[]) => {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    const tableHeadData = document.createElement('th');
    const tableBodyRow = document.createElement('tr');
    const tableBodyData = document.createElement('td');

    // create table head

    tableHeadData.textContent = 'ID';
    tableHeadRow.appendChild(tableHeadData);
    tableHead.appendChild(tableHeadRow);
    table.appendChild(tableHead);

    // create table body

    data.forEach((item) => {
      tableBodyRow.appendChild(tableBodyData);
      tableBody.appendChild(tableBodyRow);
      table.appendChild(tableBody);
    });

    return table;
  }

  // render table

  const renderTable = async () => {
    const data = await getData();
    const table = createTable(data);
    document.body.appendChild(table);
  }

  renderTable();

  // Path: index.html


  
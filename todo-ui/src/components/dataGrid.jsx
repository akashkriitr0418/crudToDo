import { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { fetchToDos } from '../services/fetchToDos';
import { Button } from '@material-ui/core';
// import { GridApi } from 'ag-grid/main';


const ToDoData = () => {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
 
    const [columnDefs] = useState([
        { field: "text", sortable: false, filter: true },
        { field: "DueDate", sortable: true, filter: true },
        { field: "is_completed", sortable: true, filter: true },
        { field: "assigned_to", sortable: true, filter: true },
        { field: "type", sortable: false, filter: true },
        
    ]);     
 
    useEffect(() => {
        fetchToDos()
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);
 
  
    return (
        <div className="ag-theme-alpine" style={{height: '100rem', width:'100rem' }}>
             {/* <Button onclick = {() => GridApi.applyTransaction({add:[{}]})}>Add a row</Button> */}
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                rowSelection="multiple">
            </AgGridReact>
        </div>
   );
 };
 export default ToDoData;
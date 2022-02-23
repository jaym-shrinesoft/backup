import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import cellEditFactory from 'react-bootstrap-table2-editor';
import BootstrapTable from 'react-bootstrap-table-next';
import { useState, useEffect } from 'react';
import PickyTable from './PickyTable';
import { Link } from 'react-router-dom';

export default function RBSTable(props) {
    const [counteries, setcountry] = useState([]);
    const API = process.env.REACT_APP_BASE_URL;
    const API_KEY = `${API}/getAll`;

    const loadData = async () => {
        const response = await fetch(API_KEY);
        const data = await response.json();
        setcountry(data);
    }
    useEffect(() => {
        loadData();
        //eslint-disable-next-line
    }, [])
    const linkFollow = () => {
        return (
            <button style={{ border: 'none', backgroundColor: 'transparent', width: '100%', textAlign: 'center', color: '#cf0c0c' }}>
                <i className="bi bi-x-circle-fill"> Remove Item</i>
            </button>
        );
    }
    const columns = [
        {
            dataField: 'name',
            text: 'Country Name',
            sort: true
        },
        {
            dataField: 'countryId',
            text: 'Country ID',
            sort: true
        },
        {
            dataField: '',
            text: 'Delete',
            sort: true,
            isDummyField: true,
            formatter: linkFollow,
            editable: false,
            events: {
                onClick: (e, column, columnIndex, row, rowIndex) => {
                    fetch(`${API}/delete/${row.id}`, { method: 'DELETE' }).then(response => loadData())
                    loadData()
                },
            }
        },

    ]

    return (
        <>
            <div className='text-center'>
                <Link to="/form">Add Country</Link>
            </div>
            <div className='table-center' >
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={counteries}
                    columns={columns}
                    striped
                    hover
                    condensed
                    noDataIndication="Table is Empty"
                    cellEdit={cellEditFactory({
                        mode: 'dbclick',
                        afterSaveCell: (oldValue, newValue, row, column) => {
                            if (newValue === "") {
                                newValue = oldValue;
                            }
                            else {
                                const requestType = {
                                    method: "PUT",
                                    headers: { "Content-type": "application/json" },
                                    body: JSON.stringify({ id: row.id, name: row.name, countryId: row.countryId })
                                }
                                fetch('http://localhost:8080/country/update', requestType).then(response => loadData());
                            }
                        }
                    })}
                />


            </div>

            <div className='row'>
                <div className='col-4'>
                    <PickyTable counteries={counteries}></PickyTable>
                </div>
            </div>
        </>
    )
}

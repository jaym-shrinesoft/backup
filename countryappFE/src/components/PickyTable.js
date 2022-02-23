import React from 'react';
import { Picky } from 'react-picky';
import 'react-picky/dist/picky.css';
import { useState, useEffect } from 'react';


export default function PickyTable(props) {
    // const [counteries, setcountry] = useState([]);
    // const API = process.env.REACT_APP_BASE_URL;
    // const API_KEY = `${API}/getAll`;

    // const loadData = async () => {
    //     const respone = await fetch(API_KEY);
    //     const data = await respone.json();
    //     setcountry(data);
    // }
    // useEffect(() => {
    //     loadData();
    //     //eslint-disable-next-line
    // }, [counteries])
    const [multivalue, setMultivalue] = useState([]);
    const [countryList, setcountryList] = useState([]);
    const sortAsc = () => {
        countryList.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    const sortDesc = () => {     
        countryList.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            
            return 0;
        });
    }
    useEffect(() => {
        // console.log(multivalue);
        // console.log(multivalue.name);
    }, )
    return (
        <div className='table-center'>
            <div className='pickytable'>

                <Picky
                    options={countryList}
                    onOpen={() => { setcountryList(props.counteries) }}
                    placeholder='Counry'
                    filterPlaceholder='Filter'
                    labelKey="name"
                    valueKey="countryId"
                    includeFilter
                    multiple={true}
                    includeSelectAll={false}
                    value={multivalue}
                    onChange={setMultivalue}
                    numberDisplayed={0}
                    manySelectedPlaceholder='%s countries selected'
                    selectAllMode='filtered'
                    renderSelectAll={({
                        filtered,
                        tabIndex,
                        allSelected,
                        toggleSelectAll,
                        multiple,
                    }) => {
                        // Don't show if single select or items have been filtered.
                        // if (multiple && !filtered) {
                            return (
                                <div
                                    tabIndex={tabIndex}
                                    role="option"
                                    className={allSelected ? 'option selected' : 'option'}
                                >
                                    <button className='pickyBtn' onClick={sortAsc}><span className='btnIcon'><i className="bi bi-sort-alpha-down"></i></span> Ascending</button> <br />
                                    <button className='pickyBtn' onClick={sortDesc}><span className='btnIcon'><i className="bi bi-sort-alpha-down-alt"></i></span> Descending</button> <br />
                                    <button className='pickyBtn' onClick={toggleSelectAll} onKeyPress={toggleSelectAll}><span className='btnIcon'><i className="bi bi-check2-square"></i></span> Select All</button>
                                </div>
                            );
                        // }
                    }}

                />
            </div>
        </div>
    )
}
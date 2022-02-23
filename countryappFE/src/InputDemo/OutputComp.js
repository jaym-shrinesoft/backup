import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectDARM } from './nameSlice'
import { Picky } from 'react-picky';
import { useState, useEffect } from 'react';
import { onDarmChange } from './nameSlice'

export default function OutputComp() {
    const darmPlaceholder = useSelector(selectDARM);
    const [multivalue, setMultivalue] = useState();
    const dispatch = useDispatch();
    const darmVerifications = [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
        { label: 'Reverify', value: 'Reverify' }
    ];
    useEffect(() => {
        if (multivalue !== undefined) {
            console.log("Multivalue : ", multivalue);
            dispatch(onDarmChange(multivalue));
        }
    }, [multivalue]);

    useEffect(() => {
        console.log("DARM Output : ", darmPlaceholder);
        if (darmPlaceholder !== "") {
            setMultivalue(darmPlaceholder)
        }
        else{
            setMultivalue(undefined)
        }
    }, [darmPlaceholder]);
    
    return (
        <div className='container text-center my-4'>
            <Picky
                options={darmVerifications}
                placeholder="DARM"
                labelKey="value"
                valueKey="label"
                includeSelectAll={false}
                // value={multivalue}
                value={multivalue ? {label : `${multivalue.label}`,value: `DARM (${multivalue.label})`}: {label:"DARM", value:"DARM"}}
                onChange={setMultivalue}
                numberDisplayed={0}
                selectAllMode='filtered'
            />
        </div>
    )
}
import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onDarmChange } from './nameSlice'
import { selectDARM } from './nameSlice'

export default function InputComp() {
    const dispatch = useDispatch()
    const darmPlaceholder = useSelector(selectDARM)
    const [selectedOption, setselectedOption] = useState("DARM");
    const darmVerifications = [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
        { label: 'Reverify', value: 'Reverify' }
    ];
    const handledarmVerifiedChanges = (e) => {
        // console.log("DARM Select : ",JSON.parse(e));
        if (e === "") {
            dispatch(onDarmChange(e))
        }
        else {
            dispatch(onDarmChange(JSON.parse(e)));
        }
    }
    // useEffect(() => {
    //     console.log(darmPlaceholder);
    // }, [])
    useEffect(() => {
        console.log("DARM Input : ", darmPlaceholder);
        console.log("Selected value : ", selectedOption);
        setselectedOption(JSON.stringify(darmPlaceholder))
    }, [darmPlaceholder]);

    return (
        <div className='container text-center my-4'>
            <select
                className="custom-select"
                data-index="8"
                // value={selectedOption}
                value={JSON.stringify(darmPlaceholder)}
                onChange={(e) => {
                    // setselectedOption(JSON.parse(e.target.value))
                    setselectedOption(e.target.value)
                    handledarmVerifiedChanges(e.target.value)
                }}
            >
                <option value="">DARM Verified</option>
                {darmVerifications.map((item) => (
                    <option key={item.value} value={JSON.stringify(item)} 
                    // selected={darmPlaceholder.value === item.label}
                    >
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
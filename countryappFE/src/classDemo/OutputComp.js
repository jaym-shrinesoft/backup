import React from 'react'
import { useSelector } from 'react-redux'
import { selectName} from './nameSlice'


export default function OutputComp() {
    const name = useSelector(selectName);
    return (
        <div className='container text-center'>
            <div><span className='text-muted'>Welcome : </span>{name}</div>
        </div>
    )
}

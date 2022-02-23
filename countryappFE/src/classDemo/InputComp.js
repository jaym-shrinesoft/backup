import React, { Component } from 'react'
import { connect } from 'react-redux';
import { onNameChange } from './nameSlice'


class InputComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        let input = e.target.value;
        this.setState({ name: input }, () => {
            const { onNameChange } = this.props;
            onNameChange(this.state.name);
        })
        // const { onNameChange } = this.props;
        // onNameChange(this.state.name);
    }
    render() {
        return (
            <div>
                <div className='container text-center'>
                    <div className='my-4 row justify-content-center'>
                        <div className='col-6'>
                            <input className='form-control' type="text" placeholder='Enter your name' value={this.state.name} onInput={this.handleInput}></input>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default connect(null, { onNameChange })(InputComp);



// import React from 'react'
// import { useState,useEffect } from 'react'
// import {useDispatch } from 'react-redux'
// import {onNameChange} from './nameSlice'

// export default function InputComp() {
//     const [name, setName] = useState("")
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(onNameChange(name))
//     }, [name])
//     return (
//         <div className='container text-center'>
//             <div className='my-4 row justify-content-center'>
//                 <div className='col-6'>
//                     <input className='form-control' type="text" placeholder='Enter your name' value={name} onChange={e => setName(e.target.value)}></input>
//                 </div>
//             </div>
//         </div>
//     )
// }
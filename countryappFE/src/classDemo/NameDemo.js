import React, { Component } from 'react'
import InputComp from './InputComp'
import OutputComp from './OutputComp'

export default class NameDemo extends Component {
  render() {
    return (
      <React.Fragment>
            <InputComp/>
            <OutputComp/>
        </React.Fragment>
    )
  }
}

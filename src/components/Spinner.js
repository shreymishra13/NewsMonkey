import React, { Component } from 'react'
import Spinners from './spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spinners} alt="" />
      </div>
    )
  }
}

import './Modal.css';
import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Percent } from '@mui/icons-material'

export default function ModalFinalLine(props) {

    function selfHandleChange(event) {
        props.handleChange(props.dataKey, Number(event.target.value))
    }

    return (
        <div className='modal-final-line-content'>
            <div className='box-field box-field-left'>
                <div style={{fontSize: 15}}>
                    <h4>Original Rate</h4>
                </div>
                <br/>
                <div style={{textAlign: 'center'}}>
                    {props.originalRate.toFixed(6)}
                </div>
            </div>
            <div className='box-field box-field-right'>
                <div style={{fontSize: 15}}>
                    <h4>Mark-Up Fee</h4>
                </div>
                <div>
                    <TextField onBlur={selfHandleChange} type='number' InputProps={{startAdornment: (
                        <InputAdornment position="start">
                            <Percent />
                        </InputAdornment>
                    )}} />
                </div>
            </div>
        </div>
    )
}
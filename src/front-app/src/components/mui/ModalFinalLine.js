import './Modal.css';
import '../../Button.css'
import React from 'react';
import { Button, InputAdornment, TextField } from '@mui/material';
import { Percent } from '@mui/icons-material'

const buttonTheme = {
    backgroundColor: '#9d2525',
    '&:hover': {
        backgroundColor: '#480606'
    }
}

export default function ModalFinalLine(props) {

    const [lastValue, setLastValue] = React.useState(null)

    function selfHandleChange(event) {
        if (event.target.value !== lastValue && event.target.value){
            props.handleChange(props.dataKey, Number(event.target.value))
            setLastValue(event.target.value)
        }
    }

    return (
        <div>
            <div className='modal-final-line-content'>
                <div className='box-field box-field-left'>
                    <div style={{fontSize: 15}}>
                        <h4>Original Rate</h4>
                    </div>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                        {props.originalRate}
                    </div>
                </div>
                <div className='box-field box-field-right'>
                    <div style={{fontSize: 15}}>
                        <h4>Mark-Up Fee</h4>
                    </div>
                    <div>
                        <TextField onBlur={selfHandleChange} placeholder='0' type='number' InputProps={{startAdornment: (
                            <InputAdornment position="start">
                                <Percent />
                            </InputAdornment>
                        )}} />
                    </div>
                </div>
            </div>
            <div className='box-button'>
                <div className='box-button-inner button'>
                    <Button 
                        variant="contained"
                        sx={buttonTheme}
                        onClick={props.handleCreateButtonClick}
                        disabled={!props.enableButton}
                    > Create </Button>
                </div>
            </div>
        </div>
    )
}
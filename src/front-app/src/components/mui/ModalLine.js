import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';


export default function ModalLine(props) {

    const defaultLabel = 'Please, select currency...'
    const [value, setValue] = React.useState('');
    const [desc, setDesc] = React.useState(defaultLabel)

    function selfHandleChange(event) {
        const desc = props.currenciesData.find(cd => cd.symbol === event.target.value)?.description
        setDesc(desc || defaultLabel)
        setValue(event.target.value)
        props.handleChange(props.dataKey, event.target.value)
    }

    if (!props.currenciesData) {
        return (
            <div>
                No Currencies data
            </div>
        )
    }

    return (
        <div style={{marginTop: '2vh', marginBottom: '8vh'}}>
            <p style={{fontSize: 20, float: 'left', 'width': '50%', display: 'inline-block'}}> {props.labelText} </p>
            <FormControl sx={{ minWidth: 250, float: 'right'}}>
                <Select
                    value={value}
                    onChange={selfHandleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.currenciesData.map((cd) => (
                        <MenuItem value={cd.symbol}>{cd.symbol}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>{desc}</FormHelperText>
            </FormControl>
        </div>
    )
}
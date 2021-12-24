import React from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import '../../Button.css';
import backendService from '../../services/backendService';
import EditIcon from '@mui/icons-material/Edit';
import PercentIcon from '@mui/icons-material/Percent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ModalLine from "./ModalLine";
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { Fade } from "@mui/material";
import { Percent } from '@mui/icons-material'

const buttonTheme = {
    backgroundColor: '#b5710b96',
    '&:hover': {
        backgroundColor: '#7a572396'
    }
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vmin',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function UpdateRateModal (props) {
    const [feePercentage, setFeePercentage] = React.useState(0)

    const handleClick = () => {
        props.handleFeeUpdate(feePercentage)
    }

    const handleInput = (event) => {
        setFeePercentage(Number(event.target.value))
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h5" component="h2">
                            Update mark up fee
                        </Typography>
                    <div className='action-box'>
                        <div className='action-box-field'>
                            <TextField onInput={handleInput} placeholder='0' type='number' InputProps={{startAdornment: (
                                <InputAdornment position="start">
                                    <Percent />
                                </InputAdornment>
                            )}} />
                        </div>
                        <div className='action-box-field'>
                            <Button variant="contained" onClick={handleClick} sx={buttonTheme}> Update </Button>
                        </div>
                    </div>
                </Box>
            </Fade>
        </Modal>
    )
}


export default function UpdateRateButton ({ rateId, handleRefresh }) {
    const [open, setOpen] = React.useState(false);
    
    const handleClick = () => {
        console.log('UPDATE')
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    }

    const handleFeeUpdate = (feePercentage) => {
        console.log(feePercentage)
        backendService.updateRateFeePercentage(rateId, feePercentage)
            .then(result => {
                if (result.success) {
                    handleRefresh(result.data)
                    setOpen(false)
                }
            })
    }

    return (
        <div>
            <div>
                <Button 
                    variant="contained" 
                    sx={buttonTheme}
                    onClick={handleClick}
                > 
                    <PercentIcon/>
                    <EditIcon/>
                </Button>
                <UpdateRateModal open={open} handleClose={handleClose} handleFeeUpdate={handleFeeUpdate} />
            </div>
        </div>
    )
}
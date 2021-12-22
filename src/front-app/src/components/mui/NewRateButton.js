import React from "react";
import { Button } from "@mui/material";
import '../../Button.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ModalContent from "./ModalContent";


const buttonTheme = {
    backgroundColor: '#9d2525',
    '&:hover': {
        backgroundColor: '#480606'
    }
}


export default function NewRateButton (props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        props.handleReload()
    };

    return (
        <div>
            <div className='new-rate-button-div'>
                <Button 
                    variant="contained" 
                    sx={buttonTheme}
                    startIcon={<AttachMoneyIcon/>}
                    onClick={handleOpen} > New Rate </Button>
            </div>
            <ModalContent open={open} handleClose={handleClose} />
        </div>
    )
}
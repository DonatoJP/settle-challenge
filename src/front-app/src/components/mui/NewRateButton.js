import React from "react";
import { Button } from "@mui/material";
import '../../Button.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const buttonTheme = {
    backgroundColor: '#9d2525',
    '&:hover': {
        backgroundColor: '#480606'
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

export default function NewRateButton () {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className='new-rate-button-div'>
                <Button 
                    variant="contained" 
                    sx={buttonTheme}
                    startIcon={<AttachMoneyIcon/>}
                    onClick={handleOpen} > New Rate </Button>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h5" component="h2">
                            Create new rate
                        </Typography>
                            <div>
                                <label style={{display: "inline-block", float:'left', marginTop: "2vmin", marginBottom: "2vmin"}}>From</label>
                                <label style={{display: "inline-block", float:'right', marginTop: "2vmin", marginBottom: "2vmin"}}>Selector From</label>
                            </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
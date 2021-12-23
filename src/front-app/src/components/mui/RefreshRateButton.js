import React from "react";
import { Button } from "@mui/material";
import '../../Button.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import backendService from '../../services/backendService';

const buttonTheme = {
    backgroundColor: '#9d2525',
    '&:hover': {
        backgroundColor: '#480606'
    }
}


export default function RefreshButton ({ rateId, handleRefresh }) {
    // const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        backendService.refreshRate(rateId).then(result => {
            console.log(result)
            if (result.success) {
                handleRefresh(result.data)
            }
        })
    };

    return (
        <div>
            <div>
                <Button 
                    variant="contained" 
                    sx={buttonTheme}
                    onClick={handleClick}
                > <AttachMoneyIcon/>
                </Button>
            </div>
        </div>
    )
}
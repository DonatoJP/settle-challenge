import React from "react";
import { Button } from "@mui/material";
import '../../Button.css';
import backendService from '../../services/backendService';
import RefreshIcon from '@mui/icons-material/Refresh';

const buttonTheme = {
    backgroundColor: '#b5710b96',
    '&:hover': {
        backgroundColor: '#7a572396'
    }
}


export default function RefreshButton ({ rateId, handleRefresh }) {
    // const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        backendService.refreshRate(rateId).then(result => {
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
                > <RefreshIcon/>
                </Button>
            </div>
        </div>
    )
}
import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ModalLine from "./ModalLine";
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { Fade } from "@mui/material";
import ModalFinalLine from "./ModalFinalLine";
import backendService from "../../services/backendService.js"

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

export default function ModalContent(props) {

    const [fromToData, setFromToData] = React.useState({from: null, to: null})
    const [feePercentage, setFeePercentage] = React.useState({feePercentage: null})
    const [originalRate, setOriginalRate] = React.useState(0.0)
    const [currData, serCurrData] = React.useState(null)

    function handleChangeToFrom (key, newValue) {
        const newData = Object.assign({}, fromToData)
        newData[key] = newValue
        setFromToData(newData)
    }

    function handleChangeFeePercentage (key, newValue) {
        const newData = Object.assign({}, feePercentage)
        newData[key] = newValue
        setFeePercentage(newData)
    }

    React.useEffect(() => {
        console.log('Data', fromToData)
        console.log('FeePercentage', feePercentage)
        async function fetchOriginalRate() {
            const origRate = await backendService.getOriginalRateBetween(fromToData.from, fromToData.to)
            return origRate
        }

        async function fetchCurrData () {
            return backendService.getAvailableCurrencies()
        }

        if (currData === null) {
            fetchCurrData().then((data) => {
                serCurrData(data)
            })
        }

        if (fromToData.from && fromToData.to) {
            try {
                fetchOriginalRate().then((origRate) => {
                    setOriginalRate(origRate)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }, [fromToData, feePercentage])

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
                        Create new rate
                    </Typography>
                        <ModalLine 
                            labelText='From'
                            dataKey='from'
                            currenciesData={currData}
                            handleChange={handleChangeToFrom}
                        />
                        <br />
                        <ModalLine 
                            labelText='To'
                            dataKey='to'
                            currenciesData={currData}
                            handleChange={handleChangeToFrom}
                        />
                        <br/ >
                        <ModalFinalLine 
                            dataKey='feePercentage'
                            handleChange={handleChangeFeePercentage}
                            originalRate={originalRate}
                        />
                </Box>
            </Fade>
        </Modal>
    )
}
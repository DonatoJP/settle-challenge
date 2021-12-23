import React from "react";
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import RefreshButton from "./RefreshRateButton";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#9d2525',
      color: theme.palette.common.white,
      fontSize: 20
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function TableLine(props) {

    const [data, setData] = React.useState(props)
    
    const handleRefresh = (newData) => {
        const newDataFormat = {
            from: newData.from.symbol,
            to: newData.to.symbol,
            originalRate: newData.originalRate,
            feePercentage: newData.feePercentage,
            feeAmount: newData.feeAmount,
            totalRate: newData.totalRate,
            id: newData._id
        }

        setData(newDataFormat)
    } 

    return (
        <StyledTableRow key={data.id}>
            <StyledTableCell component="th" scope="row">
                {data.from}
            </StyledTableCell>
            <StyledTableCell align="right">{data.to}</StyledTableCell>
            <StyledTableCell align="right">{data.originalRate}</StyledTableCell>
            <StyledTableCell align="right">{data.feePercentage}</StyledTableCell>
            <StyledTableCell align="right">{data.feeAmount}</StyledTableCell>
            <StyledTableCell align="right">{data.totalRate}</StyledTableCell>
            <StyledTableCell align="right">
                <RefreshButton rateId={data.id} handleRefresh={handleRefresh} />
            </StyledTableCell>
        </StyledTableRow>
    )
}
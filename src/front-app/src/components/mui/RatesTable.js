import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function CustomizedTables(props) {
    const data = props.data

    function getTableBody() {
        if (data.length === 0) {
            return (
              <TableBody sx={{textAlign: 'center'}}>
                <StyledTableCell align="center">{'\u2757'} Sorry, no data to show</StyledTableCell>
              </TableBody>
            )
        }
        return (
            <TableBody>
              {data.map((d) => (
                <StyledTableRow key={d._id}>
                    <StyledTableCell component="th" scope="row">
                        {d.from.symbol}
                    </StyledTableCell>
                    <StyledTableCell align="right">{d.to.symbol}</StyledTableCell>
                    <StyledTableCell align="right">{d.feePercentage}</StyledTableCell>
                    <StyledTableCell align="right">{d.feeAmount}</StyledTableCell>
                    <StyledTableCell align="right">{d.totalRate}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
        )
    }

    function getTableHead() {
      if (data.length === 0) {
        return (
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Settle Challenge</StyledTableCell>
            </TableRow>
          </TableHead>
        )
      }

      return (
        <TableHead>
          <TableRow>
            <StyledTableCell>From</StyledTableCell>
            <StyledTableCell align="right">To</StyledTableCell>
            <StyledTableCell align="right">Fee %</StyledTableCell>
            <StyledTableCell align="right">Fee Amount</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
      )
    }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">        
          {getTableHead()}
          {getTableBody()}
      </Table>
    </TableContainer>
  );
}
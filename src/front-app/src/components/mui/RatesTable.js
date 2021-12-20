import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import backendService from '../../services/backendService'

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

export default function CustomizedTables() {

    const [data, setData] = React.useState([]);
    const [hasData, setHasData] = React.useState(false);

    React.useEffect(async () => {
        if (hasData) {
            return
        }

        const dataFromBack = await backendService.getRates()
        setData(dataFromBack)
        setHasData(true)
    }, [])

  return (
    <TableContainer sx={{ width: '80vw' }} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>From</StyledTableCell>
            <StyledTableCell align="right">To</StyledTableCell>
            <StyledTableCell align="right">Fee %</StyledTableCell>
            <StyledTableCell align="right">Fee Amount</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
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
      </Table>
    </TableContainer>
  );
}
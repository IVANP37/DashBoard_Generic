import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(
  name: string,
  Actions: string,
  Paremeter1: number,
  Paremeter2: number,
  Paremeter3: number,
  Paremeter4: number,
) {
  return {
    name,
    Actions,
    Paremeter1,
    Paremeter2,
    Paremeter3,
    Paremeter4,
    history: [
      { date: '2020-01-05', customerId: '11091700', actions: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', actions: 1 },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.Actions}</TableCell>
        <TableCell align="right">{row.Paremeter2}</TableCell>
        <TableCell align="right">{row.Paremeter3}</TableCell>
        <TableCell align="right">{row.Paremeter4}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Action</TableCell>                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.actions}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Actions 1',-34.671476, -59.441929,-59.441929,'Lujan, Buenos Aires', 'parameterName'),
  createData('Actions 2',-33.506906,  -60.210636, -60.210636,'San Nicolás, Buenos Aires, Argentina','parameterName'),
  createData('Actions 3', -34.590117, -68.253507,-68.253507,'San Rafael, Mendoza, Argentina', 'parameterName'),
  createData('Actions 4', -40.621771, -67.315939,-67.315939,'Río Negro, Argentina', 'parameterName'),
  createData('Actions 5',  -25.254012, -57.691732,-57.691732,'Asunción, Paraguay', 'parameterName'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Actions Name</TableCell>
            <TableCell align="right">Lat</TableCell>
            <TableCell align="right">Lon</TableCell>
            <TableCell align="right">Name Area</TableCell>
            <TableCell align="right">Measurement parameter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



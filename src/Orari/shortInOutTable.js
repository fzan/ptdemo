import * as React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import { TableBody } from '@mui/material'

const useStyles = makeStyles({
    table: {
        width: '800px', /** dimensione 400px auto */
        height: '20px',
        border: '1px solid black'
    },
    tableContainer: {
        width: "80%",
        height: 'auto'
    }
});

export default function ShortInOutTable(props) {
    const classes = useStyles();
    return (

        <TableContainer className={classes.tableContainer} >
            <Table
                className={classes.table}
                aria-label="simple table"
                style={{ tableLayout: "fixed" }}
            >
                <TableBody>
                    <TableRow>
                        {
                            props.items.rowsE.map((item, i) =>
                                item.isActive === true ?
                                    <TableCell key={i} className='calendarTableStyle' style={{ backgroundColor: 'green', border: 'none' }} >
                                        5:30
                                    </TableCell> :
                                    <TableCell key={i} className='calendarTableStyle' style={{ border: 'none' }} />
                            )
                        }
                    </TableRow>

                    <TableRow>
                        {
                            props.items.rowsU.map((item, i) =>
                                item.isActive === true ?
                                    <TableCell key={i} className='calendarTableStyle' style={{ backgroundColor: 'red', border: 'none' }} /> :
                                    <TableCell key={i} className='calendarTableStyle' style={{ border: 'none' }} />
                            )
                        }
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
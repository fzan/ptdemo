import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
    table: {
        width: 'auto',
        overflowX: "visible"
    },
    sticky: {
        position: "sticky",
        left: 0,
        background: "white",
        borderRight: "2px solid black"
    }
});

export default function InOutTable(props) {
    const classes = useStyles();
    return (

        <TableContainer >
            <Table
                className={classes.table}
                aria-label="simple table"
                style={{ tableLayout: "fixed" }}
            >
                <TableRow style={{ border: '1px solid #dedede' }}>
                    <TableCell />
                    {
                        props.items.header.map((item) =>
                            <TableCell style={{ border: '1px solid #dedede', heigth: "40px", padding: '8px', marginLeft: '10%', marginRight: '10%' }}>
                                {item}</TableCell>
                        )
                    }
                </TableRow>

                <TableRow>
                    <TableCell
                        className={classes.sticky}
                        component="th"
                        scope="row"

                    >
                        ENTRATA
                    </TableCell>
                    {
                        props.items.rowsE.map((item) =>
                            item.isActive === true ?
                                <TableCell className='calendarTableStyle' style={{ backgroundColor: 'green' }} /> :
                                <TableCell className='calendarTableStyle' />
                        )
                    }
                </TableRow>

                <TableRow>
                    <TableCell
                        className={classes.sticky}
                        component="th"
                        scope="row"
                    >
                        USCITA
                    </TableCell>
                    {
                        props.items.rowsU.map((item) =>
                            item.isActive === true ?
                                <TableCell className='calendarTableStyle' style={{ backgroundColor: 'red' }} /> :
                                <TableCell className='calendarTableStyle' />
                        )
                    }
                </TableRow>
            </Table>
        </TableContainer>
    );
}
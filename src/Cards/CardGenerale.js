import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslate } from 'react-admin'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardGenerale(record) {
    const translate = useTranslate()
    const classes = useStyles();
    return (
        <TableContainer>
            <Table>
                <TableBody>

                    <TableRow >
                        <TableCell>
                            <TextField id="description" label={translate('resources.cardGenerale.fields.description')} defaultValue={record.description} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="code" label={translate('resources.cardGenerale.fields.code')} defaultValue={record.code} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="brief" label={translate('resources.cardGenerale.fields.brief')} defaultValue={record.brief} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="color" label={translate('resources.cardGenerale.fields.color')} defaultValue={record.color} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardGenerale.fields.subTitle1')}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <TextField id="type" label={translate('resources.cardGenerale.fields.type')} defaultValue={record.type} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="base" label={translate('resources.cardGenerale.fields.base')} defaultValue={record.base} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="minimum" label={translate('resources.cardGenerale.fields.minimum')} defaultValue={record.minimum} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="savingDay" label={translate('resources.cardGenerale.fields.savingDay')} defaultValue={record.savingDay} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <TextField id="from" label={translate('resources.cardGenerale.fields.from')} defaultValue={record.from} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="to" label={translate('resources.cardGenerale.fields.to')} defaultValue={record.to} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="nextDays" label={translate('resources.cardGenerale.fields.nextDays')} defaultValue={record.nextDays} InputProps={{ readOnly: true }} style={{ width: 230 }} className={classes.textInput} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="onMoreDays" checked={record.onMoreDays} />
                            } label={translate('resources.cardGenerale.fields.onMoreDays')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="causalCodesOutOfRange" checked={record.causalCodesOutOfRange} />
                            } label={translate('resources.cardGenerale.fields.causalCodesOutOfRange')} />
                        </TableCell>
                    </TableRow>

                </TableBody >
            </Table>
        </TableContainer>

    );
}

export default CardGenerale;
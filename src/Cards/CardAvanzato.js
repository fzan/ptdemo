import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import { ReferenceField, useTranslate } from 'react-admin'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardAvanzato(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <TableContainer>
            <Table>
                <TableBody>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardAvanzato.fields.subTitle1')}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <TextField id="saturday" label={translate('resources.cardAvanzato.fields.saturday')} defaultValue={record.saturday} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="sundayHolyday" label={translate('resources.cardAvanzato.fields.sundayHolyday')} defaultValue={record.sundayHolyday} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="preHolyday" label={translate('resources.cardAvanzato.fields.preHolyday')} defaultValue={record.preHolyday} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardAvanzato.fields.subTitle2')}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="reportPunchOutOfBands" checked={record.reportPunchOutOfBands} />
                            } label={translate('resources.cardAvanzato.fields.reportPunchOutOfBands')} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardAvanzato.fields.subTitle3')}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="overtimeMustBeAuthorized" checked={record.overtimeMustBeAuthorized} />
                            } label={translate('resources.cardAvanzato.fields.overtimeMustBeAuthorized')} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <TextField id="rounding" label={translate('resources.cardAvanzato.fields.rounding')} defaultValue={record.rounding} InputProps={{ readOnly: true }} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="applyRoundingInBandsToBeAuthorized" checked={record.applyRoundingInBandsToBeAuthorized} />
                            } label={translate('resources.cardAvanzato.fields.applyRoundingInBandsToBeAuthorized')} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardAvanzato.fields.subTitle4')}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <ReferenceField source="profilosId" reference="profilos" link={false}>
                                <ProfiloDiRielaborazione />
                            </ReferenceField>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}

const ProfiloDiRielaborazione = (props) => {
    const translate = useTranslate()
    return (
        <TextField label={translate('resources.cardAvanzato.fields.subTitle1')} defaultValue={props.record.name} InputProps={{ readOnly: true }} />
    )
}

export default CardAvanzato;
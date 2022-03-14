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
import { useTranslate } from 'react-admin'


const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEsperto(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <TableContainer>
            <Table>
                <TableBody>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="selectiveCompensation" checked={record.selectiveCompensation} />
                            } label={translate('resources.cardEsperto.fields.selectiveCompensation')} />
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell>
                            <TextField id="cumulativeAbsence" label={translate('resources.cardEsperto.fields.cumulativeAbsence')} defaultValue={record.cumulativeAbsence} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="cumulativeOvertime" label={translate('resources.cardEsperto.fields.cumulativeOvertime')} defaultValue={record.cumulativeOvertime} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <TextField id="maximal" label={translate('resources.cardEsperto.fields.maximal')} defaultValue={record.maximal} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="positiveBalanceForCompensateHours" checked={record.positiveBalanceForCompensateHours} />
                            } label={translate('resources.cardEsperto.fields.positiveBalanceForCompensateHours')} />
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="bandsInCaseOfAbsence" checked={record.bandsInCaseOfAbsence} />
                            } label={translate('resources.cardEsperto.fields.bandsInCaseOfAbsence')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="extendOverMissedPauses" checked={record.extendOverMissedPauses} />
                            } label={translate('resources.cardEsperto.fields.extendOverMissedPauses')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="adaptiveDeductionOfStandardPunch" checked={record.adaptiveDeductionOfStandardPunch} />
                            } label={translate('resources.cardEsperto.fields.adaptiveDeductionOfStandardPunch')} />
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell>
                            <TextField id="eUSequences" label={translate('resources.cardEsperto.fields.eUSequences')} defaultValue={record.eUSequences} InputProps={{ readOnly: true }} className={classes.textInput} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="punchOutsideElasticBand" checked={record.punchOutsideElasticBand} />
                            } label={translate('resources.cardEsperto.fields.punchOutsideElasticBand')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="movePunchType" checked={record.movePunchType} />
                            } label={translate('resources.cardEsperto.fields.movePunchType')} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="deactivateBandsAfterIdentifiedType" checked={record.deactivateBandsAfterIdentifiedType} />
                            } label={translate('resources.cardEsperto.fields.deactivateBandsAfterIdentifiedType')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="scheduleBecomeStiff" checked={record.scheduleBecomeStiff} />
                            } label={translate('resources.cardEsperto.fields.scheduleBecomeStiff')} />
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>

    );
}

export default CardEsperto;
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
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
        <TableBody>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">{translate('resources.cardAvanzato.fields.subTitle1')}</ListSubheader>}
                >
                    <TextField id="saturday" label={translate('resources.cardAvanzato.fields.saturday')} defaultValue={record.saturday} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="sundayHolyday" label={translate('resources.cardAvanzato.fields.sundayHolyday')} defaultValue={record.sundayHolyday} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="preHolyday" label={translate('resources.cardAvanzato.fields.preHolyday')} defaultValue={record.preHolyday} InputProps={{ readOnly: true }} className={classes.textInput} />
                </List>
            </TableRow>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">{translate('resources.cardAvanzato.fields.subTitle2')}</ListSubheader>}
                >
                    <FormControlLabel control={
                        <CheckBox id="reportPunchOutOfBands" checked={record.reportPunchOutOfBands} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardAvanzato.fields.reportPunchOutOfBands')} />
                </List>
            </TableRow>

            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">{translate('resources.cardAvanzato.fields.subTitle3')}</ListSubheader>}
                >
                    <FormControlLabel control={
                        <CheckBox id="overtimeMustBeAuthorized" checked={record.overtimeMustBeAuthorized} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardAvanzato.fields.overtimeMustBeAuthorized')} />
                </List>
            </TableRow>
            <TableRow>
                <TextField id="rounding" label={translate('resources.cardAvanzato.fields.rounding')} defaultValue={record.rounding} InputProps={{ readOnly: true }} />
            </TableRow>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="applyRoundingInBandsToBeAuthorized" checked={record.applyRoundingInBandsToBeAuthorized} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardAvanzato.fields.applyRoundingInBandsToBeAuthorized')} />
            </TableRow>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">{translate('resources.cardAvanzato.fields.subTitle4')}</ListSubheader>}
                >

                    <ReferenceField source="profilosId" reference="profilos" link={false}>
                        <ProfiloDiRielaborazione />
                    </ReferenceField>

                </List>
            </TableRow>
        </TableBody>
    );
}

const ProfiloDiRielaborazione = (props) => {
    const translate = useTranslate()
    return (
        <div>
            <TextField label={translate('resources.cardAvanzato.fields.subTitle1')} defaultValue={props.record.nome} InputProps={{ readOnly: true }} />
        </div>
    )
}

export default CardAvanzato;
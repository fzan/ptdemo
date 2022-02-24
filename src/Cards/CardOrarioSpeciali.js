import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslate } from 'react-admin'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardOrarioSpeciali(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <TableBody>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">{translate('resources.cardOrarioSpeciali.fields.subTitle1')}</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="postElaborazioniCompensazioneAutomatica" checked={record.postElaborazioniCompensazioneAutomatica} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.postElaborazioniCompensazioneAutomatica')} />
                    <FormControlLabel control={
                        <CheckBox id="postElaborazioniVociAutomatiche" checked={record.postElaborazioniVociAutomatiche} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.postElaborazioniVociAutomatiche')} />
                    <FormControlLabel control={
                        <CheckBox id="postElaborazioniUsaTipoReali" checked={record.postElaborazioniUsaTipoReali} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.postElaborazioniUsaTipoReali')} />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">{translate('resources.cardOrarioSpeciali.fields.subTitle2')}</ListSubheader>}
            >
                <TableRow width=''>
                    <TextField id="oreTeoricheHHTeoriche" label={translate('resources.cardOrarioSpeciali.fields.oreTeoricheHHTeoriche')} defaultValue={record.oreTeoricheHHTeoriche} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="oreTeoricheTipoGG" label={translate('resources.cardOrarioSpeciali.fields.oreTeoricheTipoGG')} defaultValue={record.oreTeoricheTipoGG} InputProps={{ readOnly: true }} className={classes.textInput} />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">{translate('resources.cardOrarioSpeciali.fields.subTitle3')}</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="strategieIgnorareTimbratureOrfane" checked={record.strategieIgnorareTimbratureOrfane} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.strategieIgnorareTimbratureOrfane')} />
                    <FormControlLabel control={
                        <CheckBox id="strategieTimbratureDiscriminazioneAutomatica" checked={record.strategieTimbratureDiscriminazioneAutomatica} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.strategieTimbratureDiscriminazioneAutomatica')} />
                    <FormControlLabel control={
                        <CheckBox id="strategieGiustificativiRigidi" checked={record.strategieGiustificativiRigidi} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.strategieGiustificativiRigidi')} />
                </TableRow>
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="strategieGiustificativiFlex" checked={record.strategieGiustificativiFlex} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.strategieGiustificativiFlex')} />
                    <FormControlLabel control={
                        <CheckBox id="strategieGiustificativiAssenzaTimbrature" checked={record.strategieGiustificativiAssenzaTimbrature} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.strategieGiustificativiAssenzaTimbrature')} />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">{translate('resources.cardOrarioSpeciali.fields.subTitle4')}</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="OmissioneDescrizioneOrdiniServizio" checked={record.OmissioneDescrizioneOrdiniServizio} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.OmissioneDescrizioneOrdiniServizio')} />
                </TableRow>
            </List>
        </TableBody>
    );
}

export default CardOrarioSpeciali;
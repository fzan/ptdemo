import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import CardGenerale from '../Cards/CardGenerale'
import CardOrarioSpeciali from '../Cards/CardOrarioSpeciali'
import CardEsperto from '../Cards/CardEsperto'
import CardAvanzato from '../Cards/CardAvanzato'
import Grid from '@material-ui/core/Grid'
import { useTranslate } from 'react-admin'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function OrariDetails({ record }) {
    const translate = useTranslate()
    // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container spacing={1} style={{ width: "100%" }}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered={true}
                >
                    <Tab label={translate('resources.orariDetails.fields.generale')} />
                    <Tab label={translate('resources.orariDetails.fields.avanzato')} />
                    <Tab label={translate('resources.orariDetails.fields.esperto')} />
                    <Tab label={translate('resources.orariDetails.fields.orarioSpeciale')} />
                </Tabs>
                <TabPanel value={value} index={0} style={{ display: 'flex', justifyContent: 'center' }}>
                    <CardGenerale {...record} />
                </TabPanel>
                <TabPanel value={value} index={1} style={{ display: 'flex', justifyContent: 'center' }}>
                    <CardAvanzato {...record} />
                </TabPanel>
                <TabPanel value={value} index={2} style={{ display: 'flex', justifyContent: 'center' }}>
                    <CardEsperto {...record} />
                </TabPanel>
                <TabPanel value={value} index={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <CardOrarioSpeciali {...record} />
                </TabPanel>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
}
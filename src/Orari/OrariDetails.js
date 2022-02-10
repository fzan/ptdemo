import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CardGenerale from '../Cards/CardGenerale'
import CardOrarioSpeciali from '../Cards/CardOrarioSpeciali'
import CardEsperto from '../Cards/CardEsperto'
import CardAvanzato from '../Cards/CardAvanzato'
import Table from '@material-ui/core/Table'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

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
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export default function OrariDetails({ record }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container spacing={1} style={{ width: "100%" }}>
            <Grid item xs={2} />
            <Grid item xs={8}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Generale" />
                    <Tab label="Avanzato" />
                    <Tab label="Esperto" />
                    <Tab label="Orario Speciali" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <CardGenerale {...record} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CardAvanzato {...record} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <CardEsperto {...record} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <CardOrarioSpeciali {...record} />
                </TabPanel>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    );
}
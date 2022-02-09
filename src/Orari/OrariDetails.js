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
        <Paper className={classes.root}>
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
                <div style={{ width: '100%' }}>
                    <Table style={{ width: 600, margin: 'auto' }} aria-label="simple table" >
                        <CardGenerale {...record} />
                    </Table>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{ width: '100%' }}>
                    <Table style={{ width: 600, margin: 'auto' }} aria-label="simple table" >
                        <CardAvanzato {...record} />
                    </Table>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div style={{ width: '100%' }}>
                    <Table style={{ width: 600, margin: 'auto' }} aria-label="simple table" >
                        <CardEsperto {...record} />
                    </Table>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div style={{ width: '100%' }}>
                    <Table style={{ width: 600, margin: 'auto' }} aria-label="simple table" >
                        <CardOrarioSpeciali {...record} />
                    </Table>
                </div>
            </TabPanel>
        </Paper>

    );
}
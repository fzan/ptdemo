import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./Calendario.css";
import InOutTable from './InOutTable';
import dataProvider from '../data';
import moment from 'moment';

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    // { field: 'scheduleId', headerName: 'Schedule Id', width: 130 },
    { field: 'v', headerName: 'Ingresso / Uscita ', width: 130 },
    { field: 'from', headerName: 'From', width: 90 },
    { field: 'to', headerName: 'To', width: 90 },
    { field: 'gg', headerName: 'GG', width: 60 },
    { field: 'punch', headerName: 'Punch', width: 90 },
    { field: 'type', headerName: 'Type', width: 90 },
    { field: 'delType', headerName: 'Del Type', width: 90 }
]

export default function InOutCalendar({ record }) {

    const [rows, setRows] = useState([])

    useEffect(() => {

        dataProvider.getList('punchTypes', {
            pagination: { page: 1, perPage: 5 },
            sort: { field: 'id', order: 'ASC' },
            filter: { scheduleId: record.id },
        }).then(res => setRows(res.data));
    }, []) /* record.id */

    const slotHeader = 48 //48
    const formatHour = 'HH:mm'

    let items = { header: [], rowsE: [], rowsU: [] };
    items.header = Array(slotHeader)
        .fill()
        .map((_, index) =>
            moment({
                hour: Math.floor((24 / slotHeader) * index),
                minute: 24 / slotHeader * 60 * (index % (slotHeader / 24))
            })
                .format(formatHour));
    // items.header = Array(slotHeader)
    //     .fill()
    //     .map((_, index) =>
    //         moment({
    //             hour: Math.floor(0.5 * index),
    //             minute: 30 * (index % 2)
    //         })
    //             .format(formatHour));
    items.rowsE = Array(slotHeader)
        .fill()
        .map((_, index) => {
            return {
                isActive:
                    rows.filter(row => row.v === 'E').some((item) =>
                        moment(items.header[index], formatHour).isBetween(moment(item.from, formatHour), moment(item.to, formatHour), undefined, [])
                        ||
                        moment(item.from, formatHour).isBetween(moment(items.header[index], formatHour), moment(items.header[index + 1], formatHour), undefined, [])
                        ||
                        moment(item.to, formatHour).isBetween(moment(items.header[index - 1], formatHour), moment(items.header[index], formatHour), undefined, [])
                    ),
                onclick: () => console.log('click su riga entrata, orario +' + items.header(index))

            }
        })
    items.rowsU = Array(slotHeader)
        .fill()
        .map((_, index) => {
            return {
                isActive:
                    rows.filter(row => row.v === 'U').some((item) =>
                        moment(items.header[index], formatHour).isBetween(moment(item.from, formatHour), moment(item.to, formatHour), undefined, [])
                        ||
                        moment(item.from, formatHour).isBetween(moment(items.header[index], formatHour), moment(items.header[index + 1], formatHour), undefined, [])
                        ||
                        moment(item.to, formatHour).isBetween(moment(items.header[index - 1], formatHour), moment(items.header[index], formatHour), undefined, [])
                    ),
                onclick: () => console.log('click su riga entrata, orario +' + items.header(index))

            }
        })
    // debugger
    return (
        <>
            <br />
            <InOutTable items={items} />
            <br />
            <div style={{ height: 400 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    );
}
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import "./Calendario.css"
import InOutTable from './InOutTable'
import dataProvider from '../data'
import moment from 'moment'
import { useTranslate } from 'react-admin'



export default function InOutCalendar({ record }) {
    const translate = useTranslate();
    const columns = [
        { field: 'v', headerName: translate('resources.inOutTable.fields.inOut'), width: 130 },
        { field: 'from', headerName: translate('resources.inOutTable.fields.from'), width: 90 },
        { field: 'to', headerName: translate('resources.inOutTable.fields.to'), width: 90 },
        { field: 'gg', headerName: translate('resources.inOutTable.fields.gg'), width: 60 },
        { field: 'punch', headerName: translate('resources.inOutTable.fields.punch'), width: 90 },
        { field: 'type', headerName: translate('resources.inOutTable.fields.type'), width: 90 },
        { field: 'delType', headerName: translate('resources.inOutTable.fields.delType'), width: 90 }
    ]
    const [rows, setRows] = useState([])

    useEffect(() => {

        dataProvider.getList('punchTypes', {
            pagination: { page: 1, perPage: 5 },
            sort: { field: 'id', order: 'ASC' },
            filter: { scheduleId: record.id },
        }).then(res => setRows(res.data));
    }, [record.id]) /*  */

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
            <div style={{ height: 400, width: '60%' }}>
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
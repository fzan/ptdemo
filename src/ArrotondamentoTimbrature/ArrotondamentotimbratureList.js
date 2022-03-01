import * as React from "react";
import { List, TextField, ReferenceField, Datagrid } from "react-admin"

export const ArrotondamentotimbratureList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="scheduleId" reference="schedules" link={false}>
                <TextField source="description" />
            </ReferenceField>
            <TextField source="v" />
            <TextField source="from" />
            <TextField source="type" />
            <TextField source="hour" />
            <TextField source="minutes" />
            <TextField source="plus_toll" />
            <TextField source="cumulate" />
        </Datagrid>
    </List>
);
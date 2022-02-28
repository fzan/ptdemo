import * as React from "react";
import { List, TextField, ReferenceField, Datagrid } from "react-admin"

export const ArrotondamentostraordinarioList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="scheduleId" reference="orarios" link={false}>
                <TextField source="description" />
            </ReferenceField>
            <TextField source="from" />
            <TextField source="tipo" />
            <TextField source="hour" />
            <TextField source="minutes" />
            <TextField source="toll" />
        </Datagrid>
    </List>
);
import * as React from "react";
import { ReferenceField, List, Datagrid,DateField, TextField } from "react-admin"

export const TimbraturetipoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="orarioId" reference="orarios"><TextField source="id" /></ReferenceField>
            <TextField source="v" />
            <TextField source="dalle" />
            <TextField source="alle" />
            <DateField source="gg" />
            <TextField source="timbratura" />
            <TextField source="tipo" />
        </Datagrid>
    </List>
);
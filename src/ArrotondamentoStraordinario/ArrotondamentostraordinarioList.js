import * as React from "react";
import { List, TextField, ReferenceField, DateField, Datagrid } from "react-admin"

export const ArrotondamentostraordinarioList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="orarioId" reference="orarios"><TextField source="id" /></ReferenceField>
            <TextField source="dalle" />
            <TextField source="tipo" />
            <TextField source="ora" />
            <DateField source="minuti" />
            <DateField source="toll" />
        </Datagrid>
    </List>
);
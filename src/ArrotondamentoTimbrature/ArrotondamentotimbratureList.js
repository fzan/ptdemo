import * as React from "react";
import { List, TextField, ReferenceField, DateField, Datagrid } from "react-admin"

export const ArrotondamentotimbratureList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="orarioId" reference="orarios"><TextField source="id" /></ReferenceField>
            <TextField source="v" />
            <TextField source="dalle" />
            <TextField source="tipo" />
            <TextField source="ora" />
            <DateField source="minuti" />
            <DateField source="plus_toll" />
            <DateField source="cumula" />
        </Datagrid>
    </List>
);
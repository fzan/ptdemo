import * as React from "react";
import { List, TextField, ReferenceField, Datagrid } from "react-admin"

export const ArrotondamentotimbratureList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="orarioId" reference="orarios" link={false}>
                <TextField source="descrizione" />
            </ReferenceField>
            <TextField source="v" />
            <TextField source="dalle" />
            <TextField source="tipo" />
            <TextField source="ora" />
            <TextField source="minuti" />
            <TextField source="plus_toll" />
            <TextField source="cumula" />
        </Datagrid>
    </List>
);
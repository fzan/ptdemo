import * as React from "react";
import { List, TextField, ReferenceField, Datagrid } from "react-admin"

export const ArrotondamentostraordinarioList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="orarioId" reference="orarios" link={false}>
                <TextField source="descrizione" />
            </ReferenceField>
            <TextField source="dalle" />
            <TextField source="tipo" />
            <TextField source="ora" />
            <TextField source="minuti" />
            <TextField source="toll" />
        </Datagrid>
    </List>
);
import * as React from "react";
import { List, TextField, ReferenceField, DateField, Datagrid } from "react-admin"

export const PauseList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="orarioId" reference="orarios"><TextField source="id" /></ReferenceField>
            <TextField source="descrizione" />
            <TextField source="dalle" />
            <TextField source="alle" />
            <TextField source="min" />
            <TextField source="max" />
            <DateField source="obbl" />
            <TextField source="tipologia" />
            <DateField source="voce" />
            <TextField source="eccedenze" />
            <DateField source="vocePerSegnalazione" />
        </Datagrid>
    </List>
);
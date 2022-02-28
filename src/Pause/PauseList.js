import * as React from "react";
import { List, TextField, ReferenceField, Datagrid } from "react-admin"

export const PauseList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="scheduleId" reference="orarios" link={false}>
                <TextField source="descrizione" />
            </ReferenceField>
            <TextField source="descrizione" />
            <TextField source="dalle" />
            <TextField source="alle" />
            <TextField source="min" />
            <TextField source="max" />
            <TextField source="obbl" />
            <TextField source="tipologia" />
            <TextField source="voce" />
            <TextField source="eccedenze" />
            <TextField source="vocePerSegnalazione" />
        </Datagrid>
    </List>
);
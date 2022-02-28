import * as React from "react";
import { List, TextField, ReferenceField, Datagrid } from "react-admin"

export const PauseList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="scheduleId" reference="orarios" link={false}>
                <TextField source="description" />
            </ReferenceField>
            <TextField source="description" />
            <TextField source="from" />
            <TextField source="to" />
            <TextField source="min" />
            <TextField source="max" />
            <TextField source="obbl" />
            <TextField source="tipologia" />
            <TextField source="entry" />
            <TextField source="surpluses" />
            <TextField source="reporting" />
        </Datagrid>
    </List>
);
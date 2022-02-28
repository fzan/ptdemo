import * as React from "react";
import { ReferenceField, List, Datagrid, TextField } from "react-admin"

export const TimbraturetipoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="scheduleId" reference="orarios" link={false}>
                <TextField source="description" />
            </ReferenceField>
            <TextField source="v" />
            <TextField source="dalle" />
            <TextField source="alle" />
            <TextField source="gg" />
            <TextField source="timbratura" />
            <TextField source="tipo" />
        </Datagrid>
    </List>
);
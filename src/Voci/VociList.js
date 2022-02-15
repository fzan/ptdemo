import * as React from "react";
import { List, TextField, ReferenceField, DateField, Datagrid } from "react-admin"

export const VociList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);
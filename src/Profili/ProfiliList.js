import * as React from "react";
import { List, Datagrid, TextField } from "react-admin"

export const ProfiliList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <TextField source="nome" />
        </Datagrid>
    </List>
);
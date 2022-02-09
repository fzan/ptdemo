import * as React from "react";
import { ReferenceField, List, Datagrid, TextField } from "react-admin"

export const FascedelmonteoreList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="orarioId" reference="orarios">
                <TextField source="descrizione" />
            </ReferenceField>
            <TextField source="causale" />
            <TextField source="dalle" />
            <TextField source="alle" />
        </Datagrid>
    </List>
);
import * as React from "react";
import { ReferenceField, List, Datagrid, TextField } from "react-admin";

export const FasceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="orarioId" reference="orarios" link={false}>
                <TextField source="descrizione" />
            </ReferenceField>
            <TextField source="causale" />
            <TextField source="dalle" />
            <TextField source="alle" />
            <TextField source="priorita" />
        </Datagrid>
    </List>
);
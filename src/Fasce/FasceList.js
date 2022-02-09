import * as React from "react";
import { ReferenceField, List, Datagrid,DateField, TextField } from "react-admin";

export const FasceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField label="Tipologia Orario" source="orarioId" reference="orarios">
                <TextField source="id" />
            </ReferenceField>
            <DateField source="causale" />
            <TextField source="dalle" />
            <TextField source="alle" />
            <DateField source="priorita" />
        </Datagrid>
    </List>
);
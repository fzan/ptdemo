import * as React from "react";
import { ReferenceField, List, Datagrid, TextField } from "react-admin"

export const FascedelmonteoreList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <ReferenceField source="scheduleId" reference="schedules" link={false} >
                <TextField source="description" />
            </ReferenceField>
            <TextField source="causalCode" />
            <TextField source="from" />
            <TextField source="to" />
        </Datagrid>
    </List>
);
import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const FascedelmonteoreEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="schedules"><SelectInput optionText="description" /></ReferenceInput>
            <TextInput source="causalCode" />
            <TextInput source="from" />
            <TextInput source="to" />
        </SimpleForm>
    </Edit>
);
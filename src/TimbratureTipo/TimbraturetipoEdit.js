import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const TimbraturetipoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="schedules"><SelectInput optionText="description" /></ReferenceInput>
            <TextInput source="v" />
            <TextInput source="from" />
            <TextInput source="to" />
            <TextInput source="gg" />
            <TextInput source="punch" />
            <TextInput source="type" />
        </SimpleForm>
    </Edit>
);
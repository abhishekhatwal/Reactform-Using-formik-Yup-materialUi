import * as Yup from 'yup';

export const Schema=Yup.object({
    name:Yup.string().min(2).max(25).required("enter your name"),
    address:Yup.string().min(2).max(70).required("enter your address"),
    select:Yup.string().required("select country"),
    gender: Yup.string().oneOf(['male', 'female', 'other'], 'Select a gender').required('Select a gender'),
    multipleSelect: Yup.array().min(1, 'Select at least one option').required('Select at least one option')
});
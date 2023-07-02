import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useFormik } from 'formik';
import { Schema } from './Schema';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


const initialvalue = {
  name: '',
  address: '',
  select: '',
  gender: '',
  multipleSelect: []
};

const Form = () => {
  const formik = useFormik({
    initialValues: initialvalue,
    validationSchema: Schema,
    onSubmit: (values, action) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2));
      action.resetForm();

    }
  });

  return (
    <>
      <div className='container'>

        <form className='form' onSubmit={formik.handleSubmit}>
          <div className='form-item'>
            <label className='label' htmlFor='outlined-required'>Name:</label>
            <TextField
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='name'
              type='text'
              required=''
              id='outlined-required'
              label='Name'
              autoComplete='off'
              variant='outlined'
            />
            {formik.errors.name && formik.touched.name ? (
              <FormHelperText error>{formik.errors.name}</FormHelperText>
            ) : null}
          </div>
          <div className='form-item'>
            <label className='label' htmlFor='outlined-multiline-static'>Address:</label>
            <TextField
              name='address'
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='address'
              type=''
              id='outlined-multiline-static'
              required=''
              label='Address'
              multiline
              rows={4}
              autoComplete='off'
              variant='outlined'
            />
            {formik.errors.address && formik.touched.address ? (
              <FormHelperText error>{formik.errors.address}</FormHelperText>
            ) : null}
          </div>

          <div className='form-item'>
            <label className='label' htmlFor='demo-simple-select-helper'>Country:</label>
            <Select
              name='select'
              value={formik.values.select}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='select'

              id='demo-simple-select-helper'

              variant='outlined'
            >
              <MenuItem value='india'>India</MenuItem>
              <MenuItem value='usa'>USA</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
            </Select>
            {formik.errors.select && formik.touched.select ? (
              <FormHelperText error>{formik.errors.select}</FormHelperText>
            ) : null}
          </div>

          <div className='form-item'>
            <label className='label'>Gender:</label>
            <div className='radio'>
              <div className='radio-item'>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor='male'>Male</label>
                <br />
              </div>
              <div className='radio-item'>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor='female'>Female</label>
                <br />
              </div>
              <div className='radio-item'>
                <input
                  type='radio'
                  id='other'
                  name='gender'
                  value='other'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor='other'>Other</label>
              </div>
              {formik.errors.gender && formik.touched.gender ? (
                <FormHelperText>{formik.errors.gender}</FormHelperText>
              ) : null}
            </div>
          </div>

          <div className='form-item'>
            <label className='label' htmlFor='multiple-select'>hobbies:</label>

            <Select
              name='multipleSelect'
              multiple
              value={formik.values.multipleSelect}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              id='multiple-select'
              className='select'
            >
              <MenuItem value='hobbie1'>hobbie 1</MenuItem>
              <MenuItem value='hobbie2'>hobbie 2</MenuItem>
              <MenuItem value='hobbie3'>hobbie 3</MenuItem>
            </Select>
            {formik.errors.multipleSelect && formik.touched.multipleSelect ? (
              <FormHelperText error>{formik.errors.multipleSelect}</FormHelperText>
            ) : null}
          </div>

          <Button variant="contained" color="primary" type="submit" >
            Submit
          </Button>
        </form>

      </div>
    </>
  );
};

export default Form;

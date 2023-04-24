import React, { useState } from 'react';
import {Form,Formik,Field} from 'formik';
import * as yup from 'yup';
import RedErrorMessage from './RedErrorMessage';

const FormikForm = () => {
   const [values,setValues] = useState({});
    const validations = yup.object({
        name:yup.string().required("Name is must"),
        age:yup.number().min(10).max(50).required("Age is must"),
        pass:yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter and one number")
        .required("Password is must"),
        gender:yup.string().required("Gender is must"),
        hobby:yup.array().min(1,"one hobby is must"),
        country:yup.string().required("country is must"),
        comment:yup.string().max(250).required("comment is must")
    });
  return (
    <div>
        <Formik 
        validationSchema={validations}
        initialValues={{ name:"",age:"",pass:"",gender:"",checkbox:[],hobby:"",country:"",Comments:""}}
        onSubmit={(values)=>{
            console.log(values);
            setValues(values);
        }}
        >
            <Form>
                <label htmlFor="">Enter name:</label>
                <Field type="text" name="name"/>
                <RedErrorMessage name='name'/>
                <br /><br />
                <label htmlFor="">Enter age:</label>
                <Field type="number" name="age"/>
                <RedErrorMessage name='age'/>
                <br /><br />
                <label htmlFor="">Enter password:</label>
                <Field type="text" name="pass"/>
                <RedErrorMessage name='pass'/>
                <br /><br />
                <label htmlFor="">Gender: &nbsp;</label>
                <label htmlFor="">Male &nbsp;</label>
                <Field type="radio" name="gender" value="Male" />
                &nbsp;
                <label htmlFor="">Female &nbsp;</label>
                <Field type="radio" name="gender" value="Female" />
                <br /><br />
                <RedErrorMessage name='gender'/>
                <label htmlFor="">Hobbies: &nbsp;</label>
                <label htmlFor="">Writing &nbsp;</label>
                <Field type="checkbox" name="hobby" value="Writing"/>
                &nbsp;
                <label htmlFor="">Reading &nbsp;</label>
                <Field type="checkbox" name="hobby" value="Reading"/>
                &nbsp;
                <label htmlFor="">Sleeping &nbsp;</label>
                <Field type="checkbox" name="hobby" value="Sleeping"/>
                <RedErrorMessage name='checkbox'/>
                <br /><br />
                <label htmlFor="">Country</label>
                <Field name="country" as="select">
                    <option value="">Select</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                </Field>
                <RedErrorMessage name='country'/>
                <br /><br />
                <label htmlFor="">Comments:</label>
                <Field as="textarea" name="comment"/>
                <RedErrorMessage name='comment'/>
                <br /><br />
                <button type='submit'>Submit</button>
                <h5>{JSON.stringify(values)}</h5>
            </Form>
        </Formik>
    </div>
  )
}

export default FormikForm

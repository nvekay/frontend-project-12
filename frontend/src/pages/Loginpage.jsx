import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';


const Loginpage = () => {
    const validationScheme = yup.object().shape({
        username: yup.string().required('Обязательное поле'),
        password: yup.number().required('Обязательное поле')
    })

    return (
     <div className='container-fluid h-100'>
        <div className='row justify-content-center align-content-center h-100'>
            <div className='col-12 col-md-8 col-xxl-6'>
                <div className='card shadow-sm'>
                    <div className='card-body row p-5'>
                        <h1 className='text-center mb-4'>Войти</h1>
                    <Formik
       initialValues={{ username: '', password: '' }}
       validate={validationScheme}
       onSubmit={(values) => {console.log(values)}}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         dirty,
         isValid
       }) => (
         <form className='col-12 col-md-6 mt-3 mt-mb-0' onSubmit={handleSubmit}>
            <div className='form-floating mb-3'>
            <label htmlFor="name">Ваш ник</label>
           <input 
             className='form-control'
             type="name"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {touched.name && errors.name && <p>{errors.name}</p>}
           </div>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={!isValid && !dirty}>
             Submit
           </button>
         </form>
       )}
     </Formik>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Loginpage;
import React from 'react'
// import { FormikProps, useFormik } from 'formik';
// import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
import Link from 'next/link';
// import 'react-toastify/dist/ReactToastify.css';

// import { Schema } from './schema';
import { IContact, IContactForm } from './IContactForm'
import InputField from './InputField/InputField'
import { ContactContainer } from './style'

function ContactForm({ setLoading } : IContact) {

  // const formik: FormikProps<IContactForm> = useFormik<IContactForm>({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     tel: '',
  //     message: '',
  //   },
  //   validationSchema: Schema,
  //   onSubmit: (values, { resetForm }) => {

  //     setLoading(true);
      
  //     axios.post('https://getform.io/f/294eb478-43fc-49d0-8702-288393d83daa', values)
  //     .then((response) => {
  //       if (response.status === 200 || response.status === 201) {
  //         toast.success("Formulario enviado!", {
  //           position: toast.POSITION.TOP_RIGHT,
  //           autoClose: 2000,
  //         });
  //       }
  //       setLoading(false);
  //     })

  //     .catch((error) => {
  //       toast.error(`Falha ao enviar: ${error}`, {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 2000,
  //       });

  //       setLoading(false);
  //     });


  //     resetForm();
  //   },
  // });

  // const getPropsField = (name: string) => ({
  //   id: name,
  //   ...formik.getFieldProps(name),
  // });
  
  return (
    <div className='container'>
      <span className='title'>Entrar em contato</span>
      <form>
        <div className='row'>
          <InputField
            type='text'
            label='Nome'
            placeholder='Nome completo'
            id='name'
            // getPropsField={getPropsField}
            // formik={formik}
          />
        </div>
        <div className='row'>
          <InputField
            type='email'
            label='Email'
            placeholder='Email@email.com'
            id='email'
            // formik={formik}
            // getPropsField={getPropsField}
          />
          <InputField
            type='tel'
            label='Celular(opcional)'
            placeholder='(11) 9 9999-9999'
            id='tel'
            // formik={formik}
            // getPropsField={getPropsField}
          />
        </div>
        <div className='row'>
          <InputField
            type='textarea'
            label='Mensagem'
            placeholder='Mensagem'
            id='message'
            // formik={formik}
            // getPropsField={getPropsField}
          />
        </div>
        <div className='row'>
          <button type='submit'>Enviar</button>
        </div>
      </form>
      <div className='links'>
      <Link href="/">Home</Link>
        <Link href="/">Contato</Link>
      </div>
      {/* <ToastContainer/> */}
      <style jsx>{ContactContainer}</style>
    </div>
  )
}

export default ContactForm
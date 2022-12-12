import React from "react";
import { FormikProps, useFormik } from "formik";
import { toast } from "react-toastify";

import InputField from "../../../components/InputField/InputField";
import ILoginForm from "./ILoginForm";
import { styles } from './style';
import { Schema } from "./schema";
import useAxios from "axios-hooks";

const SignUpForm = ({setLoading}: {setLoading: (data: boolean) => void}) => {
  const [{loading}, execute] = useAxios<ILoginForm, ILoginForm>(
    {
      url: "/api/signup",
      method: "POST",
    },
    {
      manual: true,
    }
  );
  
  const formik: FormikProps<ILoginForm> = useFormik<ILoginForm>({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      execute({
        data: values,
      });
      resetForm();
    },
  });

  const getPropsField = (name: string) => ({
    id: name,
    ...formik.getFieldProps(name),
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <InputField
            type='text'
            label='E-mail'
            placeholder='email@email.com'
            id='email'
            getPropsField={getPropsField}
            formik={formik}
						disabled={loading}
          />
        </div>
        <div className='row'>
          <InputField
            type='password'
            label='Senha'
            id='password'
            getPropsField={getPropsField}
            formik={formik}
						disabled={loading}
          />
        </div>
        <div className='row'>
          <button type='submit' disabled={!formik.isValid || loading}>
            Logar
          </button>
        </div>
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SignUpForm;
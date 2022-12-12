import React from "react";
import { FormikProps, useFormik } from "formik";
import { toast } from "react-toastify";
import useAxios from "axios-hooks";
import router from "next/router";
import { isEmpty } from "lodash";

import InputField from "../../../components/InputField/InputField";
import ISignupForm from "./ISignupForm";
import { styles } from './style';
import { Schema } from "./schema";

const SignUpForm = ({setLoading}: {setLoading: (data: boolean) => void}) => {
  const [{loading}, execute] = useAxios<ISignupForm, ISignupForm>(
    {
      url: "/api/signup",
      method: "POST",
    },
    {
      manual: true,
    }
  );
  
  const formik: FormikProps<ISignupForm> = useFormik<ISignupForm>({
    initialValues: {
      name: '',
      lastname: '',
      password: '',
      email: '',
    },
    validationSchema: Schema,
    onSubmit: async (values, { resetForm }) => {
      const {data} = await execute({
        data: values,
      });

      if (!isEmpty(data)) {
        toast("Registrado com sucesso!", {
          position: "bottom-right",
          style: {
            backgroundColor: "#009712",
            color: "#f9f9f9",
          },
        });
        router.push("/login");
      } else {
        toast("Falha ao se registra. Tente novamente mais tarde.", {
          position: "bottom-right",
          style: {
            backgroundColor: "#f11212",
            color: "#f9f9f9",
          },
        });
      }
      resetForm();
    },
  });

  const getPropsField = (name: string) => ({
    id: name,
    ...formik.getFieldProps(name),
  });

  return (
    <div className="container">
      <h1>Cadastre-se</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="long-row">
          <div className='row'>
            <InputField
              type='text'
              label='Nome'
              placeholder='Nome'
              id='name'
              getPropsField={getPropsField}
              formik={formik}
              disabled={loading}
            />
          </div>
          <div className='row'>
            <InputField
              type='text'
              label='Sobrenome'
              placeholder='Sobrenome'
              id='lastname'
              getPropsField={getPropsField}
              formik={formik}
              disabled={loading}
            />
          </div>
        </div>
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
            Enviar
          </button>
        </div>
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SignUpForm;
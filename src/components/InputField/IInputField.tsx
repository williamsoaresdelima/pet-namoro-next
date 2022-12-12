import { FormikProps } from "formik";
import ISignupForm from "../../auth/components/signupForm/ISignupForm";
import { IContactForm } from "../ContactForm/IContactForm";

interface IInputField {
  type: string;
  label: string; 
  id: keyof IContactForm | keyof ISignupForm,
  getPropsField: (name: string) => { value: any; name: string; multiple?: boolean | undefined; checked?: boolean | undefined; onChange: { (e: React.ChangeEvent<any>): void; <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<HTMLInputElement> ? void : (e: string | React.ChangeEvent<HTMLInputElement>) => void}};
  formik: FormikProps<any>,
  placeholder?: string;
  disabled?: boolean,
}

export default IInputField;
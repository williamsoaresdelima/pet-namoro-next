import { FormikProps } from "formik";
import { IContactForm } from "../IContactForm";

interface IInputField {
  type: string;
  label: string; 
  placeholder?: string;
  id: keyof IContactForm,
  getPropsField: (name: string) => { value: any; name: string; multiple?: boolean | undefined; checked?: boolean | undefined; onChange: { (e: React.ChangeEvent<any>): void; <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<HTMLInputElement> ? void : (e: string | React.ChangeEvent<HTMLInputElement>) => void}};
  formik: FormikProps<IContactForm>,
}

export default IInputField;
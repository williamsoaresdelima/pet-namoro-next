import { number, object, string } from 'yup';

export let Schema = object({
  password: string()
    .required("Insira uma senha")
    .min(8, "senha precisa ser maior que 8 caracteres"),
  email: string().email("Coloque um email válido!").required("É necessario colocar um email!"),
});
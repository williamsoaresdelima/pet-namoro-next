import { number, object, string } from 'yup';

export let Schema = object({
  name: string()
    .required("É necessario colocar um nome!")
    .min(2, "Nome precisa ser maior que 2 caracteres")
    .max(24, "Nome precisa ser menor que 25 caracteres"),
  lastname: string()
    .required("Coloque seu sobrenome")
    .min(2, "Sobrenome precisa ser maior que 2 caracteres")
    .max(24, "Sobrenome precisa ser menor que 25 caracteres"),
  password: string()
    .required("Insira uma senha")
    .min(8, "senha precisa ser maior que 8 caracteres"),
  email: string().email("Coloque um email válido!").required("É necessario colocar um email!"),
});
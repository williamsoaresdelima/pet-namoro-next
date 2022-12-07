import { number, object, string } from 'yup';

const telRegex = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

export let Schema = object({
  name: string().required("É necessario colocar um nome!"),
  email: string().email("Coloque um email válido!").required("É necessario colocar um email!"),
  tel: string().matches(telRegex, 'Deve ser um número de telefone com DDD!'),
  message: string().required("Coloque sua mensagem aqui!"),
});
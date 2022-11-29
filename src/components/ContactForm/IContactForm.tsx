export interface IContactForm {
  name: string | undefined,
  email: string | undefined,
  tel: string | undefined,
  message: string | undefined,
}

export interface IContact {
  setLoading: (data: boolean) => void,
}
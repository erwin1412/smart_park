export interface IRegister {
  fullname: string
  username: string
  email: string
  password: string
  phone: string

}

export interface ILogin {
  username: string
  password: string
}

export interface IAuth {
  id: string
  fullname: string
  username: string
  email: string
  phone: string
  role: string
}

export interface IOfficer {
  fullname: string
  username: string
  email: string
  password: string
  phone: string
  address: string
  role: string
}



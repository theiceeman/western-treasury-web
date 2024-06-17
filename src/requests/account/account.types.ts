export interface ISignupUser {
    email: string
    password: string
    password_confirmation: string
}
export interface ILoginUser {
    email: string
    password: string
}
export interface IUpdateUser {
    first_name: string
    last_name: string
    country: string
}
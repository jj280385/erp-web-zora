export type UserLoginType = {
  userId: number
  loginName: string
  password: string
  token: string
}

export type UserType = {
  userId: number
  loginName: string
  password: string
  token: string
  user: object
  // role: string
  // roleId: string
  // permissions: string | string[]
}

export type LoginType = {
  loginName: string
  password: string
}

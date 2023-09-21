type Role = string | Array<string>

export type userData = {
  id: string
  first_name: string
  last_name: string
  email: string
  location?: any
  title?: any
  description?: any
  tags?: any
  avatar?: any
  language?: any
  theme?: any
  tfa_secret?: any
  status: string
  role: Role
  last_access: string
  last_page: string
  provider: string
  external_identifier?: any
  auth_data?: any
  email_notifications: boolean
}

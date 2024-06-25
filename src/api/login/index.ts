import request from '@/axios'
import type { LoginType } from './types'

interface RoleParams {
  roleName: string
}

export const loginApi = (data: LoginType | any): Promise<IResponse<LoginType | any>> => {
  return request.post({ url: '/user/login', data })
}

export const loginOutApi = (): Promise<IResponse> => {
  return request.get({ url: '/mock/user/loginOut' })
}

export const getAdminRoleApi = (
  params: RoleParams
): Promise<IResponse<AppCustomRouteRecordRaw[]>> => {
  return request.get({ url: '/mock/role/list', params })
}

export const getTestRoleApi = (params: RoleParams): Promise<IResponse<string[]>> => {
  return request.get({ url: '/mock/role/list2', params })
}

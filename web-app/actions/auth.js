import { LOGIN } from '../Constants'

//登录成功后设置蹦迪存储用户信息
export const userLogin =  isLogin => ({ type: LOGIN, isLogin })

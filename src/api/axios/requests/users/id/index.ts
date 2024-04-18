import { api } from '@/api/axios/instance';

export interface GetUserParams {
    id: string;
}

export type GetUserConfig = AxiosRequestConfig<GetUserParams>


export const getUserId = async ({params, config}: GetUserConfig) => {
    api.get<UsersResponse>(`/users/${params.id}`, config)
}
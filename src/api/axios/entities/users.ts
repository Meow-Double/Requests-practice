import { api } from '@/api/axios/instance';

class wrongUserService {
  async getUsers() {
    const response = await api.get<User[]>('/users');
    return response.data;
  }
}

export class userService {
  getUsers(requestConfig?: AxiosRequestConfig) {
    return api.get<UsersResponse>('/users', requestConfig?.config);
  }

  postUser({ params, config }: AxiosRequestConfig<Omit<User, 'id'>>) {
    return api.post('/users', params, config);
  }

  getUserById({ params, config }: AxiosRequestConfig<{id: string}>){
    return api.get<UsersResponse>(`/users/${params.id}`, config);
  }
}

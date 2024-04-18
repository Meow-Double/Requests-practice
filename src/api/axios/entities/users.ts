import { api } from '@/api/axios/instance';

class wrongUserService {
  async getUsers() {
    const response = await api.get<User[]>('/users');
    return response.data;
  }
}

export class userService {
  getUsers(requestConfig?: AxiosRequestConfig) {
    return api.get<User[]>('/users', requestConfig?.config);
  }

  postUser({ params, config }: AxiosRequestConfig<Omit<User, 'id'>>) {
    return api.post('/users', params, config);
  }

  getUserById({ params, config }: AxiosRequestConfig<{id: string}>){
    return api.get<User[]>(`/users${params.id}`, config);
  }
}

import { TServiceResponse } from '../../types/TServiceResponse';
import { TUserCard, TUser } from '../../types/TUser';
import { getCookie } from '../../utils/cookies';
import endpoints from '../endpoints';

export async function getUsers(
  searchTerm: string,
  page: number,
  skip: number
): Promise<TServiceResponse<TUserCard[]>> {
  const response = await fetch(
    `${endpoints.hrBackend}/api/Employee?searchTerm=${searchTerm}&page=${page}&skip=${skip}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('jwt')}`,
      },
    }
  );

  const data = await response.json();

  if (!data && !data?.message) throw new Error('Failed to get users');

  return data;
}

export async function getUserById(
  id: number
): Promise<TServiceResponse<TUser>> {
  const response = await fetch(`${endpoints.hrBackend}/api/Employee/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('jwt')}`,
    },
  });

  const data = await response.json();

  if (!data && !data?.message) throw new Error('Failed to get users');

  return data;
}

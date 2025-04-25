import { TServiceResponse } from '../types/TServiceResponse';
import { TLeaveData } from '../types/TContract';
import endpoints from './endpoints';
import { getCookie } from '../utils/cookies';

export async function getLeaveYear(
  id: number,
  leaveYearDate: string
): Promise<TServiceResponse<TLeaveData>> {
  const response = await fetch(
    `${endpoints.hrBackend}/api/Contract/GetLeaveYear/${id}?leaveYearDate=${leaveYearDate}`,
    {
      method: 'POST',
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

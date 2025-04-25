import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { TServiceResponse } from '../../../types/TServiceResponse';
import { TLeaveData } from '../../../types/TContract';
import { getLeaveYear } from '../../../APIs/contracts';

function ContractSection() {
  const { userId } = useParams<{ userId: string }>();

  const {
    data: response,
    isLoading,
    error,
  } = useQuery<TServiceResponse<TLeaveData>, Error>({
    queryKey: ['leaveYear', userId],
    queryFn: () => getLeaveYear(Number(userId), '2024-01-01'),
    enabled: Boolean(userId),
  });

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Contracts</h3>
      <p>No contract data available.</p>
    </div>
  );
}

export default ContractSection;

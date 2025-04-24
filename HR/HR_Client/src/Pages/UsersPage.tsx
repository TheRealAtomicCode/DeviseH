import { useEffect, useState } from 'react';
import UserCard from '../components/Users/UserCard';
import { TUserCard } from '../types/TUser';
import { useMutation } from '@tanstack/react-query';
import { TServiceResponse } from '../types/TServiceResponse';
import { getUsers } from '../APIs/employees/users';

const UsersPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState<TUserCard[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(200);

  const { mutate, isPending } = useMutation<
    TServiceResponse<TUserCard[]>,
    Error,
    { searchTerm: string; page: number; skip: number }
  >({
    mutationFn: () => getUsers(searchTerm, page, skip),
    onSuccess: (res) => {
      if (res.success) {
        setErrorMessage('');
        setUsers(res.data);
      } else {
        setErrorMessage(res.message);
      }
    },
    onError: (error: Error) => {
      setErrorMessage(error.message);
    },
  });

  useEffect(() => {
    mutate({ searchTerm, page, skip });
  }, [mutate, searchTerm, page, skip]);

  return (
    <div className="min-h-screen  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">User Directory</h1>
          {errorMessage}
        </header>
        <section className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search by name or email"
              className="p-2 border rounded bg-white dark:bg-gray-950"
            />
            <select className="p-2 border rounded bg-white dark:bg-gray-950">
              <option>Filter by Department</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Design</option>
            </select>
            <div className="flex space-x-2">
              <button className="p-2 bg-cyan-600 text-white rounded flex-1 border border-cyan-300">
                Sort A-Z
              </button>
              <button className="p-2 bg-cyan-600 text-white rounded flex-1 border border-cyan-300">
                Sort Z-A
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {users.map((user: TUserCard) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          {isPending ? 'Loading...' : ''}
        </section>
      </div>
    </div>
  );
};

export default UsersPage;

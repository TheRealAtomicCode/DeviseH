import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../APIs/employees';
import { TServiceResponse } from '../types/TServiceResponse';
import { TUser } from '../types/TUser';
import ProfilePicture from '../components/ProfilePicture';
import ContractSection from '../components/Users/Profile/ContractSection';

const tabs = ['Absences', 'Contracts', 'Details', 'Documents'] as const;

type Tab = (typeof tabs)[number];

const UserPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const {
    data: response,
    isLoading,
    error,
  } = useQuery<TServiceResponse<TUser>, Error>({
    queryKey: ['userProfile', userId],
    queryFn: () => getUserById(Number(userId)),
    enabled: Boolean(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  const user = response?.data;
  if (!user) return <div>No user found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="">
          <div className="flex flex-col md:flex-row md:items-center gap-6 border-b pb-4 mb-6 mx-20">
            <div>
              <ProfilePicture user={user} size="w-[10rem] h-[10rem]" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {user.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {user.email}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {user.teamName}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <nav className="mb-6 border-b dark:border-gray-700 overflow-x-auto text-right">
          <ul className="flex space-x-6">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer pb-2 border-b-2 transition-all ${
                  activeTab === tab
                    ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                    : 'border-transparent hover:border-cyan-300 text-gray-500 dark:text-gray-400'
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-inner">
          {activeTab === 'Absences' && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Absence Records</h3>
              <p>No absence records available.</p>
            </div>
          )}
          {activeTab === 'Contracts' && <ContractSection />}
          {activeTab === 'Details' && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Employee Overview</h3>

              <p>
                <strong>Role:</strong> {user.title}
              </p>
              <p>
                <strong>Joined:</strong>{' '}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>Verified:</strong> {user.isVerified ? 'Yes' : 'No'}
              </p>
              <p>
                <strong>Terminated:</strong> {user.isTerminated ? 'Yes' : 'No'}
              </p>
            </div>
          )}

          {activeTab === 'Documents' && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Documents</h3>
              <p>No documents available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;

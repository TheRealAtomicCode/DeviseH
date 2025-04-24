import { Link } from 'react-router-dom';
import { TUserCard } from '../../types/TUser';

function UserCard({ user }: { user: TUserCard }) {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center p-6">
        {user.profilePicture ? (
          <img
            className="w-24 h-24 mb-4 rounded-full shadow-md ring-2 ring-cyan-400 dark:ring-cyan-500"
            src={user.profilePicture}
            alt={`${user.id}-${user.firstName}-${user.lastName}`}
          />
        ) : (
          <div
            className="
      w-24 h-24 mb-4 rounded-full shadow-md ring-2 ring-cyan-500 dark:ring-cyan-500 
      bg-cyan-500 dark:bg-gray-800 flex items-center justify-center
      text-white text-3xl font-semibold
    "
            aria-label={`${user.firstName} ${user.lastName} initials`}
          >
            {`${user.firstName.charAt(0).toUpperCase()}${user.lastName
              .charAt(0)
              .toUpperCase()}`}
          </div>
        )}

        {user.title && (
          <p className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">
            {user.title}
          </p>
        )}

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 text-center">
          {user.firstName + ' ' + user.lastName}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          {user.email}
        </p>
        <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mt-1 text-center">
          {user.department}
        </p>
        <Link
          to={`/users/${user.id}`}
          className="dark:border border-cyan-300 mt-4 inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-cyan-500  dark:bg-cyan-700 rounded-xl dark:hover:bg-cyan-600 hover:bg-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-cyan-600"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default UserCard;

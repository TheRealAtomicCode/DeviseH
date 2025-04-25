import { TUserCard } from '../types/TUser';
import endpoints from '../APIs/endpoints';

type Props = {
  user: TUserCard;
  size: string;
  border?: boolean;
};

function ProfilePicture({ user, size, border = true }: Props) {
  const ringClass = border ? 'ring-2 ring-cyan-400 dark:ring-cyan-500' : '';

  return (
    <>
      {user.profilePicture ? (
        <img
          className={`mb-4 rounded-full shadow-md object-cover ${size} ${ringClass}`}
          src={`${endpoints.hrBackend}${user.profilePicture}`}
          alt={`${user.id}-${user.firstName}-${user.lastName}`}
        />
      ) : (
        <div
          className={`mb-4 rounded-full shadow-md flex items-center justify-center text-white text-3xl font-semibold bg-cyan-500 dark:bg-gray-800 ${size} ${ringClass}`}
          aria-label={`${user.firstName} ${user.lastName} initials`}
        >
          {`${user.firstName.charAt(0).toUpperCase()}${user.lastName
            .charAt(0)
            .toUpperCase()}`}
        </div>
      )}
    </>
  );
}

export default ProfilePicture;

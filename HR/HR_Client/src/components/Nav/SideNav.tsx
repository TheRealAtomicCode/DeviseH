import { FC, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { PiUsersThreeLight } from 'react-icons/pi';
import { IoCalendarOutline } from 'react-icons/io5';
import { TiFolderOpen } from 'react-icons/ti';
import { GoGear } from 'react-icons/go';
import { BiJoystickAlt } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { UserContext } from '../../context/AppContext';

type TSideBarIconProps = {
  icon: JSX.Element;
  title?: string;
  active?: boolean;
};

const SideNav: FC = () => {
  const { id } = useContext(UserContext);
  const location = useLocation();
  const currentPath = location.pathname;

  // helper to check active route
  const isActive = (path: string) => currentPath === path;

  return (
    <div>
      {/* Sidebar for larger screens */}
      <div className="side-nav hidden sm:flex fixed top-0 left-0 h-screen w-16 m-0 flex-col bg-gray-950 text-white shadow-lg overflow-y-auto overflow-x-hidden scrollbar-hidden">
        <Link to={`/users/${id}`}>
          <div
            className={`cursor-pointer w-14 h-14 mt-4 rounded-full border border-white mx-auto flex items-center justify-center
              ${
                currentPath.startsWith(`/users/${id}`)
                  ? 'ring-2 ring-pink-500'
                  : ''
              }`}
          />
        </Link>

        <div className="mt-16">
          <Link to="/home">
            <MdSideBarIcon
              icon={<IoHomeOutline size={28} />}
              title="Home"
              active={isActive('/home')}
            />
          </Link>
        </div>

        <div>
          <Link to="/users">
            <MdSideBarIcon
              icon={<PiUsersThreeLight size={28} />}
              title="Users"
              active={isActive('/users')}
            />
          </Link>
        </div>

        <div>
          <Link to="/calendar">
            <MdSideBarIcon
              icon={<IoCalendarOutline size={28} />}
              title="Calendar"
              active={isActive('/calendar')}
            />
          </Link>
        </div>

        <div>
          <Link to="/rotas">
            <MdSideBarIcon
              icon={<FaRegClock size={28} />}
              title="Rotas"
              active={isActive('/rotas')}
            />
          </Link>
        </div>

        <div>
          <Link to="/files">
            <MdSideBarIcon
              icon={<TiFolderOpen size={28} />}
              title="Files"
              active={isActive('/files')}
            />
          </Link>
        </div>

        <div className="mt-auto mb-6">
          <Link to="/settings">
            <MdSideBarIcon
              icon={<GoGear size={28} />}
              title="Settings"
              active={isActive('/settings')}
            />
          </Link>
        </div>
      </div>

      {/* Bottom bar for mobile screens */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-gray-950 text-white flex justify-between items-center p-2">
        <Link to="/home">
          <SmSideBarIcon
            icon={<IoHomeOutline size={28} />}
            active={isActive('/home')}
          />
        </Link>
        <Link to="/rotas">
          <SmSideBarIcon
            icon={<FaRegClock size={28} />}
            active={isActive('/rotas')}
          />
        </Link>
        <Link to="/home">
          <SmSideBarIcon icon={<BiJoystickAlt size={28} />} />
        </Link>
        <Link to="/calendar">
          <SmSideBarIcon
            icon={<IoCalendarOutline size={28} />}
            active={isActive('/calendar')}
          />
        </Link>
        <Link to="/home">
          <SmSideBarIcon icon={<GiHamburgerMenu size={28} />} />
        </Link>
      </div>
    </div>
  );
};

const MdSideBarIcon: FC<TSideBarIconProps> = ({ icon, title, active }) => (
  <div className="cursor-pointer group text-center">
    <div
      className={`relative flex items-center justify-center h-12 w-12 mt-2 mb-[2px] mx-auto rounded-lg transition-all duration-200
        ${
          active
            ? 'bg-pink-500 rounded-3xl'
            : 'bg-gray-900 hover:bg-pink-500 hover:rounded-3xl'
        }`}
    >
      {icon}
    </div>
    {title && (
      <p
        className={`mx-auto text-white text-[10px] mt-1 group-hover:text-pink-500 hidden sm:block duration-200 ${
          active ? 'text-pink-500' : ''
        }`}
      >
        {title}
      </p>
    )}
  </div>
);

const SmSideBarIcon: FC<TSideBarIconProps> = ({ icon, active }) => (
  <div
    className={`cursor-pointer group flex flex-col items-center justify-center transition-all duration-200
      ${
        active
          ? 'text-pink-500 rounded-3xl'
          : 'hover:text-pink-500 hover:rounded-3xl'
      }`}
  >
    <div className="relative flex items-center justify-center h-8 w-12 mb-[2px] mx-auto">
      {icon}
    </div>
  </div>
);

export default SideNav;

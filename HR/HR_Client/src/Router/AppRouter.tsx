import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import UsersPage from '../Pages/UsersPage';
import UserPage from '../Pages/UserPage';
import CalendarPage from '../Pages/CalendarPage';
import RotasPage from '../Pages/RotasPage';
import RotaPage from '../Pages/RotaPage';
import FilesPage from '../Pages/FilesPage';
import SettingsPage from '../Pages/SettingsPage';

// Define the props
interface AppRoutesProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const AppRoutes = ({ toggleDarkMode, isDarkMode }: AppRoutesProps) => {
  return (
    <Routes>
      {/* Routes with Layout (Nav shown) */}
      <Route
        element={
          <AuthenticatedLayout
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/rotas" element={<RotasPage />} />
        <Route path="/rotas/:rotaId" element={<RotaPage />} />
        <Route path="/files" element={<FilesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* Routes without Layout (No Nav) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;

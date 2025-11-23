import { Outlet } from 'react-router-dom';

export default function Activities() {
  return (
    <div>
      <h1>Activities</h1>
      {/* Здесь отобразится содержимое дочерних маршрутов */}
      <Outlet />
    </div>
  );
}

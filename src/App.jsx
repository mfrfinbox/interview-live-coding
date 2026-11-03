import DataTable from './DataTable';
import { users } from './data/users';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Users</h1>
      <DataTable users={users} />
    </div>
  );
}

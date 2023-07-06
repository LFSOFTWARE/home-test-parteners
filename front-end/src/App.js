import {  UserProvider } from './contexts/userContext';
import { Home } from './pages/Home';

function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default App;

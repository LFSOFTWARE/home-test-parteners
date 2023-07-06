import { UserProvider } from './contexts/userContext';
import { Home } from './pages/Home';
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <SnackbarProvider>
      <UserProvider>
        <Home />
      </UserProvider>
    </SnackbarProvider>
  );
}

export default App;

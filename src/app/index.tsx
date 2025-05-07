import AppProvider from './provider';
import AppRouter from './route';

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;

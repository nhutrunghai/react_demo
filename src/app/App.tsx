
import { AuthProvider } from '../features/auth/authContext'
import AppRoutes from './routes'
function App() {
  return <>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </>
}

export default App

import DashBoard from './screens/dashboard'
import { AppProvider } from '@toolpad/core/AppProvider';
function App() {
  return (
    <AppProvider>
      <DashBoard/>
    </AppProvider>
  )
}

export default App

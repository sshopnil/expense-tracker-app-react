// import DashBoard from './screens/dashboard'
import DashboardLayoutBasic from './screens/BasicDashBoard'
import { AppProvider } from '@toolpad/core/AppProvider';
function App() {
  return (
    <AppProvider>
      <DashboardLayoutBasic/>
    </AppProvider>
  )
}

export default App

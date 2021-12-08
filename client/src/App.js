import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import Layout from "./components/layouts/Layout"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />,
          </Layout>
        </AuthProvider>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;

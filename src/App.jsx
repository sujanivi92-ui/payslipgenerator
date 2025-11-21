import { BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import GeneratePayslip from "./pages/GeneratePayslip";
import PayslipOutput from "./pages/PayslipOutput";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate-payslip" element={<GeneratePayslip />} />
        <Route path="/payslip-output" element={<PayslipOutput />} />
      </Routes>
    </BrowserRouter>
  );
}

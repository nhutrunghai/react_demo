import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
export default AppRoutes;

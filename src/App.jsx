import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import StaffingSolution from './pages/StaffingSolution';
import PayrollManagement from './pages/PayrollManagement';
import RecruitmentSolution from './pages/RecruitmentSolution';
import ComplianceManagement from './pages/ComplianceManagement';
import IndustrialStaffing from './pages/IndustrialStaffing';
import ProjectHiring from './pages/ProjectHiring';
import CompanyProfile from './pages/CompanyProfile';
import JobSeeker from './pages/JobSeeker';
import ContactUs from './pages/ContactUs';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/scn-global-services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/staffing-solution" element={<StaffingSolution />} />
        <Route path="/payroll-management" element={<PayrollManagement />} />
        <Route path="/recruitment-solution" element={<RecruitmentSolution />} />
        <Route path="/compliance-management" element={<ComplianceManagement />} />
        <Route path="/industrial-staffing" element={<IndustrialStaffing />} />
        <Route path="/project-hiring" element={<ProjectHiring />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/company-profile-compliance-management" element={<CompanyProfile />} />
        <Route path="/job-seeker" element={<JobSeeker />} />
        <Route path="/job-seeker-scn-global-contacts" element={<JobSeeker />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/scn-global-contacts" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

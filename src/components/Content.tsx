import { Navigate, Route, Routes } from 'react-router-dom';
import CompaniesTable from './content/CompaniesTable';
import CompanyDetail from './content/CompanyDetail';
import CompanyEdit from './content/CompanyEdit';
import IconTable from './content/IconTable';
import Integrations from './content/Integrations';
import IntegrationsDetail from './content/IntegrationsDetail';
import ScrollToTop from './ScrollToTop';

const Content = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/Icons" element={<IconTable />} />
        {/*<Route path="/Icons/:id" element={<IconDetail />} />*/}
        <Route path="/Companies" element={<CompaniesTable />} />
        <Route path="/Companies/:id" element={<CompanyDetail />} />
        <Route path="/Companies/:id/edit" element={<CompanyEdit />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/integrations/:title" element={<IntegrationsDetail />} />
        <Route path="*" element={<Navigate to="/Companies" replace />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Content;

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyLoading } from 'components';
import Footer from './Footer';

import { StyledContentLayout } from './styled';

const AdminLayout = () => {
  return (
    <StyledContentLayout>
      <div className="main-content">
        <Suspense fallback={<LazyLoading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </StyledContentLayout>
  );
};

export default AdminLayout;

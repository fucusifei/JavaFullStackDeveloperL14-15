import React from 'react';
import PageAccessValidator from 'components/PageAccessValidator';
import ViewListPage from 'pages/ViewList';
import PageContainer from 'components/PageContainer';

const Initial = () => (
    <PageAccessValidator>
        <PageContainer>
            <ViewListPage />
        </PageContainer>
    </PageAccessValidator>
);

export default Initial;
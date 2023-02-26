import React from 'react';
import PageAccessValidator from 'components/PageAccessValidator';
import EditAddListPage from 'pages/EditAddList';
import PageContainer from 'components/PageContainer';

const EditAddList = () => (
    <PageAccessValidator>
        <PageContainer>
            <EditAddListPage />
        </PageContainer>
    </PageAccessValidator>
);

export default EditAddList;
import React from 'react';

import Layout from 'layouts/MainPageLayout';
import Navbar from 'components/common/Navbar';
import Main from 'components/main/Main';

export default function MainPage() {
  return (
    <Layout>
      <Navbar />
      <Main />
    </Layout>
  );
}

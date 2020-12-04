import React from 'react';
import { SEO } from '../components/atoms/SEO';
import { useTranslation } from '../i18n';
import styles from '../styles/welcome.module.css';

const Welcome = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <SEO title={t('WELCOME_TITLE', { barName: t('BAR_NAME') })} />

      <main>
        <div className={styles.container}>
          <div className={styles.heading} dangerouslySetInnerHTML={{ __html: t('HEADING') }} />
        </div>
      </main>
    </>
  );
};

Welcome.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Welcome;

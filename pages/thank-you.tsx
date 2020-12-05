import React from 'react';
import thankYou from '../styles/thankYou.module.css';
import { SEO } from '../components/atoms/SEO';
import { useTranslation } from '../i18n';
import Link from 'next/link';

const ThankYou = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <SEO title={t('THANK_YOU_TITLE')} />
      <main>
        <div className={thankYou.container}>
          <div
            className={thankYou.heading}
            dangerouslySetInnerHTML={{ __html: t('THANK_YOU_HEADING') }}
          />
          <div className={thankYou.goBack}>
            <Link href={'/'}>{t('NEW_ORDER')}</Link>
          </div>
        </div>
      </main>
    </>
  );
};

ThankYou.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ThankYou;

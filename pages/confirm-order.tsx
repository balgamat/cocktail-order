import { SEO } from '../components/atoms/SEO';
import React, { useCallback } from 'react';
import confirmOrder from '../styles/confirm-order.module.css';
import { useTranslation } from '../i18n';
import { OrderList } from '../util/useOrderList';
import { OrderItem } from '../components/molecules/OrderItem';
import { useLocalStorage } from '../util/useLocalStorage';
import { useRouter } from 'next/router';

const ConfirmOrder = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [persistedOrderList] = useLocalStorage('orderList', {});
  const count = Object.keys(persistedOrderList).length;

  const onConfirm = useCallback(() => {
    if (confirm(t('ORDER_PROMPT', { count }))) router.push(`/thank-you`);
  }, []);

  return (
    <>
      <SEO title={t('CONFIRMATION_TITLE')} />
      <main>
        <div
          className={confirmOrder.heading}
          dangerouslySetInnerHTML={{
            __html: t('CONFIRMATION_HEADING'),
          }}
        />
        <div className={confirmOrder.orderList}>
          <h5>{!!count && t('SELECTED_DRINKS', { count })}</h5>
          <div>
            <ul>{Object.entries(persistedOrderList as OrderList).map(OrderItem(null))}</ul>
          </div>
        </div>
        <div className={confirmOrder.navigation}>
          <a onClick={() => window.history.back()}>{t('BACK_TO_SELECTION')}</a>
        </div>
        <div onClick={onConfirm} className={confirmOrder.confirm}>
          {t('CONFIRM_ORDER')}
        </div>
      </main>
    </>
  );
};

ConfirmOrder.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ConfirmOrder;

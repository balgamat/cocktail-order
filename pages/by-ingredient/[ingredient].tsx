import { useDrinksByIngredient } from '../../util/useDrinksByIngredient';
import { SEO } from '../../components/atoms/SEO';
import React, { useEffect } from 'react';
import selectDrink from '../../styles/select-drink.module.css';
import { useTranslation } from '../../i18n';
import { DrinkInfo } from '../../components/molecules/DrinkInfo';
import { useRouter } from 'next/router';
import { useOrderList } from '../../util/useOrderList';
import { OrderItem } from '../../components/molecules/OrderItem';
import Link from 'next/link';
import { useLocalStorage } from '../../util/useLocalStorage';

const SelectDrink = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const ingredientName = router.query?.ingredient as string;
  const drinks = useDrinksByIngredient(ingredientName);
  const [persistedOrderList, setPersistedOrderList] = useLocalStorage('orderList', {});
  const [orderList, add, remove] = useOrderList(persistedOrderList);
  const count = Object.keys(orderList).length;

  useEffect(() => {
    setPersistedOrderList(orderList);
  }, [orderList]);

  return (
    <>
      <SEO title={t('SELECT_DRINK_TITLE')} />
      <main>
        <div
          className={selectDrink.ingredientName}
          dangerouslySetInnerHTML={{
            __html: t('SELECT_DRINK_HEADING', { ingredientName }),
          }}
        />
        <div className={selectDrink.orderList}>
          <h5>{!!count && t('SELECTED_DRINKS', { count })}</h5>
          <div>
            <ul>{Object.entries(orderList).map(OrderItem(remove))}</ul>
          </div>
        </div>
        <div className={selectDrink.navigation}>
          <Link href={'/confirm-order'}>{t('CONTINUE')}</Link>
          <Link href={'/'}>{t('BACK')}</Link>
        </div>
        <div className={selectDrink.content}>
          <ul>{drinks.map(DrinkInfo(add))}</ul>
        </div>
      </main>
    </>
  );
};

export default SelectDrink;

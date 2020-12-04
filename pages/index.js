import React, { useCallback, useEffect, useRef } from 'react';
import { SEO } from '../components/atoms/SEO';
import { useTranslation } from '../i18n';
import welcome from '../styles/welcome.module.css';
import heading from '../styles/heading.module.css';
import { useIngredientSuggestion } from '../util/useIngredientSuggestions';
import { useRouter } from 'next/router';

const Welcome = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const input = useRef();
  const [value, onChange, suggestion] = useIngredientSuggestion();

  const onSubmit = useCallback(e => {
    e.preventDefault();
    if (!suggestion?.strIngredient) {
      alert(t('NO_INGREDIENTS_ALERT', { value }));
      onChange('');
    } else {
      router.push(`by-ingredient/${suggestion.strIngredient}`);
    }
  });

  const reFocus = useCallback(() => input?.current?.focus());

  useEffect(() => {
    reFocus();
  }, [input]);

  useEffect(() => {
    window.localStorage.setItem('orderList', {});
  }, []);

  return (
    <>
      <SEO title={t('WELCOME_TITLE', { barName: t('BAR_NAME') })} />
      <main>
        <div className={heading.heading} dangerouslySetInnerHTML={{ __html: t('HEADING') }} />
        <div className={welcome.content} onClick={reFocus}>
          <h3 className={welcome.info} dangerouslySetInnerHTML={{ __html: t('INFO') }} />
          <form onSubmit={onSubmit}>
            <span className={welcome.ingredient}>
              <span>
                <span>{value}</span>
                {value !== '' ? suggestion?.strIngredient?.slice(value.length) : t('START_TYPING')}
              </span>
              <input
                ref={input}
                aria-label={t('INGREDIENT_ARIA')}
                id="ingredient"
                onChange={e => onChange(e.target.value)}
                placeholder={t('START_TYPING')}
                type="text"
                value={value}
                autoComplete={'off'}
              />
              <button type={'submit'} />
            </span>
          </form>
        </div>
      </main>
    </>
  );
};

Welcome.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Welcome;

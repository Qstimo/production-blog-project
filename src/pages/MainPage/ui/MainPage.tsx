import { useTranslation } from 'react-i18next';
import React from 'react';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('Главная страница')}
      <Counter />
    </div>
  );
};

export default MainPage;

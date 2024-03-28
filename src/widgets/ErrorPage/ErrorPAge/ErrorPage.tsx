/* eslint-disable react/no-unknown-property */
import React from 'react';
import { classNames } from 'helpers/classNames/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}
export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  const { t } = useTranslation();

  return (
      <div className={classNames(cls.ErrorPage, {}, [className])}>
        <p>
          {t('Прозошла непредвиденная ошибка')}
      </p>
        <Button onClick={reloadPage}>{t('Обновить странницу')}</Button>
    </div>
  );
};

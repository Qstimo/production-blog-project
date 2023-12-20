import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import React from 'react';

interface NotFoundPageProps {
    className?: string
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

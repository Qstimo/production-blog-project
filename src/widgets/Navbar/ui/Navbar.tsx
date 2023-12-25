import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../helpers/classNames/classNames/classNames';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink}>{t('Главная')}</AppLink>
            </div>

        </div>
    );
};

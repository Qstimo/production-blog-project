import { classNames } from 'helpers/classNames/classNames'
import React from 'react'
import { Link } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>

        </div>
    )
}

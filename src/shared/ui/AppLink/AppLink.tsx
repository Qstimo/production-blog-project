import React, { PropsWithChildren } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}


interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = (props: PropsWithChildren<AppLinkProps>) => {
    const { to, theme = AppLinkTheme.PRIMARY, className, children, ...otherProps } = props
    return (
        <Link to={to} {...otherProps} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}
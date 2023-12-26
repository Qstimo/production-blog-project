import React, { ReactNode } from 'react';
import { classNames } from 'helpers/classNames/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}
export const Modal = ({
    className, children, isOpen, onClose,
}: ModalProps) => {
    const closeHandler = () => {
        if (onClose) onClose();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div
                className={cls.overlay}
                onClick={closeHandler}
            >
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

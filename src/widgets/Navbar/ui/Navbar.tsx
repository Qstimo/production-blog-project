import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from '../../../helpers/classNames/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = React.useState(false);
    const onToggleModal = React.useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
            // eslint-disable-next-line i18next/no-literal-string
                // eslint-disable-next-line max-len
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consequuntur doloremque eum quos iusto cupiditate tempore quis officia, molestiae, iure ea magni atque voluptate quisquam necessitatibus fuga culpa nostrum. Dolorum!
            </Modal>
        </div>
    );
};

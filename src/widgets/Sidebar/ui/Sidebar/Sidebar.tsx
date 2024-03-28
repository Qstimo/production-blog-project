import React from 'react';
import { classNames } from 'helpers/classNames/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onTpoggle = () => {
    setCollapsed((prev) => !prev);
  };

  const { t } = useTranslation();
  return (
      <div
        data-testid="sidebar"
        className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
        <Button
          data-testId="sidebar-toggle"
          onClick={onTpoggle}
          className={cls.collapsedBtn}
          theme={ThemeButton.BACKGROUND_INVERTED}
          square
          size={ButtonSize.L}
        >
          {collapsed ? '>' : '<'}

      </Button>
        <div className={cls.items}>
          <AppLink
            to={RoutePath.main}
            className={cls.item}
          >
            <MainIcon className={cls.icon} />
            <span className={cls.link}>
              {t('Главная')}
          </span>
        </AppLink>
          <AppLink
            to={RoutePath.about}
            className={cls.item}
          >
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>
              {t('О сайте')}
          </span>
        </AppLink>
      </div>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};

import React from 'react';
import './Loader.scss';
import { classNames } from 'helpers/classNames/classNames/classNames';

interface LoaderProps {
    className?: string
}
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
  </div>
);

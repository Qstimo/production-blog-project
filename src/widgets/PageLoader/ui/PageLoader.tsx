import React from 'react';
import './PageLoader.scss';
import { classNames } from 'helpers/classNames/classNames/classNames';
import { Loader } from 'widgets/Loader/Loader';

interface PageLoaderProps {
    className?: string
}
export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className="PageLoader">
      <Loader />
  </div>
);

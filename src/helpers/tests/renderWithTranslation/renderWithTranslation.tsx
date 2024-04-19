import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18ForTests from '../../../shared/config/i18n/i18nForTest';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/', initialState } = options;
  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18ForTests}>
          {component}
      </I18nextProvider>
    </MemoryRouter>,
    </StoreProvider>
  );
}

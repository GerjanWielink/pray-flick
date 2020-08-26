import React from 'react';
import { Menu } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, createTheme, styled, LightTheme } from 'baseui';

import { routes } from './routes'

const engine = new Styletron()

const theme = createTheme({
    primary: 'salmon',
    accent: 'papayawhip'
})

const Layout = styled('div', ({ $theme }) => ({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    minHeight: `100vh`
}))

function App() {
  return (
      <BrowserRouter>
          <StyletronProvider value={engine}>
              <BaseProvider theme={theme}>
                  <Layout>
                      <Menu routes={routes} />

                      <Switch>
                          {routes.map(route => <Route
                              key={route.path}
                              path={route.path}
                              component={route.component}
                          />)}
                      </Switch>
                  </Layout>
              </BaseProvider>
          </StyletronProvider>
      </BrowserRouter>
  );
}

export default App;

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.scss';
import { Suspense } from 'react';
import { store } from 'shared/api/redux/store';
import { Provider } from 'react-redux';
import { Header } from 'entities/header';
import { MainPage } from 'pages';
export function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <Provider store={store}>
        <Header />
        <MainPage />
      </Provider>
    </Suspense>
  );
}

export default App;

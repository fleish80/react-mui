import styles from './app.module.scss';
import MuiTypography from './components/mui-typography/mui-typography';
import MuiButton from './components/mui-button/mui-button';

export const App = () => {
  return <div className={styles.app}>
    <MuiTypography/>
    <MuiButton/>
  </div>;
};

export default App;

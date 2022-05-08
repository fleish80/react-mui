import styles from './app.module.scss';
import MuiTypography from './components/mui-typography/mui-typography';

export const App = () => {
  return <div className={styles.app}>
    <MuiTypography/>
  </div>;
};

export default App;

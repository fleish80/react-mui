import styles from './app.module.scss';
import MuiTypography from './components/mui-typography/mui-typography';
import MuiButton from './components/mui-button/mui-button';
import MuiTextField from './components/mui-text-field/mui-text-field';
import MuiSelect from './components/mui-select/mui-select';

export const App = () => {
  return <div className={styles.app}>
    <MuiTypography/>
    <MuiButton/>
    <MuiTextField/>
    <MuiSelect/>
  </div>;
};

export default App;

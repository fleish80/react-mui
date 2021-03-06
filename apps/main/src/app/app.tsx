import styles from './app.module.scss';
import MuiTypography from './components/mui-typography/mui-typography';
import MuiButton from './components/mui-button/mui-button';
import MuiTextField from './components/mui-text-field/mui-text-field';
import MuiSelect from './components/mui-select/mui-select';
import MuiRadioButton from './components/mui-radio-button/mui-radio-button';
import MuiCheckbox from './components/mui-checkbox/mui-checkbox';
import MuiSwitch from './components/mui-switch/mui-switch';
import MuiTab from './components/mui-tab/mui-tab';
import {MuiSx} from './components/mui-sx/mui-sx';

export const App = () => {
  return <div className={styles.app}>
    <MuiSx/>
    <MuiTab/>
    <MuiSwitch />
    <MuiCheckbox/>
    <MuiRadioButton/>
    <MuiSelect/>
    <MuiTextField/>
    <MuiButton/>
    <MuiTypography/>
  </div>;
};

export default App;

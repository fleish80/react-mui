import { render } from '@testing-library/react';

import MuiRadioButton from './mui-radio-button';

describe('MuiRadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiRadioButton />);
    expect(baseElement).toBeTruthy();
  });
});

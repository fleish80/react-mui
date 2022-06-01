import { render } from '@testing-library/react';

import MuiSwitch from './mui-switch';

describe('MuiSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiSwitch />);
    expect(baseElement).toBeTruthy();
  });
});

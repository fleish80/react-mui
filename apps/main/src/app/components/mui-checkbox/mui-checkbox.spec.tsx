import { render } from '@testing-library/react';

import MuiCheckbox from './mui-checkbox';

describe('MuiCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import MuiSelect from './mui-select';

describe('MuiSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiSelect />);
    expect(baseElement).toBeTruthy();
  });
});

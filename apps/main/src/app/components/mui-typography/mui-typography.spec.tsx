import { render } from '@testing-library/react';

import MuiTypography from './mui-typography';

describe('MuiTypography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiTypography />);
    expect(baseElement).toBeTruthy();
  });
});

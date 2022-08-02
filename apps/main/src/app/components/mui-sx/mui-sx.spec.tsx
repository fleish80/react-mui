import { render } from '@testing-library/react';

import MuiSx from './mui-sx';

describe('MuiSx', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiSx />);
    expect(baseElement).toBeTruthy();
  });
});

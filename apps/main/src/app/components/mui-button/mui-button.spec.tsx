import { render } from '@testing-library/react';

import MuiButton from './mui-button';

describe('MuiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiButton />);
    expect(baseElement).toBeTruthy();
  });
});

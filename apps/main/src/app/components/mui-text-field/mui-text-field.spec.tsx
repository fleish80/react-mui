import { render } from '@testing-library/react';

import MuiTextField from './mui-text-field';

describe('MuiTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiTextField />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import MuiTab from './mui-tab';

describe('MuiTab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiTab />);
    expect(baseElement).toBeTruthy();
  });
});

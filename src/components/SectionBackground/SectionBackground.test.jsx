import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionContainer>', () => {
  it('should render', () => {
    renderTheme(<SectionBackground>Children</SectionBackground>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

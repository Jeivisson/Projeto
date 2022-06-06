import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink>', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#taget" text="text" />);
    expect(screen.getByRole('link', { name: 'text' })).toHaveAttribute(
      'href',
      '#taget',
    );
  });
  it('should render image logo', () => {
    renderTheme(<LogoLink link="#taget" text="text" srcImg="image.jpg" />);
    expect(screen.getByAltText('text')).toHaveAttribute('src', 'image.jpg');
  });
  it('should render image logo', () => {
    const { container } = renderTheme(
      <LogoLink link="#taget" text="text" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

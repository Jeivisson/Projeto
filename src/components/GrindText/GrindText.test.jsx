import { GrindText } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GrindSection>', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GrindText {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it('should render without background', () => {
    const { container } = renderTheme(
      <GrindText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});

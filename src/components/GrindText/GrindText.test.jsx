import { GrindText } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GrindSection>', () => {
  it('should render', () => {
    const { container } = renderTheme(<GrindText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

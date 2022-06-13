import { GridTwoColumn } from '.';
import mock from './mock';
export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    // Não precisa disso abaixo
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};

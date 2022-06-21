import { GrindText } from '.';
import mock from './mock';
export default {
  title: 'GrindText',
  component: GrindText,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GrindText {...args} />
    </div>
  );
};

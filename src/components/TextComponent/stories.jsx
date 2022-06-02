import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex tempora, ipsa nihil modi eveniet pariatur cum veritatis assumenda iusto cumque beatae. Quaerat distinctio a nisi eos iste deserunt corporis maiores!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

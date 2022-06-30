import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh;' }}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error quos
        et nam rem assumenda suscipit, unde nihil praesentium quibusdam veniam
        nesciunt reprehenderit nulla nemo ex tenetur. Ipsam, cumque nostrum.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error quos
        et nam rem assumenda suscipit, unde nihil praesentium quibusdam veniam
        nesciunt reprehenderit nulla nemo ex tenetur. Ipsam, cumque nostrum.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error quos
        et nam rem assumenda suscipit, unde nihil praesentium quibusdam veniam
        nesciunt reprehenderit nulla nemo ex tenetur. Ipsam, cumque nostrum.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error quos
        et nam rem assumenda suscipit, unde nihil praesentium quibusdam veniam
        nesciunt reprehenderit nulla nemo ex tenetur. Ipsam, cumque nostrum.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error quos
        et nam rem assumenda suscipit, unde nihil praesentium quibusdam veniam
        nesciunt reprehenderit nulla nemo ex tenetur. Ipsam, cumque nostrum.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error quos
        et nam rem assumenda suscipit, unde nihil praesentium quibusdam veniam
        nesciunt reprehenderit nulla nemo ex tenetur. Ipsam, cumque nostrum.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error quos
        et nam rem assumenda suscipit, unde nihil praesentium quibusdam veniam
        nesciunt reprehenderit nulla nemo ex tenetur. Ipsam, cumque nostrum.
      </p>
      <GoTop {...args} />
    </div>
  );
};

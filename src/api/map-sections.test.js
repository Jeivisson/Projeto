import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      id: 1,
      __component: 'section.section-two-columns',
      title: 'titulo',
      description: 'texto',
      metadata: {
        id: 1,
        name: 'home',
        section_id: 'home',
        background: true,
      },
      image: {
        data: {
          id: 7,
          attributes: {
            name: 'javascript.svg',
            alternativeText: 'javascript.svg',
            caption: 'javascript.svg',
            width: null,
            height: null,
            formats: null,
            hash: 'javascript_55b530d9ce',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 30.31,
            url: '1.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'javascript_55b530d9ce',
              resource_type: 'image',
            },
            createdAt: '2022-05-26T22:32:01.347Z',
            updatedAt: '2022-05-26T22:32:01.347Z',
          },
        },
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('1.svg');
    expect(data.text).toBe('texto');
    expect(data.title).toBe('titulo');
  });

  it('should map section if no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      id: 1,
      __component: 'section.section-content',
      title: 'title',
      content: 'html',
      metadata: {
        id: 2,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('title');
    expect(data.html).toBe('html');
  });
});

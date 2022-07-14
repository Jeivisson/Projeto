import pagesFakeData from './dados.json';
import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render predefined section with correct data', () => {
    const data = mapSections(pagesFakeData.data[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);

    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
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
  it('should map section grid text with data values ', () => {
    const data = mapTextGrid({
      id: 1,
      __component: 'section.section-grid',
      title: 'My grid',
      description: 'Uma breve descrição',
      metadata: {
        id: 3,
        name: 'grid-one',
        section_id: 'grid-one',
        background: true,
      },
      text_grid: [
        {
          id: 1,
          title: 'Teste 1',
          description: 'description teste 1',
        },
        {
          id: 2,
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
        {
          id: 3,
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
      ],
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My grid');
    expect(data.description).toBe('Uma breve descrição');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('description teste 1');
  });
  it('should map section grid text without data', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
  it('should map section grid image without data ', () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
  it('should map section grid image with data values ', () => {
    const data = mapImageGrid({
      id: 1,
      __component: 'section.section-grid',
      title: 'My grid',
      description: 'Uma breve descrição',
      metadata: {
        id: 3,
        name: 'grid-one',
        section_id: 'grid-one',
        background: true,
      },
      image_grid: [
        {
          id: 2,
          image: {
            data: {
              id: 8,
              attributes: {
                name: 'landing_page_2_c6baa21725.svg',
                alternativeText: 'alt.svg',
                caption: 'landing_page_2_c6baa21725.svg',
                width: null,
                height: null,
                formats: null,
                hash: 'landing_page_2_c6baa21725_09db7ed84a',
                ext: '.svg',
                mime: 'image/svg+xml',
                size: 2.51,
                url: 'a.svg',
                previewUrl: null,
                provider: 'cloudinary',
                provider_metadata: {
                  public_id: 'landing_page_2_c6baa21725_09db7ed84a',
                  resource_type: 'image',
                },
                createdAt: '2022-05-30T14:58:25.084Z',
                updatedAt: '2022-05-30T14:58:25.084Z',
              },
            },
          },
        },
      ],
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My grid');
    expect(data.description).toBe('Uma breve descrição');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('alt.svg');
  });
});

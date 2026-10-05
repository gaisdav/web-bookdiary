export type OnboardingLocale = 'en' | 'ru';

export type OnboardingImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcset?: string;
  sizes?: string;
};

export type OnboardingContent = {
  locale: OnboardingLocale;
  pageTitle: string;
  metaDescription: string;
  heading: string;
  featuresLabel: string;
  languageLabel: string;
  chapters: Array<{
    number: string;
    title: string;
    paragraphs: string[];
  }>;
  images: {
    search: OnboardingImage[];
    library: OnboardingImage[];
    diary: OnboardingImage;
    feed: OnboardingImage;
    profile: OnboardingImage;
    settings: OnboardingImage;
  };
  finishTitle: string;
  finishDescription: string;
  startLabel: string;
};

const responsiveSizes = '(max-width: 640px) 240px, 350px';

const englishImages: OnboardingContent['images'] = {
  search: [
    {
      src: '/onboarding/search-grid.webp',
      alt: 'The search button in My Library',
      width: 1024,
      height: 1536,
    },
    {
      src: '/onboarding/search-list.webp',
      alt: 'Search results and books from other databases',
      width: 1024,
      height: 1536,
    },
  ],
  library: [
    {
      src: '/onboarding/add-external-book.webp',
      alt: 'Options to edit and add a book from another database',
      width: 941,
      height: 1672,
    },
    {
      src: '/onboarding/reading-statuses.webp',
      alt: 'Reading statuses available for a book in Readimus',
      width: 948,
      height: 1659,
    },
  ],
  diary: {
    src: '/product/diary-light.webp',
    srcset: '/product/diary-light-448.webp 448w, /product/diary-light.webp 768w',
    sizes: responsiveSizes,
    alt: 'Readimus calendar showing books by reading date',
    width: 768,
    height: 1665,
  },
  feed: {
    src: '/product/feed-light.webp',
    srcset: '/product/feed-light-448.webp 448w, /product/feed-light.webp 768w',
    sizes: responsiveSizes,
    alt: 'Readimus feed with reviews and reading activity',
    width: 768,
    height: 1665,
  },
  profile: {
    src: '/onboarding/profile.webp',
    alt: 'A Readimus reader profile with books and followers',
    width: 1179,
    height: 2556,
  },
  settings: {
    src: '/onboarding/settings.webp',
    alt: 'Readimus settings in dark mode',
    width: 1179,
    height: 2556,
  },
};

export const englishOnboarding: OnboardingContent = {
  locale: 'en',
  pageTitle: 'How to use Readimus',
  metaDescription:
    'Learn how to find books, build your library, track your reading, and connect with other readers in Readimus.',
  heading: 'How to use Readimus',
  featuresLabel: 'Readimus features',
  languageLabel: 'Language',
  chapters: [
    {
      number: '01',
      title: 'Find your books',
      paragraphs: [
        'Search for a book by title or author.',
        'Readimus first searches our library. If you can’t find the book there, continue your search in other book databases.',
      ],
    },
    {
      number: '02',
      title: 'Add books to your library',
      paragraphs: [
        'If you find a book in another database, add it to Readimus first by tapping Add to Library. You can also edit the cover and other details before adding it.',
        'Once a book is in our library, you can like it, add it to Want to Read, or mark it as Reading or Read. Books marked as Reading or Read will appear in My Books.',
      ],
    },
    {
      number: '03',
      title: 'Keep track of your reading',
      paragraphs: ['Your Calendar keeps a history of what you’ve read and when.'],
    },
    {
      number: '04',
      title: 'Feed',
      paragraphs: [
        'Follow friends to see their reading activity in your feed.',
        'Turn on Community to see what other Readimus users are reading, not just the people you follow.',
      ],
    },
    {
      number: '05',
      title: 'Your profile',
      paragraphs: ['This is how other readers see your profile, books, and reading activity.'],
    },
    {
      number: '06',
      title: 'Settings',
      paragraphs: [
        'In Settings, you can manage your account, adjust your privacy settings, and switch between light and dark themes.',
      ],
    },
  ],
  images: englishImages,
  finishTitle: 'Enjoy your reading journey.',
  finishDescription:
    'Explore Readimus as a guest. Create an account when you’re ready to unlock all personal features.',
  startLabel: 'Start',
};

export const russianOnboarding: OnboardingContent = {
  locale: 'ru',
  pageTitle: 'Как пользоваться Readimus',
  metaDescription:
    'Узнайте, как находить книги, собирать библиотеку, следить за чтением и общаться с читателями в Readimus.',
  heading: 'Как пользоваться Readimus',
  featuresLabel: 'Возможности Readimus',
  languageLabel: 'Язык',
  chapters: [
    {
      number: '01',
      title: 'Поиск книг',
      paragraphs: [
        'Ищите книги по названию или автору.',
        'Сначала Readimus ищет книгу в нашей библиотеке. Если нужной книги нет, продолжите поиск в других книжных базах.',
      ],
    },
    {
      number: '02',
      title: 'Добавляйте книги в библиотеку',
      paragraphs: [
        'Если книга нашлась в другой базе, сначала добавьте её в Readimus кнопкой «Добавить в библиотеку». Перед добавлением можно изменить обложку и информацию о книге.',
        'После добавления книгу можно отметить как любимую, добавить в «Хочу прочитать» или выбрать статус «Читаю» или «Прочитано». Книги со статусом «Читаю» и «Прочитано» появятся в разделе «Мои книги».',
      ],
    },
    {
      number: '03',
      title: 'Отмечайте дату прочтения',
      paragraphs: [
        'Календарь хранит историю чтения и показывает, когда вы начали и закончили читать каждую книгу.',
      ],
    },
    {
      number: '04',
      title: 'Лента',
      paragraphs: [
        'Подпишитесь на друзей, чтобы видеть их активность в своей ленте.',
        'Включите «Сообщество», чтобы видеть, что читают другие пользователи Readimus.',
      ],
    },
    {
      number: '05',
      title: 'Ваш профиль',
      paragraphs: ['Так другие читатели видят ваш профиль, книги и историю чтения.'],
    },
    {
      number: '06',
      title: 'Настройки',
      paragraphs: [
        'В настройках можно управлять аккаунтом, менять параметры приватности и переключаться между светлой и тёмной темами.',
      ],
    },
  ],
  // Use the real English UI captures until matching Russian app captures are supplied.
  // Keeping the paths in content makes that replacement isolated to this object.
  images: {
    ...englishImages,
    search: [
      {
        src: '/onboarding/ru/search-grid.webp',
        alt: 'Кнопка поиска в разделе «Моя библиотека»',
        width: 720,
        height: 1280,
      },
      {
        src: '/onboarding/ru/search-list.webp',
        alt: 'Результаты поиска и книги из других баз',
        width: 720,
        height: 1280,
      },
    ],
    library: [
      {
        src: '/onboarding/ru/add-external-book.webp',
        alt: 'Действия для редактирования и добавления книги из другой базы',
        width: 720,
        height: 1280,
      },
      {
        src: '/onboarding/ru/reading-statuses.webp',
        alt: 'Статусы чтения для книги в Readimus',
        width: 720,
        height: 1280,
      },
    ],
    diary: {
      src: '/onboarding/ru/diary.webp',
      alt: 'Календарь Readimus с книгами по датам чтения',
      width: 1179,
      height: 2556,
    },
    feed: {
      src: '/onboarding/ru/feed.webp',
      alt: 'Лента Readimus с отзывами и читательской активностью',
      width: 573,
      height: 1280,
    },
    profile: {
      src: '/onboarding/ru/profile.webp',
      alt: 'Профиль читателя Readimus с книгами и подписчиками',
      width: 1179,
      height: 2556,
    },
    settings: {
      src: '/onboarding/ru/settings.webp',
      alt: 'Настройки Readimus в тёмной теме',
      width: 1179,
      height: 2556,
    },
  },
  finishTitle: 'Приятного чтения.',
  finishDescription:
    'Попробуйте Readimus в режиме гостя. Создайте аккаунт, чтобы получить доступ ко всем возможностям.',
  startLabel: 'Начать',
};

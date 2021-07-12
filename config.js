const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://Sn-Hn.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://Sn-Hn.github.io',
    logoLink: 'https://Sn-Hn.github.io/',
    title:
      //"<img class='img-responsive' src='../images/sn-hn-logo.png' alt='Learn logo' /" +
      "<h2><a href='https://Sn-Hn/github.io'>Sn-Hn</a></h2>",
    githubUrl: 'https://github.com/Sn-Hn',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
      '/algorithm',
      '/cs',
      '/book',
      '/project',
      '/blog',
    ],
    links: [{ text: 'Sn-Hn', link: 'https://github.com/Sn-Hn' }],
    frontline: false,
    ignoreIndex: true,
    title:
      // "<a href='https://Sn-Hn.github.io/'>graphql </a><div class='greenCircle'></div><a href='https://Sn-Hn.github.io/'>react</a>",
      "<span>기록하는 개발자</span>"
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/Sn-Hn',
    // favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;

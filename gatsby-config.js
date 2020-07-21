module.exports = {
  siteMetadata: {
    siteTitle: "Howl History",
    siteDescription:
      "A journey through the tortured past of the Minnesota Timberwolves.",
    siteImage: "/banner.png", // main image of the site for metadata
    siteUrl: "https://chronoblog-profile.now.sh/",
    pathPrefix: "/",
    siteLanguage: "en",
    ogLanguage: `en_US`,
    author: "Howl History", // for example - 'Ivan Ganev'
    authorDescription:
      "A journey through the tortured past of the Minnesota Timberwolves.", // short text about the author
    avatar: "/avatar.jpg",
    twitterSite: "https://twitter.com/howlhistory", // website account on twitter
    twitterCreator: "https://twitter.com/rubioops", // creator account on twitter
    social: [
      {
        icon: `envelope`,
        url: `mailto:mymail@mail.com`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/howlhistory`
      },
      {
        icon: `instagram`,
        url: `https://github.com/Chronoblog/gatsby-theme-chronoblog`
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-theme-chronoblog",
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: "show more",
          feedSearchPlaceholder: "search",
          cardReadMoreButton: "read more →",
          allTagsButton: "all tags"
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: "🔗 "
            }
          }
        },
        feedSearch: {
          symbol: "🔍"
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X"
      }
    }
  ]
}

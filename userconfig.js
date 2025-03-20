// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Moskow",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.yellow,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.green,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/",
              icon: "align-box-left-middle",
              icon_color: palette.blue,
            }
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "YouTube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "Habr",
              url: "https://qna.habr.com/",
              icon: "question-mark",
              icon_color: palette.blue,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);

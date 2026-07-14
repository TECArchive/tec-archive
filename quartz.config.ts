import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "TEC Archive",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    // No analytics by default for the public archive.
    analytics: null,
    locale: "en-US",
    // GitHub Pages URL for project pages: https://TECArchive.github.io/tec-archive/
    baseUrl: "TECArchive.github.io/tec-archive",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbfbf7",
          lightgray: "#e7e8e2",
          gray: "#b3b6ac",
          darkgray: "#454a43",
          dark: "#20241f",
          secondary: "#0e7c86",
          tertiary: "#5c9a3f",
          highlight: "rgba(222, 251, 72, 0.15)",
          textHighlight: "#defb4899",
        },
        darkMode: {
          light: "#14150f",
          lightgray: "#2c2e26",
          gray: "#5f6357",
          darkgray: "#d6d8cf",
          dark: "#edeee6",
          secondary: "#63c7c9",
          tertiary: "#a6d95b",
          highlight: "rgba(222, 251, 72, 0.10)",
          textHighlight: "#defb4855",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled: it fetches Google Fonts at build time to render
      // social-preview images, which intermittently fails the GitHub Actions build.
      // Re-enable if you want share-preview images and the runner has reliable font access.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config

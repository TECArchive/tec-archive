import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Custom sidebar order for the Overview section (the rest stays alphabetical).
// NOTE: this function is serialized to the client, so it must be self-contained.
const overviewSortFn = (a: any, b: any) => {
  const order = [
    "overview/history",
    "overview/mission-vision-and-values",
    "overview/timeline",
    "overview/economics-and-token-design",
    "overview/the-hatch",
    "overview/augmented-bonding-curve",
    "overview/ostrom-and-the-cultural-build",
    "overview/governance",
    "overview/working-groups",
    "overview/praise",
    "overview/code-and-technical-artifacts",
    "overview/tokens-of-the-tec",
    "overview/op-migration",
    "overview/grant-program",
    "overview/research",
    "overview/dissolution-of-the-tec",
  ]
  const ia = order.indexOf((a.slug || "").toLowerCase())
  const ib = order.indexOf((b.slug || "").toLowerCase())
  if (ia !== -1 && ib !== -1) return ia - ib
  if (ia !== -1) return -1
  if (ib !== -1) return 1
  // default: folders before files, then alphabetical (numeric-aware)
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
  }
  return a.isFolder ? -1 : 1
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({ sortFn: overviewSortFn }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ sortFn: overviewSortFn }),
  ],
  right: [],
}

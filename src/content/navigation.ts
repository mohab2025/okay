export const primaryNavigation = [
  { id: "product", href: "/product" },
  { id: "solutions", href: "/solutions" },
  { id: "agents", href: "/agents" },
  { id: "howItWorks", href: "/how-it-works" },
  { id: "technology", href: "/technology" },
  { id: "industries", href: "/industries" },
  { id: "company", href: "/company" },
  { id: "resources", href: "/resources" },
] as const;

export const accountNavigation = [
  { id: "signIn", href: "/sign-in" },
  { id: "getStarted", href: "/get-started" },
] as const;

export const siteRoutes = [...primaryNavigation, ...accountNavigation] as const;

export type PrimaryNavId = (typeof primaryNavigation)[number]["id"];
export type AccountNavId = (typeof accountNavigation)[number]["id"];
export type SiteRoute = (typeof siteRoutes)[number];

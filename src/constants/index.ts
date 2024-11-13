import Setting from "../assets/icons/dashboard.svg";
import HoverSettings from "../assets/icons/hoverDashboard.svg";
export const enum Page {
  Dashboard,
  MonthlyReports,
  Invoices,
  ContactSavyour,
}
export type PageDetails = {
  title: string;
  route?: string;
  icon: string;
  hoverIcon: string;
};

export const Pages: { [page in Page]: PageDetails } = {
  [Page.Dashboard]: {
    title: "Dashbord",
    route: "dashboard",
    icon: Setting,
    hoverIcon: HoverSettings,
  },
  [Page.MonthlyReports]: {
    title: "Monthly Reports",
    route: "monthly-reports",
    icon: Setting,
    hoverIcon: HoverSettings,
  },
  [Page.Invoices]: {
    title: "Invoices",
    route: "invoices",
    icon: Setting,
    hoverIcon: HoverSettings,
  },
  [Page.ContactSavyour]: {
    title: "Contact Savyour",
    route: "contact-savyour",
    icon: Setting,
    hoverIcon: HoverSettings,
  },
};

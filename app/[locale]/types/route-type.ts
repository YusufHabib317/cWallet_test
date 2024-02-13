export type RouteT = {
  id: number;
  title: string;
  subMenu: {
    id: number;
    title: string;
    description: string | null;
    icon: () => JSX.Element;
    isAvailable: boolean;
  }[];
  social?: {
    id: number;
    title: string;
    icon: () => JSX.Element;
  }[];
};

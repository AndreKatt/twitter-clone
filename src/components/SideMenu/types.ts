type MenuItem = {
  link: string;
  icon: JSX.Element;
  label: string;
};

export type GetMenu = (user: string | undefined) => Array<MenuItem>;

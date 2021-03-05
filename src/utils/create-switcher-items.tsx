interface IItem {
  [key: string]: string | number;
};

export const createSwitcherItems = (item: IItem, checkedKey: string) => {
  return Object.keys(item).map((key) => ({ label: key, isChecked: (key === checkedKey) }));
};

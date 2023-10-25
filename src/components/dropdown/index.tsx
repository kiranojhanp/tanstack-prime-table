import { ButtonProps } from "primereact/button";
import { MenuItem } from "primereact/menuitem";
import { Menu } from "../menu";

export interface DropdownProperties {
  actions?: MenuItem[];
  buttonOptions?: Omit<ButtonProps, "onClick">;
}

export const Dropdown = ({
  actions,
  buttonOptions: triggerButtonOptions,
}: DropdownProperties) => {
  const items: MenuItem[] = actions ? [...actions] : [];
  const buttonOptions = {
    icon: "pi pi-chevron-down",
    ...triggerButtonOptions,
  };

  return <Menu model={items} buttonOptions={buttonOptions} />;
};

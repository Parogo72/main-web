import { Divider } from "@nextui-org/divider";

import { paragraph, title } from "@/app/_components/primitives";

export const SideBar = () => {
  return (
    <div className="bg-blue-600 float-left">
      <span>
        <span className={title({ size: "usm" })}>Personal Information</span>
        <Divider className="my-1" />
        <span className={paragraph({})}>
          Pablo Rodríguez González
          <br />
          Boetticher Y Navarro 19, Madrid
          <br />
          627 15 38 58
          <br />
        </span>
      </span>
    </div>
  );
};

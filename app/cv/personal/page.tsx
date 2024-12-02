"use client";

import { Link, Progress } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";

import { paragraph, title } from "@/app/_components/primitives";

export default function PersonalPage() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 w-full">
      <div>
        <span className={paragraph()}>
          <span className={title({ size: "usm" })}>Personal Information</span>
          <Divider />
          <br />
          Pablo Rodríguez González
          <br />
          Boetticher Y Navarro 19, Madrid
          <br />
          <Link showAnchorIcon href="tel:627153858">
            627 15 38 58
          </Link>
          <br />
          <Link showAnchorIcon href="mailto:parogo004@gmail.com">
            parogo004@gmail.com
          </Link>
          <br />
          01/01/2004
          <br />
          Spain
        </span>
      </div>
      <div>
        <span className={title({ size: "usm" })}>Skills</span>
        <Divider />
        <br />
        <Progress
          className="max-w-md"
          color="danger"
          label="Problem Solving"
          size="md"
          value={90}
        />
        <br />
        <Progress
          className="max-w-md"
          color="danger"
          label="Web Development"
          size="md"
          value={70}
        />
        <br />
        <Progress
          className="max-w-md"
          color="danger"
          label="Backend"
          size="md"
          value={50}
        />
        <br />
        <Progress
          className="max-w-md"
          color="danger"
          label="Databases"
          size="md"
          value={40}
        />
      </div>
      <div>
        <span className={title({ size: "usm" })}>Languages</span>
        <Divider />
        <br />
        <Progress
          className="max-w-md"
          color="warning"
          label="Spanish"
          size="md"
          value={100}
        />
        <br />
        <Progress
          className="max-w-md"
          color="warning"
          label="Galician"
          size="md"
          value={100}
        />
        <br />
        <Progress
          className="max-w-md"
          color="warning"
          label="English"
          size="md"
          value={80}
        />
        <br />
        <Progress
          className="max-w-md"
          color="warning"
          label="Portuguese"
          size="md"
          value={30}
        />
      </div>
      <div>
        <span className={title({ size: "usm" })}>Computing</span>
        <Divider />
        <br />
        <Progress
          className="max-w-md"
          color="success"
          label="Node.js"
          size="md"
          value={90}
        />
        <br />
        <Progress
          className="max-w-md"
          color="success"
          label="Python"
          size="md"
          value={75}
        />
        <br />
        <Progress
          className="max-w-md"
          color="success"
          label="C++"
          size="md"
          value={70}
        />
        <br />
        <Progress
          className="max-w-md"
          color="success"
          label="Java"
          size="md"
          value={65}
        />
        <br />
        <Progress
          className="max-w-md"
          color="success"
          label="SQL"
          size="md"
          value={50}
        />
      </div>
    </div>
  );
}

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/app/_components/primitives";
import { GithubIcon, LinkedinIcon } from "@/app/_components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Hi, I'm&nbsp;</span>
        <span className={title({ color: "blue" })}>Parogo&nbsp;</span>
        <br />
        <span className={title()}>Specialized in</span>
        <span className={title({ color: "violet" })}>
          {" "}
          Software Development
        </span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Passionate about creating <b>Scalable Systems</b> and{" "}
          <b>User-Friendly Interfaces</b>.
          <br />
          Explore my projects and let's connect!
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.linkedin}
        >
          <LinkedinIcon size={20} />
          LinkedIn
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}

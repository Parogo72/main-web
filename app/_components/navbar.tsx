"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useSelectedLayoutSegments } from "next/navigation";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/app/_components/theme-switch";
import { GithubIcon, LinkedinIcon, Logo } from "@/app/_components/icons";

export const Navbar = () => {
  const pathname = usePathname();

  const [menuIsOpen, toggleMenuIsOpen] = useState(false);

  function handleHamburgerClick() {
    toggleMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    toggleMenuIsOpen(false);
  }, [pathname]);

  const segments = useSelectedLayoutSegments();
  const isActive = (href: string) =>
    (segments.length === 0 && href === "/") || segments[0] === href.slice(1);

  return (
    <NextUINavbar
      isBordered
      className="font-bold"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      isMenuOpen={menuIsOpen}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/3 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">PAROGO</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/3 sm:basis-full" justify="center">
        <ul className="hidden sm:flex gap-4 justify-center items-center ml-2">
          {siteConfig.navItems.map((item) => {
            return (
              <NavbarItem key={item.href} isActive={isActive(item.href)}>
                <NextLink
                  className={clsx(
                    linkStyles({
                      color: isActive(item.href) ? "primary" : "foreground",
                    }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color={isActive(item.href) ? "primary" : "foreground"}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/3 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <LinkedinIcon className="text-default-500" />
        </Link>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle onClick={handleHamburgerClick} />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 font-bold">
          {siteConfig.navItems.map((item, index) => {
            return (
              <NavbarMenuItem key={`${item.href}-${index}`}>
                <Link
                  color={isActive(item.href) ? "primary" : "foreground"}
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

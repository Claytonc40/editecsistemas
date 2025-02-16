'use client';
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ToggleTheme } from "./toggle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#methodology",
    label: "Metodologia",
  },
  {
    href: "/#services",
    label: "Serviços",
  },
  {
    href: "/#projects",
    label: "Projetos",
  },
  {
    href: "/#testimonials",
    label: "Depoimentos",
  },

  // {
  //   href: '#team',
  //   label: 'Equipe',
  // },
  {
    href: "/#contact",
    label: "Contato",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Demonstre seu Valor",
    description: "Destaque como seu produto resolve problemas dos usuários.",
  },
  {
    title: "Construa Confiança",
    description:
      "Aproveita elementos de prova social para estabelecer credibilidade.",
  },
  {
    title: "Capture Leads",
    description:
      "Torne seu formulário de captura visualmente atraente e estratégico.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <header className="shadow-inner bg-opacity-15 w-[95%] md:w-[90%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/logo.png"
          alt="Editec Sistemas Logo"
          width={150}
          height={60}
          className="w-[120px] md:w-[150px] h-auto"
        />
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="Editec Sistemas Logo"
                      width={36}
                      height={36}
                      className="mr-2"
                    />
                    Editec Sistemas
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className="text-base px-4 py-2 relative group"
                  onMouseEnter={() => setActiveItem(href)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200 ease-out ${
                      activeItem === href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};

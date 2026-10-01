"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  commercialServiceLinks,
  residentialServiceLinks,
  site,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Snow Removal", href: "/snow-removal" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center py-3">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
                pathname.includes("services") && "text-primary"
              )}
            >
              Services
              <ChevronDown className="size-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-2">
                <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-popover p-6 shadow-xl">
                  <div>
                    <Link
                      href="/commercial-services"
                      className="text-xs font-semibold tracking-wide text-primary uppercase"
                    >
                      Commercial
                    </Link>
                    <ul className="mt-3 flex flex-col gap-3">
                      {commercialServiceLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block text-sm font-medium text-foreground hover:text-primary"
                          >
                            {item.label}
                          </Link>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Link
                      href="/residential-services"
                      className="text-xs font-semibold tracking-wide text-primary uppercase"
                    >
                      Residential
                    </Link>
                    <ul className="mt-3 flex flex-col gap-3">
                      {residentialServiceLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block text-sm font-medium text-foreground hover:text-primary"
                          >
                            {item.label}
                          </Link>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <Button render={<Link href="/contact#quote" />}>Request Quote</Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="lg:hidden" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[85vw] max-w-sm flex-col gap-0 p-0">
            <SheetHeader className="border-b border-border px-6 py-5">
              <SheetTitle className="sr-only">Main menu</SheetTitle>
              <Logo className="text-xl" />
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
              <SheetClose
                render={
                  <Link
                    href="/about"
                    className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                  />
                }
              >
                About Us
              </SheetClose>

              <p className="px-3 pt-3 pb-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Commercial
              </p>
              <SheetClose
                render={
                  <Link
                    href="/commercial-services"
                    className="rounded-md px-3 py-2 text-base font-medium hover:bg-muted"
                  />
                }
              >
                Commercial Services
              </SheetClose>
              {commercialServiceLinks.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}

              <p className="px-3 pt-3 pb-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Residential
              </p>
              <SheetClose
                render={
                  <Link
                    href="/residential-services"
                    className="rounded-md px-3 py-2 text-base font-medium hover:bg-muted"
                  />
                }
              >
                Residential Services
              </SheetClose>
              {residentialServiceLinks.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}

              <div className="mt-2 border-t border-border pt-2">
                <SheetClose
                  render={
                    <Link
                      href="/snow-removal"
                      className="block rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                    />
                  }
                >
                  Snow Removal
                </SheetClose>
                <SheetClose
                  render={
                    <Link
                      href="/contact"
                      className="block rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                    />
                  }
                >
                  Contact
                </SheetClose>
              </div>
            </nav>
            <div className="flex flex-col gap-3 border-t border-border px-6 py-5">
              <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold">
                <Phone className="size-4" />
                {site.phone}
              </a>
              <SheetClose
                render={
                  <Link
                    href="/contact#quote"
                    className={buttonVariants({ className: "w-full" })}
                  />
                }
              >
                Request Quote
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

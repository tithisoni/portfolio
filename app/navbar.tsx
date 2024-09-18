import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { label: "About Me", page: "aboutme" },
    { label: "Experience", page: "experience" },
    { label: "Projects", page: "projects" },
    { label: "Skills", page: "skills" },
    { label: "Awards", page: "awards" },
  ];

  const handleLinkClick = () => {
    // Close the menu after clicking a link on mobile view
    setIsMenuOpen(false);
  };

  return (
    <header>
      <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          {/* Toggle button only visible in mobile */}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            onClick={() => setIsMenuOpen(isMenuOpen)}
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">Tithi Soni</p>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop view links */}
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {menuItems.map((item) => (
            <NavbarItem key={item.page}>
              <Link href={`#${item.page}`} color="foreground">
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.page}>
              <Link
                className="w-full text-foreground"
                href={`#${item.page}`}
                size="lg"
                onClick={handleLinkClick}  // Close menu after click
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
}

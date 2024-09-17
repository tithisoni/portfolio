// import { useState } from "react"
// import { Link } from "react-scroll/modules"
// import { usePathname } from "next/navigation"
// import { useTheme } from "next-themes"
// import { RiMoonFill, RiSunLine } from "react-icons/ri"
// import { IoMdMenu, IoMdClose } from "react-icons/io"

// interface NavItem {
//   label: string
//   page: string
// }

// const NAV_ITEMS: Array<NavItem> = [
//   {
//     label: "Home",
//     page: "home",
//   },
//   {
//     label: "About",
//     page: "about",
//   },
//   {
//     label: "Projects",
//     page: "projects",
//   },
// ]

export default function Navbar() {
//   const { systemTheme, theme, setTheme } = useTheme()
//   const currentTheme = theme === "system" ? systemTheme : theme
//   const pathname = usePathname()
//   const [navbar, setNavbar] = useState(false)
  return (
    <header>
      <nav className="flex flex-row">
        <a href="#aboutme">About me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#awards">Awards</a>
        <a href="#skills">Skills</a>
      </nav>
    </header>
  )
}
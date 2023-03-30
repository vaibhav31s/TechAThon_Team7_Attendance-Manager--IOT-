'use client'
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import {FaArrowLeft,FaArrowRight} from "react-icons/fa"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext, useState } from "react";
// import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import './styles.css'

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Teacher",
    href: "/teacher",
    icon: BsPeople,
  },
  {
    name: "Students",
    href: "/teacher/students",
    icon: FiMail,
  },
  {
    name: "Manual Attendance",
    href: "/teacher/manually",
    icon: TiContacts,
  },
];

const Sidebar = () => {
  const router = useRouter();
//   const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
const [isCollapsed, setCollapse] = useState(true)
  const session = useSession();
  if(session === undefined) return <></>
  return (
    <div className="sidebar__wrapper">
      <button className="btns " onClick={()=>setCollapse(!isCollapsed)}>
        {isCollapsed ? <FaArrowRight className="" /> : <FaArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        
      </aside>
    </div>
  );
};

export default Sidebar;
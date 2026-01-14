import { menus } from "@/src/utils";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  onClose: () => void;
  open: boolean;
}

const drawerWidth = 256;

export const SideNav: React.FC<IProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const pathname = usePathname();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const checkActiveLink = (menu_link: string) => {
    return menu_link.includes(pathname);
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <nav className="flex flex-col gap-5 py-6 px-4 border-r-[#EDEDED] bg-white w-full overflow-x-hidden">
        <Link href={"#"} className="mb-3">
          <Image
            src="/images/Zabira-logo-black.svg"
            alt="Zabira logo"
            width={100}
            height={21}
          />
        </Link>

        <ul className="flex flex-col gap-0.5 w-full">
          {menus.map((menu, id) => (
            <li key={id}>
              <Link
                href={menu.link}
                className={`${
                  checkActiveLink(menu.link)
                    ? "active text-[#0044EE] bg-[#EBF0FF]"
                    : ""
                } trans menu-link text-sm font-medium text-[#1A1A1A5C] leading-5.25 hover:text-[#0044EE] hover:bg-[#EBF0FF] p-3 rounded-md flex items-center gap-3 w-full`}
              >
                {menu.icon}
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#" className="relative w-56 h-40">
          <Image
            src="/images/bg/side-banner.svg"
            alt="Banner"
            fill
            className="object-cover"
          />
        </Link>

        <div className="flex flex-col gap-3 px-6">
          <h5 className="text-[#819099] text-sm font-semibold leading-[124%] tracking-[-0.012em]">
            Download the Zabira App
          </h5>

          <Image
            src="/images/bg/zabira-qr-code.svg"
            alt="zabira qr code"
            width={176}
            height={179}
          />

          <div className="mt-3 inline-flex flex-col gap-2">
            <h5 className="text-sm text-[#1A1A1A]/70 font-semibold leading-[-0.012em]">
              Zabira Technologies
            </h5>
            <small className="text-sm text-[#1A1A1A]/36 font-semibold leading-[-0.012em]">
              &amp; 2027 All Rights Reserved
            </small>
          </div>
        </div>
      </nav>
    </Box>
  );

  return (
    <>
      {/* Desktop: permanent drawer */}
      {isDesktop && (
        <Drawer
          variant="permanent"
          open
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              overflowX: "hidden",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Mobile & Tablet: temporary drawer */}
      {!isDesktop && (
        <Drawer
          variant="temporary"
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }} // better performance
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

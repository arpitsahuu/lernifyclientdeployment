"use client";
import { FC, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import {
  HomeOutlinedIcon,
  ArrowForwardIosIcon,
  ArrowBackIosIcon,
  PeopleOutlinedIcon,
  ReceiptOutlinedIcon,
  BarChartOutlinedIcon,
  MapOutlinedIcon,
  GroupsIcon,
  OndemandVideoIcon,
  VideoCallIcon,
  WebIcon,
  QuizIcon,
  WysiwygIcon,
  ManageHistoryIcon,
  SettingsIcon,
  ExitToAppIcon,
  AccountCircleIcon,
  ManageAccountsIcon,
  LockResetIcon,
  LocalMallIcon,
  ArrowBackIosNewIcon,
} from "./Icon";
import avatarDefault from "../../../../public/assests/avatar.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useLogOutMutation } from "@/Store/auth/authApi";
import { useRouter } from "next/navigation";
// import { useTheme } from "next-themes";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[16px] !font-Poppins">{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

type Props = {
  isCollapsed?: boolean;
  setIsCollapsed?: any;
  role: string
};

const Sidebar = ({ isCollapsed, setIsCollapsed, role }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  const [logOut] = useLogOutMutation();
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await logOut();
      // router.push("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  
  
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${"#fff !important"
            }`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          opacity: 1,
        },
        "& .pro-menu-item": {
          color: "#000",
        },
        zIndex: 100 
      }}
      className="!bg-white dark:bg-[#111C43]"
    >
      {role === "admin" &&
        <ProSidebar
          collapsed={isCollapsed}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: 30,
            width: isCollapsed ? "0%" : "16%",
          }}
        >
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Link href="/" className="block">
                    <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
                      Lernify
                    </h3>
                  </Link>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)} className="inline-block">
                    <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Image
                    alt="profile-user"
                    width={120}
                    height={120}
                    src={user.avatar ? user.avatar.url : avatarDefault}
                    className="w-[120px] h-[120px] cursor-pointer border-[3px]  rounded-full"
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      border: "3px solid #5b6fe6",
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    className="!text-[20px] text-black dark:text-[#ffffffc1]"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    {user?.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ m: "10px 0 0 0" }}
                    className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize"
                  >
                    - {user?.role}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/admin"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              >
                {!isCollapsed && "Data"}
              </Typography>
              <Item
                title="Users"
                to="/admin/users"
                icon={<GroupsIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Invoices"
                to="/admin/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h5"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
              >
                {!isCollapsed && "Content"}
              </Typography>
              <Item
                title="Create Course"
                to="/admin/create-course"
                icon={<VideoCallIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Live Courses"
                to="/admin/courses"
                icon={<OndemandVideoIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h5"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
              >
                {!isCollapsed && "Customization"}
              </Typography>
              <Item
                title="FAQ"
                to="/admin/faq"
                icon={<QuizIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Categories"
                to="/admin/categories"
                icon={<WysiwygIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h5"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
              >
                {!isCollapsed && "Controllers"}
              </Typography>
              <Item
                title="Manage Team"
                to="/admin/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
              >
                {!isCollapsed && "Analytics"}
              </Typography>
              <Item
                title="Courses Analytics"
                to="/admin/courses-analytics"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Orders Analytics"
                to="/admin/orders-analytics"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Users Analytics"
                to="/admin/users-analytics"
                icon={<ManageHistoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
              >
                {!isCollapsed && "Extras"}
              </Typography>
              <div onClick={logoutHandler}>
                <Item
                  title="Logout"
                  to="/"
                  icon={<ExitToAppIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
            </Box>
          </Menu>
        </ProSidebar>
      }
      {role === "user" &&
        <ProSidebar
          collapsed={isCollapsed}
          style={{
            position: "fixed",
            top: "73px",
            left: 0,
            height: "96vh",
            zIndex: 30,
            width: isCollapsed ? "0%" : "16%",
          }}
        >
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined  }
              style={{
                margin: isCollapsed ? "10px 0 20px 0" : " 0",
              }}
            >
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Image
                    alt="profile-user"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
                    src={user.avatar ? user.avatar.url : avatarDefault}
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      border: "3px solid #5b6fe6",
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    className="!text-[20px] text-black dark:text-[#ffffffc1]"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    {user?.name}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Profile"
                to="/profile"
                icon={<AccountCircleIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              >
                {!isCollapsed && "Update"}
              </Typography>

              <Item
                title="Update Password"
                to="/profile/password"
                icon={<LockResetIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h5"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
              >
                {!isCollapsed && "Courses"}
              </Typography>
              <Item
                title="Courses"
                to="/profile/courses"
                icon={<LocalMallIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {user?.role === "admin" &&
                <Typography
                  variant="h5"
                  className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  {!isCollapsed && "Dashboard"}
                </Typography>

              }
              {user?.role === "admin" &&

                <Item
                  title="Admin Dashboard"
                  to="/admin"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              }




              

              <Typography
                variant="h6"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
              >
                {!isCollapsed && "Extras"}
              </Typography>
              <div onClick={logoutHandler}>
                <Item
                  title="Logout"
                  to="/"
                  icon={<ExitToAppIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
            </Box>
          </Menu>
        </ProSidebar>
      }
    </Box>
  );
};

export default Sidebar;

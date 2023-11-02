import React from "react";
import Header from "@/Components/Header";
import { AiFillHome, AiOutlineQuestion } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiPassportFill } from "react-icons/ri";
import { BsBoxes } from "react-icons/bs";
import ListItems from "@/Components/ListItems";
import Footer from "@/Components/Footer";
import {FiStar} from 'react-icons/fi'

const testItems = [
  {
    icon: AiFillHome,
    title: "Home",
    active: false,
    children: [],
  },
  {
    icon: AiOutlineQuestion,
    title: "How it Works",
    active: false,
    children: [],
  },
  {
    icon: IoIosPeople,
    title: "Marketplace",
    active: false,
    children: [],
  },
  {
    icon: RiPassportFill,
    title: "For Talents",
    active: false,
    children: [],
  },
  {
    icon: BsBoxes,
    title: "Categories",
    active: true,
    children: [
      {
        title: "Child 1",
        active: false,
        open: true,
        children: [],
        icon: FiStar,
      },
      {
        title: "Child 2",
        active: true,
        open: true,
        icon: FiStar,

        children: [
          {
            title: "Grandchild 1",
            active: false,
            open: false,
            icon: FiStar,

            children: [
              {
                title: "Grand-grandchild 1",
                active: false,
                open: false,
                icon: FiStar,

                children: [],
              },
            ],
          },
          {
            title: "Grandchild 2",
            active: true,
            open: true,
            icon: FiStar,

            children: [],
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-full md:w-72 rounded-tr-5">
        <Header />
      <ListItems list={testItems} />
      <div className="mt-auto mb-8">
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;

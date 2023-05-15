import React from "react";
import { motion } from "framer-motion";
import TagsNav from "../nav/TagsNav.jsx";
import { Link, Outlet } from "react-router-dom";
export default function Websites() {

  return (
    <div
    >
      {/* BUTTON */}
      <TagsNav />
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-roboto tracking-wider mb-2">
          Welcome to Website section!
        </h2>
        <p className="font-roboto tracking-wider">
          Select a tag to view videos
        </p>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

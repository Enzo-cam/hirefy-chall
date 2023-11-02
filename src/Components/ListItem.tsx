import React from "react";

const ListItem = ({ item }) => {
  const IconComponent = item.icon;
  return (
    <div
      className={`flex items-center px-3 py-2 gap-3 mb-5 ${
        item.active ? "bg-celesteBg" : ""
      }`}
    >
      <IconComponent className="text-xl" />
      <p className="font-medium text-xl">{item.title}</p>
    </div>
  );
};

export default ListItem;

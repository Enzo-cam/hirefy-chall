import React, { useState } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const ListItems = ({ list }) => {
  const [openItems, setOpenItems] = useState([]);

  const handleToggle = (title) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(title)) {
        return prevOpenItems.filter((item) => item !== title);
      } else {
        return [...prevOpenItems, title];
      }
    });
  };

  const renderItems = (items, level = 0) => {
    return items.map((item, index) => (
      <div key={index} className={`pl-${level * 4}`}>
        <div
          className={`flex items-center px-4 py-4 ${
            item.active && level === 0 ? 'bg-celesteBg text-black' : 'text-gray-700'
          }`}
        >
          {item.children && item.children.length > 0 ? (
            <button
              onClick={() => handleToggle(item.title)}
              className="mr-2"
            >
              {openItems.includes(item.title) ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
            </button>
          ) : (
            <span className="mr-2" />
          )}
          {item.icon && <item.icon className="mr-2 text-lg" />}
          <span className='font-medium'>{item.title}</span>
        </div>
        {item.children &&
          item.children.length > 0 &&
          openItems.includes(item.title) &&
          renderItems(item.children, level + 1)}
      </div>
    ));
  };

  return <div>{renderItems(list)}</div>;
};

export default ListItems;
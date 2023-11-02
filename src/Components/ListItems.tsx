import React, { useState } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

// Componente ListItems que recibe una lista de ítems como prop
const ListItems = ({ list }) => {
  // Estado openItems que almacenará los títulos de los ítems que están abiertos
  const [openItems, setOpenItems] = useState([]);

  // Función handleToggle que se encarga de abrir o cerrar un ítem
  const handleToggle = (title) => {
    setOpenItems((prevOpenItems) => {
      // Si el título ya está en la lista de openItems, se filtra y se elimina
      if (prevOpenItems.includes(title)) {
        return prevOpenItems.filter((item) => item !== title);
      } else {
        // Si el título no está en la lista, se añade
        return [...prevOpenItems, title];
      }
    });
  };

  // Función recursiva renderItems que renderiza la lista de ítems
  const renderItems = (items, level = 0) => {
    return items.map((item, index) => (
      <div key={index} className={`pl-${level * 4}`}>
        <div
          className={`flex items-center px-4 py-4 ${
            item.active && level === 0 ? 'bg-celesteBg text-black' : 'text-gray-700'
          }`}
        >
          {/* Si el ítem tiene sub-ítems, se muestra un botón con un ícono de flecha */}
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
          {/* Si el ítem tiene un ícono, se muestra a la izquierda del título */}
          {item.icon && <item.icon className="mr-2 text-lg" />}
          {/* Título del ítem */}
          <span className='font-medium'>{item.title}</span>
        </div>
        {/* Si el ítem tiene sub-ítems y está abierto, se renderizan los sub-ítems */}
        {item.children &&
          item.children.length > 0 &&
          openItems.includes(item.title) &&
          renderItems(item.children, level + 1)}
      </div>
    ));
  };

  // El componente devuelve el resultado de llamar a renderItems con la lista de ítems
  return <div>{renderItems(list)}</div>;
};

export default ListItems;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useMediaQuery } from "../hooks/useMediaQuery";

const items = [
  { key: 1, text: 'Inicio', path: '/'},
  { key: 2, text: 'Formularios', path: '/forms' },
  { key: 3, text: 'Layouts', path: '/layouts' },
  { key: 4, text: 'Tablas',  path: '/tables' },
]

export const Sidebar = () => {
  const location = useLocation();
  const matches = useMediaQuery('(min-width: 1024px)');

  const [toogleMenu, setToogleMenu] = useState(false);

  useEffect(() => {
    if (matches && !toogleMenu) {
      setToogleMenu(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches]);

  return (
    <div className='w-full lg:h-full lg:max-w-[230px] lg:bg-stone-300'>
      <div className='w-full text-xl font-bold uppercase p-2 '>
        My Components
      </div>

      {!matches && (
        <button
          type='button'
          className='w-full h-10 text-start px-2 font-bold bg-stone-400 lg:hidden'
          onClick={() => setToogleMenu(!toogleMenu)}
        >
          Menú
        </button>
      )}

      {toogleMenu && (
        <ul className='bg-stone-300 lg:bg-transparent'>
          {items.map(item => (
            <Link to={item.path} key={item.key}>
              <li className='h-10 flex items-center px-2 hover:bg-stone-400'>
                <span className={`cursor-pointer ${item.path === location.pathname && 'font-bold'}`}>
                  {item.text}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}

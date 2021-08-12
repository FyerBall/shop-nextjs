// local file with all our fake categories
import { category } from "../../constant/Category";

// looping and styling them here and import them in the Header comp. to keep the Header clean
function Category() {
  return (
    <ul className=" flex mx-auto overflow-scroll text-gray-200 max-w-4xl whitespace-nowrap scrollbar-hide mb-14  space-x-4 sm:justify-center xl:max-w-full ">
      {category.map(({ name, Icon }, _index) => (
        <li
          key={_index}
          className="cursor-pointer flex justify-center w-28 capitalize space-x-4 flex-col items-center py-1 px-3 
          rounded-lg text-gray-400 shadow-sm border-2 border-light-blue-500 border-opacity-75
          hover:bg-blue-50 hover:text-blue-500"
        >
          {Icon}
          {name}
        </li>
      ))}
    </ul>
  );
}

export default Category;

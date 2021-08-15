// local file with all our fake categories
import { category } from "../../constant/Category";

// looping and styling them here and import them in the Header comp. to keep the Header clean
function Category() {
  return (
    <ul className=" flex mx-auto overflow-scroll text-gray-200 max-w-4xl whitespace-nowrap scrollbar-hide mb-3  space-x-4 sm:justify-center xl:max-w-full ">
      {category.map(({ name, Icon }, _index) => (
        <li
          key={_index}
          className="cursor-pointer flex justify-center w-28 capitalize items-center py-1 px-3 
          rounded-lg text-gray-400 shadow-sm border-2 border-light-blue-500 border-opacity-75
          hover:bg-blue-50 hover:text-blue-500"
        >
          <span className="mr-1">{Icon}</span>
          <span className="text-sm uppercase">{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Category;

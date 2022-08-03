// local file with all our fake categories
import { category } from "../../constant/Category";

// looping and styling them here and import them in the Header comp. to keep the Header clean
function Category() {
  return (
    <ul className="container pt-6 flex mx-auto overflow-scroll list-none max-w-4xl whitespace-nowrap scrollbar-hide mb-3 text-center  space-x-4 sm:justify-center xl:max-w-full ">
      {category.map(({ name, Icon }, _index) => (
        <li
          key={_index}
          className="text-gray-500 text-center flex flex-col items-center space-y-1 py-2 px-3 rounded hover:bg-blue-50 hover:text-alpha cursor-pointer"
        >
          <span className="">{Icon}</span>
          <span className="capitalize">{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Category;

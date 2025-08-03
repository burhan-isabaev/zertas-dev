import SectionHeader from "../components/section-header";
import Button from "../components/button";
import { Link } from "react-router-dom";

const CatalogItem = ({ item }) => {
  return (
    <div className="border py-10 px-4 border-[#e6ba92] rounded-xl max-w-sm h-[750px]">
      <Link to={`/catalog/${item.id}`}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <img
              src={item.images[0]}
              alt={item.name}
              className="aspect-square object-cover w-full rounded-xl mx-auto"
            />
            <div className="mt-4 inset-0 flex items-end ">
              <div className="max-w-5xl space-y-6 mb-5 lg:mb-0 z-10">
                <SectionHeader text={item.category.name} />
                <h1 className="text-2xl lg:text-2xl font-bold">{item.title}</h1>
                <p className="lg:mb-4">{item.description.slice(0, 100)}...</p>
              </div>
            </div>
          </div>
          <Button text={"сделать заказ"} link="/" />
        </div>
      </Link>
    </div>
  );
};

export default CatalogItem;

import SectionHeader from "../components/section-header";
import Button from "../components/button";

const CatalogItem = ({ item }) => {
  return (
    <div className="border py-16 px-4 border-[#e6ba92] rounded-xl">
      <img
        src={item.images[0]}
        alt={item.name}
        className="aspect-square object-cover w-full lg:w-[300px] rounded-xl mx-auto"
      />
      <div className="mt-4 inset-0 flex items-end lg:items-center lg:px-20 ">
        <div className="max-w-5xl space-y-6 mb-5 lg:mb-0 z-10">
          <SectionHeader text={item.category.name} />
          <h1 className="text-2xl lg:text-6xl font-bold">{item.title}</h1>
          <p className="">{item.description.slice(0, 100)}...</p>
        </div>
      </div>
      <Button text={"сделать заказ"} link="/" />
    </div>
  );
};

export default CatalogItem;

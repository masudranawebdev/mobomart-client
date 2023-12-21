import { useAllMobilesQuery, useMobilesQuery } from "../../redux/api/mobileApi";
import { IoCartOutline, IoFilterOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  getUniqueBrands,
  getUniqueMemory,
  getUniqueOs,
  getUniqueProcessor,
  getUniqueStatus,
} from "../../utils/uniqueArr";
import { useState } from "react";
import { useDebounced } from "../../redux/hooks";
import { useSelector } from "react-redux";
import ProductNotFound from "../../components/product-not-found/ProductNotFound";
import Loader from "../../components/loader/Loader";
import PriceRangeFilter from "../../components/priceRange/PriceRangeFilter";
const Home = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedOs, setSelectedOs] = useState([]);
  const [selectedProcessors, setSelectedProcessors] = useState([]);
  const [selectedMemories, setSelectedMemories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200000);
  const query = {};
  query["status"] = selectedStatuses;
  query["os"] = selectedOs;
  query["processor"] = selectedProcessors;
  query["memory"] = selectedMemories;
  query["brand"] = selectedBrands;
  if (selectedSort) {
    query["sortBy"] = "price";
  }
  query["sortOrder"] = selectedSort;
  query["minPrice"] = minPrice;
  query["maxPrice"] = maxPrice;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data, isLoading, isFetching } = useMobilesQuery({ ...query });
  const { data: allData } = useAllMobilesQuery(undefined);
  const brands = getUniqueBrands(allData?.allMobiles?.data);
  const processors = getUniqueProcessor(allData?.allMobiles?.data);
  const memories = getUniqueMemory(allData?.allMobiles?.data);
  const oses = getUniqueOs(allData?.allMobiles?.data);
  const statuses = getUniqueStatus(allData?.allMobiles?.data);

  const handleCheckboxStatusChange = (value) => {
    const updatedStatuses = selectedStatuses.includes(value)
      ? selectedStatuses.filter((status) => status !== value)
      : [...selectedStatuses, value];
    setSelectedStatuses(updatedStatuses);
  };

  const handleCheckboxOsChange = (value) => {
    const updatedOs = selectedOs.includes(value)
      ? selectedOs.filter((os) => os !== value)
      : [...selectedOs, value];
    setSelectedOs(updatedOs);
  };

  const handleCheckboxProcessorChange = (value) => {
    const updatedProcessor = selectedProcessors.includes(value)
      ? selectedProcessors.filter((processor) => processor !== value)
      : [...selectedProcessors, value];
    setSelectedProcessors(updatedProcessor);
  };

  const handleCheckboxMemoryChange = (value) => {
    const updatedMemory = selectedMemories.includes(value)
      ? selectedMemories.filter((memory) => memory !== value)
      : [...selectedMemories, value];
    setSelectedMemories(updatedMemory);
  };

  const handleCheckboxBrandChange = (value) => {
    const updatedBrand = selectedBrands.includes(value)
      ? selectedBrands.filter((brand) => brand !== value)
      : [...selectedBrands, value];
    setSelectedBrands(updatedBrand);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  console.log({ minPrice, maxPrice });
  const handlePriceChange = (range) => {
    setMinPrice(range.min);
    setMaxPrice(range.max);
    // You can use the range values to filter your products
  };
  return (
    <div className="min-h-screen grid grid-cols-5 gap-5 container my-10">
      {/* left side */}
      <div className="md:col-span-2 lg:col-span-1 md:flex flex-col gap-y-3 hidden">
        {/* price range */}
        <PriceRangeFilter onChange={handlePriceChange} />
        {/* status */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">Availability</h3>
          <div className="mt-3">
            {statuses?.map((status) => (
              <div key={status.label} className="flex gap-x-1">
                <input
                  value={status.value}
                  type="checkbox"
                  className="text-xl"
                  checked={selectedStatuses.includes(status.value)}
                  onChange={() => handleCheckboxStatusChange(status.value)}
                />
                <span>{status.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* brands */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">By Brands</h3>
          <div className="mt-3">
            {brands?.map((brand) => (
              <div key={brand.value} className="flex gap-x-1">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.value)}
                  onChange={() => handleCheckboxBrandChange(brand.value)}
                />
                <span>{brand.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* mamory */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">Internal Storage</h3>
          <div className="mt-3">
            {memories?.map((memory) => (
              <div key={memory.value} className="flex gap-x-1">
                <input
                  type="checkbox"
                  checked={selectedMemories.includes(memory.value)}
                  onChange={() => handleCheckboxMemoryChange(memory.value)}
                />
                <span>{memory.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* os */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">Oparating System</h3>
          <div className="mt-3">
            {oses?.map((os) => (
              <div key={os.value} className="flex gap-x-1">
                <input
                  type="checkbox"
                  checked={selectedOs.includes(os.value)}
                  onChange={() => handleCheckboxOsChange(os.value)}
                />
                <span>{os.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* processor */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">Processor</h3>
          <div className="mt-3">
            {processors?.map((processor) => (
              <div key={processor.value} className="flex gap-x-1">
                <input
                  type="checkbox"
                  checked={selectedProcessors.includes(processor.value)}
                  onChange={() =>
                    handleCheckboxProcessorChange(processor.value)
                  }
                />
                <span>{processor.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* left side drawer for mobile devices */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 z-50 bg-white w-3/4 overflow-y-auto transition-transform duration-500 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ... your existing left side content ... */}
        <button
          className="text-4xl absolute right-2 top-2 items-end"
          onClick={toggleDrawer}
        >
          <IoMdClose className="p-1 bg-blue-gray-50 shadow rounded-full" />
        </button>
        {/* price range */}
        <PriceRangeFilter onChange={handlePriceChange} />
        {/* status */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">Availability</h3>
          <div className="mt-3">
            {statuses?.map((status) => (
              <div key={status.label} className="flex gap-x-1">
                <input
                  value={status.value}
                  type="checkbox"
                  className="text-xl"
                  checked={selectedStatuses.includes(status.value)}
                  onChange={() => handleCheckboxStatusChange(status.value)}
                />
                <span>{status.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* brands */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">By Brands</h3>
          <div className="mt-3">
            {brands?.map((brand) => (
              <div key={brand.value} className="flex gap-x-1">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.value)}
                  onChange={() => handleCheckboxBrandChange(brand.value)}
                />
                <span>{brand.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* mamory */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">Internal Storage</h3>
          <div className="mt-3">
            {memories?.map((memory) => (
              <div key={memory.value} className="flex gap-x-1">
                <input
                  type="checkbox"
                  checked={selectedMemories.includes(memory.value)}
                  onChange={() => handleCheckboxMemoryChange(memory.value)}
                />
                <span>{memory.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* os */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">Oparating System</h3>
          <div className="mt-3">
            {oses?.map((os) => (
              <div key={os.value} className="flex gap-x-1">
                <input
                  type="checkbox"
                  checked={selectedOs.includes(os.value)}
                  onChange={() => handleCheckboxOsChange(os.value)}
                />
                <span>{os.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* processor */}
        <div className="bg-[#F5F5F5] p-4 rounded-sm">
          <h3 className="text-xl font-semibold">Processor</h3>
          <div className="mt-3">
            {processors?.map((processor) => (
              <div key={processor.value} className="flex gap-x-1">
                <input
                  type="checkbox"
                  checked={selectedProcessors.includes(processor.value)}
                  onChange={() =>
                    handleCheckboxProcessorChange(processor.value)
                  }
                />
                <span>{processor.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="col-span-5 md:col-span-3 lg:col-span-4">
        <div className="bg-[#F5F5F5] mb-2 rounded-sm flex justify-between lg:px-10 items-center">
          <div className="flex md:hidden items-center gap-1 hover:bg-primaryColor">
            <button className="text-4xl" onClick={toggleDrawer}>
              <IoFilterOutline className="p-1 bg-" />
            </button>
            <p className="text-lg  font-semibold">Filter</p>
          </div>
          <p className="hidden md:block">
            Products ({data?.mobiles?.data?.length})
          </p>
          <div className="flex items-center flex-col md:flex-row">
            <label htmlFor="sort">Sort By:</label>
            <select
              name="price"
              id="sort"
              className="md:p-3 border"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="" disabled>
                Sort
              </option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <div>
            {data?.mobiles?.data?.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {data?.mobiles?.data?.map((mobile) => (
                  <div className="border shadow-md rounded" key={mobile.id}>
                    <div className="overflow-hidden group">
                      <img src={mobile?.thumbnail} alt={mobile?.title} />
                      <div className="translate-y-11 group-hover:translate-y-0 transition-all duration-500">
                        <div className="w-full h-full flex justify-center bg-white mx-auto">
                          <button className="text-black bg-white px-4 py-2 border hover:border-orange">
                            <IoCartOutline className="w-6 h-6" />
                          </button>
                          <button className="text-black bg-white px-4 py-2 border hover:border-orange">
                            <FaRegEye className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-5">
                      <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">
                        {mobile.title}
                      </h2>
                      <p>
                        <strong>Brand: </strong>
                        <span>{mobile.brand}</span>
                      </p>
                      <p className="text-orange font-bold">{mobile.price}৳</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ProductNotFound />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

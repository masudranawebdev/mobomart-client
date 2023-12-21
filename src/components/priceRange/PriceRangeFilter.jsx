import { useState } from 'react';
import Slider from 'react-slider';

const PriceRangeFilter = ({ onChange }) => {
  const [priceRange, setPriceRange] = useState([0, 200000]);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    onChange({ min: newRange[0], max: newRange[1] });
  };

  return (
    <div className="flex flex-col gap-5 items-center bg-[#F5F5F5] p-4 rounded-sm">
      <label>Price Range:</label>
      <Slider
        min={1}
        max={200000}
        step={1}
        value={priceRange}
        onChange={handlePriceChange}
        className="w-full"
      />
      <div className="flex space-x-5 mt-5">
        <span className='p-2 border-2 border-gray-800 px-3 rounded text-xl'>{priceRange[0]}</span>
        <span>-</span>
        <span className='p-2 border-2 border-gray-800 px-3 rounded text-xl'>{priceRange[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;

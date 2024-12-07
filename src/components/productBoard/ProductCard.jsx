import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src="./assets/products/shirt-2.png"
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">Green grandad Shirt</h3>
          <p className="mt-1 text-sm text-gray-500">Men's clothing</p>
        </div>
        <p className="text-sm font-medium text-gray-900">$35</p>
      </div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;

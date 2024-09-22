import { FoodCard } from "@/components/FoodCard";
import { Product } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responce = await axios.get(
          "https://world.openfoodfacts.org/products.json?page=1&page_size=15",
        );
        setProducts(responce.data.products);
        console.log(responce.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-32">
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <FoodCard
            key={product.id}
            name={product.product_name}
            category={product.categories}
            nutritionGrade={product.nutrition_grades}
            imageUrl={product.image_url}
          />
        ))}
    </div>
  );
};

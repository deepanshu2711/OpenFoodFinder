"use client";
import { FoodCard } from "@/components/FoodCard";
import { Product } from "@/types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ProductProps {
  filter: "A-Z" | "Z-A";
}

export const Products = ({ filter }: ProductProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProducts = async (page: number) => {
      try {
        setIsLoading(true);
        const responce = await axios.get(
          `https://world.openfoodfacts.org/products.json?page=${page}&page_size=15`,
        );
        setProducts((prevProducts) => [
          ...prevProducts,
          ...responce.data.products,
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCategoryProducts = async (
      page: number,
      categoryName: string,
    ) => {
      try {
        setIsLoading(true);
        const responce = await axios.get(
          `https://world.openfoodfacts.org/category/${categoryName}.json?page=${page}&page_size=15`,
        );
        setProducts((prevProducts) => [
          ...prevProducts,
          ...responce.data.products,
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (
      !searchParams.get("category") ||
      searchParams.get("category") === "All"
    ) {
      fetchProducts(page);
    } else {
      fetchCategoryProducts(page, searchParams.get("category") as string);
    }
  }, [page, searchParams]);

  useEffect(() => {
    setPage(1);
    setProducts([]);
  }, [searchParams]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    const allProducts = [...products];
    if (filter === "A-Z") {
      allProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
    } else if (filter === "Z-A") {
      allProducts.sort((a, b) => b.product_name.localeCompare(a.product_name));
    }

    setProducts(allProducts);
  }, [filter]);

  console.log("products selected sort:", filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-32">
      {products &&
        products.length > 0 &&
        products.map((product, idx) => (
          <FoodCard
            key={idx}
            name={product.product_name}
            category={product.categories}
            nutritionGrade={product.nutrition_grades}
            imageUrl={product.image_url}
          />
        ))}
      <div ref={observerRef} className="h-10" />
      {isLoading && (
        <div
          className={`flex flex-col p-5 ${page === 1 && "h-[80vh]"} items-center justify-center`}
        >
          <AiOutlineLoading3Quarters className=" h-8 w-8 animate-spin" />
        </div>
      )}
    </div>
  );
};

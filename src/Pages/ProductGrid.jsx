import React from "react";
import { Card } from "flowbite-react";

const ProductGrid = () => {
  const products = [
    {
      title: "Surface Laptop 5",
      description:
        "Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform.",
      image: "/assets/surface-laptop.jpg",
      link: "#",
    },
    {
      title: "Xbox Series S",
      description: "Next-gen performance in the smallest Xbox ever.",
      image: "/assets/xbox-series-s.jpg",
      link: "#",
    },
    {
      title: "Microsoft 365",
      description:
        "Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription.",
      image: "/assets/microsoft-365.jpg",
      link: "#",
    },
    {
      title: "Windows 11",
      description:
        "The most secure Windows ever built with new and improved ways for you to work, play and create.",
      image: "/assets/windows-11.jpg",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <a
              href={product.link}
              className="text-blue-600 hover:underline font-semibold"
            >
              Learn more
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

import type {RestaurantType} from "@/types";

import Link from "next/link";

import api from "@/api";

import Restaurant from "../components/Restaurant";

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurants`,
    description: restaurant.description,
  };
}

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const restaurant: RestaurantType = await api.fetch(id);

  return (
    <section className="grid max-w-full place-content-center ">
      <Restaurant
        key={restaurant.id}
        address={restaurant.address}
        description={restaurant.description}
        id={restaurant.id}
        image={restaurant.image}
        name={restaurant.name}
        ratings={restaurant.ratings}
        score={restaurant.score}
      />
      <Link
        key={restaurant.id}
        className="mt-3 w-fit rounded-md border-2 border-white px-4 transition duration-150 ease-out hover:border-yellow-500 hover:text-yellow-400 hover:ease-in"
        href="/"
      >
        Volver
      </Link>
    </section>
  );
}

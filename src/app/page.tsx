import type {RestaurantType} from "@/types";

import Link from "next/link";

import api from "@/api";

import Restaurant from "./components/Restaurant";

export default async function HomePage() {
  const restaurants: RestaurantType[] = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
          <article key={restaurant.id} className="flex flex-col">
            <Restaurant
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
              className="w-fit pt-4 transition duration-300 ease-in-out hover:text-yellow-500"
              href={`/${restaurant.id}`}
            >
              {restaurant.name}
            </Link>
          </article>
        );
      })}
    </section>
  );
}

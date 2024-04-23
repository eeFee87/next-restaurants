import type {RestaurantType} from "@/types";

import Link from "next/link";

import api from "@/api";

import Restaurant from "./components/Restaurant";
import SearchBox from "./components/SearchBox";

export default async function HomePage({searchParams}: {searchParams: {q: string | undefined}}) {
  let restaurants: RestaurantType[] | undefined;

  if (searchParams.q !== undefined) {
    restaurants = await api.search(searchParams.q);
  } else {
    // Manejar el caso cuando searchParams.q es undefined
    restaurants = await api.list();
  }

  return (
    <section>
      <SearchBox />
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
                //Evita que el componente Link haga prefetch por defecto en segundo plano de la ruta dinamica y la cachee de manera estática
                prefetch={false}
              >
                {restaurant.name}
              </Link>
            </article>
          );
        })}
      </section>
    </section>
  );
}

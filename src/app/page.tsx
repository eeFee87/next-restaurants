import type {RestaurantType} from "@/api";

import api from "@/api";

import Restaurant from "./components/Restaurant";

export default async function HomePage() {
  const restaurants: RestaurantType[] = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
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
        );
      })}
    </section>
  );
}

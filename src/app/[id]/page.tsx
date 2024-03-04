import type {RestaurantType} from "@/api";

import api from "@/api";

import Restaurant from "../components/Restaurant";

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
    </section>
  );
}

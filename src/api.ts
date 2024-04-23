import type {RestaurantType} from "./types";

const api = {
  list: async (): Promise<RestaurantType[]> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/1I68xwA0YQuZF0IRA_COt-PJr2bXs5kM8IFEe5UIpZgE/pub?output=csv",
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));
    const restaurants: RestaurantType[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    return restaurants;
  },

  fetch: async (id: RestaurantType["id"]): Promise<RestaurantType> => {
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/1I68xwA0YQuZF0IRA_COt-PJr2bXs5kM8IFEe5UIpZgE/pub?output=csv",
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));

    const restaurants: RestaurantType[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    const restaurant = restaurants.find((restaurant) => restaurant.id === id);

    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    return restaurant;
  },
  search: async (query: string): Promise<RestaurantType[]> => {
    // Obtenemos los restaurantes
    const results = await api.list().then((restaurants) =>
      // Los filtramos por nombre
      restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );

    // Los retornamos
    return results;
  },
};

export default api;

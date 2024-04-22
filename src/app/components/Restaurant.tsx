import type {RestaurantType} from "@/types"; // Assuming Restaurant interface is named export

function Restaurant({id, name, image, score, ratings, description}: RestaurantType) {
  return (
    <article key={id}>
      <img alt={name} className="mb-3 h-[300px] w-full rounded-lg object-cover" src={image} />

      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{name}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{score}</span>
          <span className="font-normal opacity-75">({ratings})</span>
        </small>
      </h2>
      <p className="opacity-90">{description}</p>
    </article>
  );
}

export default Restaurant;

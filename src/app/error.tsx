"use client";

function ErrorPage({error}: {error: Error}) {
  console.error(error);

  return <div>Something went wrong, try again!</div>;
}

export default ErrorPage;

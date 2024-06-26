import Image from "next/image";
import HomeContainer from "@/containers/home";

import Movies from "@/mocks/movies.json";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomePage({ params }: any) {
  await delay(3000);

  let selectedCategory;

  if (params?.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <>
      <HomeContainer
        selectedCategory={{
          id: params.category?.[0] ?? "",
          movies: selectedCategory ? Movies.results.slice(0, 7) : [],
        }}
      />
    </>
  );
}

export default HomePage;

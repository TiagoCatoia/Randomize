import { Cards } from "./Card";

interface DataPlants {
  default_image?: {
    medium_url: string;
  };
  common_name: string;
  description: string;
}

interface DataSpace {
  explanation: string;
  url: string;
}

interface DataRecipe {
  recipes: {
    title: string;
    image: string;
    instructions: string;
  }[];
}

type CardAreaProps = {
  data: DataPlants | DataSpace | DataRecipe | undefined;
  page: string;
};

export const CardArea = ({ data, page }: CardAreaProps) => {
  return (
    <div className="cards-area-container">
      <Cards.Root page={page}>
        {data && "default_image" in data && (
          <>
            <Cards.Image
              page={page}
              url={
                data.default_image
                  ? data.default_image.medium_url
                  : "/src/assets/image-not-found.jpg"
              }
            />
            <Cards.Text
              page={page}
              title={data.common_name}
              description={data.description}
            />
          </>
        )}
        {data && "explanation" in data && (
          <>
            <Cards.Image page={page} url={data.url} />
            <Cards.Text page={page} description={data.explanation} />
          </>
        )}
        {data && "recipes" in data && (
          <>
            <Cards.Image page={page} url={data.recipes[0].image} />
            <Cards.Text
              page={page}
              title={data.recipes[0].title}
              description={data.recipes[0].instructions.replace(/<[^>]*>/g, "")}
            />
          </>
        )}
      </Cards.Root>
    </div>
  );
};

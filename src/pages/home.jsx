import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import ArtistLarge from "../components/artist-large";
import ArtistMedium from "../components/artist-medium";
import ArtistSmall from "../components/artist-small";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;

const normalizePage = (page) => {
  const normalized = {
    "@attr": page["@attr"],
    artist: page.artist.slice(-20),
  };
  return normalized;
};

const fetchArtists = async ({ pageParam = 0 }) => {
  const response = await fetch(`${API_URL}&page=${pageParam + 1}&limit=20`);
  const json = await response.json();

  return normalizePage(json.artists);
};

function Home() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["top-artists"], fetchArtists, {
    getNextPageParam: (lastPage, pages) => Number(lastPage["@attr"].page),
  });

  const { ref, inView } = useInView({});

  const artists = [...(data?.pages ?? [])];

  useEffect(() => {
    if (!isFetchingNextPage && !isFetching && inView) {
      fetchNextPage();
    }
  }, [isFetchingNextPage, isFetching, inView]);

  return (
    <main className="dark:bg-gray-800">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-2 gap-2">
        {artists.map((page, pageIndex) => {
          return page.artist.map((artist, artistIndex) => {
            if (pageIndex === 0 && artistIndex === 0) {
              return (
                <ArtistLarge
                  key={artistIndex}
                  artist={artist}
                  index={artistIndex + 20 * pageIndex}
                />
              );
            }
            if (pageIndex === 0 && artistIndex < 3) {
              return <ArtistMedium key={artistIndex} artist={artist} index={artistIndex} />;
            }
            return (
              <ArtistSmall
              key={artistIndex + (20 * pageIndex)}
                artist={artist}
                index={artistIndex + 20 * pageIndex}
              />
            );
          });
        })}
      </div>
      <div ref={ref} />
    </main>
  );
}

export default Home;

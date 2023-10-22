"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const { hostname } = parsedURL;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon") ||
      hostname.endsWith("amazon") ||
      hostname.includes("shopee")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);
    if (!isValidLink) return alert("Please enter a valid Amazon link");
    try {
      setIsLoading(true);

      //Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleChange}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {isLoading ? "Searching..." : "Search "}
      </button>
    </form>
  );
};

export default SearchBar;

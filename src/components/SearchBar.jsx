"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { words } from '../lib/dataSearchDummy';

// Remember to import words or whatever you're using to store all the words the user can search for

const Searchbar = () => {
  const [activeSearch, setActiveSearch] = useState([]);
  const category = [
    "a",
    "about",
    "all",
    "also",
    "and",
    "as",
    "at",
    "be",
    "because",
    "but",
    "by",
    "can",
    "come",
    "could",
    "day",
    "do",
    "even",
    "find",
    "first",
    "for",
    "from",
    "get",
    "give",
    "go",
    "have",
    "he",
    "her",
    "here",
    "him",
    "his",
    "how",
    "I",
    "if",
    "in",
    "into",
    "it",
    "its",
    "just",
    "know",
    "like",
    "look",
    "make",
    "man",
    "many",
    "me",
    "more",
    "my",
    "new",
    "no",
    "not",
    "now",
    "of",
    "on",
    "one",
    "only",
    "or",
    "other",
    "our",
    "out",
    "people",
    "say",
    "see",
    "she",
    "so",
    "some",
    "take",
    "tell",
    "than",
    "that",
    "the",
    "their",
    "them",
    "then",
    "there",
    "these",
    "they",
    "thing",
    "think",
    "this",
    "those",
    "time",
    "to",
    "two",
    "up",
    "use",
    "very",
    "want",
    "way",
    "we",
    "well",
    "what",
    "when",
    "which",
    "who",
    "will",
    "with",
    "would",
    "year",
    "you",
    "your",
  ];

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      category.filter((w) => w.includes(e.target.value)).slice(0, 4)
    );
  };

  return (
    <form className="ml-[140px] mt-1 relative">
      <div className="flex relative items-center">
        <input
          type="search"
          placeholder="Cari sesuatu di sini"
          className="w-[500px] px-4 py-1 rounded-full shadow-md shadow-lime-300 border border-lime-500 text-center focus:outline-none focus:ring-0"
          style={{
            WebkitAppearance: "none", // Menonaktifkan tampilan default pada Webkit (Chrome/Safari)
            appearance: "none", // Menonaktifkan tampilan default pada browser modern
          }}
          onChange={(e) => handleSearch(e)}
        />
        <button className="absolute right-3 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-10 p-4 bg-lime-600 text-white w-[80%] rounded-xl border-lime-200 border left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((s) => (
            <span>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;

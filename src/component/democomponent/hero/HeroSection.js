import React from "react";
import SearchInput from "../form/SearchInput";
import CustomButton from "../form/CustomButton";
import { Link } from "react-router-dom";

export default function HeroSection({ title, subtitle, searchBarComponent }) {
  const handleSearchChange = (value) => {
    console.log("Search value:", value);
    // Perform any necessary actions based on the search value
  };
  return (
    <div>
      <section className="mt-5 px-5 text-dark-100 border">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold mb-3 leadi text-violet-400 sm:text-5xl">
            {title}
          </h1>
          <h1 className="text-1xl font-bold mb-3 sm:text-2xl">{subtitle}</h1>

          {searchBarComponent && (
            <SearchInput
              placeholder="Search..."
              darkMode={true}
              onChange={handleSearchChange}
            />
          )}
          <br />
          <CustomButton
            type="button"
            color="bg-violet-400"
            buttonText="Log In"
          />

          <Link
            to="/create-new-quotation"
            className="text-1xl mt-2 font-bold underline"
          >
            Or Create a New Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}

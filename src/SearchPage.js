import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar } from "@mui/material";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);

  //  const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          ></img>
        </Link>

        <div className="searchPage__headerBody">
          <div className="searchPage__headerTop">
            <Search hideButtons />
            <div className="searchPage__haederRight">
              <a>
                <SettingsIcon fontSize="large" />
              </a>
              <a>
                <AppsIcon fontSize="large" />
              </a>
              <a>
                <Avatar
                  src="https://lh3.google.com/u/0/ogw/AGvuzYbt-tQHZ_2sbKmuR-oUBbGlJSFnmBqNc0PMT4Cw=s32-c-mo"
                  fontSize="large"
                />
              </a>
            </div>
          </div>

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <Link className="active" to="/all">
                All
              </Link>

              <Link to="/images">Images</Link>

              <Link to="/images">Videos</Link>

              <Link to="/shopping">Shopping</Link>

              <Link to="/maps">Maps</Link>

              <Link to="/price">Price</Link>

              <Link to="/more">News</Link>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/allfilters">
                  All filters <ArrowDropDownIcon />
                </Link>
                |
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/safesearch">SafeSearch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items?.map((item) => (
            <div className="searchPage__result" key={item.cacheId}>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink} ▽
              </a>

              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

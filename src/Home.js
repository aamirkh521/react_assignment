import React, { useState, useEffect } from "react";
import { API } from "./backend";
import Base from "./Base";
import Search from "./Search";
import Card from "./Card";
import {getProducts } from "./helper/apicall";
import "./App.css";
import FilterLaunch from "./FilterLaunch";
import Land from "./Land";

export default function Home() {
  // console.log('backend is',API)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [url, setUrl] = useState(API);
  const [error, setError] = useState(false);

  const [flag, setFlag] = useState(1);
/*
  const loadAllProduct = () => {
    getData()
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
  };
*/
  const loadProducts = (url) => {
    getProducts(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("products...", data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  };

  const showFilters = () => {
    let html = `<h2>Filters</h2>`;

    for (let filter in filters) {
        if(filter) {
 html += `<div><strong>${filter}</strong>: ${filters[filter]}</div>`;
        }
     
    }
    
   return <div  dangerouslySetInnerHTML={{ __html: html }}></div>
  };

  useEffect(() => {
    // loadAllProduct()
    let url = API;
    for (let filter in filters) {
      url += `&${filter}=${filters[filter]}`;
    }
    console.log(url);
    loadProducts(url);
  }, [filters]);

  return (
    <Base>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12 center-block">
          <Search setFilters={setFilters} filters={filters} />
          <FilterLaunch setFilters={setFilters} filters={filters} />
          <Land />
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12 row">
          <div className="w-100">{showFilters()}</div>
          {products.length > 0
            ? products.map((product, index) => {
                return (
                  <div key={index} className="col-lg-3 col-md-3 mb-1 col-sm-1">
                    <Card product={product} />
                  </div>
                );
              })
            : "No products found."}
        </div>
      </div>
    </Base>
  );
}

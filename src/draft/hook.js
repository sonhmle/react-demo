import { useEffect, useState } from "react";

function Form({ country }) {
  const [cities, setCities] = useState(null);
  // This Effect fetches cities for a country
  useEffect(() => {
    fetch(`/api/cities?country=${country}`)
      .then((response) => response.json())
      .then((json) => {
        setCities(json);
      });
  }, [country]);

  const [city, setCity] = useState(null);
  const [areas, setAreas] = useState(null);
  // This Effect fetches areas for the selected city
  useEffect(() => {
    if (city) {
      fetch(`/api/areas?city=${city}`)
        .then((response) => response.json())
        .then((json) => {
          setAreas(json);
        });
    }
  }, [city]);

  // ...

  // const cities = useData(`/api/cities?country=${country}`);
  // const [city, setCity] = useState(null);
  // const areas = useData(city ? `/api/areas?city=${city}` : null);
  // ...
}

function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    }
  }, [url]);
  return data;
}

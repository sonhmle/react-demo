import { useEffect, useState } from 'react';

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

function AddressForm() {
  const [countries, setCountries] = useState(null);
  // fetch countries
  useEffect(() => {
    fetch(`/api/countries`)
      .then((response) => response.json())
      .then((json) => {
        setCountries(json);
      });
  }, []);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [states, setStates] = useState(null);
  // fetch states for the selected country
  useEffect(() => {
    if (selectedCountry) {
      fetch(`/api/states?country=${selectedCountry}`)
        .then((response) => response.json())
        .then((json) => {
          setAreas(json);
        });
    }
  }, [selectedCountry]);

  // render
}

function AddressForm({ country }) {
  const countries = useData(`/api/countries`);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const states = useData(
    selectedCountry ? `/api/states?country=${selectedCountry}` : null
  );

  // render
}

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count changes');
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const useSomething = (initialState, onSubmit) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    // some magic to set values
  };

  const handleSubmit = (event) => {
    // some magic to call onSubmit after validation
  };

  return { values, handleChange, handleSubmit };
};

const MyForm = () => {
  const { values, handleChange, handleSubmit } = useSomething(
    { name: '', email: '' },
    () => {
      console.log('Form submitted:');
    }
  );

  // render
};

/**
 *
 * This Contex just declear for testing purpse || Nothing else
 */

import { createContext, useContext, useEffect, useState } from "react";

const PlacesContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const usePlaces = () => useContext(PlacesContex);

// eslint-disable-next-line react/prop-types
const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState();
  useEffect(() => {
    fetch("https://bd-travel-server-f-rahim.vercel.app/places/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaces(data);
      });
  }, []);

  const placeInfo = { places };
  return (
    <PlacesContex.Provider value={placeInfo}>{children}</PlacesContex.Provider>
  );
};

export default PlacesProvider;

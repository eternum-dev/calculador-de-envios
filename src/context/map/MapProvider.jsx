import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MapContext } from "./MapContext";
import { getLocal } from "../../helpers/getLocal";
import { AuthContext } from "../auth/AuthContext";
import { useLocation } from "react-router-dom";

export const MapProvider = ({ children }) => {
  const [localCoordinates, setLocalCoordinates] = useState(null);
  const [addressCoordinates, setAddressCoordinates] = useState(null);
  const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState(null);
  const [nameLocal, setNameLocal] = useState("seleccionar");
  const [repartidor, setRepartidor] = useState("");
  const [repartidorSelected, setRepartidorSelected] = useState("seleccionar");
  const [branches, setBranches] = useState(null);
  const [destination, setDestination] = useState("");
  const [renderRoute, setRenderRoute] = useState(false);
  const [dataRoute, setDataRoute] = useState([]);
  const [local, setLocal] = useState(null);
  const [errorDB, setErrorDB] = useState(null);

  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!user) return;
    const fetchLocal = async () => {
      try {
        const localData = await getLocal();
        if (!localData) {
          setTimeout(() => fetchLocal(), 1000);
        }
        setLocal(localData);
        if (localData.locales[0].coordenadasLocal) {
          setLocalCoordinates(localData?.locales[0].coordenadasLocal);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchLocal();
  }, [user]);

  useEffect(() => {
    setErrorDB(null);
  }, [pathname]);

  useEffect(() => {
    if (local) {
      setRepartidor(local.repartidores);
      setBranches(local.locales);
    }
  }, [local]);

  const contextValue = {
    localCoordinates,
    setLocalCoordinates,
    addressCoordinates,
    setAddressCoordinates,
    deliveryPhoneNumber,
    setDeliveryPhoneNumber,
    repartidor,
    branches,
    setBranches,
    nameLocal,
    setNameLocal,
    setRepartidor,
    destination,
    setDestination,
    renderRoute,
    setRenderRoute,
    dataRoute,
    setDataRoute,
    local,
    setLocal,
    errorDB,
    setErrorDB,
    repartidorSelected,
    setRepartidorSelected,
  };

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};

MapProvider.propTypes = {
  children: PropTypes.any,
};

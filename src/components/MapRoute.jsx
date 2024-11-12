import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { calculateValueRute } from "../helpers";
import { MapContext } from "../context";
import "./resultRoute.css";
import { mapRoute } from "../data";
import { SendWhatsAppIcon } from "./icons";
import { generateWhatsAppLink } from "../helpers/generateWhatsAppLink";
import { PrintComponent } from "./PrintComponent";
import { DisplayInput } from "./DisplayInput";
import { InputField } from "./InputField";

export const MapRoute = ({ children }) => {
  const [orderStatus, setOrderStatus] = useState("pagado");
  const [costToPay, setCostToPay] = useState(0);
  const [showDetailsDelivery, setShowDetailsDelivery] = useState(false);

  let orderDistanceKm, deliveryDurationMin, destinationAddress, shippingCost;

  const { dataRoute, repartidorSelected, addressCoordinates } =
    useContext(MapContext);
  const { loading, paragraph } = mapRoute;
  const { lat, lng } = addressCoordinates;

  function handleSendMessage() {
    const { telefono, nombre } = repartidorSelected;
    const location = `https://maps.google.com/?q=${lat},${lng}`;
    const status = orderStatus;

    const whatsappLink = generateWhatsAppLink(
      nombre,
      telefono,
      location,
      status,
      shippingCost
    );
    window.open(whatsappLink, "_blank");
  }

  /**
   * Sends a WhatsApp message using the `generateWhatsAppLink` helper.
   *
   * @param {Event} event - The form submit event.
   */
  const sendWhatappMessage = async (event) => {
    event.preventDefault();
    handleSendMessage();
  };
  console.log(showDetailsDelivery);
  try {
    if (dataRoute.length > 0) {
      const { legs } = dataRoute[0];
      const { distance, duration, end_address } = legs[0];

      orderDistanceKm = distance;
      deliveryDurationMin = duration;

      destinationAddress = end_address;
    }
  } catch (error) {
    console.log(error);
  }

  if (orderDistanceKm) {
    shippingCost = calculateValueRute(
      orderDistanceKm.value,
      repartidorSelected
    );
  }

  return (
    <div className="result-route">
      {!dataRoute.length > 0 ? (
        <h3>{loading}</h3>
      ) : (
        <div className="result-route__wrapper">
          <h3 className="result-route__h3">
            {paragraph.direction}
            <span className="result-route__span">{destinationAddress}</span>
          </h3>

          <p className="result-route__p">
            {paragraph.time}
            <span className="result-route__span">
              ${deliveryDurationMin.text}
            </span>
          </p>

          <p className="result-route__p">
            {paragraph.distance}
            <span className="result-route__span">${orderDistanceKm.text}</span>
          </p>
          <h4 className="result-route__h4">
            {paragraph.value}
            <span className="result-route__span">${shippingCost}</span>
          </h4>
          <div className="result-route__order-status">
            <label htmlFor="orderStatus">
              <select
                name="orderStatus"
                onChange={(event) => {
                  setOrderStatus(event.target.value);
                }}
                value={orderStatus}
              >
                <option value="pagado">{"pagado"}</option>
                <option value="por pagar">{"por pagar"}</option>
              </select>
            </label>
            {orderStatus === "por pagar" && (
              <DisplayInput value={costToPay} setInputValue={setCostToPay} />
            )}
          </div>
          <div className="result-route__details">
            <label htmlFor="details">
              <input
                className="result-route__checkbox"
                type="checkbox"
                name="details"
                value={showDetailsDelivery}
                onChange={() => setShowDetailsDelivery((prev) => !prev)}
              />
              añadir detalles adicionales
            </label>
            {showDetailsDelivery && (
              <InputField placeholder="casa esquina, color verde fuera hay dos vehiculos" />
            )}
          </div>
        </div>
      )}

      <div className="button-reset">{children}</div>
      <SendWhatsAppIcon onClick={sendWhatappMessage} />
      <PrintComponent
        data={{
          orderId: "123",
          nombreRepatidor: repartidorSelected.nombre,
          direccion: destinationAddress,
          detalles: "Pedido especial",
          status: orderStatus,
          cost: costToPay,
        }}
      />
    </div>
  );
};

MapRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

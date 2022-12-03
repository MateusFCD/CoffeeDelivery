import { HeaderContainer } from "./styles";
import logoCoffeDelivery from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="Logo Coffe Delivery" />

      <div>
        <span>
          <MapPin size={22} weight="fill" />
          <h3>Brasília, DF</h3>
        </span>
        <nav>
          <NavLink to="/cart" title="Cart">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  );
}

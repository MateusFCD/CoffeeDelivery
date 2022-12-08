import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import logoCoffeDelivery from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffeDelivery} alt="Logo Coffe Delivery" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Brasília, DF
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}

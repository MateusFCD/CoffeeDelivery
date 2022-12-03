import {
  Box,
  CoffeesContainer,
  Container,
  IconCart,
  IconCoffee,
  IconPackage,
  IconsSubTitles,
  IconTimer,
  Titles,
} from "./styles";
import coffeImg from "../../assets/Imagem.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
  return (
    <>
      <Container>
        <Titles>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <IconsSubTitles>
            <Box>
              <IconCart>
                <ShoppingCart size={40} weight="fill" /> Compra simples e segura
              </IconCart>
              <IconTimer>
                <Timer size={40} weight="fill" /> Entrega rápida e rastreada
              </IconTimer>
            </Box>
            <Box>
              <IconPackage>
                <Package size={40} weight="fill" /> Embalagem mantém o café
                intacto
              </IconPackage>
              <IconCoffee>
                <Coffee size={40} weight="fill" /> O café chega fresquinho até
                você
              </IconCoffee>
            </Box>
          </IconsSubTitles>
        </Titles>
        <div>
          <img src={coffeImg} alt="" />
        </div>
      </Container>

      <h2>Nossos cafés</h2>
      <CoffeesContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeesContainer>
    </>
  );
}

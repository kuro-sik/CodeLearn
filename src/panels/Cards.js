import { Panel, Tabbar, PanelHeader, Text, Group } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import Tile from "../Components/Tile/Tile";

// import style from "../styles/stylesPanels/Cards/style.css";

export const Cards = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Карточки</PanelHeader>
      <Text style={{ paddingLeft: "18px" }}>Выбери язык программирования</Text>

      <Tile title={"html"} text={"Структура веб страницы"} />
      <Tile title={"css"} text={"Стили и оформление"} />
      <Tile title={"js"} text={"DOM и интерактивность"} />

      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};
Cards.propTypes = {
  id: PropTypes.string.isRequired,
};

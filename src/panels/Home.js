import { Panel, PanelHeader, Tabbar } from "@vkontakte/vkui";
// import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import PropTypes from "prop-types";
import MainHeader from "../Components/MainHeader/MainHeader";
import MyTabbar from "../Components/Tabbar/MyTabbar";

export const Home = ({ id }) => {
  // const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <MainHeader day={10} place={5} />
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";

export const Tests = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Тесты</PanelHeader>
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

Tests.propTypes = {
  id: PropTypes.string.isRequired,
};

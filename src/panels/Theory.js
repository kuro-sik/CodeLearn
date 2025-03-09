import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";

export const Theory = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Теория</PanelHeader>
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

Theory.propTypes = {
  id: PropTypes.string.isRequired,
};

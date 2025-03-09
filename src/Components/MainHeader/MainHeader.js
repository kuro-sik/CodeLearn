import PropTypes from "prop-types";
import style from "./MainHeader.module.css";
import { Icon24CupOutline, Icon24Fire } from "@vkontakte/icons";
import { Group } from "@vkontakte/vkui";

const MainHeader = ({ day, place }) => {
  return (
    <Group className={style.root}>
      <div className={style.days}>
        <Icon24Fire />
        {day} дней
      </div>
      <div className={style.place}>
        <Icon24CupOutline />
        {place} место
      </div>
    </Group>
  );
};

export default MainHeader;
MainHeader.propTypes = {
  day: PropTypes.number.isRequired, // Ожидаем число, обязательный пропс
  place: PropTypes.number.isRequired, // Ожидаем число, обязательный пропс
};

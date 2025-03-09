import PropTypes from "prop-types";

import style from "./tile.module.css";

const Tile = ({ title, text }) => {
  return (
    <div className={style.root}>
      <div className={style.title}>{title}</div>
      <div className={style.text}>{text}</div>
    </div>
  );
};

export default Tile;
Tile.propTypes = {
  title: PropTypes.string.isRequired, // Ожидаем число, обязательный пропс
  text: PropTypes.string.isRequired, // Ожидаем число, обязательный пропс
};

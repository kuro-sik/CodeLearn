import {
  Icon28HomeOutline,
  Icon28PenStackOutline,
  Icon28Cards2Outline,
  Icon28BookSpreadOutline,
} from "@vkontakte/icons";

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { TabbarItem } from "@vkontakte/vkui";

import { useState, useEffect } from "react";

import styles from "./MyTabbar.module.css";

const MyTabbar = () => {
  const [indicator, setIndicator] = useState("one");
  const routeNavigator = useRouteNavigator();

  return (
    <>
      <TabbarItem
        label="Гланая"
        selected={indicator == "one"}
        className={styles.root}
        onClick={() => routeNavigator.go("/")}
      >
        <Icon28HomeOutline fill="currentColor" />
      </TabbarItem>

      <TabbarItem
        label="Тесты"
        selected={indicator == "/two"}
        className={styles.root}
        onClick={() => routeNavigator.go("/tests")}
      >
        <Icon28PenStackOutline fill="currentColor" />
      </TabbarItem>

      <TabbarItem
        label="Карточки"
        selected={indicator == "/three"}
        className={styles.root}
        onClick={() => routeNavigator.go("/cards")}
      >
        <Icon28Cards2Outline fill="currentColor" />
      </TabbarItem>

      <TabbarItem
        label="Теория"
        selected={indicator == "/four"}
        className={styles.root}
        onClick={() => routeNavigator.go("/theory")}
      >
        <Icon28BookSpreadOutline fill="currentColor" />
      </TabbarItem>
    </>
  );
};

export default MyTabbar;

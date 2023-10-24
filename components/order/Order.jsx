import React from "react";
import { View, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import CardStatus from "../common/cardstatus/CardStatus";
import styles from "./order.style";

const Pending = () => (
  <View style={styles.scene}>
    <CardStatus status="1" />
    <CardStatus status="1" />
  </View>
);
const Confirmed = () => (
  <View style={styles.scene}>
    <CardStatus status="2" />
  </View>
);
const Delivered = () => (
  <View style={styles.scene}>
    <CardStatus status="3" />
  </View>
);
const Cancelled = () => (
  <View style={styles.scene}>
    <CardStatus status="4" />
  </View>
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={styles.tabBar}
  />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "1", title: "Pending" },
      { key: "2", title: "Confirmed" },
      { key: "3", title: "Delivered" },
      { key: "4", title: "Cancelled" },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          1: Pending,
          2: Confirmed,
          3: Delivered,
          4: Cancelled,
        })}
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.container}
      />
    );
  }
}

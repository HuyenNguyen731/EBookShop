import React from "react";
import { View, Dimensions,  } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import CardStatus from "../common/cardstatus/CardStatus";
import styles from "./order.style";

const FirstRoute = () => (
  <View style={styles.scene}>
    <CardStatus status="delivered"/>
    <CardStatus status="delivered"/>
  </View>
);
const SecondRoute = () => (
  <View style={styles.scene}><CardStatus status="processing" /></View>
);
const ThirdRoute = () => (
  <View style={styles.scene}><CardStatus status="cancelled" /></View>
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
      { key: "first", title: "Delivered" },
      { key: "second", title: "Processing" },
      { key: "third", title: "Cancelled" },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.container}
      />
    );
  }
}

import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import CardStatus from "../common/cardstatus/CardStatus";
import styles from "./order.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

const fetchDataForStatus = async (status, token) => {
  try {
    const response = await axios.get(`${API_URL}/api/orders/status/${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data?.data;
  } catch (error) {
    console.error(`Error when calling API for status ${status}: `, error);
    return [];
  }
};

const TabContent = ({ status }) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("TOKEN")
      .then((TOKEN) => {
        if (TOKEN) {
          fetchDataForStatus(status, TOKEN).then((statusData) => {
            setData(statusData);
          });
          setToken(TOKEN);
        } else {
          console.error("Token does not exist");
        }
      })
      .catch((error) => {
        console.error("Error when getting token from AsyncStorage: ", error);
      });
  }, [status]);

  const onCancelOrder = () => {
    try {
      fetchDataForStatus(status, token).then((statusData) => {
        setData(statusData);
      });
    } catch (error) {
      console.error(`Error when calling API for status ${status}: `, error);
      return [];
    }
  };

  return (
    <View style={styles.scene}>
      {data?.map((item, index) => (
        <CardStatus
          key={index}
          status={status}
          item={item}
          onCancelOrder={onCancelOrder}
        />
      ))}
    </View>
  );
};

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
          1: () => <TabContent status="1" />,
          2: () => <TabContent status="2" />,
          3: () => <TabContent status="3" />,
          4: () => <TabContent status="4" />,
        })}
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.container}
      />
    );
  }
}

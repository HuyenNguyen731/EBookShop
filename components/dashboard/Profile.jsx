import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./profile.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";
import { images } from "../../constants";

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Hàm để gọi API và cập nhật dữ liệu
    const fetchUserData = async () => {
      try {
        const TOKEN = await AsyncStorage.getItem("TOKEN");
        if (TOKEN) {
          const response = await axios.get(
            `${API_URL}/api/User/getuserlogged`,
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            }
          );
          setData(response.data); // Lưu dữ liệu từ API vào state
        } else {
          console.error("Token does not exist");
        }
      } catch (error) {
        console.error("Error when fetching user data: ", error);
      }
    };

    fetchUserData(); // Gọi hàm fetchUserData khi thành phần được tạo
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={{ width: 150, height: 150, margin: "auto" }}>
          <Image style={styles.img} source={images.avatar} />
        </View>
        <Text style={[{ textAlign: "center", fontWeight: 600, fontSize: 20 }]}>
          {data?.data?.fullName}
        </Text>
        <Text style={[{ textAlign: "center", fontSize: 18, marginTop: 10 }]}>
          {data?.data?.email}
        </Text>
        <View>
          <Text style={[{ fontSize: 16, marginTop: 20 }]}>
            Username: {data?.data?.username}
          </Text>
          <Text style={[{ fontSize: 16, marginTop: 8 }]}>
            Address: {data?.data?.address}
          </Text>
          <Text style={[{ fontSize: 16, marginTop: 8 }]}>
            Phome number: {data?.data?.phone}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

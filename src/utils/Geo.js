
import { PermissionsAndroid, Platform } from "react-native";
import { init, Geolocation } from "react-native-amap-geolocation";
import axios from "axios";
class Geo {
  async initGeo() {
    if (Platform.OS === "android") {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
    }
    await init({
      // 来自于 高德地图中的第二个应用 android 应用key
      ios: "e8b092f4b23cef186bd1c4fdd975bf38",
      android: "e8b092f4b23cef186bd1c4fdd975bf38"
    });
    return Promise.resolve();
  }
  async getCurrentPosition() {
    return new Promise((resolve, reject) => {
      console.log("开始定位");
      Geolocation.getCurrentPosition(({ coords }) => {
        resolve(coords);
      }, reject);
    })
  }
  async getCityByLocation() {
    await init({
      // 来自于 高德地图中的第二个应用 android 应用key
      ios: "e8b092f4b23cef186bd1c4fdd975bf38",
      android: "e8b092f4b23cef186bd1c4fdd975bf38"
    });
    const { longitude, latitude } = await this.getCurrentPosition();
    const res = await axios.get("https://restapi.amap.com/v3/geocode/regeo", {
      // key  高德地图中第一个应用的key
      params: { location: `${longitude},${latitude}`, key: "83e9dd6dfc3ad5925fc228c14eb3b4d6", }
    });
    return Promise.resolve(res.data);
  }
}


export default new Geo();
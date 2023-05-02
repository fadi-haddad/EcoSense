import { View, StyleSheet } from "react-native";
import AQIChart from "../../components/AQIChart";
import AQIGauge from "../../components/AQIGauge";
import HighLow from "../../components/high_low";
import { AppBar } from "@react-native-material/core";

const AQIhistory =()=>{
    return(
        <View style={styles.container}>
            <AppBar title="Air Quality History" />
            <View style={styles.content}>
                <AQIGauge />
                <AQIChart />
                <HighLow lowestReading={10} highestReading={50} lowestTimestamp="2022-06-01 10:00:00" highestTimestamp="2022-06-01 11:00:00"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:34
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AQIhistory;
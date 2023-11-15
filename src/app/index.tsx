import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import RaceListItem from "../components/RaceListItem";
import dayjs from "dayjs";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query MyQuery($season: String, $type: String) {
    races(season: $season, type: $type) {
      response {
        date
        id
        season
        competition {
          location {
            country
          }
          name
        }
      }
    }
  }
`;

export default function HomeScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { season: "2023", type: "RACE" },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error fetching races: {error.message}</Text>;
  }

  console.log(data);

  const races = [...data.races.response];

  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => (
          <RaceListItem item={item} round={sortedRaces.length - index} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
});

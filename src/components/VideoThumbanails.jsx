import { TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { currentVisibleIndex } from "../features/visibleVideoSlice";
import VideoPlayer from "./VideoPlayer";

const LeftContent = ({ props, uri }) => (
  <Avatar.Image
    {...props}
    source={{
      uri: uri,
    }}
  />
);

export default function VideoThumbanails({
  thumbnailURI,
  userURI,
  title,
  time,
  views,
  channelName,
  index,
}) {
  const currentVisibleVideo = useSelector(currentVisibleIndex);
  return (
    <TouchableOpacity>
      <Card style={{ backgroundColor: null }}>
        {index === currentVisibleIndex ? (
          <VideoPlayer />
        ) : (
          <Card.Cover
            style={{ borderRadius: 0, height: 300 }}
            source={{
              uri: thumbnailURI,
            }}
          />
        )}

        <Card.Title
          style={{ gap: 1 }}
          title={<Text style={{ color: "white", fontSize: 18 }}>{title}</Text>}
          subtitle={
            <View style={{ flexDirection: "row", gap: 15 }}>
              <Text style={{ color: "#9CA3AF", fontSize: 15 }}>
                {channelName}
              </Text>
              <Text style={{ color: "#9CA3AF", fontSize: 15 }}>{views}</Text>
              <Text style={{ color: "#9CA3AF", fontSize: 15 }}>{time}</Text>
            </View>
          }
          left={(props) => <LeftContent props={props} uri={userURI} />}
        />
      </Card>
    </TouchableOpacity>
  );
}

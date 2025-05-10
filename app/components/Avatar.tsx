import React from "react";
import FastImage from "react-native-fast-image";
import { StyleSheet, View, TouchableOpacity } from "react-native";

interface AvatarProps {
  uri: string | null;
  size?: number;
  placeholder?: string;
  style?: object;
  onPress?: () => void;
  disabled?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  uri,
  size = 100,
  placeholder = "https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc",
  style,
  onPress,
  disabled = false,
}) => {
  const [imageUri, setImageUri] = React.useState(uri);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, { width: size, height: size }, style]}
    >
      <FastImage
        style={[
          styles.image,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
        source={{
          uri: uri || placeholder,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
        onError={() => {
          console.warn("Failed to load image:", imageUri);
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  image: {
    borderRadius: 50,
  },
});

export default Avatar;

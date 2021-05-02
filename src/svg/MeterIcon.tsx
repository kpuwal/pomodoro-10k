import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { View, Text } from "react-native";
import { color } from "react-native-reanimated";

interface MeterIconProps {
  colorBrain: string,
  colorActive: string,
};

function SvgComponent({ colorBrain, colorActive }: MeterIconProps) {
  return (
    <>
    <Svg
      height={68}
      viewBox="-50 1 511 511.999"
      width={68}
    >
      <Path
        d="M235.543 7.969c-93.379 0-169.285 75.676-169.285 169.281v25.16a102.341 102.341 0 01-29.973 72.367l-23.308 23.305c-9.872 9.871-2.88 26.75 11.082 26.75h33.52c4.792 0 8.679 3.887 8.679 8.684v28.754c0 42.972 35.16 78.132 78.133 78.132 16.754 0 30.382 13.575 30.382 30.383v24.957c0 5.094 4.13 9.227 9.223 9.227h144.191c5.168 0 9.36-4.192 9.36-9.36v-64.015c0-25.094 8.363-49.801 24.969-68.617 26.328-29.836 42.312-69.016 42.312-111.934V177.25c0-93.492-75.793-169.281-169.285-169.281zm0 0"
        fill="#e4eaf8"
      />
      <Path
        d="M42.52 298.082l23.308-23.305a102.341 102.341 0 0029.973-72.367v-25.16c0-88.617 68.031-161.152 154.515-168.633a171.008 171.008 0 00-14.773-.648c-93.379 0-169.281 75.676-169.281 169.281v25.16a102.335 102.335 0 01-29.977 72.367L12.98 298.082c-9.87 9.871-2.882 26.75 11.079 26.75h29.543c-13.961 0-20.954-16.879-11.082-26.75zm0 0M204.316 495.742v-24.957c0-16.808-13.629-30.383-30.382-30.383-42.973 0-78.133-35.16-78.133-78.132v-28.754c0-4.797-3.887-8.684-8.68-8.684H57.578a8.682 8.682 0 018.684 8.684v28.754c0 42.972 35.156 78.132 78.129 78.132 16.754 0 30.382 13.575 30.382 30.383v24.957c0 5.094 4.133 9.227 9.227 9.227h29.54c-5.095 0-9.224-4.133-9.224-9.227zm0 0"
        fill="#d8dce5"
      />
      <Path
        d="M362.031 176.219c.711-69.399-55.59-126.727-124.992-127.215-69.953-.496-126.812 56.062-126.812 125.902 0 22.946 6.14 44.461 16.867 62.989a57.016 57.016 0 0049.242 28.28H295.93a57.013 57.013 0 0049.242-28.277c.984-2.316 16.492-25.582 16.86-61.68zm0 0"
        // fill="#8ac2ff"
        fill={colorBrain}
      />
      <Path
        d="M164.984 237.895c-10.726-18.528-16.863-40.043-16.863-62.989 0-63.078 46.383-115.316 106.902-124.476a125.174 125.174 0 00-17.98-1.426c-69.953-.496-126.813 56.062-126.813 125.902 0 22.946 6.137 44.461 16.864 62.989a57.018 57.018 0 0049.246 28.28h37.89a57.018 57.018 0 01-49.246-28.28zm0 0"
        // fill="#6fb1ff"
      />
      <Path
        d="M246.121 157.203c-9.781-5.644-22.289-2.293-27.934 7.488-5.648 9.782-2.296 22.29 7.485 27.934 9.781 5.648 22.289 2.297 27.937-7.484 5.645-9.782 2.293-22.29-7.488-27.938zm0 0"
        // fill="#ff6b6b"
        fill={colorActive}
      />
      <Path
        d="M246.145 164.684a20.409 20.409 0 013.722-4.692 20.298 20.298 0 00-3.742-2.793c-9.781-5.648-22.29-2.297-27.934 7.485-5.648 9.78-2.296 22.289 7.485 27.937 7.996 4.613 17.808 3.211 24.21-2.797-6.788-6.347-8.59-16.742-3.741-25.14zm0 0"
        // fill="#ee5253"
        fill={colorActive}
      />
      <Path d="M141.8 79.77c-25.413 25.234-39.41 58.855-39.41 94.668 0 23.468 6.184 46.55 17.891 66.769 11.516 19.738 32.867 32 55.723 32h42.293a7.5 7.5 0 100-15h-42.293c-15.012 0-29.16-6.91-38.469-18.379l5.02-2.894c3.586-2.075 4.816-6.66 2.746-10.246a7.499 7.499 0 00-10.246-2.747l-5.36 3.094a118.342 118.342 0 01-12.058-45.097h6.164c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5h-6.164c.984-15.883 5.09-31.157 12.027-45.118l5.39 3.114a7.505 7.505 0 0010.247-2.746 7.503 7.503 0 00-2.746-10.247l-5.371-3.101a120.143 120.143 0 0133.02-33.02l3.1 5.371a7.496 7.496 0 0010.247 2.747 7.502 7.502 0 002.746-10.247l-3.113-5.39c13.964-6.942 29.238-11.043 45.117-12.031v6.168c0 4.14 3.355 7.5 7.5 7.5s7.5-3.36 7.5-7.5v-6.165c15.847.993 31.11 5.133 45.07 12.11l-3.066 5.308a7.5 7.5 0 002.746 10.247 7.5 7.5 0 0010.246-2.747l3.035-5.257a120.98 120.98 0 0132.961 32.976l-5.25 3.031a7.498 7.498 0 00-2.742 10.247c2.066 3.585 6.652 4.816 10.246 2.742l5.297-3.059c6.988 13.977 11.129 29.238 12.125 45.067H347.8a7.497 7.497 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5h6.156c-.996 15.703-5.094 31.07-12.05 45.097l-5.36-3.094a7.495 7.495 0 00-10.246 2.747 7.494 7.494 0 002.742 10.242l5.016 2.898c-9.313 11.477-23.457 18.379-38.461 18.379H253.3c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h42.297c22.828 0 44.156-12.234 55.683-31.937.02-.028.035-.06.051-.086 20.215-34.918 17.875-69.032 17.875-66.746-.004-117.813-143.43-178.055-227.406-94.668zm0 0" />
      <Path d="M249.54 150.234c-13.349-7.707-30.477-3.117-38.18 10.23-7.708 13.349-3.118 30.477 10.23 38.184a27.767 27.767 0 0013.926 3.739c7.242 0 14.34-2.813 19.617-7.989l38.363 22.149a7.5 7.5 0 107.5-12.988l-38.367-22.153c3.043-11.847-1.992-24.765-13.09-31.172zm-2.759 30.68c-3.57 6.184-11.508 8.313-17.691 4.742s-8.313-11.508-4.742-17.691c2.398-4.149 6.761-6.473 11.238-6.473 2.195 0 4.418.559 6.453 1.73 6.184 3.575 8.313 11.508 4.742 17.692zm0 0M215.11 241.414h40.91a7.5 7.5 0 007.5-7.5c0-4.144-3.356-7.5-7.5-7.5h-40.91a7.5 7.5 0 100 15zm0 0" />
      <Path d="M404.492 204.906c4.14 0 7.5-3.36 7.5-7.5v-20.62C411.992 79.304 332.687 0 235.207 0S58.422 79.305 58.422 176.781v25.16c0 25.336-9.863 49.153-27.777 67.063L7.34 292.313c-14.606 14.601-4.274 39.55 16.383 39.55h33.52c.652 0 1.183.532 1.183 1.184V361.8c0 47.219 38.414 85.633 85.629 85.633 12.617 0 22.882 10.265 22.882 22.882v24.957c0 9.223 7.504 16.727 16.727 16.727h144.188c9.296 0 16.859-7.566 16.859-16.86v-64.015c0-24.172 8.203-46.781 23.094-63.656 28.496-32.285 44.187-73.801 44.187-116.895v-18.168c0-4.144-3.355-7.5-7.5-7.5a7.5 7.5 0 00-7.5 7.5v18.168c0 39.434-14.36 77.426-40.433 106.969-17.313 19.617-26.848 45.75-26.848 73.582v64.016c0 1.023-.836 1.859-1.86 1.859H183.665a1.727 1.727 0 01-1.727-1.727v-24.957c0-20.89-16.992-37.882-37.882-37.882-38.946 0-70.63-31.688-70.63-70.633v-28.754c0-8.922-7.26-16.184-16.183-16.184h-33.52c-7.273 0-10.921-8.797-5.773-13.945l23.305-23.305C62 258.867 73.426 231.285 73.426 201.945v-25.164C73.426 87.574 146 15 235.207 15s161.781 72.578 161.781 161.785v20.621a7.505 7.505 0 007.504 7.5zm0 0" />
    </Svg>
    <View style={{ position: 'absolute' }} >
     <Text style={{
       fontSize: 13,
       fontWeight: "bold",
       color: colorActive,
       top: "90%",
       bottom: 0, 
       left: -22,
       right: 0
      }}
    >Slow</Text>
    </View>
    <View style={{ position: 'absolute' }} >
     <Text style={{fontSize: 11, color: "#EFF0F4", top: "90%", bottom: 0, left: 70, right: 0}}>Fast</Text>
    </View>
    <View style={{ position: 'absolute' }} >
     <Text style={{fontSize: 11, color: "#EFF0F4", top: -22, bottom: 0, left: 18, right: 0}}>Medium</Text>
    </View>
    </>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent

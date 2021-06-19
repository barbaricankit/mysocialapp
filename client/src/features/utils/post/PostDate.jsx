import { Text } from "@chakra-ui/layout";
import { useTheme } from "../../../theme-context/theme.context";
import moment from "moment";
moment.locale();
moment.updateLocale("en", {
  relativeTime: {
    past: "%s",
    s: "just now",
    ss: "%ds",
    m: "1min",
    mm: "%dmin",
    h: "1h",
    hh: "%dh",
  },
});
const PostDate = ({ post }) => {
  const { btnColor } = useTheme();
  const postDate = moment(post.createdAt).startOf("minute").fromNow();
  const date = postDate.includes("day")
    ? moment(post.createdAt).format("ll").split(",")[0]
    : postDate;

  return (
    <Text
      ml={1}
      fontWeight='100'
      color={btnColor}
      style={{ whiteSpace: "nowrap" }}
      fontSize='sm'
      mr={2}>
      {date}
    </Text>
  );
};
export default PostDate;

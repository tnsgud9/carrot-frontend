import Box from "@mui/system/Box";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Favorite

type TradeEventType = {
  chat?: number;
  interest?: number;
};
const TradeEvent = (props: TradeEventType) => {
  const { chat, interest } = props;
  return (
    <Box display="flex" alignContent="center" justifyContent="right">
      {chat && (
        <>
          <ChatIcon />
          {chat}
        </>
      )}
      {interest && (
        <>
          <FavoriteIcon />
          {interest}
        </>
      )}
    </Box>
  );
};
export default TradeEvent;

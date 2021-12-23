import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TradeAppBar from "./components/TradeAppBar";

const TradeDetail = () => {
  return (
    <>
      <Box paddingTop="20px">
        <Grid container>
          <Grid item xs={1}>
            <Avatar src="이미지 주소" sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">아이디</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">지역</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h6" color="primary">
                  36.6C
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={4}>
                <SentimentSatisfiedIcon fontSize="large" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Typography variant="h4">스투시 맨투맨</Typography>
        <Box>
          물건팝니다.
          <br />
          아주 싸게 팝니다.
        </Box>
      </Box>
      <TradeAppBar price={0} isInterest={false} isAdjustable={false} />
    </>
  );
};
export default TradeDetail;

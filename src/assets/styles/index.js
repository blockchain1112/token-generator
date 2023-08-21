import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  base: {
    // paddingBottom: theme.spacing(5),
    minHeight: "100vh",
    position: "relative",
    background:
      "linear-gradient(89.53deg, #1F071E 0.94%, #351E4A 53.66%, #170517 99.59%)",
  },
  appbar: {
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), linear-gradient(170.05deg, rgba(144, 44, 237, 0.63) 15.16%, rgba(246, 157, 77, 0.63) 259.73%), #000000 !important",
    padding: theme.spacing(3, 0),
    zIndex: 10,
    borderRadius: "9px",
    boxShadow: "0px 0px 54px rgba(0, 0, 0, 0.75) important",
    "& .toolbar": {
      "& > div": {
        display: "flex",
        justifyContent: "space-between",
      },
      "& .amount-text": {
        background: "#220f24",
        padding: "3px 10px",
        borderRadius: "5px",
      },
      "& .defi": {
        background: "#2D1C35",
        backgroundColor: "#2D1C35",
        boxShadow:
          "0px 4px 4px rgba(0, 0, 0, 0.2), 0px 10px 94px rgba(147, 52, 207, 0.2)",
        borderRadius: "9px",
        // border: "1px solid",
        borderImageSlice: "1",
        // borderImage: "linear-gradient(90.06deg, rgba(132, 34, 228, 0.3) 1.08%, rgba(251, 174, 60, 0.3) 99.95%)",
        // backgroundOrigin: "border-box",
        padding: theme.spacing(1),
        // backgroundClip: "content-box, border-box",
        "&:after": {
          borderRadius: "9px",
        },
        alignItems: "center",
      },
      "& .header-button": {
        color: "white",
        "&.active": {
          color: "#b102ff",
        },
      },
      "& .beta": {
        // background: "#2D1C35",
        // background: "linear-gradient(270.28deg, #8F13FF 0.24%, #F6A552 99.76%)",
        background: "linear-gradient(89.95deg, #9429F5 0.01%, #F6A552 99.93%)",
        boxshadow: "0px 4px 20px rgba(228, 61, 255, 0.25)",
        borderRadius: "3px",
        padding: "0px 5px",
        // transform: "rotate(-180deg)",
      },

      "& .connect-button": {
        background: "#2D1C35",
        // border: "1px solid",
        // borderImageSource: "linear-gradient(90.06deg, #8422E4 1.08%, #FBAE3C 99.95%)",
        borderRadius: "5px",
      },
    },
  },
  footer: {
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), linear-gradient(170.05deg, rgba(144, 44, 237, 0.63) 15.16%, rgba(246, 157, 77, 0.63) 259.73%), #000000 !important",
    borderRadius: "9px",
    boxShadow: "0px 0px 54px rgba(0, 0, 0, 0.75) important",
    alignItems: "center",
    position: "absolute",
    "& .logo": {
      height: "15px",
    },
  },
  home: {
    paddingTop: theme.spacing(10),
  },
}));

export default useStyles;

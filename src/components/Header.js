import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Logo from "../assets/img/logo.png";
import BoomLogo from "../assets/img/boomlogo.png";
import Boom2 from "../assets/img/Boom2.png";
import Token from "../assets/img/Token.png";
import useStyles from "../assets/styles";

import Cwallet from "./Cwallet";
import { useWeb3React } from "@web3-react/core";
import { Typography } from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";
import { useLocation, useNavigate } from "react-router-dom";
import Web3 from "web3";
import Config from "../config/app";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMediaQuery("(max-width:600px)");
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [tokenBalance, setTokenBalance] = useState(0);
  // eslint-disable-next-line
  const {
    activate,
    active,
    account,
    deactivate,
    connector,
    error,
    setError,
    library,
  } = useWeb3React();

  const onConnectWallet = async () => {
    setIsOpenDialog(true);
  };
  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar className="toolbar">
        <Container>
          <Stack direction="row" spacing={3}>
            <Stack direction="row" spacing={1}>
              <Typography variant="h5">Token Generator</Typography>
            </Stack>
          </Stack>
          {(() => {
            if (isMobile) {
              <>
                {active ? (
                  <Button
                    variant="contained"
                    onClick={onConnectWallet}
                    className="connect-button"
                  >
                    {account.substring(0, 3)} ...{" "}
                    {account.substring(account.length - 3)}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={onConnectWallet}
                    className="connect-button"
                  >
                    Connect
                  </Button>
                )}
              </>;
            } else {
              return (
                <Stack direction="row" spacing={1} className="header-buttons">
                  {active ? (
                    <Button
                      variant="contained"
                      onClick={onConnectWallet}
                      className="connect-button"
                    >
                      {account.substring(0, 3)} ...{" "}
                      {account.substring(account.length - 3)}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={onConnectWallet}
                      className="connect-button"
                    >
                      Connect
                    </Button>
                  )}
                </Stack>
              );
            }
          })()}
          <Cwallet isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

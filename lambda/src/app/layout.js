"use client"
import "./globals.css";
import Header from "@/components/Header";
import MobileFooter from "@/components/MobileFooter";
import MobileHeader from "@/components/MobileHeader";
import Grid from "@mui/material/Grid";
import AuthWrapper from "@/components/AuthWrapper";
import { Provider } from "react-redux";
import store from "../store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.png"/>
        <title>lambda</title>
      </head>
      <body>
        <Provider store={store}>
        <AuthWrapper>
        <MobileHeader />
        <Grid container height={"100vh"} className="medium">
          <Header />
          {children}
        </Grid>
        <MobileFooter />
        </AuthWrapper>
        </Provider>
      </body>
    </html>
  );
}

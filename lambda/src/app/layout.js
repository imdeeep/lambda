import LoadingWrapper from "@/components/LoadingWrapper";
import "./globals.css";
import Header from "@/components/Header";
import MobileFooter from "@/components/MobileFooter";
import MobileHeader from "@/components/MobileHeader";
import Grid from "@mui/material/Grid";
import AuthWrapper from "@/components/AuthWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.png"/>
        <title>lambda</title>
      </head>
      <body>
        <AuthWrapper>
          <LoadingWrapper>
        <MobileHeader />
        <Grid container height={"100vh"} className="medium">
          <Header />
          {children}
        </Grid>
        <MobileFooter />
        </LoadingWrapper>
        </AuthWrapper>
      </body>
    </html>
  );
}

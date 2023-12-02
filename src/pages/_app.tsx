import { type AppType } from "next/app";

import { api } from "aoc/utils/api";

import "aoc/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);

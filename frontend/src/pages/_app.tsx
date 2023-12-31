import "@/styles/globals.css";
import type { AppPropsWithLayout } from "next/app";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Layout from "@/layout/Layout";

import React, { Dispatch, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { PolorProps } from "@/components/type";

export const AppContext = React.createContext(
  {} as {
    id: number;
    setId: Dispatch<React.SetStateAction<number>>;
    date: dayjs.Dayjs;
    setDate: Dispatch<React.SetStateAction<Dayjs>>;
    polors: PolorProps[];
    setPolors: Dispatch<React.SetStateAction<PolorProps[]>>;
  }
);

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [id, setId] = useState(1);
  const [date, setDate] = useState(dayjs());
  const [polors, setPolors] = useState([] as PolorProps[]);
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <AppContext.Provider
      value={{ id, setId, date, setDate, polors, setPolors }}
    >
      <Layout>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Component {...pageProps} />
        </LocalizationProvider>
      </Layout>
    </AppContext.Provider>
  );
};
export default App;

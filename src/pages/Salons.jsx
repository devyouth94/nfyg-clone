import React from "react";
import Layout from "components/common/Layout";
import Header from "components/common/Header";
import Advertisement from "components/feature/advertisement/Advertisement";
import Info from "components/feature/info/Info";
import Introduce from "components/feature/introduce/Introduce";
import UpcomingList from "components/feature/upcomingList/UpcomingList";
import ProceedingList from "components/feature/proceedingList/ProceedingList";
import Footer from "components/feature/footer/Footer";

const Salons = () => {
  return (
    <Layout>
      <Header />

      <Advertisement />

      <Info />

      <Introduce />

      <UpcomingList />

      <ProceedingList />

      <Footer />
    </Layout>
  );
};

export default Salons;

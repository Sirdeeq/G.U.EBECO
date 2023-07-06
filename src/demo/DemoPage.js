import React from "react";
import HeroInput from "../component/democomponent/hero/HeroSection";
import SearchInput from "../component/democomponent/form/SearchInput";
import Container from "../component/Container";
import { Col, Row } from "reactstrap";
import Sidebar from "../component/sidebar/Sidebar";

const DemoPage = () => {
  return (
    <div>
      <Container>
        <HeroInput
          title="G.U.EBECO"
          subtitle="INDUSTRIES LTD"
          searchBarComponent={SearchInput}
        />
      </Container>
    </div>
  );
};

export default DemoPage;

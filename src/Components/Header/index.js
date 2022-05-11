import React from "react";
import { HeaderCustomize, Img } from "./style";
import Images from "../../Assets";
const Header = () => {
  return (
    <HeaderCustomize src={Images.screenshot}>
      <Img src={Images.screenshot} />
    </HeaderCustomize>
  );
};

export default Header;

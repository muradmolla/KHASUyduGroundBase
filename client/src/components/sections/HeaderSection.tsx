import LastGps from "../LastGps";

const HeaderSection = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img src="logo.png" alt="logo" width="63" height="70" /> KHAS UYDU
        </div>
        <LastGps />
      </div>
    );
};

export default HeaderSection;
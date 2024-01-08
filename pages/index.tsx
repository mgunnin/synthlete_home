import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #161616; 
  }
`;

  <GlobalStyle />
const VectorIcon = styled.img`
  position: relative;
  width: 23.3px;
  height: 25px;
  object-fit: cover;
`;
const LogoLacraLabsMark = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logomark = styled.div`
  position: absolute;
  height: 78.13%;
  width: 12.01%;
  top: 12.5%;
  right: 85.41%;
  bottom: 9.38%;
  left: 2.58%;
  filter: drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))
    drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06));
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LogoSynthlete = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  text-transform: uppercase;
  font-weight: 700;
  font-family: inherit;
  background: radial-gradient(50% 50% at 50% 50%, #6d3da9, #ac6aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Logotype = styled.div`
  position: absolute;
  height: 50%;
  width: 77.32%;
  top: 25%;
  right: 3.61%;
  bottom: 25%;
  left: 19.07%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const LogoWrap = styled.div`
  position: relative;
  width: 194px;
  height: 32px;
`;
const Logo = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PlaceholderIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
`;
const Buttonsbutton = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const ChevronDownIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const DropdownHeaderNavigationTri = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Navigation1 = styled.div`
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  text-align: left;
  font-size: 16px;
  font-family: Inter;
`;
const Content = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`;
const TextPadding = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 2px;
`;
const Buttonsbutton4 = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  gap: 6px;
`;
const Buttonsbutton5 = styled.div`
  border-radius: 8px;
  background-color: #7e56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #7e56d9;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  gap: 6px;
  color: #fff;
`;
const NavigationActions = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  text-align: left;
  font-size: 16px;
  color: #cecfd2;
  font-family: Inter;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
`;
const Header = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DropdownHeaderNavigation = styled.div`
  align-self: stretch;
  position: relative;
  background-color: #161b26;
  height: 80px;
  z-index: 1;
`;
const Message = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const Badge = styled.div`
  border-radius: 1000px;
  border: 1.5px solid #b692f6;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 10px;
  mix-blend-mode: normal;
`;
const ArrowRightIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Content2 = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  text-align: left;
`;
const BadgeGroup = styled.div`
  border-radius: 1000px;
  background-color: #0c111d;
  border: 1.5px solid #b692f6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 10px 4px 4px;
  gap: 12px;
`;
const UnleashThePower = styled.span``;
const AiAthletes = styled.span`
  color: #ac6aff;
`;
const Heading = styled.b`
  align-self: stretch;
  position: relative;
  font-size: 60px;
  letter-spacing: -0.02em;
  line-height: 72px;
  font-family: "Suisse Intl";
  color: #ededed;
`;
const HeadingAndBadge = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const SupportingText = styled.div`
  width: 100%;
  position: relative;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: #f5f5f6;
  display: inline-block;
  max-width: 768px;
`;
const HeadingAndSupportingText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  max-width: 1024px;
`;
const PlayCircleIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Text7 = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 600;
`;
const PlaceholderIcon10 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Buttonsbutton6 = styled.div`
  border-radius: 8px;
  background-color: #161b26;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #333741;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 22px;
  gap: 10px;
`;
const Buttonsbutton7 = styled.div`
  border-radius: 8px;
  background-color: #7e56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #7e56d9;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 22px;
  gap: 10px;
  color: #fff;
`;
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  text-align: left;
  font-size: 18px;
  color: #cecfd2;
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
`;
const Container1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
`;
const BackgroundPatternIcon = styled.img`
  position: relative;
  width: 1440px;
  height: 64px;
  object-fit: cover;
`;
const Section = styled.div`
  align-self: stretch;
  background-color: #161b26;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 96px 0px 0px;
`;
const ShadowOverlayPlayer = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  height: 116px;
`;
const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Background = styled.div`
  position: absolute;
  width: calc(100% - 28px);
  top: 4px;
  right: 0px;
  left: 28px;
  border-radius: 4px;
  background-color: #fff;
  height: 8px;
  opacity: 0.3;
`;
const BufferingProgress = styled.div`
  position: absolute;
  width: 16%;
  top: 0px;
  right: 84%;
  left: 0%;
  border-radius: 4px;
  background-color: #fff;
  height: 8px;
  opacity: 0.5;
`;
const Buffering = styled.div`
  position: absolute;
  width: calc(100% - 28px);
  top: 4px;
  right: 0px;
  left: 28px;
  height: 8px;
`;
const ProgressLine = styled.div`
  position: absolute;
  top: 4px;
  left: 28px;
  border-radius: 4px;
  background-color: #fff;
  width: 8px;
  height: 8px;
`;
const PlayIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 16px;
  height: 16px;
  object-fit: cover;
`;
const Content4 = styled.div`
  align-self: stretch;
  position: relative;
  height: 20px;
`;
const TimestampStart = styled.div`
  position: relative;
  line-height: 18px;
  font-weight: 600;
`;
const Timestamps = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const VideoProgress = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  right: 20px;
  bottom: 8px;
  left: 12px;
  border-radius: 8px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Badge1 = styled.div`
  border-radius: 1000px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #fff;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 10px;
`;
const Text10 = styled.div`
  position: relative;
  font-size: 36px;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 600;
  font-family: "Suisse Intl";
  text-align: left;
`;
const TextAndBadge = styled.div`
  position: absolute;
  top: calc(50% - 44px);
  left: 32px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  text-align: center;
  font-size: 14px;
`;
const PlayButtonIcon = styled.img`
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  border-radius: 1000px;
  width: 80px;
  height: 80px;
  object-fit: cover;
  display: none;
`;
const VideoPlayer = styled.div`
  position: relative;
  border-radius: 8px;
  width: 916px;
  height: 516px;
  overflow: hidden;
  flex-shrink: 0;
  background-image: url("/video-player@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Content3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
`;
const Section1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 96px;
  text-align: left;
  font-size: 12px;
  color: #fff;
`;
const HeaderSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
  font-size: 14px;
  color: #d6bbfb;
  font-family: Inter;
`;
const HeroHeaderSection = styled.div`
  background-color: #0c111d;
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 24.5px;
  font-family: Aquire;
`;
const Heading1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 600;
`;
const SupportingText1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 30px;
  font-family: Inter;
  color: #94969c;
`;
const HeadingAndSupportingText1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  max-width: 768px;
`;
const Number1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 72px;
  font-weight: 600;
`;
const Text11 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  font-family: Inter;
`;
const NumberAndText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;
const Buttonsbutton8 = styled.div`
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: left;
  font-size: 16px;
  color: #cecfd2;
  font-family: Inter;
`;
const MetricItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  min-width: 240px;
`;
const Content6 = styled.div`
  align-self: stretch;
  border-radius: 16px;
  background-color: #161b26;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 64px;
  gap: 32px;
`;
const Container4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
  font-size: 60px;
`;
const MetricsSection = styled.div`
  background-color: #0c111d;
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 0px;
  box-sizing: border-box;
  gap: 64px;
`;
const FeaturedIcon = styled.img`
  position: relative;
  border-radius: 1000px;
  width: 56px;
  height: 56px;
  object-fit: cover;
`;
const HeadingAndIcon = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
const SupportingText2 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  font-family: Inter;
`;
const HeadingAndSupportingText2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  max-width: 360px;
`;
const FeaturedIcon1 = styled.img`
  position: relative;
  border-radius: 10px;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const Text17 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 30px;
  font-weight: 600;
`;
const SupportingText3 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #94969c;
`;
const TextAndSupportingText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
const Buttonsbutton11 = styled.div`
  overflow: hidden;
  display: none;
`;
const FeatureText = styled.div`
  flex: 1;
  background-color: #161b26;
  height: 314px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  box-sizing: border-box;
  gap: 24px;
  min-width: 280px;
`;
const Buttonsbutton13 = styled.div`
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  color: #cecfd2;
`;
const Content7 = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  font-size: 20px;
  font-family: Inter;
`;
const Container5 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  gap: 64px;
  max-width: 1280px;
`;
const FeaturesSection = styled.div`
  background-color: #0c111d;
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 96px 0px;
  box-sizing: border-box;
  text-align: left;
`;
const Subheading = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.03em;
  line-height: 18px;
  font-weight: 500;
`;
const Heading3 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 36px;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 600;
  font-family: "Suisse Intl";
  color: #f5f5f6;
`;
const EnvisionAFuture = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
`;
const WhereEachAi = styled.p`
  margin: 0;
`;
const SupportingText7 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 30px;
  font-family: Inter;
`;
const HeadingAndSupportingText3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  max-width: 768px;
`;
const Content12 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SupportingText8 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #cecfd2;
`;
const FeatureText4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  min-width: 240px;
`;
const Content13 = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
`;
const ShadowIcon = styled.img`
  position: absolute;
  height: 1.09%;
  width: 101.69%;
  top: 98.68%;
  right: -0.03%;
  bottom: 0.22%;
  left: -1.67%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MacbookPro16 = styled.img`
  position: absolute;
  height: 99.42%;
  width: 98.14%;
  top: 0%;
  right: 0.92%;
  bottom: 0.58%;
  left: 0.94%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const CameraIcon = styled.img`
  position: absolute;
  height: 0.8%;
  width: 0.47%;
  top: 1.67%;
  right: 49.43%;
  bottom: 97.53%;
  left: 50.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const LogoIcon = styled.img`
  position: absolute;
  height: 1.27%;
  width: 5.51%;
  top: 91.73%;
  right: 46.91%;
  bottom: 7%;
  left: 47.58%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ScreenMockupReplaceFill = styled.img`
  position: absolute;
  height: 86.47%;
  width: 80.92%;
  top: 3.1%;
  right: 9.13%;
  bottom: 10.43%;
  left: 9.95%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MacbookProMockup = styled.div`
  position: absolute;
  top: 56px;
  left: 40px;
  width: 768px;
  height: 448.5px;
  overflow: hidden;
`;
const MockupWrap = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 24px;
  width: 768px;
  overflow: hidden;
`;
const HandDrawnArrowIcon = styled.img`
  position: absolute;
  top: -140.6px;
  left: 112.9px;
  width: 282.6px;
  height: 243.9px;
  object-fit: contain;
`;
const Content14 = styled.div`
  flex: 1;
  position: relative;
  height: 560px;
`;
const Container7 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  gap: 64px;
  max-width: 1280px;
  font-size: 20px;
  color: #f5f5f6;
  font-family: Inter;
`;
const FeaturesSection1 = styled.div`
  background-color: #0c111d;
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 96px 0px;
  box-sizing: border-box;
  gap: 64px;
  text-align: left;
  font-size: 12px;
  color: #cecfd2;
  font-family: "Loos Wide";
`;
const Subheading1 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 600;
`;
const SupportingText12 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 30px;
  color: #94969c;
`;
const Container8 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
  text-align: center;
  font-size: 16px;
  color: #cecfd2;
  font-family: Inter;
`;
const FeaturedIcon9 = styled.img`
  position: relative;
  border-radius: 1000px;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const Heading5 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 38px;
  font-weight: 600;
`;
const SupportingText13 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  font-family: Inter;
  color: #cecfd2;
`;
const HeadingAndSupportingText5 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
const CheckIcon = styled.img`
  position: relative;
  border-radius: 1000px;
  width: 28px;
  height: 28px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Text29 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
`;
const TextWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CheckItemText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;
const CheckItems = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 16px;
  gap: 20px;
  font-size: 18px;
  color: #94969c;
  font-family: Inter;
`;
const Content16 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
`;
const MockupShadow = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 56px);
  top: 0px;
  right: 28px;
  bottom: 0px;
  left: 28px;
  background-color: #000;
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
`;
const ScreenMockupReplaceFill1 = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 10px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ScreenMockup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  width: 768px;
  height: 512px;
`;
const Content17 = styled.div`
  flex: 1;
  position: relative;
  height: 512px;
`;
const Container9 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  gap: 96px;
  max-width: 1280px;
  color: #ededed;
`;
const ScreenMockup1 = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 10px;
  width: 768px;
  height: 512px;
`;
const Container10 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  gap: 96px;
  max-width: 1280px;
`;
const MockupShadow2 = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 56px);
  top: 0px;
  right: 28px;
  bottom: 0px;
  left: 28px;
  background-color: #000;
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
  display: none;
`;
const ScreenMockupReplaceFill3 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 10px;
  overflow: hidden;
`;
const Content21 = styled.div`
  flex: 1;
  position: relative;
  height: 512px;
  background-image: url("/content@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const FeaturesSection2 = styled.div`
  background-color: #0c111d;
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 96px 0px;
  box-sizing: border-box;
  gap: 96px;
  text-align: left;
  font-size: 30px;
`;
const Buttonsbutton19 = styled.div`
  border-radius: 8px;
  background-color: #161b26;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #333741;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  gap: 6px;
`;
const Buttonsbutton20 = styled.div`
  border-radius: 8px;
  background-color: #7e56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #7e56d9;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  gap: 6px;
  color: #fff;
`;
const Actions1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  text-align: left;
  font-size: 16px;
  color: #cecfd2;
  font-family: Inter;
`;
const Content22 = styled.div`
  align-self: stretch;
  border-radius: 16px;
  background-color: #161b26;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 64px;
  gap: 32px;
`;
const CtaSection = styled.div`
  background-color: #0c111d;
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 96px;
  box-sizing: border-box;
`;
const SocialIcon5 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  object-fit: cover;
  display: none;
`;
const SocialIcons = styled.div`
  width: 320px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
`;
const FooterText = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-family: Inter;
  text-align: right;
  display: inline-block;
  width: 320px;
  flex-shrink: 0;
`;
const Content23 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Footer = styled.div`
  background-color: #0c111d;
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 48px 0px;
  box-sizing: border-box;
  font-size: 24.5px;
  color: #94969c;
  font-family: Aquire;
`;
const HomepageDesktopLargeRoot = styled.div`
  position: relative;
  background-color: #161616;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: 36px;
  color: #f5f5f6;
  font-family: "Suisse Intl";
  @media screen and (max-width: 1200px) {
    gap: 40px;
    padding-left: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    width: 768px;
  }
  @media screen and (max-width: 420px) {
    width: 360px;
  }
`;

const HomepageDesktopLarge: NextPage = () => {
  return (
    <HomepageDesktopLargeRoot>
      <HeroHeaderSection>
        <DropdownHeaderNavigation>
          <Header>
            <Container>
              <Content>
                <Logo>
                  <LogoWrap>
                    <Logomark>
                      <LogoLacraLabsMark>
                        <VectorIcon alt="lacra labs" src="/logo_mark@1x.png" />
                      </LogoLacraLabsMark>
                    </Logomark>
                    <Logotype>
                      <LogoSynthlete>SYNTHLETE</LogoSynthlete>
                    </Logotype>
                  </LogoWrap>
                </Logo>
                <Navigation1>
                  <Buttonsbutton>
                    <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                    <Text1>Home</Text1>
                    <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                  </Buttonsbutton>
                  <DropdownHeaderNavigationTri>
                    <Buttonsbutton>
                      <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                      <Text1>Products</Text1>
                      <ChevronDownIcon alt="" src="/chevrondown@2x.png" />
                    </Buttonsbutton>
                  </DropdownHeaderNavigationTri>
                  <DropdownHeaderNavigationTri>
                    <Buttonsbutton>
                      <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                      <Text1>Resources</Text1>
                      <ChevronDownIcon alt="" src="/chevrondown@2x.png" />
                    </Buttonsbutton>
                  </DropdownHeaderNavigationTri>
                  <Buttonsbutton>
                    <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                    <Text1>Pricing</Text1>
                    <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                  </Buttonsbutton>
                </Navigation1>
              </Content>
              <NavigationActions>
                <Buttonsbutton4>
                  <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                  <TextPadding>
                    <Text1>Log in</Text1>
                  </TextPadding>
                  <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                </Buttonsbutton4>
                <Buttonsbutton5>
                  <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                  <TextPadding>
                    <Text1>COMING SOON</Text1>
                  </TextPadding>
                  <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                </Buttonsbutton5>
              </NavigationActions>
            </Container>
          </Header>
        </DropdownHeaderNavigation>
        <HeaderSection>
          <Section>
            <Container1>
              <Content1>
                <HeadingAndSupportingText>
                  <HeadingAndBadge>
                    <BadgeGroup>
                      <Badge>
                        <Message>New feature</Message>
                      </Badge>
                      <Content2>
                        <Message>Your Synthlete is generating...</Message>
                        <ArrowRightIcon alt="" src="/arrowright@2x.png" />
                      </Content2>
                    </BadgeGroup>
                    <Heading>
                      <UnleashThePower>{`Unleash the Power of Human-Owned Virtual `}</UnleashThePower>
                      <AiAthletes>AI Athletes</AiAthletes>
                    </Heading>
                  </HeadingAndBadge>
                  <SupportingText>
                    Lacra Labs stands at the forefront of the entertainment and
                    competition sectors, pioneering the use of generative AI to
                    create sophisticated, human-owned synthetic athletes. Our
                    virtual AI agents are trained on a pre-existing dataset of
                    esports and sports, and honed and nurtured by humans to
                    create a symbiotic relationship unlike anything before. By
                    shattering the limitations imposed by traditional sports and
                    esports, we're reinventing a dynamic future that facilitates
                    all new forms of entertainment.
                  </SupportingText>
                </HeadingAndSupportingText>
                <Actions>
                  <Buttonsbutton6>
                    <PlayCircleIcon alt="" src="/playcircle@2x.png" />
                    <TextPadding>
                      <Text7>Demo</Text7>
                    </TextPadding>
                    <PlaceholderIcon10 alt="" src="/placeholder@2x.png" />
                  </Buttonsbutton6>
                  <Buttonsbutton7>
                    <PlaceholderIcon10 alt="" src="/placeholder@2x.png" />
                    <TextPadding>
                      <Text7>COMING SOON</Text7>
                    </TextPadding>
                    <PlaceholderIcon10 alt="" src="/placeholder@2x.png" />
                  </Buttonsbutton7>
                </Actions>
              </Content1>
            </Container1>
            <BackgroundPatternIcon alt="" src="/background-pattern@2x.png" />
          </Section>
          <Section1>
            <Container2>
              <Content3>
                <VideoPlayer>
                  <ShadowOverlayPlayer />
                  <Overlay />
                  <VideoProgress>
                    <Content4>
                      <Background />
                      <Buffering>
                        <BufferingProgress />
                      </Buffering>
                      <ProgressLine />
                      <PlayIcon alt="" src="/play@2x.png" />
                    </Content4>
                    <Timestamps>
                      <TimestampStart>0:00</TimestampStart>
                      <TimestampStart>8:24</TimestampStart>
                    </Timestamps>
                  </VideoProgress>
                  <TextAndBadge>
                    <Badge1>
                      <Message>Part 1</Message>
                    </Badge1>
                    <Text10>The future of work</Text10>
                  </TextAndBadge>
                  <PlayButtonIcon alt="" src="/-play-button@2x.png" />
                </VideoPlayer>
              </Content3>
            </Container2>
          </Section1>
        </HeaderSection>
      </HeroHeaderSection>
      <MetricsSection>
        <Container2>
          <Content3>
            <HeadingAndSupportingText1>
              <Heading1>Decades of training data</Heading1>
              <SupportingText1>
                Every historical statistics going back decades.
              </SupportingText1>
            </HeadingAndSupportingText1>
          </Content3>
        </Container2>
        <Container4>
          <Content6>
            <MetricItem>
              <NumberAndText>
                <Number1>3.1B+</Number1>
                <Text11>Tokens</Text11>
              </NumberAndText>
              <Buttonsbutton8>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                <Text1>Learn more</Text1>
                <ChevronDownIcon alt="" src="/arrowright@2x.png" />
              </Buttonsbutton8>
            </MetricItem>
            <MetricItem>
              <NumberAndText>
                <Number1>1,000</Number1>
                <Text11>Virtual Arenas</Text11>
              </NumberAndText>
              <Buttonsbutton8>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                <Text1>Learn more</Text1>
                <ChevronDownIcon alt="" src="/arrowright@2x.png" />
              </Buttonsbutton8>
            </MetricItem>
            <MetricItem>
              <NumberAndText>
                <Number1>Infinite</Number1>
                <Text11>Personas</Text11>
              </NumberAndText>
              <Buttonsbutton8>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                <Text1>Learn more</Text1>
                <ChevronDownIcon alt="" src="/arrowright@2x.png" />
              </Buttonsbutton8>
            </MetricItem>
          </Content6>
        </Container4>
      </MetricsSection>
      <FeaturesSection>
        <Container5>
          <HeadingAndSupportingText2>
            <HeadingAndIcon>
              <FeaturedIcon alt="" src="/featured-icon@2x.png" />
              <Heading1>
                The Digital Influencer You Never Knew You Needed
              </Heading1>
            </HeadingAndIcon>
            <SupportingText2>
              Experience the thrill of owning a virtual AI athlete, with a
              distinct personality and backstory, and competing in exclusive,
              avant-garde sports and esports leagues. Our AI athletes redefine
              the world of sports and esports, and hold the potential to
              revolutionize domains like daily fantasy, sports betting, and
              fandom. They offer an exhilarating alternative for younger
              generations who may not be engaged by traditional sports, while
              enabling others to relive the excitement of playing sports in
              their youth.
            </SupportingText2>
          </HeadingAndSupportingText2>
          <Content7>
            <FeatureText>
              <FeaturedIcon1 alt="" src="/featured-icon@2x.png" />
              <HeadingAndIcon>
                <TextAndSupportingText>
                  <Text17>Virtual Athletes</Text17>
                  <SupportingText3>
                    Join the elite ranks of AI athletes and compete in thrilling
                    global tournaments, where the victors earn millions in prize
                    money. It's your chance to showcase your skills and dominate
                    the virtual sports world.
                  </SupportingText3>
                </TextAndSupportingText>
                <Buttonsbutton11 />
              </HeadingAndIcon>
            </FeatureText>
            <FeatureText>
              <FeaturedIcon1 alt="" src="/featured-icon@2x.png" />
              <HeadingAndIcon>
                <TextAndSupportingText>
                  <Text17>Made For You</Text17>
                  <SupportingText3>
                    Create your very own AI athlete and watch as it evolves and
                    learns, adapting to your unique training methods and
                    strategies.
                  </SupportingText3>
                </TextAndSupportingText>
                <Buttonsbutton11 />
              </HeadingAndIcon>
            </FeatureText>
            <FeatureText>
              <FeaturedIcon1 alt="" src="/featured-icon@2x.png" />
              <HeadingAndIcon>
                <TextAndSupportingText>
                  <Text17>AI Influencers</Text17>
                  <SupportingText3>
                    Extend your AI athlete's influence beyond the virtual world.
                    Cultivate a unique public persona, engage with your fanbase,
                    and establish a strong social media presence. Connect with
                    fans from around the world and become a true digital sports
                    icon.
                  </SupportingText3>
                </TextAndSupportingText>
                <Buttonsbutton13>
                  <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                  <Text1>View integration</Text1>
                  <ChevronDownIcon alt="" src="/arrowright@2x.png" />
                </Buttonsbutton13>
              </HeadingAndIcon>
            </FeatureText>
            <FeatureText>
              <FeaturedIcon1 alt="" src="/featured-icon@2x.png" />
              <HeadingAndIcon>
                <TextAndSupportingText>
                  <Text17>Infinite Value</Text17>
                  <SupportingText3>
                    Our virtual world never stops evolving. With new sports and
                    esports, large language models, advancements in AI, and
                    more. And that’s why getting in early is key!
                  </SupportingText3>
                </TextAndSupportingText>
                <Buttonsbutton13>
                  <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                  <Text1>View integration</Text1>
                  <ChevronDownIcon alt="" src="/arrowright@2x.png" />
                </Buttonsbutton13>
              </HeadingAndIcon>
            </FeatureText>
          </Content7>
        </Container5>
      </FeaturesSection>
      <FeaturesSection1>
        <Container2>
          <Content12>
            <HeadingAndSupportingText3>
              <NumberAndText>
                <Subheading>HOW IT WORKS</Subheading>
                <Heading3>
                  Simulacrum Agents that learn, train and win 24/7!
                </Heading3>
              </NumberAndText>
              <SupportingText7>
                <EnvisionAFuture>
                  Envision a future where AI agents, owned by humans, inhabit
                  virtual realms, honing their skills and competing as digital
                  athletes. Watch as your AI athlete comes to life with its own
                  distinct personality, shaped by its interactions with you and
                  the world it inhabits. These virtual worlds act as hubs for
                  sports and entertainment, fostering a constantly evolving
                  ecosystem of training and competition.
                </EnvisionAFuture>
                <EnvisionAFuture>
                  The elite AI athletes, trained on bespoke data models, vie for
                  the championship title in global tournaments, with the victors
                  earning millions in prize money, funded entirely by sponsors
                  and fans.
                </EnvisionAFuture>
                <WhereEachAi>
                  Where each AI has the potential to cultivate a unique public
                  persona, interacting and engaging with their fanbase,
                  establishing their own social media presence, and extending
                  their influence on a global scale.
                </WhereEachAi>
              </SupportingText7>
            </HeadingAndSupportingText3>
          </Content12>
        </Container2>
        <Container7>
          <Content13>
            <FeatureText4>
              <FeaturedIcon1 alt="" src="/featured-icon@2x.png" />
              <TextAndSupportingText>
                <Text17>Acquire</Text17>
                <SupportingText8>
                  Create your own virtual AI athlete and personalize it to your
                  liking. Metapass members being prioritized.
                </SupportingText8>
              </TextAndSupportingText>
              <Buttonsbutton11 />
            </FeatureText4>
            <FeatureText4>
              <FeaturedIcon1 alt="" src="/featured-icon@2x.png" />
              <TextAndSupportingText>
                <Text17>Train</Text17>
                <SupportingText8>
                  From beginner to professional level models, our virtual Arenas
                  house the largest known collection of sports and esports
                  datasets. Your Synthlete will go from the playground to the
                  big leagues in no time!
                </SupportingText8>
              </TextAndSupportingText>
              <Buttonsbutton13>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                <Text1>Learn more</Text1>
                <ChevronDownIcon alt="" src="/arrowright@2x.png" />
              </Buttonsbutton13>
            </FeatureText4>
            <FeatureText4>
              <FeaturedIcon1 alt="" src="/featured-icon@2x.png" />
              <TextAndSupportingText>
                <Text17>Compete</Text17>
                <SupportingText8>
                  Enter into daily and weekly contests across popular sports and
                  esports for millions in prize money.
                </SupportingText8>
              </TextAndSupportingText>
              <Buttonsbutton13>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                <Text1>Learn more</Text1>
                <ChevronDownIcon alt="" src="/arrowright@2x.png" />
              </Buttonsbutton13>
            </FeatureText4>
            <FeatureText4>
              <FeaturedIcon1 alt="" src="/featured-icon@2x.png" />
              <TextAndSupportingText>
                <Text17>Influence</Text17>
                <SupportingText8>
                  Establish a unique public persona and brand for your AI
                  Athlete, enabling them to build and engage with their own
                  global fanbase.
                </SupportingText8>
              </TextAndSupportingText>
              <Buttonsbutton11 />
            </FeatureText4>
          </Content13>
          <Content14>
            <MockupWrap>
              <MacbookProMockup>
                <ShadowIcon alt="" src="/shadow@2x.png" />
                <MacbookPro16 alt="" src="/macbook-pro-16@2x.png" />
                <CameraIcon alt="" src="/camera@2x.png" />
                <LogoIcon alt="" src="/logo@2x.png" />
                <ScreenMockupReplaceFill
                  alt=""
                  src="/screen-mockup-replace-fill@2x.png"
                />
              </MacbookProMockup>
            </MockupWrap>
            <HandDrawnArrowIcon alt="" src="/handdrawn-arrow@2x.png" />
          </Content14>
        </Container7>
      </FeaturesSection1>
      <FeaturesSection2>
        <Container8>
          <Content3>
            <HeadingAndSupportingText1>
              <NumberAndText>
                <Subheading1>NEXT GENERATION AI AGENTS</Subheading1>
                <Heading3>
                  AI Sports that feels like it’s from the future
                </Heading3>
              </NumberAndText>
              <SupportingText12>
                AI Agents that are trained specifically for sports and esports
              </SupportingText12>
            </HeadingAndSupportingText1>
          </Content3>
        </Container8>
        <Container9>
          <Content16>
            <HeadingAndIcon>
              <FeaturedIcon9 alt="" src="/featured-icon@2x.png" />
              <HeadingAndSupportingText5>
                <Heading5>{`Digital Stadium & Arenas`}</Heading5>
                <SupportingText13>
                  Virtual venues where AI Athletes compete
                </SupportingText13>
              </HeadingAndSupportingText5>
            </HeadingAndIcon>
            <CheckItems>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>
                    Tailored to the sport or esports you’re interested in
                  </Text29>
                </TextWrap>
              </CheckItemText>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>Your arena, your rules</Text29>
                </TextWrap>
              </CheckItemText>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>Customizable from the inside, out.</Text29>
                </TextWrap>
              </CheckItemText>
            </CheckItems>
          </Content16>
          <Content17>
            <ScreenMockup>
              <MockupShadow />
              <ScreenMockupReplaceFill1
                alt=""
                src="/screen-mockup-replace-fill@2x.png"
              />
            </ScreenMockup>
          </Content17>
        </Container9>
        <Container10>
          <Content17>
            <ScreenMockup1>
              <MockupShadow />
              <ScreenMockupReplaceFill1
                alt=""
                src="/screen-mockup-replace-fill@2x.png"
              />
            </ScreenMockup1>
          </Content17>
          <Content16>
            <HeadingAndIcon>
              <FeaturedIcon9 alt="" src="/featured-icon@2x.png" />
              <HeadingAndSupportingText5>
                <Heading5>Robust Data Models</Heading5>
                <SupportingText13>
                  100M+ data points, built on decades of real-life sports and
                  esports.
                </SupportingText13>
              </HeadingAndSupportingText5>
            </HeadingAndIcon>
            <CheckItems>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>
                    Keep your customers in the loop with live chat
                  </Text29>
                </TextWrap>
              </CheckItemText>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>Embed help articles right on your website</Text29>
                </TextWrap>
              </CheckItemText>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>
                    Customers never have to leave the page to find an answer
                  </Text29>
                </TextWrap>
              </CheckItemText>
            </CheckItems>
          </Content16>
        </Container10>
        <Container10>
          <Content16>
            <HeadingAndIcon>
              <FeaturedIcon9 alt="" src="/featured-icon@2x.png" />
              <HeadingAndSupportingText5>
                <Heading5>Manage a Team of AI Athletes</Heading5>
                <SupportingText13>
                  Host a wide range of contest types, training classes, events,
                  and more!
                </SupportingText13>
              </HeadingAndSupportingText5>
            </HeadingAndIcon>
            <CheckItems>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>
                    Filter, export, and drilldown on the data quickly
                  </Text29>
                </TextWrap>
              </CheckItemText>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>
                    Save, schedule, and automate reports to your inbox
                  </Text29>
                </TextWrap>
              </CheckItemText>
              <CheckItemText>
                <CheckIcon alt="" src="/check-icon@2x.png" />
                <TextWrap>
                  <Text29>
                    Connect the tools you already use with 100+ integrations
                  </Text29>
                </TextWrap>
              </CheckItemText>
            </CheckItems>
          </Content16>
          <Content21>
            <ScreenMockup>
              <MockupShadow2 />
              <ScreenMockupReplaceFill3 />
            </ScreenMockup>
          </Content21>
        </Container10>
      </FeaturesSection2>
      <CtaSection>
        <Container2>
          <Content22>
            <HeadingAndSupportingText1>
              <Heading1>Don’t Miss Your Chance</Heading1>
              <SupportingText13>
                Claim your spot in the future of athleticism, entertainment and
                technology.
              </SupportingText13>
            </HeadingAndSupportingText1>
            <Actions1>
              <Buttonsbutton19>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                <TextPadding>
                  <Text1>LEARN MORE</Text1>
                </TextPadding>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
              </Buttonsbutton19>
              <Buttonsbutton20>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                <TextPadding>
                  <Text1>COMING SOON</Text1>
                </TextPadding>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
              </Buttonsbutton20>
            </Actions1>
          </Content22>
        </Container2>
      </CtaSection>
      <Footer>
        <Container2>
          <Content23>
            <SocialIcons>
              <PlayCircleIcon alt="" src="/social-icon@2x.png" />
              <PlayCircleIcon alt="" src="/social-icon@2x.png" />
              <PlayCircleIcon alt="" src="/social-icon@2x.png" />
              <PlayCircleIcon alt="" src="/social-icon@2x.png" />
              <PlaceholderIcon10 alt="" src="/social-icon@2x.png" />
              <SocialIcon5 alt="" src="/social-icon@2x.png" />
            </SocialIcons>
            <Logo>
              <LogoWrap>
                <Logomark>
                  <LogoLacraLabsMark>
                    <VectorIcon alt="lacra labs" src="/logo_mark1@1x.png" />
                  </LogoLacraLabsMark>
                </Logomark>
                <Logotype>
                  <LogoSynthlete>SYNTHLETE</LogoSynthlete>
                </Logotype>
              </LogoWrap>
            </Logo>
            <FooterText>© 2024 ESPORTS ONE INC.</FooterText>
          </Content23>
        </Container2>
      </Footer>
    </HomepageDesktopLargeRoot>
  );
};

export default HomepageDesktopLarge;

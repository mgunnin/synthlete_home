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
const Logo = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0.8333333134651184px;
`;
const LogoLacraLabsMark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoSynthlete1 = styled.h1`
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
const Typeface = styled.div`
  width: 245px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const LogoSynthlete = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const Containerlogo = styled.div`
  align-self: stretch;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ChevronDownIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Iconwrapper = styled.div`
  background-color: rgba(255, 255, 255, 0);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Textbutton1 = styled.b`
  position: relative;
  letter-spacing: 0.03em;
  line-height: 22px;
`;
const Textbutton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 6px;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Iconwrapper1 = styled.div`
  background-color: rgba(255, 255, 255, 0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StateLayer = styled.div`
  border-radius: 4px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
  box-sizing: border-box;
`;
const Button = styled.div`
  border-radius: 4px;
  background-color: #ac6aff;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: "Loos Wide";
`;
const Container = styled.div`
  align-self: stretch;
  box-shadow: 0px 1px 2px rgba(78, 81, 83, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Containerheader = styled.header`
  align-self: stretch;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 80px;
  text-align: center;
  font-size: 40px;
  color: #17151f;
  font-family: Aquire;
`;
const UnleashThePower = styled.span``;
const AiAthletes = styled.span`
  color: #ac6aff;
`;
const Texth1 = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 64px;
  font-weight: 700;
  font-family: inherit;
  white-space: pre-wrap;
  @media screen and (max-width: 1200px) {
    font-size: 48px;
    line-height: 56px;
  }
`;
const Textdiv = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 30px;
  font-weight: 500;
`;
const Textarea = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  color: #a0a0a0;
  font-family: Montserrat;
`;
const HorizontalContainer1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
`;
const StateLayer1 = styled.div`
  border-radius: 4px;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
`;
const Button1 = styled.div`
  border-radius: 4px;
  background-color: #232323;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #ac6aff;
`;
const HorizontalContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 80px;
  gap: 48px;
`;
const ImageContainerIcon = styled.img`
  align-self: stretch;
  max-width: 100%;
  overflow: hidden;
  height: 850px;
  flex-shrink: 0;
  object-fit: cover;
`;
const IconWrapper = styled.img`
  width: 33.9px;
  height: 33.9px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
`;
const SynthleteGenerating = styled.b`
  position: relative;
  letter-spacing: 0.03em;
  line-height: 24px;
`;
const TextBox = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const InputText = styled.div`
  border-radius: 500px;
  background-color: #1c1c1c;
  border: 2px solid #ac6aff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
`;
const FeaturedImageContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("/featured-image-container@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: 18px;
`;
const Containerfeatured = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 80px;
  gap: 40px;
  text-align: center;
  font-size: 56px;
  color: #ededed;
  font-family: "Loos Wide";
  @media screen and (max-width: 1200px) {
    padding-left: 80px;
    padding-right: 80px;
    box-sizing: border-box;
  }
`;
const B = styled.b`
  position: relative;
  line-height: 40px;
`;
const DataPoints = styled.b`
  position: relative;
  font-size: 18px;
  letter-spacing: 0.01em;
  line-height: 28px;
  font-family: Montserrat;
  color: #a0a0a0;
`;
const Number05 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
  box-sizing: border-box;
  min-height: 64px;
`;
const Containermetrics = styled.div`
  align-self: stretch;
  background-color: #232323;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 80px;
  gap: 64px;
  font-size: 32px;
  @media screen and (max-width: 1200px) {
    padding-left: 80px;
    padding-right: 80px;
    box-sizing: border-box;
  }
`;
const TheDigitalInfluencer = styled.p`
  margin: 0;
`;
const TheDigitalInfluencerContainer = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 56px;
  @media screen and (max-width: 1200px) {
    font-size: 48px;
    line-height: 56px;
  }
`;
const LiveVicariouslyAnd = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 28px;
  font-weight: 500;
`;
const Textdiv1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  color: #a0a0a0;
  font-family: Montserrat;
`;
const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 80px;
  gap: 24px;
`;
const Headline = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 40px;
`;
const Description = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  letter-spacing: 0.01em;
  line-height: 24px;
  font-weight: 500;
  font-family: Montserrat;
  color: #a0a0a0;
`;
const TextBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const LearnMore = styled.b`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 28px;
`;
const VectorIcon3 = styled.img`
  position: relative;
  border-radius: 14px;
  width: 26px;
  height: 10.2px;
  object-fit: cover;
`;
const Bottomsection = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  text-align: left;
  font-size: 18px;
  color: #52a9ff;
  font-family: Montserrat;
`;
const ValuePropCard = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: #232323;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;
const Bottomsection1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  text-align: left;
  font-size: 18px;
  color: #f1a10d;
  font-family: Montserrat;
`;
const ValuePropCardParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
`;
const TextBlock2 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const Bottomsection2 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  text-align: left;
  font-size: 18px;
  color: #e45be5;
  font-family: Montserrat;
`;
const Bottomsection3 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  text-align: left;
  font-size: 18px;
  color: #00face;
  font-family: Montserrat;
`;
const TemplateComponentsCardGri = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
const Containercards = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 80px;
  font-size: 32px;
  color: #ededed;
`;
const Containerfeatures = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 80px;
  gap: 40px;
  text-align: center;
  color: #ac6aff;
`;
const FeaturedImageIcon = styled.img`
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const TaglineChild = styled.img`
  position: relative;
  width: 4px;
  height: 12px;
  object-fit: cover;
`;
const Content = styled.div`
  position: relative;
  letter-spacing: 0.03em;
  line-height: 18px;
  font-weight: 500;
`;
const TaglineItem = styled.img`
  position: relative;
  width: 4px;
  height: 12px;
  object-fit: contain;
`;
const Tagline = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
const SportsBetting = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 56px;
  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 48px;
  }
`;
const EnvisionAFuture = styled.span`
  display: block;
`;
const Text1 = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: 18px;
  letter-spacing: 0.01em;
  line-height: 28px;
  font-weight: 500;
  font-family: Montserrat;
  color: #a0a0a0;
`;
const TextContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
`;
const HorizontalContainer2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextBlock4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 48px;
  color: #ededed;
`;
const ColumnRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const TemplateComponentsFeatured = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 80px 0px;
  gap: 48px;
  @media screen and (max-width: 960px) {
    width: 768px;
    flex-direction: column;
    padding-top: 68px;
    padding-bottom: 68px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    width: 360px;
    flex-direction: column;
    padding-top: 64px;
    padding-bottom: 64px;
    box-sizing: border-box;
  }
`;
const Number1 = styled.b`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.03em;
  line-height: 18px;
`;
const AcquireSynthlete = styled.h5`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  font-family: inherit;
  color: #ededed;
  @media screen and (max-width: 1200px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
const Header = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const Text11 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  letter-spacing: 0.01em;
  line-height: 24px;
  font-weight: 500;
  font-family: Montserrat;
`;
const TextBlock5 = styled.div`
  flex: 1;
  border-top: 2px solid #a0a0a0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px 0px;
  gap: 24px;
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const TextBlock6 = styled.div`
  flex: 1;
  border-top: 2px solid #ac6aff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px 0px;
  gap: 24px;
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const TemplateComponentsTextGri = styled.nav`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  text-align: left;
  font-size: 12px;
  color: #a0a0a0;
  font-family: "Loos Wide";
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
const Containersection01 = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 80px;
  gap: 40px;
  text-align: left;
  font-size: 12px;
  color: #a0a0a0;
  font-family: "Loos Wide";
  @media screen and (max-width: 1200px) {
    padding-left: 80px;
    padding-right: 80px;
    box-sizing: border-box;
  }
`;
const OnixDeliversTamperProof = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  letter-spacing: 0.01em;
  line-height: 28px;
  font-weight: 500;
  font-family: Montserrat;
  color: #a0a0a0;
`;
const Bulleticon = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
  object-fit: cover;
`;
const SymbioticRelationships = styled.b`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 30px;
`;
const Listitem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const ListContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  font-size: 20px;
  font-family: Montserrat;
`;
const Container1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const IconWrapper1 = styled.img`
  width: 33.9px;
  height: 33.9px;
  flex-shrink: 0;
  object-fit: contain;
`;
const SynthleteGenerating1 = styled.b`
  flex: 1;
  position: relative;
  letter-spacing: 0.03em;
  line-height: 24px;
`;
const TextBlock10 = styled.div`
  align-self: stretch;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const Pill = styled.div`
  border-radius: 8px;
  background-color: #1c1c1c;
  border: 2px solid #ac6aff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
`;
const Image1 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-image: url("/image@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  font-size: 18px;
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const TemplateComponentsFeatured1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 80px 0px;
  gap: 48px;
  @media screen and (max-width: 1200px) {
    padding-left: 80px;
    padding-right: 80px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
const Containersection02 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 80px;
`;
const TemplateComponentsFeatured2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 80px 0px;
  gap: 50px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
const Containersection03 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 80px;
  font-size: 12px;
  color: #a0a0a0;
`;
const MonitorRecorderIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const Icon01 = styled.div`
  border-radius: 16px;
  background-color: #1c1c1c;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
const Icon03 = styled.img`
  border-radius: 16px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Icons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TextBlock12 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 48px;
  gap: 36px;
`;
const ImagecontainerIcon = styled.img`
  align-self: stretch;
  flex: 1;
  border-radius: 16px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Gridcontainer = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const Separator = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.65);
  width: 63px;
  height: 4px;
`;
const MyTeam = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 32px;
`;
const SearchIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const SearchAgents = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 24px;
  font-weight: 500;
`;
const SearchBar = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #1c1c1c;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 8px;
  gap: 8px;
  font-size: 16px;
  color: #a0a0a0;
`;
const Header4 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 16px 16px;
  gap: 12px;
  font-size: 24px;
`;
const RobotAvatars3Icon = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Synthlete001 = styled.b`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 24px;
`;
const Contentcontainer = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
const Player01 = styled.div`
  align-self: stretch;
  background-color: #1c1c1c;
  border-top: 1px solid #ededed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 24px;
`;
const Teamcontainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Popup = styled.div`
  width: 100%;
  flex: 1;
  border-radius: 16px;
  background-color: #1c1c1c;
  backdrop-filter: blur(8px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0px;
  box-sizing: border-box;
  gap: 32px;
  min-width: 325px;
  max-width: 375px;
`;
const HostAWide = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  letter-spacing: 0.01em;
  line-height: 28px;
  font-weight: 500;
  font-family: Montserrat;
  color: #a0a0a0;
  text-align: center;
`;
const TextBlock13 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 48px;
  gap: 24px;
  font-size: 48px;
  font-family: "Loos Wide";
`;
const Gridcontainer1 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  font-size: 16px;
  font-family: Montserrat;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const TemplateComponentsGridCon = styled.section`
  align-self: stretch;
  height: 848px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 0px;
  box-sizing: border-box;
  gap: 48px;
  text-align: left;
  font-size: 48px;
  color: #ededed;
  font-family: "Loos Wide";
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
const Heading5 = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 64px;
  @media screen and (max-width: 1200px) {
    font-size: 48px;
    line-height: 56px;
  }
`;
const Heading4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const HorizontalContainer7 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
`;
const Button2 = styled.div`
  border-radius: 4px;
  background-color: #232323;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;
const HorizontalContainer6 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;
const Containersection05 = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 80px;
  text-align: center;
  font-size: 56px;
  color: #ac6aff;
  font-family: "Loos Wide";
`;
const LogoSynthlete3 = styled.b`
  position: relative;
  text-transform: uppercase;
  background: radial-gradient(50% 50% at 50% 50%, #6d3da9, #ac6aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Typeface1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const GetStarted = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 20px;
  font-weight: 500;
  z-index: 0;
`;
const MenuChild = styled.div`
  position: absolute;
  margin: 0 !important;
  bottom: 0px;
  left: 0px;
  background-color: #1c1c1c;
  width: 1px;
  height: 8px;
  z-index: 1;
`;
const MenuInner = styled.div`
  position: absolute;
  margin: 0 !important;
  right: 0px;
  bottom: 0px;
  background-color: #1c1c1c;
  width: 1px;
  height: 8px;
  opacity: 0;
  z-index: 2;
`;
const Menu = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 48px;
  position: relative;
`;
const Menu1 = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 48px;
  position: relative;
  margin-left: -1px;
`;
const MenuItem = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  font-family: Montserrat;
`;
const EsportsOneInc = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 20px;
  font-weight: 500;
`;
const Socials = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 48px;
`;
const BottomBanner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: 14px;
  font-family: Montserrat;
`;
const TemplateComponentsFooter = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 48px 0px;
  gap: 48px;
  text-align: center;
  font-size: 40px;
  color: #a0a0a0;
  font-family: Aquire;
  @media screen and (max-width: 1200px) {
    padding-left: 80px;
    padding-right: 80px;
    box-sizing: border-box;
  }
`;
const Footer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 80px;
`;
const HomepageDesktopLargeRoot = styled.div`
  position: relative;
  background-color: #161616;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: 48px;
  color: #ededed;
  font-family: "Loos Wide";
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
    <React.Fragment>
      <GlobalStyle />
      <HomepageDesktopLargeRoot>
        <Containerheader>
          <Container>
            <Containerlogo>
              <LogoSynthlete>
                <LogoLacraLabsMark>
                  <Logo>
                    <VectorIcon alt="lacra labs" src="/logo_mark@1x.png" />
                  </Logo>
                </LogoLacraLabsMark>
                <Typeface>
                  <LogoSynthlete1>SYNTHLETE</LogoSynthlete1>
                </Typeface>
              </LogoSynthlete>
            </Containerlogo>
            <Button>
              <StateLayer>
                <Iconwrapper>
                  <ChevronDownIcon alt="" src="/chevron-down@2x.png" />
                </Iconwrapper>
                <Textbutton>
                  <Textbutton1>SIGN UP</Textbutton1>
                </Textbutton>
                <Iconwrapper1>
                  <VectorIcon1 alt="" src="/vector@2x.png" />
                </Iconwrapper1>
              </StateLayer>
            </Button>
          </Container>
        </Containerheader>
        <Containerfeatured>
          <HorizontalContainer>
            <HorizontalContainer1>
              <Texth1>
                <UnleashThePower>{`Unleash the Power of  Human-Owned Virtual `}</UnleashThePower>
                <AiAthletes>{`AI Athletes `}</AiAthletes>
              </Texth1>
              <Textarea>
                <Textdiv>
                  Lacra Labs stands at the forefront of the entertainment and
                  competition sectors, pioneering the use of generative AI to
                  create sophisticated, human-owned synthetic athletes. Our
                  virtual AI agents are trained on a pre-existing dataset of
                  esports and sports, and honed and nurtured by humans to create a
                  symbiotic relationship unlike anything before. By shattering the
                  limitations imposed by traditional sports and esports, we're
                  reinventing a dynamic future that facilitates all new forms of
                  entertainment.
                </Textdiv>
              </Textarea>
            </HorizontalContainer1>
            <Button1>
              <StateLayer1>
                <Iconwrapper>
                  <ChevronDownIcon alt="" src="/chevron-down1@2x.png" />
                </Iconwrapper>
                <Textbutton>
                  <Textbutton1>COMING SOON</Textbutton1>
                </Textbutton>
                <Iconwrapper>
                  <VectorIcon1 alt="" src="/vector1@2x.png" />
                </Iconwrapper>
              </StateLayer1>
            </Button1>
          </HorizontalContainer>
          <FeaturedImageContainer>
            <ImageContainerIcon alt="" src="/female-gamer@1x.png" />
            <InputText>
              <TextBox>
                <IconWrapper alt="" src="/icon-wrapper@2x.png" />
                <SynthleteGenerating>
                  Your Synthlete is generating...
                </SynthleteGenerating>
              </TextBox>
            </InputText>
          </FeaturedImageContainer>
        </Containerfeatured>
        <Containermetrics>
          <Number05>
            <B>3.1B+</B>
            <DataPoints>Data Points</DataPoints>
          </Number05>
          <Number05>
            <B>1,000</B>
            <DataPoints>Virtual Arenas</DataPoints>
          </Number05>
          <Number05>
            <B>4+</B>
            <DataPoints>Game Types</DataPoints>
          </Number05>
          <Number05>
            <B>100’s</B>
            <DataPoints>Daily Contests</DataPoints>
          </Number05>
          <Number05>
            <B>Infinite</B>
            <DataPoints>Personas</DataPoints>
          </Number05>
        </Containermetrics>
        <Containerfeatures>
          <Heading>
            <TheDigitalInfluencerContainer>
              <TheDigitalInfluencer>{`The Digital Influencer `}</TheDigitalInfluencer>
              <TheDigitalInfluencer>
                You Never Knew You Needed
              </TheDigitalInfluencer>
            </TheDigitalInfluencerContainer>
            <Textdiv1>
              <LiveVicariouslyAnd>
                Experience the thrill of owning a virtual AI athlete, with a
                distinct personality and backstory, and competing in exclusive,
                avant-garde sports and esports leagues. Our AI athletes redefine
                the world of sports and esports, and hold the potential to
                revolutionize domains like daily fantasy, sports betting, and
                fandom. They offer an exhilarating alternative for younger
                generations who may not be engaged by traditional sports, while
                enabling others to relive the excitement of playing sports in
                their youth.
              </LiveVicariouslyAnd>
            </Textdiv1>
          </Heading>
          <Containercards>
            <TemplateComponentsCardGri>
              <ValuePropCardParent>
                <ValuePropCard>
                  <TextBlock>
                    <Headline>Virtual Athletes</Headline>
                    <Description>
                      Join the elite ranks of AI athletes and compete in thrilling
                      global tournaments, where the victors earn millions in prize
                      money. It's your chance to showcase your skills and dominate
                      the virtual sports world.
                    </Description>
                  </TextBlock>
                  <Bottomsection>
                    <LearnMore>Learn more</LearnMore>
                    <VectorIcon3 alt="" src="/vector2@2x.png" />
                  </Bottomsection>
                </ValuePropCard>
                <ValuePropCard>
                  <TextBlock>
                    <Headline>Made For You</Headline>
                    <Description>
                      Create your very own AI athlete and watch as it evolves and
                      learns, adapting to your unique training methods and
                      strategies.
                    </Description>
                  </TextBlock>
                  <Bottomsection1>
                    <LearnMore>Learn more</LearnMore>
                    <VectorIcon3 alt="" src="/vector2@2x.png" />
                  </Bottomsection1>
                </ValuePropCard>
              </ValuePropCardParent>
              <ValuePropCardParent>
                <ValuePropCard>
                  <TextBlock2>
                    <Headline>AI Influencers</Headline>
                    <Description>
                      Extend your AI athlete's influence beyond the virtual world.
                      Cultivate a unique public persona, engage with your fanbase,
                      and establish a strong social media presence. Connect with
                      fans from around the world and become a true digital sports
                      icon.
                    </Description>
                  </TextBlock2>
                  <Bottomsection2>
                    <LearnMore>Learn more</LearnMore>
                    <VectorIcon3 alt="" src="/vector2@2x.png" />
                  </Bottomsection2>
                </ValuePropCard>
                <ValuePropCard>
                  <TextBlock2>
                    <Headline>Infinite Value</Headline>
                    <Description>
                      Our virtual world never stops evolving. With new sports and
                      esports, large language models, advancements in AI, and
                      more. And that’s why getting in early is key!
                    </Description>
                  </TextBlock2>
                  <Bottomsection3>
                    <LearnMore>Learn more</LearnMore>
                    <VectorIcon3 alt="" src="/vector2@2x.png" />
                  </Bottomsection3>
                </ValuePropCard>
              </ValuePropCardParent>
            </TemplateComponentsCardGri>
          </Containercards>
        </Containerfeatures>
        <Containersection01>
          <TemplateComponentsFeatured>
            <FeaturedImageIcon alt="" src="/retro-player-vr-headset@2x.png" />
            <ColumnRight>
              <Tagline>
                <TaglineChild alt="" src="/vector-10@2x.png" />
                <Content>HOW IT WORKS</Content>
                <TaglineItem alt="" src="/vector-11@2x.png" />
              </Tagline>
              <TextBlock4>
                <HorizontalContainer2>
                  <TextContainer>
                    <SportsBetting>
                      Simulacrum Agents that learn, train and win 24/7!
                    </SportsBetting>
                    <Text1>
                      <EnvisionAFuture>
                        Envision a future where AI agents, owned by humans,
                        inhabit virtual realms, honing their skills and competing
                        as digital athletes. Watch as your AI athlete comes to
                        life with its own distinct personality, shaped by its
                        interactions with you and the world it inhabits. These
                        virtual worlds act as hubs for sports and entertainment,
                        fostering a constantly evolving ecosystem of training and
                        competition.
                      </EnvisionAFuture>
                      <EnvisionAFuture>&nbsp;</EnvisionAFuture>
                      <EnvisionAFuture>
                        The elite AI athletes, trained on bespoke data models, vie
                        for the championship title in global tournaments, with the
                        victors earning millions in prize money, funded entirely
                        by sponsors and fans.
                      </EnvisionAFuture>
                      <EnvisionAFuture>&nbsp;</EnvisionAFuture>
                      <EnvisionAFuture>
                        Where each AI has the potential to cultivate a unique
                        public persona, interacting and engaging with their
                        fanbase, establishing their own social media presence, and
                        extending their influence on a global scale.
                      </EnvisionAFuture>
                    </Text1>
                  </TextContainer>
                </HorizontalContainer2>
              </TextBlock4>
            </ColumnRight>
          </TemplateComponentsFeatured>
          <TemplateComponentsTextGri>
            <TextBlock5>
              <Header>
                <Number1>01.</Number1>
                <AcquireSynthlete>Acquire</AcquireSynthlete>
              </Header>
              <Text11>
                Create your own virtual AI athlete and personalize it to your
                liking. Metapass members being prioritized.
              </Text11>
            </TextBlock5>
            <TextBlock6>
              <Header>
                <Number1>02.</Number1>
                <AcquireSynthlete>Train</AcquireSynthlete>
              </Header>
              <Text11>
                From beginner to professional level models, our virtual Arenas
                house the largest known collection of sports and esports datasets.
                Your Synthlete will go from the playground to the big leagues in
                no time!
              </Text11>
            </TextBlock6>
            <TextBlock5>
              <Header>
                <Number1>03.</Number1>
                <AcquireSynthlete>Compete</AcquireSynthlete>
              </Header>
              <Text11>
                Enter into daily and weekly contests across popular sports and
                esports for millions in prize money.
              </Text11>
            </TextBlock5>
            <TextBlock5>
              <Header>
                <Number1>04.</Number1>
                <AcquireSynthlete>Influence</AcquireSynthlete>
              </Header>
              <Text11>
                Establish a unique public persona and brand for your AI Athlete,
                enabling them to build and engage with their own global fanbase.
              </Text11>
            </TextBlock5>
          </TemplateComponentsTextGri>
        </Containersection01>
        <Containersection02>
          <TemplateComponentsFeatured1>
            <Container1>
              <TextContainer>
                <SportsBetting>{`Sports Betting & Wagering`}</SportsBetting>
                <OnixDeliversTamperProof>
                  Onix delivers tamper-proof inputs, outputs, and computations to
                  support advanced smart contracts on any blockchain.
                </OnixDeliversTamperProof>
              </TextContainer>
              <ListContainer>
                <Listitem>
                  <Bulleticon alt="" src="/bulleticon@2x.png" />
                  <SymbioticRelationships>
                    Symbiotic Relationships
                  </SymbioticRelationships>
                </Listitem>
                <Listitem>
                  <Bulleticon alt="" src="/bulleticon@2x.png" />
                  <SymbioticRelationships>
                    Virtual Companions
                  </SymbioticRelationships>
                </Listitem>
                <Listitem>
                  <Bulleticon alt="" src="/bulleticon@2x.png" />
                  <SymbioticRelationships>Goal Oriented</SymbioticRelationships>
                </Listitem>
              </ListContainer>
            </Container1>
            <Image1>
              <Pill>
                <TextBlock10>
                  <IconWrapper1 alt="" src="/icon-wrapper@2x.png" />
                  <SynthleteGenerating1>
                    Synthlete training in progress...
                  </SynthleteGenerating1>
                </TextBlock10>
              </Pill>
            </Image1>
          </TemplateComponentsFeatured1>
        </Containersection02>
        <Containersection03>
          <TemplateComponentsFeatured2>
            <FeaturedImageIcon alt="" src="/retro-player-vr-headset11@2x.png" />
            <ColumnRight>
              <Tagline>
                <TaglineChild alt="" src="/vector-10@2x.png" />
                <Content>METAVERSE</Content>
                <TaglineItem alt="" src="/vector-11@2x.png" />
              </Tagline>
              <TextBlock4>
                <HorizontalContainer2>
                  <TextContainer>
                    <SportsBetting>{`Digital Stadium & Arenas`}</SportsBetting>
                    <Text1>
                      Lacra Labs also offers the opportunity to own a Metarena,
                      your very own space where you get to call the shots. These
                      Metarenas are tailored to the sport or event you're
                      interested in hosting, and you can acquire certain models
                      based on your preferences. Your arena, your rules. Whether
                      you're stepping into the shoes of a synthetic athlete
                      manager, a fan, a hardcore bettor, or even a Metarena boss,
                      Lacra Labs is your ticket to a fascinating fusion of AI,
                      sports, and entertainment, wrapped up in an explosive
                      package. This ride is just getting started, so buckle up and
                      get ready for a wild ride!
                    </Text1>
                  </TextContainer>
                </HorizontalContainer2>
              </TextBlock4>
            </ColumnRight>
          </TemplateComponentsFeatured2>
        </Containersection03>
        <Containersection02>
          <TemplateComponentsGridCon>
            <Gridcontainer>
              <TextBlock12>
                <TextContainer>
                  <SportsBetting>Robust Data Models</SportsBetting>
                  <OnixDeliversTamperProof>
                    100M+ data points, built on decades of real-life sports and
                    esports.
                  </OnixDeliversTamperProof>
                </TextContainer>
                <Icons>
                  <Icon01>
                    <MonitorRecorderIcon alt="" src="/monitor-recorder@2x.png" />
                  </Icon01>
                  <Icon01>
                    <MonitorRecorderIcon alt="" src="/record-circle@2x.png" />
                  </Icon01>
                  <Icon03 height={60} width={60} alt="" src="/icon-03@1x.png" />
                  <Icon01>
                    <MonitorRecorderIcon alt="" src="/data@2x.png" />
                  </Icon01>
                  <Icon01>
                    <MonitorRecorderIcon alt="" src="/code@2x.png" />
                  </Icon01>
                </Icons>
              </TextBlock12>
              <ImagecontainerIcon alt="" src="/imagecontainer@2x.png" />
            </Gridcontainer>
            <Gridcontainer1>
              <Popup>
                <Separator />
                <Teamcontainer>
                  <Header4>
                    <MyTeam>My Team</MyTeam>
                    <SearchBar>
                      <Iconwrapper1>
                        <SearchIcon alt="" src="/search@2x.png" />
                      </Iconwrapper1>
                      <SearchAgents>Search Agents</SearchAgents>
                    </SearchBar>
                  </Header4>
                  <Player01>
                    <Contentcontainer>
                      <RobotAvatars3Icon alt="" src="/robot-avatars-3@2x.png" />
                      <Synthlete001>Synthlete_001</Synthlete001>
                    </Contentcontainer>
                    <Iconwrapper1>
                      <SearchIcon alt="" src="/chevron-right@2x.png" />
                    </Iconwrapper1>
                  </Player01>
                  <Player01>
                    <Contentcontainer>
                      <RobotAvatars3Icon alt="" src="/robot-avatars-18@2x.png" />
                      <Synthlete001>Synthlete_002</Synthlete001>
                    </Contentcontainer>
                    <SearchIcon alt="" src="/chevron-right@2x.png" />
                  </Player01>
                  <Player01>
                    <Contentcontainer>
                      <RobotAvatars3Icon alt="" src="/robot-avatars-39@2x.png" />
                      <Synthlete001>Synthlete_003</Synthlete001>
                    </Contentcontainer>
                    <SearchIcon alt="" src="/chevron-right@2x.png" />
                  </Player01>
                  <Player01>
                    <Contentcontainer>
                      <RobotAvatars3Icon alt="" src="/robot-avatars-10@2x.png" />
                      <Synthlete001>Synthlete_004</Synthlete001>
                    </Contentcontainer>
                    <SearchIcon alt="" src="/chevron-right@2x.png" />
                  </Player01>
                </Teamcontainer>
              </Popup>
              <TextBlock13>
                <SportsBetting>Manage a Team of AI Athletes</SportsBetting>
                <HostAWide>
                  Host a wide range of contest types, training classes, events,
                  and more!
                </HostAWide>
              </TextBlock13>
            </Gridcontainer1>
          </TemplateComponentsGridCon>
        </Containersection02>
        <Containersection05>
          <HorizontalContainer6>
            <HorizontalContainer7>
              <Heading4>
                <Heading5>Don’t Miss Your Chance</Heading5>
              </Heading4>
              <OnixDeliversTamperProof>
                <TheDigitalInfluencer>
                  Claim your spot in the future of athleticism, entertainment and
                  technology.
                </TheDigitalInfluencer>
                <TheDigitalInfluencer>
                  Join the waiting list today!
                </TheDigitalInfluencer>
              </OnixDeliversTamperProof>
            </HorizontalContainer7>
            <Button2>
              <StateLayer1>
                <Iconwrapper>
                  <ChevronDownIcon alt="" src="/chevron-down2@2x.png" />
                </Iconwrapper>
                <Textbutton>
                  <Textbutton1>COMING SOON</Textbutton1>
                </Textbutton>
                <Iconwrapper>
                  <VectorIcon1 alt="" src="/vector3@2x.png" />
                </Iconwrapper>
              </StateLayer1>
            </Button2>
          </HorizontalContainer6>
        </Containersection05>
        <Footer>
          <TemplateComponentsFooter>
            <Icons>
              <Containerlogo>
                <LogoSynthlete>
                  <LogoLacraLabsMark>
                    <Logo>
                      <VectorIcon alt="" src="/vector4@2x.png" />
                    </Logo>
                  </LogoLacraLabsMark>
                  <Typeface1>
                    <LogoSynthlete3>SYNTHLETE</LogoSynthlete3>
                  </Typeface1>
                </LogoSynthlete>
              </Containerlogo>
              <MenuItem>
                <Menu>
                  <GetStarted>ARENAVERSE</GetStarted>
                  <MenuChild />
                  <MenuInner />
                </Menu>
                <Menu1>
                  <GetStarted>SYNTHLETES</GetStarted>
                  <MenuChild />
                  <MenuInner />
                </Menu1>
                <Menu1>
                  <GetStarted>DOCS</GetStarted>
                  <MenuChild />
                  <MenuInner />
                </Menu1>
                <Menu1>
                  <GetStarted>ROADMAP</GetStarted>
                  <MenuChild />
                  <MenuInner />
                </Menu1>
              </MenuItem>
            </Icons>
            <BottomBanner>
              <EsportsOneInc>© 2023 ESPORTS ONE INC</EsportsOneInc>
              <Socials>
                <MonitorRecorderIcon alt="" src="/icondiscord@2x.png" />
                <SearchIcon alt="" src="/icontwitter@2x.png" />
                <SearchIcon alt="" src="/iconinstagram@2x.png" />
                <SearchIcon alt="" src="/facebook@2x.png" />
                <SearchIcon alt="" src="/telegram@2x.png" />
              </Socials>
            </BottomBanner>
          </TemplateComponentsFooter>
        </Footer>
      </HomepageDesktopLargeRoot>
    </React.Fragment>
  );
};

export default HomepageDesktopLarge;

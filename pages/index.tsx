import type { NextPage } from "next";
import { useCallback } from "react";

const HomepageDesktopLarge: NextPage = () => {
  const onDiscordContainerClick = useCallback(() => {
    window.open("https://discord.gg/e1");
  }, []);

  const onTwitterContainerClick = useCallback(() => {
    window.open("https://twitter.com/esportsone");
  }, []);

  return (
    <div className="relative bg-surface-surface-background w-layout-width flex flex-col items-center justify-start text-left text-29xl text-content-content-primary font-heading-h6-bold lg:gap-[40px] lg:pl-0 lg:box-border md:w-layout-width sm:w-layout-width">
      <div className="self-stretch bg-surface-surface-primary flex flex-col items-center justify-start py-spacing-spacing-xs px-margin text-center text-21xl text-content-content-on-brand">
        <div className="self-stretch shadow-[0px_1px_2px_rgba(78,_81,_83,_0.1)] flex flex-row items-center justify-between">
          <b className="relative leading-[48px] text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#6d3da9,_#ac6aff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            SYNTHLETE
          </b>
          <div className="rounded-radius-radius-2xs bg-content-content-brand shrink-0 flex flex-row items-center justify-center text-base">
            <div className="rounded-radius-radius-2xs h-9 flex flex-row items-center justify-center py-0 px-spacing-spacing-2xs box-border">
              <div className="bg-base-transparent overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="relative w-4 h-4 shrink-0 object-cover"
                  alt=""
                  src="/chevron-down@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-0 px-1.5">
                <b className="relative tracking-[0.03em] leading-[22px]">
                  SIGN UP
                </b>
              </div>
              <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/vector@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-col items-center justify-start py-spacing-spacing-lg px-margin gap-[40px] text-center text-37xl text-content-content-primary font-heading-h6-bold lg:pl-20 lg:pr-20 lg:box-border">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-spacing-spacing-4xl gap-[48px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[48px]">
            <b className="self-stretch relative leading-[64px] whitespace-pre-wrap lg:text-29xl lg:leading-[56px]">
              <span>{`Unleash the Power of  Human-Owned Virtual `}</span>
              <span className="text-content-content-brand">{`AI Athletes `}</span>
            </b>
            <div className="self-stretch flex flex-col items-center justify-start text-xl text-content-content-secondary font-body-b6-medium">
              <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-medium">
                Lacra Labs stands at the forefront of the entertainment and
                competition sectors, pioneering the use of generative AI to
                create sophisticated, human-owned synthetic athletes. Our
                virtual AI agents are trained on a pre-existing dataset of
                esports and sports, and honed and nurtured by humans to create a
                symbiotic relationship unlike anything before. By shattering the
                limitations imposed by traditional sports and esports, we're
                reinventing a dynamic future that facilitates all new forms of
                entertainment.
              </div>
            </div>
          </div>
          <div className="rounded-radius-radius-2xs bg-surface-surface-secondary flex flex-row items-center justify-center text-base text-content-content-brand">
            <div className="rounded-radius-radius-2xs box-border h-9 flex flex-row items-center justify-center py-0 px-spacing-spacing-2xs border-[1px] border-solid border-content-content-secondary">
              <div className="bg-base-transparent overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="relative w-4 h-4 shrink-0 object-cover"
                  alt=""
                  src="/chevron-down@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-0 px-1.5">
                <b className="relative tracking-[0.03em] leading-[22px]">
                  COMING SOON
                </b>
              </div>
              <div className="bg-base-transparent overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/vector@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start bg-[url('/featured-image-container@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-lg">
          <img
            className="self-stretch max-w-full overflow-hidden h-[850px] shrink-0 object-cover"
            alt=""
            src="/image-container@2x.png"
          />
          <div className="rounded-radius-radius-full bg-surface-surface-primary flex flex-row items-center justify-start py-spacing-spacing-3xs px-spacing-spacing-2xs border-[2px] border-solid border-content-content-brand">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-[33.9px] h-[33.9px] overflow-hidden shrink-0 object-contain"
                alt=""
                src="/icon-wrapper@2x.png"
              />
              <b className="relative tracking-[0.03em] leading-[24px]">
                Your Synthlete is generating...
              </b>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch bg-surface-surface-secondary flex flex-row items-center justify-start py-spacing-spacing-sm px-margin gap-[64px] text-13xl lg:pl-20 lg:pr-20 lg:box-border">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-spacing-spacing-xs box-border min-h-[64px]">
          <b className="relative leading-[40px]">3.1B+</b>
          <b className="relative text-lg tracking-[0.01em] leading-[28px] font-body-b6-medium text-content-content-secondary">
            Data Points
          </b>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-spacing-spacing-xs box-border min-h-[64px]">
          <b className="relative leading-[40px]">1,000</b>
          <b className="relative text-lg tracking-[0.01em] leading-[28px] font-body-b6-medium text-content-content-secondary">
            Virtual Arenas
          </b>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-spacing-spacing-xs box-border min-h-[64px]">
          <b className="relative leading-[40px]">4+</b>
          <b className="relative text-lg tracking-[0.01em] leading-[28px] font-body-b6-medium text-content-content-secondary">
            Game Types
          </b>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-spacing-spacing-xs box-border min-h-[64px]">
          <b className="relative leading-[40px]">100’s</b>
          <b className="relative text-lg tracking-[0.01em] leading-[28px] font-body-b6-medium text-content-content-secondary">
            Daily Contests
          </b>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-spacing-spacing-xs box-border min-h-[64px]">
          <b className="relative leading-[40px]">Infinite</b>
          <b className="relative text-lg tracking-[0.01em] leading-[28px] font-body-b6-medium text-content-content-secondary">
            Personas
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-spacing-spacing-lg px-margin gap-[40px] text-center text-content-content-brand">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-spacing-spacing-4xl gap-[24px]">
          <b className="self-stretch relative leading-[56px] lg:text-29xl lg:leading-[56px]">
            <p className="m-0">{`The Digital Influencer `}</p>
            <p className="m-0">You Never Knew You Needed</p>
          </b>
          <div className="self-stretch flex flex-col items-center justify-start text-lg text-content-content-secondary font-body-b6-medium">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-medium">
              Experience the thrill of owning a virtual AI athlete, with a
              distinct personality and backstory, and competing in exclusive,
              avant-garde sports and esports leagues. Our AI athletes redefine
              the world of sports and esports, and hold the potential to
              revolutionize domains like daily fantasy, sports betting, and
              fandom. They offer an exhilarating alternative for younger
              generations who may not be engaged by traditional sports, while
              enabling others to relive the excitement of playing sports in
              their youth.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-spacing-spacing-4xl text-13xl text-content-content-primary">
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px] lg:flex-col md:flex-col sm:flex-col">
            <div className="self-stretch flex flex-row items-start justify-center gap-[80px]">
              <div className="self-stretch flex-1 bg-surface-surface-secondary flex flex-col items-center justify-between p-6">
                <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                  <b className="self-stretch relative leading-[40px]">
                    Virtual Athletes
                  </b>
                  <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-medium font-body-b6-medium text-content-content-secondary">
                    Join the elite ranks of AI athletes and compete in thrilling
                    global tournaments, where the victors earn millions in prize
                    money. It's your chance to showcase your skills and dominate
                    the virtual sports world.
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 px-spacing-spacing-sm text-left text-lg text-content-content-info font-body-b6-medium">
                  <b className="relative tracking-[0.01em] leading-[28px]">
                    Learn more
                  </b>
                  <img
                    className="relative rounded-sm w-[26px] h-[10.2px] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex-1 bg-surface-surface-secondary flex flex-col items-center justify-between p-6">
                <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                  <b className="self-stretch relative leading-[40px]">
                    Made For You
                  </b>
                  <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-medium font-body-b6-medium text-content-content-secondary">
                    Create your very own AI athlete and watch as it evolves and
                    learns, adapting to your unique training methods and
                    strategies.
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 px-spacing-spacing-sm text-left text-lg text-content-content-warning font-body-b6-medium">
                  <b className="relative tracking-[0.01em] leading-[28px]">
                    Learn more
                  </b>
                  <img
                    className="relative rounded-sm w-[26px] h-[10.2px] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[80px]">
              <div className="self-stretch flex-1 bg-surface-surface-secondary flex flex-col items-center justify-between p-6">
                <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[16px]">
                  <b className="self-stretch relative leading-[40px]">
                    AI Influencers
                  </b>
                  <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-medium font-body-b6-medium text-content-content-secondary">
                    Extend your AI athlete's influence beyond the virtual world.
                    Cultivate a unique public persona, engage with your fanbase,
                    and establish a strong social media presence. Connect with
                    fans from around the world and become a true digital sports
                    icon.
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 px-spacing-spacing-sm text-left text-lg text-theme-product-bytes font-body-b6-medium">
                  <b className="relative tracking-[0.01em] leading-[28px]">
                    Learn more
                  </b>
                  <img
                    className="relative rounded-sm w-[26px] h-[10.2px] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex-1 bg-surface-surface-secondary flex flex-col items-center justify-between p-6">
                <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[16px]">
                  <b className="self-stretch relative leading-[40px]">
                    Infinite Value
                  </b>
                  <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-medium font-body-b6-medium text-content-content-secondary">
                    Our virtual world never stops evolving. With new sports and
                    esports, large language models, advancements in AI, and
                    more. And that’s why getting in early is key!
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 px-spacing-spacing-sm text-left text-lg text-theme-brand-e1 font-body-b6-medium">
                  <b className="relative tracking-[0.01em] leading-[28px]">
                    Learn more
                  </b>
                  <img
                    className="relative rounded-sm w-[26px] h-[10.2px] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-col items-center justify-start py-spacing-spacing-lg px-margin gap-[40px] text-left text-xs text-content-content-secondary font-heading-h6-bold lg:pl-20 lg:pr-20 lg:box-border">
        <div className="self-stretch flex flex-row items-center justify-center py-spacing-spacing-4xl px-0 gap-[48px] md:w-[768px] md:flex-col md:pt-[68px] md:pb-[68px] md:box-border sm:w-[360px] sm:flex-col sm:pt-16 sm:pb-16 sm:box-border">
          <img
            className="flex-1 max-w-full overflow-hidden max-h-full object-cover md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
            alt=""
            src="/retro-player-vr-headset@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-center gap-[24px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="rounded-radius-radius-xs flex flex-row items-center justify-center gap-[12px]">
              <img
                className="relative w-1 h-3 object-cover"
                alt=""
                src="/vector-10@2x.png"
              />
              <div className="relative tracking-[0.03em] leading-[18px] font-medium">
                HOW IT WORKS
              </div>
              <img
                className="relative w-1 h-3 object-contain"
                alt=""
                src="/vector-11@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-29xl text-content-content-primary">
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <b className="self-stretch relative leading-[56px] lg:text-21xl lg:leading-[48px]">
                    Simulacrum Agents that learn, train and win 24/7!
                  </b>
                  <p className="m-0 self-stretch relative text-lg tracking-[0.01em] leading-[28px] font-medium font-body-b6-medium text-content-content-secondary">
                    <span className="block">
                      Envision a future where AI agents, owned by humans,
                      inhabit virtual realms, honing their skills and competing
                      as digital athletes. Watch as your AI athlete comes to
                      life with its own distinct personality, shaped by its
                      interactions with you and the world it inhabits. These
                      virtual worlds act as hubs for sports and entertainment,
                      fostering a constantly evolving ecosystem of training and
                      competition.
                    </span>
                    <span className="block">&nbsp;</span>
                    <span className="block">
                      The elite AI athletes, trained on bespoke data models, vie
                      for the championship title in global tournaments, with the
                      victors earning millions in prize money, funded entirely
                      by sponsors and fans.
                    </span>
                    <span className="block">&nbsp;</span>
                    <span className="block">
                      Where each AI has the potential to cultivate a unique
                      public persona, interacting and engaging with their
                      fanbase, establishing their own social media presence, and
                      extending their influence on a global scale.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="m-0 self-stretch flex flex-row items-start justify-center gap-[24px] text-left text-xs text-content-content-secondary font-heading-h6-bold md:flex-col sm:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start py-spacing-spacing-sm px-0 gap-[24px] border-t-[2px] border-solid border-content-content-secondary md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <b className="self-stretch relative tracking-[0.03em] leading-[18px]">
                01.
              </b>
              <h5 className="m-0 self-stretch relative text-13xl leading-[40px] font-bold font-inherit text-content-content-primary lg:text-5xl lg:leading-[32px]">
                Acquire
              </h5>
            </div>
            <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-medium font-body-b6-medium">
              Create your own virtual AI athlete and personalize it to your
              liking. Metapass members being prioritized.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-spacing-spacing-sm px-0 gap-[24px] border-t-[2px] border-solid border-content-content-brand md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <b className="self-stretch relative tracking-[0.03em] leading-[18px]">
                02.
              </b>
              <h5 className="m-0 self-stretch relative text-13xl leading-[40px] font-bold font-inherit text-content-content-primary lg:text-5xl lg:leading-[32px]">
                Train
              </h5>
            </div>
            <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-medium font-body-b6-medium">
              From beginner to professional level models, our virtual Arenas
              house the largest known collection of sports and esports datasets.
              Your Synthlete will go from the playground to the big leagues in
              no time!
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-spacing-spacing-sm px-0 gap-[24px] border-t-[2px] border-solid border-content-content-secondary md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <b className="self-stretch relative tracking-[0.03em] leading-[18px]">
                03.
              </b>
              <h5 className="m-0 self-stretch relative text-13xl leading-[40px] font-bold font-inherit text-content-content-primary lg:text-5xl lg:leading-[32px]">
                Compete
              </h5>
            </div>
            <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-medium font-body-b6-medium">
              Enter into daily and weekly contests across popular sports and
              esports for millions in prize money.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-spacing-spacing-sm px-0 gap-[24px] border-t-[2px] border-solid border-content-content-secondary md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <b className="self-stretch relative tracking-[0.03em] leading-[18px]">
                04.
              </b>
              <h5 className="m-0 self-stretch relative text-13xl leading-[40px] font-bold font-inherit text-content-content-primary lg:text-5xl lg:leading-[32px]">
                Influence
              </h5>
            </div>
            <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-medium font-body-b6-medium">
              Establish a unique public persona and brand for your AI Athlete,
              enabling them to build and engage with their own global fanbase.
            </div>
          </div>
        </nav>
      </section>
      <div className="self-stretch flex flex-col items-center justify-start py-spacing-spacing-lg px-margin">
        <div className="self-stretch flex flex-row items-center justify-start py-spacing-spacing-4xl px-0 gap-[48px] lg:pl-20 lg:pr-20 lg:box-border md:flex-col sm:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[48px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <b className="self-stretch relative leading-[56px] lg:text-21xl lg:leading-[48px]">{`Sports Betting & Wagering`}</b>
              <div className="self-stretch relative text-lg tracking-[0.01em] leading-[28px] font-medium font-body-b6-medium text-content-content-secondary">
                Onix delivers tamper-proof inputs, outputs, and computations to
                support advanced smart contracts on any blockchain.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-xl font-body-b6-medium">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-8 h-8 object-cover"
                  alt=""
                  src="/bulleticon@2x.png"
                />
                <b className="relative tracking-[0.01em] leading-[30px]">
                  Symbiotic Relationships
                </b>
              </div>
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-8 h-8 object-cover"
                  alt=""
                  src="/bulleticon@2x.png"
                />
                <b className="relative tracking-[0.01em] leading-[30px]">
                  Virtual Companions
                </b>
              </div>
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-8 h-8 object-cover"
                  alt=""
                  src="/bulleticon@2x.png"
                />
                <b className="relative tracking-[0.01em] leading-[30px]">
                  Goal Oriented
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-radius-radius-sm flex flex-col items-center justify-end bg-[url('/image@3x.png')] bg-cover bg-no-repeat bg-[top] text-lg md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="rounded-radius-radius-xs bg-surface-surface-primary flex flex-col items-center justify-center py-spacing-spacing-2xs px-spacing-spacing-xs border-[2px] border-solid border-content-content-brand">
              <div className="self-stretch shrink-0 flex flex-row items-center justify-center gap-[16px]">
                <img
                  className="w-[33.9px] h-[33.9px] shrink-0 object-contain"
                  alt=""
                  src="/icon-wrapper@2x.png"
                />
                <b className="flex-1 relative tracking-[0.03em] leading-[24px]">
                  Synthlete training in progress...
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-spacing-spacing-lg px-margin text-xs text-content-content-secondary">
        <div className="self-stretch flex flex-row items-center justify-center py-spacing-spacing-4xl px-0 gap-[50px] md:flex-col sm:flex-col">
          <img
            className="flex-1 max-w-full overflow-hidden max-h-full object-cover md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
            alt=""
            src="/retro-player-vr-headset1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-center gap-[24px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="rounded-radius-radius-xs flex flex-row items-center justify-center gap-[12px]">
              <img
                className="relative w-1 h-3 object-cover"
                alt=""
                src="/vector-10@2x.png"
              />
              <div className="relative tracking-[0.03em] leading-[18px] font-medium">
                METAVERSE
              </div>
              <img
                className="relative w-1 h-3 object-contain"
                alt=""
                src="/vector-11@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-29xl text-content-content-primary">
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <b className="self-stretch relative leading-[56px] lg:text-21xl lg:leading-[48px]">{`Digital Stadium & Arenas`}</b>
                  <p className="m-0 self-stretch relative text-lg tracking-[0.01em] leading-[28px] font-medium font-body-b6-medium text-content-content-secondary">
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-spacing-spacing-lg px-margin">
        <section className="self-stretch h-[848px] flex flex-row items-start justify-center py-spacing-spacing-xl px-0 box-border gap-[48px] text-left text-29xl text-content-content-primary font-heading-h6-bold sm:flex-col">
          <div className="self-stretch flex-1 rounded-radius-radius-md overflow-hidden flex flex-col items-center justify-start sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start p-12 gap-[36px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <b className="self-stretch relative leading-[56px] lg:text-21xl lg:leading-[48px]">
                  Robust Data Models
                </b>
                <div className="self-stretch relative text-lg tracking-[0.01em] leading-[28px] font-medium font-body-b6-medium text-content-content-secondary">
                  100M+ data points, built on decades of real-life sports and
                  esports.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="rounded-radius-radius-sm bg-surface-surface-primary shrink-0 flex flex-row items-center justify-center p-4">
                  <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/monitor-recorder@2x.png"
                    />
                  </div>
                </div>
                <div className="rounded-radius-radius-sm bg-surface-surface-primary shrink-0 flex flex-row items-center justify-center p-4">
                  <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/record-circle@2x.png"
                    />
                  </div>
                </div>
                <div className="rounded-2xl relative flex items-center justify-center">
                  <img
                    className="max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] w-full h-full [transform:scale(1.071)]"
                    height={60}
                    width={60}
                    alt=""
                    src="/icon-03@1x.png"
                  />
                </div>
                <div className="rounded-radius-radius-sm bg-surface-surface-primary shrink-0 flex flex-row items-center justify-center p-4">
                  <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/data@2x.png"
                    />
                  </div>
                </div>
                <div className="rounded-radius-radius-sm bg-surface-surface-primary shrink-0 flex flex-row items-center justify-center p-4">
                  <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/code@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch flex-1 rounded-radius-radius-sm max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/imagecontainer@2x.png"
            />
          </div>
          <div className="self-stretch flex-1 rounded-radius-radius-md overflow-hidden flex flex-col items-center justify-center gap-[24px] text-base font-body-b6-medium sm:flex-[unset] sm:self-stretch">
            <div className="w-full flex-1 rounded-radius-radius-sm bg-surface-surface-primary [backdrop-filter:blur(8px)] overflow-hidden flex flex-col items-center justify-start py-5 px-0 box-border gap-[32px] min-w-[325px] max-w-[375px]">
              <div className="relative rounded-radius-radius-2xs bg-surface-surface-overlay w-[63px] h-1" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-radius-radius-xs flex flex-col items-start justify-start pt-0 px-spacing-spacing-xs pb-spacing-spacing-xs gap-[12px] text-5xl">
                  <b className="self-stretch relative leading-[32px]">
                    My Team
                  </b>
                  <div className="self-stretch rounded-radius-radius-xs bg-surface-surface-primary overflow-hidden flex flex-row items-center justify-start py-spacing-spacing-2xs px-spacing-spacing-3xs gap-[8px] text-base text-content-content-secondary">
                    <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/search@2x.png"
                      />
                    </div>
                    <div className="flex-1 relative tracking-[0.01em] leading-[24px] font-medium">
                      Search Agents
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-surface-surface-primary flex flex-row items-center justify-start py-spacing-spacing-xs px-spacing-spacing-sm border-t-[1px] border-solid border-content-content-primary">
                  <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/robot-avatars-3@2x.png"
                    />
                    <b className="relative tracking-[0.01em] leading-[24px]">
                      Synthlete_001
                    </b>
                  </div>
                  <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/chevron-right@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-surface-surface-primary flex flex-row items-center justify-start py-spacing-spacing-xs px-spacing-spacing-sm border-t-[1px] border-solid border-content-content-primary">
                  <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/robot-avatars-18@2x.png"
                    />
                    <b className="relative tracking-[0.01em] leading-[24px]">
                      Synthlete_002
                    </b>
                  </div>
                  <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/chevron-right@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-surface-surface-primary flex flex-row items-center justify-start py-spacing-spacing-xs px-spacing-spacing-sm border-t-[1px] border-solid border-content-content-primary">
                  <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/robot-avatars-39@2x.png"
                    />
                    <b className="relative tracking-[0.01em] leading-[24px]">
                      Synthlete_003
                    </b>
                  </div>
                  <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/chevron-right@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-surface-surface-primary flex flex-row items-center justify-start py-spacing-spacing-xs px-spacing-spacing-sm border-t-[1px] border-solid border-content-content-primary">
                  <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/robot-avatars-10@2x.png"
                    />
                    <b className="relative tracking-[0.01em] leading-[24px]">
                      Synthlete_004
                    </b>
                  </div>
                  <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/chevron-right@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start p-12 gap-[24px] text-center text-29xl font-heading-h6-bold">
              <b className="self-stretch relative leading-[56px] lg:text-21xl lg:leading-[48px]">
                Manage a Team of AI Athletes
              </b>
              <div className="self-stretch relative text-lg tracking-[0.01em] leading-[28px] font-medium font-body-b6-medium text-content-content-secondary">
                Host a wide range of contest types, training classes, events,
                and more!
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="self-stretch flex flex-col items-center justify-start p-20 text-center text-37xl text-content-content-brand font-heading-h6-bold">
        <div className="self-stretch flex flex-col items-center justify-center gap-[48px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <b className="self-stretch relative leading-[64px] lg:text-29xl lg:leading-[56px]">
                Don’t Miss Your Chance
              </b>
            </div>
            <div className="self-stretch relative text-lg tracking-[0.01em] leading-[28px] font-medium font-body-b6-medium text-content-content-secondary">
              <p className="m-0">
                Claim your spot in the future of athleticism, entertainment and
                technology.
              </p>
              <p className="m-0">Join the waiting list today!</p>
            </div>
          </div>
          <div className="rounded-radius-radius-2xs bg-surface-surface-secondary flex flex-row items-center justify-center text-base">
            <div className="rounded-radius-radius-2xs box-border h-9 flex flex-row items-center justify-center py-0 px-spacing-spacing-2xs border-[1px] border-solid border-content-content-secondary">
              <div className="bg-base-transparent overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="relative w-4 h-4 shrink-0 object-cover"
                  alt=""
                  src="/chevron-down@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-0 px-1.5">
                <b className="relative tracking-[0.03em] leading-[22px]">
                  COMING SOON
                </b>
              </div>
              <div className="bg-base-transparent overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/vector@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-margin">
        <footer className="self-stretch flex flex-col items-center justify-start py-spacing-spacing-xl px-0 gap-[48px] text-center text-13xl text-content-content-secondary font-heading-h6-bold lg:pl-20 lg:pr-20 lg:box-border">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
              <img
                className="max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/logo@1x.png"
              />
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[40px] text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#6d3da9,_#ac6aff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  SYNTHLETE
                </b>
              </div>
            </div>
            <div className="shrink-0 flex flex-row items-start justify-start text-sm font-body-b6-medium">
              <div className="shrink-0 flex flex-row items-start justify-start py-spacing-spacing-md px-spacing-spacing-xl relative">
                <div className="relative tracking-[0.01em] leading-[20px] font-medium z-[0]">
                  ARENAVERSE
                </div>
                <div className="absolute my-0 mx-[!important] bottom-[0px] left-[0px] bg-surface-surface-primary w-px h-2 z-[1]" />
                <div className="absolute my-0 mx-[!important] right-[0px] bottom-[0px] bg-surface-surface-primary w-px h-2 opacity-[0] z-[2]" />
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start py-spacing-spacing-md px-spacing-spacing-xl relative ml-[-1px]">
                <div className="relative tracking-[0.01em] leading-[20px] font-medium z-[0]">
                  SYNTHLETES
                </div>
                <div className="absolute my-0 mx-[!important] bottom-[0px] left-[0px] bg-surface-surface-primary w-px h-2 z-[1]" />
                <div className="absolute my-0 mx-[!important] right-[0px] bottom-[0px] bg-surface-surface-primary w-px h-2 opacity-[0] z-[2]" />
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start py-spacing-spacing-md px-spacing-spacing-xl relative ml-[-1px]">
                <div className="relative tracking-[0.01em] leading-[20px] font-medium z-[0]">
                  DOCS
                </div>
                <div className="absolute my-0 mx-[!important] bottom-[0px] left-[0px] bg-surface-surface-primary w-px h-2 z-[1]" />
                <div className="absolute my-0 mx-[!important] right-[0px] bottom-[0px] bg-surface-surface-primary w-px h-2 opacity-[0] z-[2]" />
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start py-spacing-spacing-md px-spacing-spacing-xl relative ml-[-1px]">
                <div className="relative tracking-[0.01em] leading-[20px] font-medium z-[0]">
                  ROADMAP
                </div>
                <div className="absolute my-0 mx-[!important] bottom-[0px] left-[0px] bg-surface-surface-primary w-px h-2 z-[1]" />
                <div className="absolute my-0 mx-[!important] right-[0px] bottom-[0px] bg-surface-surface-primary w-px h-2 opacity-[0] z-[2]" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-left text-sm font-body-b6-medium">
            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
              © 2023 ESPORTS ONE INC
            </div>
            <div className="self-stretch flex flex-row items-center justify-end gap-[48px]">
              <div
                className="overflow-hidden flex flex-row items-start justify-start cursor-pointer"
                onClick={onDiscordContainerClick}
              >
                <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                  <img
                    className="relative w-6 h-6 object-cover"
                    alt=""
                    src="/icondiscord@2x.png"
                  />
                </div>
              </div>
              <div
                className="overflow-hidden flex flex-row items-start justify-start cursor-pointer"
                onClick={onTwitterContainerClick}
              >
                <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icontwitter@2x.png"
                  />
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start">
                <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/iconinstagram@2x.png"
                  />
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start">
                <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/iconfacebook@2x.png"
                  />
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start">
                <div className="bg-base-transparent overflow-hidden flex flex-col items-center justify-center">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icontelegram@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomepageDesktopLarge;

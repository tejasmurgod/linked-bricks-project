import React from "react";

import { Button, Img, Line, Text } from "components";

type HomepageFooterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "texthereOne"
  | "texthereTwo"
  | "texthereThree"
  | "texthereFour"
  | "texthereFive"
  | "texthereSix"
  | "texthereSeven"
  | "texthereEight"
  | "texthereNine"
  | "texthereTen"
  | "p2023linkedbrickone"
  | "languageOne"
  | "subscribe"
> &
  Partial<{
    texthereOne: string;
    texthereTwo: string;
    texthereThree: string;
    texthereFour: string;
    texthereFive: string;
    texthereSix: string;
    texthereSeven: string;
    texthereEight: string;
    texthereNine: string;
    texthereTen: string;
    p2023linkedbrickone: string;
    languageOne: string;
    subscribe: string;
  }>;

const HomepageFooter: React.FC<HomepageFooterProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[496px] md:h-auto inset-x-[0] items-center justify-start mx-auto px-2.5 w-auto md:w-full"
          style={{ backgroundImage: "url('images/img_bg.png')" }}
        >
          <div className="bg-black-900_b0 flex flex-col gap-14 items-center justify-end p-[60px] md:px-10 sm:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-[43px] items-start justify-between mt-[43px] w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereOne}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereTwo}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereThree}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereFour}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereFive}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereSix}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereSeven}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereEight}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereNine}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtExoSemiBold18WhiteA700"
                  >
                    {props?.texthereTen}
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-gray-500 h-px w-[95%]" />
            <div className="flex flex-col gap-4 items-end justify-center w-full">
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-end w-full">
                <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start rounded-[50%] w-10">
                  <div className="flex flex-col h-6 items-end justify-start rounded w-6">
                    <Img
                      className="h-[22px] mr-1"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start rounded-[50%] w-10">
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_link.svg"
                      alt="link"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start rounded-[50%] w-10">
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      className="h-4 my-[3px]"
                      src="images/img_warning.svg"
                      alt="warning"
                    />
                  </div>
                </div>
                <Button
                  className="flex flex-1 h-10 items-center justify-center w-10"
                  shape="circle"
                  color="gray_50"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                </Button>
              </div>
              <div className="flex flex-col items-center justify-end py-2.5 w-full">
                <Text
                  className="text-base text-right text-white-A700 w-auto"
                  size="txtExoMedium16"
                >
                  {props?.p2023linkedbrickone}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start max-w-[710px] mx-auto p-4 rounded-[12px] shadow-bs1 top-[0] w-full">
          <div className="border border-amber-100 border-solid flex md:flex-col flex-row gap-2.5 items-center justify-start pl-4 rounded-[12px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Text
                className="text-gray-500_01 text-lg w-auto"
                size="txtExoRegular18Gray50001"
              >
                {props?.languageOne}
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[146px]"
              rightIcon={
                <Img
                  className="h-6 mt-px ml-2"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
              shape="round"
              color="amber_A700"
              size="md"
              variant="fill"
            >
              <div className="!text-black-900 font-exo font-medium text-center text-lg">
                {props?.subscribe}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageFooter.defaultProps = {
  texthereOne: "Sell your property",
  texthereTwo: "Let your property",
  texthereThree: "Invest your property",
  texthereFour: "Rent a property",
  texthereFive: "Buy a property",
  texthereSix: "Invest in a property",
  texthereSeven: "About us",
  texthereEight: "Contact us",
  texthereNine: "Privacy policy",
  texthereTen: "Terms of use",
  p2023linkedbrickone: "© 2023 Linked Bricks Limited. All rights reserved.",
  languageOne: "Subscribe to our newsletter ",
  subscribe: "Subscribe",
};

export default HomepageFooter;

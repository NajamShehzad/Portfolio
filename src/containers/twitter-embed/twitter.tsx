import React, { FC, Suspense, useContext } from "react";
import "./twitter.css";
import Loading from "../loading/Loading";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div class='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut(): void {
  setTimeout(function () {
    const twitterElement = document.getElementById("twitter");
    if (twitterElement && !twitterElement.innerHTML.includes("iframe")) {
      twitterElement.innerHTML = cantDisplayError;
    }
  }, 10000);
}
const widthScreen = window.screen.width;

const Twitter: FC = () => {
  const { isDark } = useContext(StyleContext) || { isDark: false };

  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{ height: 400, width: widthScreen }}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
              onLoad={timeOut}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
};

export default Twitter;

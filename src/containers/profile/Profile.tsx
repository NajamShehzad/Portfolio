import React, { FC, useState, useEffect, lazy, Suspense } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import { najamProfile } from "./profileData";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(
  () => import("../../components/githubProfileCard/GithubProfileCard"),
);

const Profile: FC = () => {
  const [prof, setrepo] = useState<any>([]);
  function setProfileFunction(array: any): void {
    setrepo(array);
  }
  function getProfileData(): void {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
      {
        user(login:"${openSource.githubUserName}") {
          name
          bio
          isHireable
          avatarUrl
          location
        }
    }
      `,
      })
      .then(result => {
        console.log({ first: result.data.user });
        setProfileFunction(result.data.user);
      })
      .catch(function (error) {
        console.log(error);
        setProfileFunction("Error");
        console.log("Because of this Error Contact Section is Showed instead of Profile");
        (openSource as any).showGithubProfile = "false";
      });
  }
  // useEffect(() => {
  //   if (openSource.showGithubProfile === "true") {
  //     getProfileData();
  //   }
  // }, []);

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      setProfileFunction(najamProfile);
    }
  }, []);

  if (
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
};

export default Profile;

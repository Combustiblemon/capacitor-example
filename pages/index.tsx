import { App } from "@capacitor/app";
import type { NextPage } from "next";
import { LocalNotifications } from "@capacitor/local-notifications";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import {
  Wrapper,
  Image,
  Text,
  Button,
  ImageWrapper,
} from "../styles/index.styles";

const fireNotification = () => {
  // We can fire notifications from the app using the local-notification
  // plugin. https://capacitorjs.com/docs/apis/local-notifications
  LocalNotifications.schedule({
    // Our notification need to be in an array of type
    // LocalNotificationSchema
    // https://capacitorjs.com/docs/apis/local-notifications#localnotificationschema
    notifications: [
      { title: "test", body: "Hello i am a test notification :D", id: 0 },
    ],
  });
};

const Home: NextPage = () => {
  useEffect(() => {
    // By adding a listener to the backButton we remove its default
    // behaviour of closing the app.
    App.addListener("backButton", (event) => {
      // This condition checks if there is a page to route back to.
      // If there is not, the app closes.
      if (event.canGoBack) {
        window.history.back();
      } else {
        App.exitApp();
      }
    });
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Image src="/img/favicon.ico" alt="icon" width={30} height={30} />
        <Text>Hello! This is a sample app using capacitor and next.js!</Text>
        <Button onClick={() => fireNotification()}>Notification</Button>
        <br />
        <br />
        <br />
        <br />
        <ImageWrapper>
          <Text>{"Here's"} a pretty puppy</Text>
          <Image
            src="/img/puppy.jpg"
            alt="a cute puppy"
            width={280}
            height={480}
          />
          <Text>So cute {">.<"}</Text>
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Home;

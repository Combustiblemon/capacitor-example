import { Storage } from "@capacitor/storage";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Wrapper, Button, Header } from "../styles/storage.styles";

const StoragePage: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [savedText, setSavedText] = useState<string | null>("");

  useEffect(() => {
    // We use an async function to get the saved values we want
    // from the filesystem.
    const accessLocalStorage = async () => {
      const value = (await Storage.get({ key: "savedText" })).value;
      setSavedText(value);
    };

    accessLocalStorage();
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Header>Saved: {savedText}</Header>
        <input onChange={(e) => setText(e.target.value.trim())} />
        <Button
          onClick={() => {
            // To save a value we have to pass the set function an
            // object with { key, value } parameters
            Storage.set({
              key: "savedText",
              value: text,
            });
            // We also update the state that tracks the text we have saved
            // in storage.
            setSavedText(text);
          }}
        >
          Save text
        </Button>
        <br />
        <br />
        <br />
        <Button
          onClick={() => {
            setSavedText("");
            Storage.clear();
          }}
        >
          Clear saved
        </Button>
      </Wrapper>
    </Layout>
  );
};

export default StoragePage;

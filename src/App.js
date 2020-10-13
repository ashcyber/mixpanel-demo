import React from "react";
import mixpanel from "mixpanel-browser";
import {
  signUpEvent,
  loginEvent,
  playSong,
  purchaseSong,
  logout,
} from "./mixpanel-utils";

mixpanel.init("a66c59d0d519a2cadb5ae696e9c5c8e7", {
  debug: true,
  loaded: function (mixpanel) {
    console.log(mixpanel.get_distinct_id());
  },
});

const testData = {
  name: "test",
  email: "test3@gmail.com",
  title: "testTitle",
  artist: "testArtist",
  genre: "testGenre",
};

const prettyJSON = (obj) => {
  return JSON.stringify(obj, 0, 2);
};

function App() {
  return (
    <React.Fragment>
      <fieldset>
        <h3>Sign Up</h3>
        <pre>{prettyJSON({ name: testData.name, email: testData.email })}</pre>
        <button onClick={() => signUpEvent(testData.email, testData.name)}>
          Trigger
        </button>
      </fieldset>
      <br />

      <fieldset>
        <h3>Login</h3>
        <pre>{prettyJSON({ email: testData.email })}</pre>
        <button onClick={() => loginEvent(testData.email)}>Trigger</button>
      </fieldset>
      <br />

      <fieldset>
        <h3>Play a Song</h3>
        <pre>
          {prettyJSON({
            title: testData.artist,
            artist: testData.artist,
            genre: testData.genre,
          })}
        </pre>
        <button
          onClick={() =>
            playSong(testData.title, testData.artist, testData.genre)
          }
        >
          Trigger
        </button>
      </fieldset>
      <br />

      <fieldset>
        <h3>Buy a Song</h3>
        <pre>
          {prettyJSON({
            title: testData.artist,
            artist: testData.artist,
            genre: testData.genre,
          })}
        </pre>
        <button
          onClick={() =>
            purchaseSong(testData.title, testData.artist, testData.genre)
          }
        >
          Trigger
        </button>
      </fieldset>
      <br />

      <fieldset>
        <h3>Log Out</h3>
        <button onClick={() => logout()}>Trigger</button>
      </fieldset>
      <br />
    </React.Fragment>
  );
}

export default App;

import mixpanel from "mixpanel-browser";

export const Events = Object.freeze({
  SIGN_UP: "Sign Up",
  LOGIN: "Login",
  PLAY_A_SONG: "Play A Song",
  BUY_A_SONG: "Buy A Song",
  LOGOUT: "Logout",
});

export const signUpEvent = (email, name) => {
  mixpanel.alias(email);
  mixpanel.track(Events.SIGN_UP);
  mixpanel.people.set({
    $email: email,
    $name: name,
  });
};

export const loginEvent = (email) => {
  mixpanel.identify(email);
  mixpanel.track(Events.LOGIN);
};

export const playSong = (title, artist, genre) => {
  mixpanel.track(Events.PLAY_A_SONG, {
    title,
    artist,
    genre,
  });
};

export const purchaseSong = (title, artist, genre) => {
  mixpanel.track(Events.BUY_A_SONG, {
    title,
    artist,
    genre,
  });
};

export const logout = () => {
  mixpanel.reset();
};

import React from "react";
import { Auth } from "./Auth";
import Controller from "./Controller";

// const { MODE } = __SNOWPACK_ENV__;

// console.log({ MODE });

// if ('serviceWorker' in navigator && location.hostname !== 'localhost') {

// need to work on what happens with sw in prod vs dev
// not actually unregistering in dev since
// MODE still shows up as production

if (typeof __SNOWPACK_ENV__ === 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
} else if (
  'serviceWorker' in navigator &&
  __SNOWPACK_ENV__.MODE === 'development'
) {
  (async () => {
    const registrations = await navigator.serviceWorker.getRegistrations();
    console.log(registrations);
    registrations.forEach((registration) => registration.unregister());
  })();
}

function App() {
  return (
    <Auth>
      <Controller />
    </Auth>
  );
}

export default App;

// if ("serviceWorker" in navigator && !__SNOWPACK_ENV__) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/sw.js");
//   });
// }

// if ("serviceWorker" in navigator && __SNOWPACK_ENV__?.MODE === "development") {
//   (async () => {
//     const registrations = await navigator.serviceWorker.getRegistrations();
//     console.log(registrations);
//     registrations.forEach((registration) => registration.unregister());
//   })();
// }
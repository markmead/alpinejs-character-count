import count from "../src/index.js";

document.addEventListener("alpine:init", () => {
  window.Alpine.plugin(count);
});

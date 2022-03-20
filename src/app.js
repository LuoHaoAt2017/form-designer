import dva from "dva";
const app = dva({
  onError(evt) {
    console.error(evt.message);
  }
});

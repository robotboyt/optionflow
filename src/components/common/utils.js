export const loadScript = () => {
  const script = document.createElement("script");
  script.src = "../../js/scripts.js";
  script.async = true;

  document.body.appendChild(script);

  return new Promise((resolve, reject) => {
    script.onload = resolve;
    script.onerror = reject;
  });
};

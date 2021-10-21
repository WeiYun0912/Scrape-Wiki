const statesEle = document.querySelector("#states");
const info = document.querySelector(".info");
const setUSStates = (states) => {
  states.forEach((state) => {
    const optionEle = document.createElement("option");
    optionEle.setAttribute("value", state.name);
    optionEle.textContent = state.name;
    statesEle.append(optionEle);
    optionEle.addEventListener("click", () => {
      info.innerHTML = `<pre>${JSON.stringify(state, null, 2)}</pre>`;
    });
  });
};

const getUSStates = async () => {
  const res = await fetch("/api/states");
  if (!res.ok) {
    throw new Error("Error!");
  }
  const states = await res.json();
  setUSStates(states);
};

getUSStates();

export const handleEnter = callback => event => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();

  const input = event.target;

  if (input.value) {
    callback(input.value.trim());
    input.value = "";
  }
};

export const handleCheckbox = callback => event => {
  const checkbox = event.target;
  callback(checkbox.checked);
};

export const handleChange = callback => event => {
  const input = event.target;
  callback(input.value);
};

export const handleKeyConfirm = (submit, cancel) => event => {
  if (event.key === "Enter") {
    submit(event);
  }
  if (event.key === "Escape") {
    cancel(event);
  }
};

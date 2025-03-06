const getInputNumbersValue = function (input: HTMLInputElement) {
  // Return stripped input value — just numbers
  return input.value.replace(/\D/g, '');
}

export const onPhonePaste = function (e: React.ClipboardEvent<HTMLInputElement>) {
  let input = e.currentTarget,
      inputNumbersValue = getInputNumbersValue(input);
  let pasted = e.clipboardData || window.ClipboardEvent;
  if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
          // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
          // formatting will be in onPhoneInput handler
          input.value = inputNumbersValue;
          return;
      }
  }
}

export const onPhoneInput = function (e: React.FormEvent<HTMLInputElement>) {
let input = e.currentTarget,
    inputNumbersValue = getInputNumbersValue(input),
    selectionStart = input.selectionStart,
    formattedInputValue = "";

if (!inputNumbersValue) {
    return input.value = "";
}

if (input.value.length != selectionStart) {
  console.log(e)
    // Editing in the middle of input, not last symbol
    if (
      (e.nativeEvent as Event & { data: string }).data &&
      /\D/g.test((e.nativeEvent as Event & { data: string }).data)
    ) {
      // Attempt to input non-numeric symbol
      input.value = inputNumbersValue;
    }
    return;
}

if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = input.value = firstSymbols + " ";
    if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;
}
export const onPhoneKeyDown = function (e: React.KeyboardEvent<HTMLInputElement>) {
  // Clear input after remove last symbol
  const input = e.target as HTMLInputElement;
  let inputValue = input.value.replace(/\D/g, "");
  if (e.key == "Backspace" && inputValue.length == 1) {
    input.value = "";
  }
}
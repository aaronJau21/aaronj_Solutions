export function hiddenMessage(
  refvar: { value: boolean },
  delay: number = 5000
) {
  setTimeout(() => {
    refvar.value = false;
  }, delay);
}

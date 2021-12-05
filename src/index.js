export default function (Alpine) {
  Alpine.directive(
    "count",
    (el, { expression, modifiers }, { evaluateLater, effect }) => {
      let maxLength = modifiers[0] || false;
      let getInputValue = evaluateLater(expression);

      effect(() => {
        getInputValue((string) => {
          let stringLength = string.length;

          el.innerText = maxLength ? maxLength - stringLength : stringLength;
        });
      });
    }
  );
}

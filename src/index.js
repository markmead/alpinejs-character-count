export default function (Alpine) {
  Alpine.directive(
    'count',
    (el, { expression, modifiers }, { evaluateLater, effect }) => {
      let firstModifier = modifiers[0]
      let modifierNumber = Number(firstModifier)
      let modifierTarget =
        !modifierNumber && document.querySelector(`[x-ref="${firstModifier}"]`)

      let getInputValue = evaluateLater(expression)

      effect(() => {
        getInputValue((string) => {
          let stringLength = string.length
          let maxLength = modifierTarget
            ? modifierTarget.maxLength
            : modifierNumber

          el.innerText = maxLength ? maxLength - stringLength : stringLength
        })
      })
    }
  )
}

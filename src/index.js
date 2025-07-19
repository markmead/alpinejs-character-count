export default function (Alpine) {
  Alpine.directive(
    'count',
    (el, { expression, modifiers }, { evaluateLater, effect }) => {
      const [firstModifier] = modifiers

      const modifierNumber = Number(firstModifier)
      const modifierTarget =
        !modifierNumber && document.querySelector(`[x-ref="${firstModifier}"]`)

      const getInputValue = evaluateLater(expression)

      effect(() => {
        getInputValue((inputValue) => {
          const stringLength = inputValue.length
          const maxLength = modifierTarget
            ? modifierTarget.maxLength
            : modifierNumber

          el.innerText = maxLength ? maxLength - stringLength : stringLength
        })
      })
    }
  )
}

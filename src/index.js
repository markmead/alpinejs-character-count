export default function (Alpine) {
  Alpine.directive(
    'count',
    (el, { expression, modifiers }, { evaluateLater, effect }) => {
      const [firstModifier] = modifiers

      const modifierNumber = Number(firstModifier)
      const isReference = Number.isNaN(modifierNumber) && firstModifier

      const parentComponent = el.closest('[x-data]') || document
      const targetElement = isReference
        ? parentComponent.querySelector(`[x-ref="${firstModifier}"]`)
        : null

      const getInputValue = evaluateLater(expression)

      effect(() => {
        getInputValue((inputValue) => {
          const charCount = inputValue?.length || 0

          let maxLimit = modifierNumber

          if (targetElement) {
            const maxAttr = targetElement.getAttribute('maxlength')

            maxLimit = maxAttr ? Number(maxAttr) : null
          }

          const hasLimit = !Number.isNaN(maxLimit) && maxLimit !== null

          el.textContent = hasLimit ? maxLimit - charCount : charCount
        })
      })
    }
  )
}

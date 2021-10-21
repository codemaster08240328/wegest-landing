export function toggleLegendOnClick(data: any, setData: (d: any) => void) {
  setData((previousData: any[]) => {
    return previousData.map((item: any) => {
      const isItem = item.id === data.id
      const newItem = { ...item }
      const hide = isItem ? !item.hide : item.hide

      if (item.hide || previousData.filter((d) => !d.hide).length > 1) {
        newItem.hide = hide

        if (hide && isItem) {
          newItem.originalValue = newItem.value
          newItem.originalColor = newItem.color
          newItem.value = 0
          newItem.color = 'transparent'
        } else if (!hide && isItem) {
          if (newItem.originalValue) newItem.value = newItem.originalValue
          if (newItem.originalColor) newItem.color = newItem.originalColor

          delete newItem.originalValue
          delete newItem.originalColor
        }
      }

      return newItem
    })
  })
}

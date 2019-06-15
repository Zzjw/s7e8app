export function showSuccess (text, icon = 'none') {
  wx.showToast({
    title: text,
    icon: icon
  })
}
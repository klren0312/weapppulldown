Page({
  data: {
    renderBlock: false,
    startTouchY: 0,
    windowHeight: 0,
    windowWidth: 200,
    topTop: 0,
    motto: 'Hello World',
    isOpen: false,
    showCamera: false
  },
  onLoad() {
    const a = wx.getSystemInfoSync()
    this.setData({
      windowHeight: a.windowHeight,
      windowWidth: a.windowWidth,
      topTop: -a.windowHeight
    })
    setTimeout(() => {
      this.setData({
        renderBlock: true
      })
    }, 800)
  },
  closeBlock() {
    this.setData({
      isOpen: false,
      topTop: -this.data.windowHeight
    })
  },
  touchStart(e) {
    if (this.data.isOpen) {
      return
    }
    this.setData({
      startTouchY: e.touches[0].pageY
    })
  },
  touchMove(e) {
    if (this.data.isOpen) {
      return
    }
    const movePageY = e.touches[0].pageY
    const diffPageY = movePageY - this.data.startTouchY
    if (diffPageY < 0) {
      return
    }
    if (diffPageY > this.data.windowHeight / 2) {
      this.setData({
        topTop: 0,
        isOpen: true
      })
    } else {
      this.setData({
        topTop: -this.data.windowHeight + diffPageY
      })
    }
  },
  touchEnd(e) {
    if (this.data.isOpen) {
      return
    }
    const endPageY = e.changedTouches[0].pageY
    const diffPageY = endPageY - this.data.startTouchY
    if (diffPageY > this.data.windowHeight / 1.5) {
      this.setData({
        topTop: 0,
        isOpen: true
      })
    } else {
      this.setData({
        topTop: -this.data.windowHeight
      })
    }
  }
})

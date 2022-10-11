// index.js
// 列表数据
const classes = require('./data.js');
const totalPage = Math.ceil(classes.length / 10);

Page({
  data: {
    classes: classes.slice(0, 10),
    totalPage,
    curPage: 1,
    pageSize: 10,
    pageSizeArray: [5, 10, 20, 50],
    isHighlight: false,
    isTarget: false,
    isDisPre: true,
    isDisNex: false,
  },
  updateClasses() {
    this.setData({
      classes: classes.slice((this.data.curPage - 1) * 10, this.data.curPage * 10),
    });
    this.onHightlightChange2();
  },
  updateClasses2() {
    this.setData({
      classes: classes.slice((this.data.curPage - 1) * this.data.pageSize, this.data.curPage * this.data.pageSize),
    });
    this.onHightlightChange2();
  },

  onPrevTap(e) {
    if (this.data.curPage <= 1) return;

    if (this.data.curPage <= this.data.totalPage) {
      this.setData({
        isDisNex: false,
      })
    }
    if (this.data.curPage == 2) {
      this.setData({
        isDisPre: true,
      })
    }
    this.setData({
      curPage: this.data.curPage - 1,
    });
    this.updateClasses2();
  },
  onNextTap() {
    if (this.data.curPage >= this.data.totalPage) return;

    if (this.data.curPage == this.data.totalPage - 1) {
      this.setData({
        isDisNex: true,
        isDisPre: false,
      })
    }
    if (this.data.curPage >= 1) {
      this.setData({
        isDisPre: false,
      })
    }

    this.setData({
      curPage: this.data.curPage + 1,
    });
    this.updateClasses2();
  },
  onPageSizeChange(e) {
    console.log(e.detail.value);
    // write your code here
    if (e.detail.value == 0) {
      this.setData({
        pageSize: 5,
        totalPage: Math.ceil(classes.length / 5),
        curPage: 1
      })
    } else if (e.detail.value == 1) {
      this.setData({
        pageSize: 10,
        totalPage: Math.ceil(classes.length / 10),
        curPage: 1
      })
    } else if (e.detail.value == 2) { 
      this.setData({
        pageSize: 20,
        totalPage: Math.ceil(classes.length / 20),
        curPage: 1
      })
    } else if (e.detail.value == 3) {
      this.setData({
        pageSize: 50,
        totalPage: Math.ceil(classes.length / 50),
        curPage: 1
      })
    }
    // if (this.data.pageSize >= classes.length) {
    //   this.setData({
    //     isDisNex: true
    //   })
    // } else {
    //   this.setData({
    //     isDisNex: false
    //   })
    // }
    this.updateClasses2();
  },
  onHightlightChange(e) {
    console.log(e.detail.value);
    // write your code here
    this.setData({
      isHighlight: e.detail.value,
    })
    for (var i = 0; i < this.data.classes.length; i++) {
      var name = 'classes[' + i + '].isTarget';
      this.setData({
        [name]: false,
      })
    }
    if (this.data.isHighlight) {
      for (var i = 0; i < this.data.classes.length; i++) {
        var name = 'classes[' + i + '].isTarget';
        if (this.data.classes[i].price < 7500) {
          this.setData({
            [name]: true,
          })
        }
      }
    }
  },
  onHightlightChange2() {
    for (var i = 0; i < this.data.classes.length; i++) {
      var name = 'classes[' + i + '].isTarget';
      this.setData({
        [name]: false,
      })
    }
    if (this.data.isHighlight) {
      for (var i = 0; i < this.data.classes.length; i++) {
        var name = 'classes[' + i + '].isTarget';
        if (this.data.classes[i].price < 7500) {
          this.setData({
            [name]: true,
          })
        } else {
          this.setData({
            [name]: false,
          })
        }
      }
    }
  },
});

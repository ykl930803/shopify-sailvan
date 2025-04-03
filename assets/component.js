class MyModal {
  constructor(params) {
    this._init()
  }
  static getInstance() {
      if (!MyModal.instance) {
          MyModal.instance = new MyModal()
      }
      return MyModal.instance
  }
  _init() {
    var _this = this;
    const wrapper = '<div class="mymodal-wrapper"><div class="mymodal-content"><div class="main-content"></div><div class="mdl-close close"><i class="fa-solid fa-xmark"></i></div></div><div class="modal-shadow"></div></div>';
    $('body').append(wrapper);
    $('.mymodal-wrapper .close').on('click', function() {
      _this.hide()
    })
    $('.mymodal-wrapper .modal-shadow').on('click', function() {
      _this.hide()
    })
    $('.mymodal-wrapper').hide()
  }
  show(content) {
    $('.mymodal-wrapper .main-content').append(content)
    $('.mymodal-wrapper').show()
  }
  hide() {
    $('.mymodal-wrapper .main-content').empty()
    $('.mymodal-wrapper').hide()
  }
}
Component({
  properties: {
    unitId: String,

    type: {
      type: String,
      value: 'banner',
    },

    theme: String,

    isQQ: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    shown: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    hideAd() {
      this.setData({ shown: false });
    },
  },
});

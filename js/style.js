new Vue({
  el: "#data",
  data: function () {
    return {
      users: [],
      inputdatauser: {}
    }
  },
  methods: {
    tambahuser: function () {
      this.inputdatauser = {};
    },
    tambah: function (datauser) {
      this.users.push({
        'nama': datauser.nama,
        'username': datauser.username,
        'email': datauser.email,
        'alamat': datauser.alamat,
        'tempat': datauser.tempat,
        'tgl': datauser.tgl,
        'jkel': datauser.jkel,
        'telp': datauser.telp
      });
    },
  }
})
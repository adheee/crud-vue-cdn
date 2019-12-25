new Vue({
  el: "#data",
  data: function () {
    return {
      users: [],
      inputdatauser: {},
      pesan: true
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
      if (this.users.length <= 0) {
        this.pesan = true;
      } else if (this.users.length >= 1) {
        this.pesan = false;
      }
    },
    hapususer: function (datauser) {
      this.index = this.users.indexOf(datauser);
    },
    hapus: function () {
      this.users.splice(this.index, 1);
    }
  }
})
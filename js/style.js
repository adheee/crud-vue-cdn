new Vue({
  el: "#data",
  data: function () {
    return {
      users: [],
      inputdatauser: {},
      front: true
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
      this.front = false;
    },
    hapususer: function (datauser) {
      this.index = this.users.indexOf(datauser);
      this.front = true;
    },
    hapus: function () {
      this.users.splice(this.index, 1);
    }
  }
})
new Vue({
  el: "#data",
  data: function () {
    return {
      users: [],
      inputdatauser: {},
      pesan: true,
      cari: '',
      enable: false
    }
  },
  methods: {
    tambahuser: function () {
      this.enable = true;
      this.inputdatauser = {};
    },
    tambah: function (datauser) {
      if (this.users.push({
          'nama': datauser.nama,
          'username': datauser.username,
          'email': datauser.email,
          'alamat': datauser.alamat,
          'tempat': datauser.tempat,
          'tgl': datauser.tgl,
          'jkel': datauser.jkel,
          'telp': datauser.telp
        })) {
        Swal.fire(
          'Berhasil!',
          'Berhasil menambah data.',
          'success'
        )
      }
      if (this.users.length >= 1) {
        this.pesan = false;
      }
    },
    edituser: function (datauser) {
      this.enable = false;
      this.index = this.users.indexOf(datauser);
      this.inputdatauser.nama = datauser.nama;
      this.inputdatauser.username = datauser.username;
      this.inputdatauser.email = datauser.email;
      this.inputdatauser.alamat = datauser.alamat;
      this.inputdatauser.tempat = datauser.tempat;
      this.inputdatauser.tgl = datauser.tgl;
      this.inputdatauser.jkel = datauser.jkel;
      this.inputdatauser.telp = datauser.telp;
    },
    update: function (datauser) {
      Swal.fire(
        'Berhasil!',
        'Data anda berhasil di update.',
        'success'
      )
      this.users[this.index].nama = datauser.nama;
      this.users[this.index].username = datauser.username;
      this.users[this.index].email = datauser.email;
      this.users[this.index].alamat = datauser.alamat;
      this.users[this.index].tempat = datauser.tempat;
      this.users[this.index].tgl = datauser.tgl;
      this.users[this.index].jkel = datauser.jkel;
      this.users[this.index].telp = datauser.telp;
      this.inputdatauser = {};
    },
    hapususer: function (datauser) {
      this.index = this.users.indexOf(datauser);
      Swal.fire({
        title: 'Anda Yakin?',
        text: "Anda tidak dapat mengembalikan data yang telah di hapus!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjutkan Hapus!'
      }).then((result) => {
        if (result.value) {
          this.users.splice(this.index, 1)
          Swal.fire(
            'Berhasil!',
            'Data anda berhasil di hapus.',
            'success'
          )
        }
        if (this.users.length <= 0) {
          this.pesan = true;
        }
      })
    }
  },
  computed: {
    datafilter() {
      if (this.cari) {
        return this.users.filter((item) => {
          return item.nama.startsWith(this.cari);
        })
      } else {
        return this.users;
      }
    }
  }
})
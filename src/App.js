// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nama:"Iqbal Botak" ,
//       jumlah: 4,
//       diskon: 10,
//       warning: "lewat dari 0!!"
//     }
//   }
//   // ubah_state = () => {
//   //   this.setState({
//   //     nama:"Rekayasa Perangkat Lunak"})
//   // }
//   tambah= () => {
//     this.setState({
//       jumlah: this.state.jumlah + 1
//     })
//   }
//   kurang= () => {
//     if(this.state.jumlah > 0 ){
//       this.setState({jumlah: this.state.jumlah - 1})
//     }else{
//       this.setState({jumlah: this.state.warning})
//     }
//   }
//   // discount= () => {
//   //   this.setState({
//   //     jumlah: this.state.diskon / this.state.jumlah * 100
//   //   })
//   // }

//   render() {
//     return (
//       <>
//       {/* <h1>{this.state.nama}</h1>
//       <button onClick={this.ubah_state}>Ubah</button> */}
//       <h1>{this.state.jumlah}</h1>
//       <button onClick={this.tambah}>+</button>
//       <button onClick={this.kurang}>-</button>
//       <button onClick={this.discount}>discount</button>
//       </>
//      );
//   }
// }

// export default App ;

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { nama:"TSBC" , sklh:"SMK TAK-URUS PERSADA"}
// //   }
// //   state = {  }
// //   render() {
// //     return (
// //       <>
// //       <h1>Nama : {this.state.nama}</h1>
// //       <h1>Saya bersekolah : {this.state.sklh}</h1>
// //       </>
// //      );
// //   }
// // }
import "./app.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Gambar from "../src/Component/images.jpeg";
function Kartu(props) {
  return (
    <>
      <div class="card">
        <img src={Gambar} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{props.namabrg}</h5>
          <p class="text-danger m-auto">Rp.{props.harga}</p>
          <hr />
          <div className="row">
            <div className="col-2">
              <button onClick={props.kurang} className="btn btn-primary">
                -
              </button>
            </div>
            <div className="col-8 text1">
              <input value={props.jumlah} type="text" className="form-control" />
            </div>
            <div className="col-2">
              <button onClick={props.tambah} className="btn btn-primary">
                +
              </button>
            </div>
          </div>
          <div className="div text-center mt-3">
            <h5>TOTAL</h5>Rp.{props.hasil}
          </div>
        </div>
      </div>
    </>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { namabrg: "|| RTX 4090 ||", harga: 2000000, jumlah: 0, hasil: 0 };
  }
  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      hasil: (this.state.jumlah + 1) * this.state.harga,
    });
  };
  kurang = () => {
    if (this.state.jumlah > 0) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        hasil: (this.state.jumlah - 1) * this.state.harga,
      });
    }
  };
  render() {
    return (
      <>
        <Kartu
          namabrg={this.state.namabrg}
          harga={this.state.harga}
          jumlah={this.state.jumlah}
          tambah={this.tambah}
          kurang={this.kurang}
          hasil={this.state.hasil}
        />
      </>
    );
  }
}
export default App;

const prompt = require('prompt-sync')();

let nama = prompt("Masukkan nama:");
let peran = prompt("Masukkan peran (Penyihir, Guard, atau Werewolf):");

if (nama === "") {
  console.log("Nama harus diisi!");
} else if (peran === "") {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else {
  console.log("Selamat datang di Dunia Werewolf, " + nama);
  
  switch (peran.toLowerCase()) {
    case "penyihir":
      console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
      break;
    case "guard":
      console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
      break;
    case "werewolf":
      console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
      break;
    default:
      console.log("Peran tidak dikenal. Pilih antara: Penyihir, Guard, atau Werewolf.");
  }
}

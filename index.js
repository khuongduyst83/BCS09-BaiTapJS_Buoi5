// Bài tập tính tiền điện
document.querySelector(".btn-dark").onclick = function () {
  // hành động
  var hoTen = document.getElementById("hoTen").value;
  var soDien = document.getElementById("soDien").value * 1;
  var tienDien = 0;
  const Kw_1 = 500,
    Kw_2 = 650,
    Kw_3 = 850,
    Kw_4 = 1100,
    Kw_5 = 1300;
  console.log(hoTen);
  console.log(soDien);
  console.log(tienDien);
  if (0 < soDien && soDien <= 50) {
    tienDien = soDien * Kw_1;
  } else if (soDien > 50 && soDien <= 100) {
    tienDien = 50 * Kw_1 + (soDien - 50) * Kw_2;
  } else if (soDien > 100 && soDien <= 200) {
    tienDien = 50 * Kw_1 + 50 * Kw_2 + (soDien - 100) * Kw_3;
  } else if (soDien > 200 && soDien <= 350) {
    tienDien = 50 * Kw_1 + 50 * Kw_2 + 100 * Kw_3 + (soDien - 200) * Kw_4;
  } else if (soDien > 350) {
    tienDien =
      50 * Kw_1 + 50 * Kw_2 + 50 * Kw_3 + 50 * Kw_4 + (soDien - 350) * Kw_5;
  } else {
    alert(" Sô điện (kw) không hợp lệ ! Vui lòng nhập lại");
  }

  // toLocaleString format lại định dạng number thành tiền tệ
  document.querySelector(
    ".ketQua"
  ).innerHTML = `Tổng tiền điện là: ${hoTen} ; ${tienDien.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};

//  Bài tập tính thuế
document.querySelector(".btn-success").onclick = function () {
  // hành động
  var hoVaTen = document.getElementById("hoVaTen").value;
  var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  var soNguoi = document.getElementById("soNguoi").value * 1;
  var soTienThue = 0;
  var thuNhapChiuThue = 0;

  thuNhapChiuThue = tongThuNhap - 4e6 - soNguoi * 1600000;

  if (thuNhapChiuThue < 60e6) {
    alert("Người dùng nhập không đúng số tiền");
  }

  if (thuNhapChiuThue == 60000000) {
    soTienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    soTienThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    soTienThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    soTienThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    soTienThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    soTienThue = thuNhapChiuThue * 0.3;
  } else {
    soTienThue = thuNhapChiuThue * 0.35;
    console.log(hoVaTen);
  }
  // toLocaleString format lại định dạng number thành tiền tệ
  document.querySelector(
    ".ketQuaTinhThue"
  ).innerHTML = `Tổng tiền thuế là: ${hoVaTen} ; ${soTienThue.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};

// **

document.getElementById("tinhThue").onclick = function () {
  var sothuNhap = document.getElementById("thuNhap").value * 1;
  var soNguoi = document.getElementById("soNguoi").value * 1;
  var thuNhapChiuThue = sothuNhap - 4000000 - soNguoi * 1600000;
  var xuatThue = 0;
  if (thuNhapChiuThue < 60000000) {
    alert("người dùng chưa cần đóng thuế vì quá nghèo");
  }
  if (thuNhapChiuThue == 60000000) {
    xuatThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    xuatThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    xuatThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    xuatThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    xuatThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    xuatThue = thuNhapChiuThue * 0.3;
  } else {
    xuatThue = thuNhapChiuThue * 0.35;
  }
  document.getElementById(
    "tienThue"
  ).innerHTML = `Số thuế bạn cần đóng là: ${xuatThue.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}`;
};

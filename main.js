// Bài 1 tính điểm tuyển sinh
function tinhDiem() {
    var diem1 = document.getElementById("diem1").value * 1;
    var diem2 = document.getElementById("diem2").value * 1;
    var diem3 = document.getElementById("diem3").value * 1;
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var DTB = diem1 + diem2 + diem3;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    if (khuVuc > 0) {
        DTB += khuVuc;
    }
    if (doiTuong > 0) {
        DTB += doiTuong;
    }
    if (DTB >= diemChuan) {
        document.getElementById(
            "ketQua1"
        ).innerHTML = `Bạn đã đậu với số điểm : ${DTB} so với điểm chuẩn ${diemChuan}`;
    } else if (DTB < diemChuan) {
        document.getElementById(
            "ketQua1"
        ).innerHTML = `Bạn đã không đủ điểm điểm của bạn: ${DTB} so với điểm chuẩn: ${diemChuan}`;
    } else {
        document.getElementById(
            "ketQua1"
        ).innerHTML = `Bạn vui lòng nhập số điểm đúng là số không phải chữ`;
    }
    ketQua("ketQua1", "bg-transparent", "bg-info");
}

document.getElementById("tinhDiem").onclick = tinhDiem;

//function trả vè kêt quả
function ketQua(id, mauNen1, mauNen2) {
    document.getElementById(id).classList.remove(mauNen1);
    document.getElementById(id).classList.add(mauNen2);
}

//Bài tập 2 tính tiền điện
function tinhTienDien() {
    var soKwh = document.getElementById("soKwh").value * 1;
    var hoTen = document.getElementById("hoTen").value;
    let tongTien = 0; // xài dưới 50

    ketQua("ketQua2", "bg-transparent", "bg-danger");

    if (soKwh <= 50) {
        tongTien = 500 * soKwh;
        tongTien = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tongTien);
        document.getElementById(
            "ketQua2"
        ).innerHTML = `Tiền điện của khách hàng: ${hoTen} là ${tongTien}`;
    } else if (soKwh > 50 && soKwh <= 100) {
        tongTien = (soKwh - 50) * 650 + 50 * 500; //so tien từ 50kwh kế tiếp
        tongTien = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tongTien);
        document.getElementById(
            "ketQua2"
        ).innerHTML = `Tiền điện của khách hàng: ${hoTen} là ${tongTien}`;
    } else if (soKwh > 100 && soKwh <= 200) {
        let tienMuc1 = 50 * 500; // tien muc tieu thụ 1
        let tienMuc2 = 50 * 650; // tiền mức tiêu thụ 2
        tongTien = (soKwh - 100) * 850 + tienMuc1 + tienMuc2; // tổng tiền cua mức tiêu thụ 3
        tongTien = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tongTien);
        document.getElementById(
            "ketQua2"
        ).innerHTML = `Tiền điện của khách hàng: ${hoTen} là ${tongTien}`;
    } else if (soKwh > 200 && soKwh <= 350) {
        let tienMuc1 = 50 * 500; // tien muc tieu thụ 1
        let tienMuc2 = 50 * 650; // tiền mức tiêu thụ 2
        let tienMuc3 = 100 * 850;
        tongTien = (soKwh - 200) * 1100 + tienMuc1 + tienMuc2 + tienMuc3;
        tongTien = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tongTien);
        document.getElementById(
            "ketQua2"
        ).innerHTML = `Tiền điện của khách hàng: ${hoTen} là ${tongTien}`;
    } else if (soKwh > 350) {
        let tienMuc1 = 50 * 500; // tien muc tieu thụ 1 giá 500
        let tienMuc2 = 50 * 650; // tiền mức tiêu thụ 2 giá 650
        let tienMuc3 = 100 * 850; //tien mức tiêu thụ 3 giá 850
        let tienMuc4 = 150 * 1100; // tiền mức tiêu thụ 4 giá 1100
        tongTien =
            (soKwh - 350) * 1300 + tienMuc1 + tienMuc2 + tienMuc3 + tienMuc4; // tiên mức 5 từ 350kwh trở lên giá 1300d /kwh
        tongTien = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tongTien);
        document.getElementById(
            "ketQua2"
        ).innerHTML = `Tiền điện của khách hàng: ${hoTen} là ${tongTien}`;
    } else {
        document.getElementById(
            "ketQua2"
        ).innerHTML = `Vui lòng nhập số lớn hơn 0`;
    }
}

document.getElementById("tinhTienDien").onclick = tinhTienDien;

//Bài tập 3: Tính thuế thu nhập cá nhân

function tinhThue() {
    var hoTen = document.getElementById("hoTen3").value;
    var thuNhap = document.getElementById("thuNhap").value * 1;
    var soNguoi = document.getElementById("soNguoi").value * 1;
    let thuNhapChiuThue = thuNhap - 4000000 - soNguoi * 1600000;
    let tienThue = 0;
    ketQua("ketQua3", "bg-transparent", "bg-warning");

    if (thuNhapChiuThue > 10000000 && thuNhapChiuThue <= 60000000) {
        tienThue = thuNhapChiuThue * 0.05; // 5% thuế cho thu nhập từ 60 tr trở xuống
        tienThue = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tienThue);
        document.getElementById(
            "ketQua3"
        ).innerHTML = `Tiền thuế của: ${hoTen} là ${tienThue}`;
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        tienThue = thuNhapChiuThue * 0.1; // 10% thuế
        tienThue = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tienThue);
        document.getElementById(
            "ketQua3"
        ).innerHTML = `Tiền thuế của: ${hoTen} là ${tienThue}`;
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        tienThue = thuNhapChiuThue * 0.15; // 15% thuế
        tienThue = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tienThue);
        document.getElementById(
            "ketQua3"
        ).innerHTML = `Tiền thuế của: ${hoTen} là ${tienThue}`;
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        tienThue = thuNhapChiuThue * 0.2; // 20% thuế
        tienThue = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tienThue);
        document.getElementById(
            "ketQua3"
        ).innerHTML = `Tiền thuế của: ${hoTen} là ${tienThue}`;
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        tienThue = thuNhapChiuThue * 0.25; // 25% thuế
        tienThue = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tienThue);
        document.getElementById(
            "ketQua3"
        ).innerHTML = `Tiền thuế của: ${hoTen} là ${tienThue}`;
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        tienThue = thuNhapChiuThue * 0.3; // 30% thuế
        tienThue = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tienThue);
        document.getElementById(
            "ketQua3"
        ).innerHTML = `Tiền thuế của: ${hoTen} là ${tienThue}`;
    } else if (thuNhapChiuThue > 960000000) {
        tienThue = thuNhapChiuThue * 0.35; // 35% thuế
        tienThue = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(tienThue);
        document.getElementById(
            "ketQua3"
        ).innerHTML = `Tiền thuế của: ${hoTen} là ${tienThue}`;
    } else {
        document.getElementById(
            "ketQua3"
        ).innerHTML = `Bạn vui lòng nhập số tiền lớn hơn 10tr`;
    }
}

document.getElementById("tinhThue").onclick = tinhThue;

//Bài tập 4: Tính tiền cap sử dụng
function tinhTienCap() {
    var user = document.getElementById("user").value;
    var soKenh = document.getElementById("soKenh").value * 1;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    let tongTien = 0;
    ketQua("ketQua4", "bg-transparent", "bg-success");

    if (user == 1) {
        tongTien = 4.5 + 20.5 + soKenh * 7.5;
        tongTien = new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
        }).format(tongTien);
        document.getElementById(
            "ketQua4"
        ).innerHTML = `Tiền cap là: ${tongTien}`;
    } else if (user == 2) {
        if (soKetNoi > 10) {
            soKetNoi -= 10;
            tongTien = 15 + 75 + soKenh * 50 + soKetNoi * 5;
        } else {
            tongTien = 15 + 75 + soKenh * 50;
        }

        tongTien = new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
        }).format(tongTien);
        document.getElementById(
            "ketQua4"
        ).innerHTML = `Tiền cap là: ${tongTien}`;
    } else {
        document.getElementById("ketQua4").innerHTML = `Không có kết quả`;
    }
}

document.getElementById("tinhTienCap").onclick = tinhTienCap;

function User(value) {
    if (value == 1) {
        document.getElementById("soKet").setAttribute("hidden", "hidden");

        document.getElementById("soKetNoi").setAttribute("hidden", "hidden");
    }
    if (value == 2) {
        document.getElementById("soKetNoi").removeAttribute("hidden", "hidden");
    }
}

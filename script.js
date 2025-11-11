// JavaScript Document

var skor = 0;
var soal = [
  {
    db: "OrderID, CustomerName, ProductID, ProductName, Quantity",
    jawab: "OrderID, CustomerID, ProductID, Quantity\nCustomerID, CustomerName\nProductID, ProductName"
  },
  {
    db: "StudentID, Name, CourseID, CourseName, Grade",
    jawab: "StudentID, CourseID, Grade\nStudentID, Name\nCourseID, CourseName"
  }
];

function soalAcak() {
  var i = Math.floor(Math.random() * soal.length);
  document.getElementById('contoh-db').innerHTML = '<h2>Contoh Database</h2><pre>${soal[i].db}</pre>';
  document.getElementById('btn-check').onclick = function() {
    cekJawapan(soal[i].jawab);
  };
}

function cekJawapan(jawabBetul) {
  var jawapan = document.getElementById('jawapan-txt').value.trim();
  if (jawapan == jawabBetul) {
    skor++;
    document.getElementById('skor').innerText = skor;
    alert('Jawapan betul! 🎉');
  } else {
    alert('Cuba lagi!');
  }
}

document.getElementById('btn-hint').addEventListener('click', function() {
  var hint = "1NF: Pisahkan data redundan.\n2NF: Buat tabel Customer dan Product.\n3NF: Hapus transitive dependency.";
  document.getElementById('hint-txt').innerText = hint;
});

document.getElementById('btn-next').addEventListener('click', soalAcak);

soalAcak();
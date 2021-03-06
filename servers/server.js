const express = require("express");
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = process.env.PORT || 3002;
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});

// DB 생성 및 사용어

const db_name = path.join(__dirname, "data", "apptest.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});
//Create 쿼리 정의
const sql_create = `CREATE TABLE IF NOT EXISTS Books (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT,
  File BLOB ,
  Hash BLOB 
);`;
const sql_create2 = `CREATE TABLE IF NOT EXISTS Books2 (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT,
  File BLOB ,
  Hash BLOB 
);`;
const sql_create3 = `CREATE TABLE IF NOT EXISTS Books3 (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT,
  File BLOB ,
  Hash BLOB 
);`;
const sql_create4 = `CREATE TABLE IF NOT EXISTS Books4 (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT, 
  File BLOB ,
  Hash BLOB 
);`;

const sql_create5 = `CREATE TABLE IF NOT EXISTS Books5 (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) ,
  Author VARCHAR(100) , 
  DateTime real,
  Comments TEXT,
  File BLOB ,
  Hash BLOB 
);`;

//실행시 테이블생성
db.run(sql_create, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of the 'Books' table");
});

db.run(sql_create2, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of the 'Books2' table");
});
db.run(sql_create3, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of the 'Books3' table");
});

db.run(sql_create4, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of the 'Books4' table");
});

db.run(sql_create5, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of the 'Books5' table");
});

//JSON형태로 books에 쏘기 Board1 게시판에서 사용

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM Books order by idx desc";
  var body = req.body;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

app.get("/books2", (req, res) => {
  const sql = "SELECT * FROM Books2 order by idx desc";
  var body = req.body;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

app.get("/books3", (req, res) => {
  const sql = "SELECT * FROM Books3 order by idx desc";
  var body = req.body;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

app.get("/books4", (req, res) => {
  const sql = "SELECT * FROM Books4 order by idx desc";
  var body = req.body;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

app.get("/books5", (req, res) => {
  const sql = "SELECT * FROM Books5 order by idx desc";
  var body = req.body;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

//JSON형태로 테이블 에서 정보 받아오기

app.get("/more", (req, res) => {
  const sql =
    "SELECT title, author, comments, File, Hash FROM Books where idx = " +
    req.query.idx;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

app.get("/more2", (req, res) => {
  const sql =
    "SELECT title, author, comments, File, Hash FROM Books2 where idx = " +
    req.query.idx;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

app.get("/more3", (req, res) => {
  const sql =
    "SELECT title, author, comments, File, Hash FROM Books3 where idx = " +
    req.query.idx;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});
app.get("/more4", (req, res) => {
  const sql =
    "SELECT title, author, comments, File, Hash FROM Books4 where idx = " +
    req.query.idx;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

//Edit 업데이트 포스트

app.post("/edit", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  const File = data.File;
  const Hash = data.Hash;
  let query = "";
  if (data.Hash === "") {
    query = `UPDATE books SET Title='${Title}', Author='${Author}',
     Comments='${Comments}' WHERE idx=${idx};`;
  } else {
    query = `UPDATE books SET Title='${Title}', Author='${Author}',
    Comments='${Comments}', File='${File}',Hash='${Hash}' WHERE idx=${idx};`;
  }
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

app.post("/edit2", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  const File = data.File;
  const Hash = data.Hash;
  let query = "";
  if (data.Hash === "") {
    query = `UPDATE books2 SET Title='${Title}', Author='${Author}',
     Comments='${Comments}' WHERE idx=${idx};`;
  } else {
    query = `UPDATE books2 SET Title='${Title}', Author='${Author}',
    Comments='${Comments}', File='${File}',Hash='${Hash}' WHERE idx=${idx};`;
  }
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

app.post("/edit3", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  const File = data.File;
  const Hash = data.Hash;
  let query = "";
  if (data.Hash === "") {
    query = `UPDATE books3 SET Title='${Title}', Author='${Author}',
     Comments='${Comments}' WHERE idx=${idx};`;
  } else {
    query = `UPDATE books3 SET Title='${Title}', Author='${Author}',
    Comments='${Comments}', File='${File}',Hash='${Hash}' WHERE idx=${idx};`;
  }
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

app.post("/edit4", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  const File = data.File;
  const Hash = data.Hash;
  let query = "";
  if (data.Hash === "") {
    query = `UPDATE books4 SET Title='${Title}', Author='${Author}',
     Comments='${Comments}' WHERE idx=${idx};`;
  } else {
    query = `UPDATE books4 SET Title='${Title}', Author='${Author}',
    Comments='${Comments}', File='${File}',Hash='${Hash}' WHERE idx=${idx};`;
  }
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

//Create 생성 명령어 body 파싱
app.post("/create", (req, res) => {
  const data = req.body;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  // const File = data.hasOwnProperty("File") ? data.File : "";
  // const Hash = data.hasOwnProperty("Hash") ? data.Hash : "";
  const File = data.File;
  const Hash = data.Hash;
  const query = `INSERT INTO Books (idx, Title, Author, Comments, DateTime, File, Hash)
  select max(idx)+1, '${Title}', '${Author}', '${Comments}', date('now'), '${File}', '${Hash}' from Books;`;
  console.log(data);
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

app.post("/create2", (req, res) => {
  const data = req.body;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  // const File = data.hasOwnProperty("File") ? data.File : "";
  // const Hash = data.hasOwnProperty("Hash") ? data.Hash : "";
  const File = data.File;
  const Hash = data.Hash;
  const query = `INSERT INTO Books2 (idx, Title, Author, Comments, DateTime, File, Hash)
    select max(idx)+1, '${Title}', '${Author}', '${Comments}', date('now'), '${File}', '${Hash}' from Books2;`;
  console.log(data);
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

app.post("/create3", (req, res) => {
  const data = req.body;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  // const File = data.hasOwnProperty("File") ? data.File : "";
  // const Hash = data.hasOwnProperty("Hash") ? data.Hash : "";
  const File = data.File;
  const Hash = data.Hash;
  const query = `INSERT INTO Books3 (idx, Title, Author, Comments, DateTime, File, Hash)
  select max(idx)+1, '${Title}', '${Author}', '${Comments}', date('now'), '${File}', '${Hash}' from Books3;`;
  console.log(data);
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

app.post("/create4", (req, res) => {
  const data = req.body;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  // const File = data.hasOwnProperty("File") ? data.File : "";
  // const Hash = data.hasOwnProperty("Hash") ? data.Hash : "";
  const File = data.File;
  const Hash = data.Hash;
  const query = `INSERT INTO Books4 (idx, Title, Author, Comments, DateTime, File, Hash)
  select max(idx)+1, '${Title}', '${Author}', '${Comments}', date('now'), '${File}', '${Hash}' from Books4;`;
  console.log(data);
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

//해당 칼럼 삭제 API
app.post("/delete", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const sql = `DELETE FROM Books where idx=${idx}`;

  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    }
    res.redirect("/books");
  });
});

app.post("/delete2", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const sql = `DELETE FROM Books2 where idx=${idx}`;

  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    }
    res.redirect("/books2");
  });
});

app.post("/delete3", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const sql = `DELETE FROM Books3 where idx=${idx}`;

  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    }
    res.redirect("/books3");
  });
});

app.post("/delete4", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const sql = `DELETE FROM Books4 where idx=${idx}`;

  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    }
    res.redirect("/books4");
  });
});

app.post("/delete5", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const sql = `DELETE FROM Books5 where idx=${idx}`;

  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    }
    res.redirect("/books5");
  });
});

//multer를 이용한 파일업로드

//파일업로드 API
const router = express.Router();
const multer = require("multer");
app.use(express.static("public"));

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/uploads`);
    },
    /* filename: function (req, file, cb) {
      cb(null, file.originalname);
    }, */
  }),
});

app.post("/upload", upload.single("files"), function (req, res, next) {
  res.send({
    fileName: req.file.filename,
  });
  console.log(req.file);
});

app.get("/download", function (req, res) {
  let filename = req.query.filename;
  const file = `${__dirname}/uploads/${filename}`;
  res.download(file);
});

app.post("/create5", (req, res) => {
  const data = req.body;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  // const File = data.hasOwnProperty("File") ? data.File : "";
  // const Hash = data.hasOwnProperty("Hash") ? data.Hash : "";
  const File = data.File;
  const Hash = data.Hash;
  const query = `INSERT INTO Books5 (Title, Author, Comments, DateTime, File, Hash)
  select max(idx)+1, '${Title}', '${Author}', '${Comments}', date('now'), '${File}', '${Hash}' from Books5;`;
  console.log(data);
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

app.post("/edit5", (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  const File = data.File;
  const Hash = data.Hash;
  let query = "";
  if (data.Hash === "") {
    query = `UPDATE books5 SET Title='${Title}', Author='${Author}',
     Comments='${Comments}' WHERE idx=${idx};`;
  } else {
    query = `UPDATE books5 SET Title='${Title}', Author='${Author}',
    Comments='${Comments}', File='${File}',Hash='${Hash}' WHERE idx=${idx};`;
  }
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send();
  });
});

//해쉬값 테스트

app.post("/upload3", upload.single("files"), function (req, res, next) {
  res.send({
    fileName: req.file.filename,
  });
  console.log(req.file);
  console.log(req.file.filename);
});

app.get("/more5", (req, res) => {
  const sql =
    "SELECT title, author, comments, File, Hash FROM Books5 where idx = " +
    req.query.idx;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

// 뉴스 TOP4
app.get("/Newstop4", (req, res) => {
  const sql =
    "SELECT idx, title, Datetime, author, comments FROM Books2 ORDER BY idx DESC limit 6";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      data: rows,
    };
    res.send(data);
  });
});

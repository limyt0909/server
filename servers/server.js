const express = require("express");
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = process.env.PORT || 80;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", (req, res) => res.json({ username: "yong taek" }));

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
  Comments TEXT
);`;
const sql_create2 = `CREATE TABLE IF NOT EXISTS Books2 (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT
);`;
const sql_create3 = `CREATE TABLE IF NOT EXISTS Books3 (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT
);`;
const sql_create4 = `CREATE TABLE IF NOT EXISTS Books4 (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT
);`;

const sql_create5 = `CREATE TABLE IF NOT EXISTS Books5 (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT,
  File BLOB
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
  const sql = "SELECT * FROM Books";
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
  const sql = "SELECT * FROM Books2";
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
  const sql = "SELECT * FROM Books3";
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
  const sql = "SELECT * FROM Books4";
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
  const sql = "SELECT * FROM Books5";
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
    "SELECT title, author, comments FROM Books where idx = " + req.query.idx;
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
    "SELECT title, author, comments FROM Books2 where idx = " + req.query.idx;
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
    "SELECT title, author, comments FROM Books3 where idx = " + req.query.idx;
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
    "SELECT title, author, comments FROM Books4 where idx = " + req.query.idx;
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

app.get("/more5", (req, res) => {
  const sql =
    "SELECT title, author, comments FROM Books5 where idx = " + req.query.idx;
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
  const title = data.Title;
  const author = data.Author;
  const comments = data.Comments;

  const query = `UPDATE books SET Title='${title}', Author='${author}',

     Comments='${comments}' WHERE idx=${idx};`;

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
  const title = data.Title;
  const author = data.Author;
  const comments = data.Comments;

  const query = `UPDATE books2 SET Title='${title}', Author='${author}',

     Comments='${comments}' WHERE idx=${idx};`;

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
  const title = data.Title;
  const author = data.Author;
  const comments = data.Comments;

  const query = `UPDATE books3 SET Title='${title}', Author='${author}',

     Comments='${comments}' WHERE idx=${idx};`;

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
  const title = data.Title;
  const author = data.Author;
  const comments = data.Comments;

  const query = `UPDATE books4 SET Title='${title}', Author='${author}',

     Comments='${comments}' WHERE idx=${idx};`;

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
  const title = data.Title;
  const author = data.Author;
  const comments = data.Comments;
  const query = `UPDATE books5 SET Title='${title}', Author='${author}',

     Comments='${comments}' WHERE idx=${idx};`;

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

  const query = `INSERT INTO Books (Title, Author, Comments, DateTime)

    VALUES ('${Title}', '${Author}', '${Comments}', date('now'));`;

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

  const query = `INSERT INTO Books2 (Title, Author, Comments, DateTime)

    VALUES ('${Title}', '${Author}', '${Comments}', date('now'));`;

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

  const query = `INSERT INTO Books3 (Title, Author, Comments, DateTime)

    VALUES ('${Title}', '${Author}', '${Comments}', date('now'));`;

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

  const query = `INSERT INTO Books4 (Title, Author, Comments, DateTime)

    VALUES ('${Title}', '${Author}', '${Comments}', date('now'));`;

  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);

      return console.error(err.message);
    }

    res.send();
  });
});

app.post("/create5", (req, res) => {
  const data = req.body;

  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  const File = data.File;

  const query = `INSERT INTO Books5 (Title, Author, Comments, DateTime, File)

    VALUES ('${Title}', '${Author}', '${Comments}', date('now'), '${File}');`;

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
var multer = require("multer");

app.use(express.static("public"));
var upload = multer({ dest: "./public/img/" });

var storage = multer.diskStorage({
  // destination: "./public/img/",
  filename: function (req, file, cb) {
    cb(null, "imgfile" + Date.now() + path.extname(file.originalname));
  },
});

app.post("/upload", upload.single("img"), function (req, res, next) {
  res.send({
    fileName: req.file.filename,
  });
  console.log(req.file);
});

/*
//diskStorage 엔진으로 파일저장경로와 파일명을 세팅한다.
let storage = multer.diskStorage({
  //multer disk storage settings
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
    let extension = path.extname(file.originalname);
    let basename = path.basename(file.originalname, extension);
    callback(null, basename + "-" + Date.now() + extension);
  },
});

//특정 파일형식만 저장하기 위해서는 fileFilter함수를 사용한다.
const upload = multer({
  //multer settings
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (
      ext !== ".xlsx" &&
      ext !== ".pdf" &&
      ext !== ".png" &&
      ext !== ".jpg" &&
      ext !== ".gif" &&
      ext !== ".jpeg"
    ) {
      return callback(
        new Error("Only .xlsx .pdf .png, .jpg .gif and .jpeg format allowed!")
      );
    }
    callback(null, true);
  },
}).any(); //.any()는 전달받는 모든 파일을 받는다. 파일배열은 req.files에 저장되어 있다.

router.post("/files", (req, res, next) => {
  const reqFiles = [];
  try {
    upload(req, res, function (err) {
      if (err) {
        return res.status(400).send({
          //에러발생하면, 에러 메시지와 빈 파일명 array를 return한다.
          message: err.message,
          files: reqFiles,
        });
      }

      for (var i = 0; i < req.files.length; i++) {
        //저장된 파일명을 차례로 push한다.
        reqFiles.push(req.files[i].filename);
      }

      res.status(200).send({
        //저장 성공 시, 저장성공 메시지와 저장된 파일명 array를 return한다.
        message: "Uploaded the file successfully",
        files: reqFiles,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: `Could not upload the file: ${err}`,
      files: reqFiles,
    });
  }
});

module.exports = router;


*/

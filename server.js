"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
     res.send('
              <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abhimanyu</title>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
    </head>
    <style>
        * {
            background-color: rgb(44, 41, 41);
            font-family: "Comic Sans MS", "Comic Sans", "Times New Roman", Times,
                serif;
        }
        img {
            position: relative;
            top: 5rem;
            border-radius: 50%;
            height: 20rem;
            width: 20rem;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        h1 {
            position: relative;
            top: 5rem;
            text-align: center;
            color: orange;
            font-size: 2rem;
        }
        #fafa {
            position: relative;
            bottom: -5rem;
            text-align: center;
        }
    </style>
    <body>
        <div>
            <img
                src="https://avatars.githubusercontent.com/u/61275658?v=4"
                alt="Ahbimanyu"
            />
            <h1>ABHIMANYU GOSWAMI</h1>
            <div class="fafa" id="fafa">
                <a href="https://www.facebook.com/abhi.niceeeeeboy">
                    <i
                        class="fa fa-facebook-square"
                        style="font-size: 48px; color: rgb(11, 121, 165)"
                    ></i>
                </a>
                <a
                    href="https://mail.google.com/a/?view=cm&fs=1&to=manyu.abhigoswami@gmail.com"
                >
                    <i
                        class="fa fa-google"
                        style="font-size: 48px; color: red; margin-left: 10px"
                    ></i>
                </a>
                <a href="https://github.com/theaddictedabhi">
                    <i
                        class="fa fa-github"
                        style="font-size: 48px; margin-left: 10px"
                    ></i>
                </a>
                <a href="https://www.linkedin.com/in/abhimanyugoswami/">
                    <i
                        class="fa fa-linkedin"
                        style="
                            font-size: 48px;
                            color: rgb(19, 67, 199);
                            margin-left: 10px;
                            margin-right: 10px;
                        "
                    ></i>
                </a>
            </div>
        </div>
    </body>
</html>
              ');
    // console.log(__dirname+ "index");
    //res.sendFile("/index.html");
});
// app.get('/home', (req, res) => {
//   res.send('home is working!');
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

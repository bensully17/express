const express = require("express");
const cors = require("cors");

var meetingRooms = [{
    id: 1,
    meetingRoom: "Gold Coin",
    numberOfSeats: 16,
    hasTV: true
},{
    id: 2,
    meetingRoom: "Triforce",
    numberOfSeats: 12,
    hasTV: false
},{
    id: 3,
    meetingRoom: "Yoshi",
    numberOfSeats: 6,
    hasTV: false
},{
    id: 4,
    meetingRoom: "Kirby",
    numberOfSeats: 6,
    hasTV: false
},{
    id: 5,
    meetingRoom: "Pikachu",
    numberOfSeats: 8,
    hasTV: true
}];

const app = express();
app.use(cors());

app.get("/", function (request, response) {
    response.json({data: meetingRooms});
});

app.get("/:id", function (request, response) {
    var record;
    if (!record){
        response.status = 404;
        response.json({
            error: {
                message: "No record found!"
            }
        });
    }

    response.json({data: record});
});

app.listen(9000);

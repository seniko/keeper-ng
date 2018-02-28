/**
 * Created by Serge on 01.06.2017.
 */
app.factory("boardsFactory", function () {
    var service = {};
    var boards = [
        {
            board_id: "0",
            board_name: "Board's name 0",
            board_description: "Board's description",
            board_date: "01.01.17, 03:05:07",
            board_username: "username"
        },
        {
            board_id: "1",
            board_name: "Board's name 1",
            board_description: "Board's description",
            board_date: "01.01.17, 03:05:07",
            board_username: "username"
        }
    ];
    service.addBoard = function (board_name) {
        var date = new Date();
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        boards.push(
            {
                board_id: _.uniqueId('board_'), // by lodash new id will be generated with prefix board_
                board_name: board_name,
                board_description: "Board's description",
                board_date: date.toLocaleString("ru", options),
                board_username: "username"
            }
        );
    };
    service.remBoard = function (board) {
        _.pull(boards, board); // will remove element board in boards that has exactly the same properties
    };
    service.getBoards = function () {
        return boards;
    };
    service.getBoard = function (boardId) {
        return _.find(boards, {board_id: boardId});
    };
    return service;
});
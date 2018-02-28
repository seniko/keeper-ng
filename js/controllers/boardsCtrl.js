/**
 * Created by Serge on 01.06.2017.
 */
app.controller("boardsCtrl", function (boardsFactory) {
    this.boards = boardsFactory.getBoards();
    this.addBoard = function () {
        // console.log(this.board_name)- this refers on this controller (boardsCtrl)
        boardsFactory.addBoard(this.board_name); // call of addBoard function with parameter this.board_name
        this.board_name = ""; // clear input
    };
});
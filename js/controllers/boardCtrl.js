/**
 * Created by Serge on 02.06.2017.
 */
app.controller("boardCtrl", function ($routeParams, boardsFactory) {
    this.remBoard = function (board) {
        boardsFactory.remBoard(board);
    };
    // this.getColumns = function (board) {
    //     return columnsFactory.getColumns(board);
    // };

    var boardId = $routeParams.boardId;
    // console.log(boardId);
    //this.columns = _.filter(columnsFactory, {board_id: boardId});
    // console.log(this.columns);

    //this.board = _.find(boardsFactory.getBoards(), {board_id: boardId}); // записываем в переменную board результат поиска доски с таким же айдишником,
    // как и значение url после слеша. Далее в board.html выводим board_name этой доски
    // console.log(this.board);

    this.board = boardsFactory.getBoard(boardId); // более правильный подход - выносим всю логику и данные в factory



    //console.log(this.board);
});
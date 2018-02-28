/**
 * Created by Serge on 02.06.2017.
 */
app.factory("columnsFactory", function () {
    var service = {};
    var columns = [
        {
            column_id: "0",
            column_name: "Column's name",
            board_id: "0"
        },
        {
            column_id: "1",
            column_name: "Column's name",
            board_id: "1"
        },
        {
            column_id: "2",
            column_name: "Column's name",
            board_id: "1"
        }
    ];
    // service.getColumns = function (board) { // gets board as a parameter
    //     return columns; // return each column in columns depends on equality of board_id in columns and board_id in boards
    // };
    // return columns;
     service.addColumn = function (column_name, boardId) {
         return columns.push(
             {
                 column_id: _.uniqueId('column_'),
                 column_name: column_name,
                 board_id: boardId
             }
         );
    };

    service.getColumn = function (boardId) {
         return columns;
    };

    // service.getColumn = function (boardId) {
    //     return _.filter(columns, {board_id: boardId});
    // };
    service.remColumn = function (column) {
        _.pull(columns, column); // will remove element board in boards that has exactly the same properties
    };
    return service;


});
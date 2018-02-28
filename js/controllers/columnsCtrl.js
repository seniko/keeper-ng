/**
 * Created by Serge on 03.06.2017.
 */
app.controller("columnsCtrl", function ($routeParams, columnsFactory) {
    var boardId = $routeParams.boardId;
    this.columns = columnsFactory.getColumn();
    //this.column = _.filter(this.columns, {board_id: boardId}).$apply();
    //this.column = $filter('filter')(this.columns, {board_id: boardId});
    this.addColumn = function () {
         columnsFactory.addColumn(this.column_name, boardId);
         this.column_name = "";
    };
    this.page = function () {
        return {'board_id':boardId}
    }
});
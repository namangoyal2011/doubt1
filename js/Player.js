class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getCount(){
    var getCountRef=database.ref("playerCount");
    getCountRef.on("value", function(data) {
      playerCount = data.val();
  })
 }
 update(count) {
  database.ref("/").update({
    playerCount:count
  })
 }

}

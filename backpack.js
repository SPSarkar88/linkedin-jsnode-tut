class Backpack {
  /**
   * Constructor
   */
  constructor(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen, dateCreated){
    this.name = name;
    this.volume = volume; 
    this.color = color;
    this.pocketNum = pocketNum; 
    this.strapLength = {
      left : strapLengthL,
      right : strapLengthR
    },
    this.lidOpen = false,
    this.dateCreated = dateCreated
  }

  /**
   * Lid Status
   */
  toggleLid(lidStatus){
    this.lidOpen = lidStatus;
  }

  /**
   * Change Strap Length
   */
  changeStrapLength(lengthL, lengthR){
    this.strapLength.left = lengthL;
    this.strapLength.right = lengthR;
  }

  dateElapsed(){
    let creationTime = new Date(this.dateCreated);
    let now = new Date();
    let elapsed= now - creationTime;
    let daysSinceCreated = Math.floor(elapsed/ (1000*3600*24));
    return Math.floor(daysSinceCreated/365);
  }
}

export default Backpack;

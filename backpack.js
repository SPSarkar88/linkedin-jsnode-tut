class Backpack {
  /**
   * Constructor
   */
  constructor(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen){
    this.name = name;
    this.volume = volume; 
    this.color = color;
    this.pocketNum = pocketNum; 
    this.strapLength = {
      left = strapLengthL,
      right = strapLengthR
    },
    this.lidOpen = false
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
}

export default Backpack;

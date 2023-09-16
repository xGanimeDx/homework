const helper = {
  generateRandomString(length: number): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
    let result = "";
    for (let i = 0; i < length; i++) {
      let randomIndex: number = this.generateRandomNumber(length);
      result += characters.charAt(randomIndex);
    }
    return result;
  },

  generateRandomNumber(value: number): number {
    return Math.floor(Math.random() * value);
  },
};

export default helper;

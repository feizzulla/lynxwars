export class User {
  constructor(name) {
    this.name = name;
    this.score = 0;
    const filename = fileURLToPath(import.meta.url);
    const dirname = path.dirname(filename);
    this.filePath = path.join(dirname, "users/users.txt");
  }

  async writeNewUserToFile(newUser) {
    // const exist = await this.isUserExist(newUser);
    // if (!exist) {
    const data = await fs.readFile(this.filePath, "utf8");
    const dataJson = JSON.parse(data);
    const sample = { score: 0, name: newUser };

    dataJson.push(sample);
    const dataJsonStr = JSON.stringify(dataJson);
    await fs.writeFile(this.filePath, dataJsonStr);
    // await fs.appendFile(this.filePath, `\n${newUser}`, 'utf8');
    // }
  }

  async readAllUsers() {
    try {
      const users = await fs.readFile(this.filePath, "utf8");
      return users;
    } catch (error) {
      console.error("Error reading file:", error);
      return "";
    }
  }

  async isUserExist(userName) {
    try {
      const data = await fs.readFile(this.filePath, "utf8");
      const dataJson = JSON.parse(data);
      for (let i = 0; i < dataJson.length; i++) {
        if (dataJson[i].name === userName) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.log("Ошибка вывода информации о юзере:", err);
      return err;
    }
  }
  static async changeScore(userName, score) {
    try {
      const data = await fs.readFile("./modules/users/users.txt", "utf8");
      const dataJson = await JSON.parse(data);
      for (let i = 0; i < dataJson.length; i++) {
        if (dataJson[i].name === userName) {
          dataJson[i].score += score;
        }
        const dataJsonStr = await JSON.stringify(dataJson);
        await fs.writeFile("./modules/users/users.txt", dataJsonStr);
      }
    } catch (err) {
      console.log("Ошибка записи результата:", err.message);
      return err;
    }
  }

  static async currentScore(userName) {
    try {
      const data = await fs.readFile("./modules/users/users.txt", "utf8");
      const dataJson = await JSON.parse(data);
      for (let i = 0; i < dataJson.length; i++) {
        if (dataJson[i].name === userName) {
          return dataJson[i].score;
        }
      }
    } catch (err) {
      console.log("Ошибка записи результата:", err.message);
      return err;
    }
  }
}

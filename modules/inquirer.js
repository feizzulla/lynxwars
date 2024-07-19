import inquirer from 'inquirer'; 
const LogRegPrompt = async () => {
  await inquirer
    .prompt([
      {
        name: 'isRegChoised',
        type: 'list',
        message: 'lynxWars 0.0.1',
        choices: [
          { name: 'Вход', value: false },
          { name: 'Регистрация', value: true },
        ],
      },
      { name: 'login', type: 'input', message: 'логин' },
      { name: 'password', type: 'password', message: 'пароль', mask: '*' },
    ])
    .then((answers) => {
      //* answers =
      //* {
      //*   isRegChoised: false(или true),
      //*   login: "123",
      //*   password: "456",
      //* }
    })
    .catch((error) => {
      console.log(error);
      // Prompt couldn't be rendered in the current environment
    });
};

const settingsPromt = async () => {
  await inquirer
    .prompt([
      {
        name: 'difficulty',
        type: 'list',
        message: 'Выберите сложность',
        choices: [
          { name: 'Легко', value: 0 },
          { name: 'Нормально', value: 1 },
          { name: 'Сложно', value: 2 },
          { name: 'Кошмар', value: 3 },
        ],
      },
      {
        name: 'skin',
        type: 'list',
        message: 'Выберите скин',
        choices: [
          { name: '1', value: 0 },
          { name: '2', value: 1 },
          { name: '3', value: 2 },
          { name: '4', value: 3 },
        ],
      }
    ])
    .then((answers) => {
      //*answers =
      //*{difficulty: 0}
      //*
      console.log();
    })
    .catch((error) => {
      console.log(error);
      // Prompt couldn't be rendered in the current environment
    });
};


//> вызовы функций
{
await LogRegPrompt();
await settingsPromt();
}
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./pages/Main";
import Book from "./pages/Book";


//Arquivo responsavel por fazer as rotas entre as telas. Esse arquivo que será chamdo pelo
//arquivo App.js (arquivo prinicipal do React onde)
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Book,
    }, {
      initialRouteName: "Main",
      backBehavior: "history"
    }
  )
);

export default Routes;
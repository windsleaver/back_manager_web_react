import React from 'react';
import {useRoutes} from "react-router-dom";
import routes from './utils/routes/router'

function App() {
  const element = useRoutes(routes)
  return (
      <div>
        {element}
      </div>
  );
}

export default App;

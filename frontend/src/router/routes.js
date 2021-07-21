import {
  // Import page scenes (comprised of many components).
} from '../scenes';

export const allAccessRoutes = [
  {
    path: '/',
    exact: true,
    component: () => {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              This is the <code>Home</code> page.
            </p>
          </header>
        </div>
      );
    },
    showHeader: true,
  },
];

import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { CategoryProvider } from "./contexts/CategoryContext";

function App() {

  return (
    
      <AuthProvider>
        <CategoryProvider>
          <RoutesApp />
        </CategoryProvider>
      </AuthProvider>
  );
}

export default App;

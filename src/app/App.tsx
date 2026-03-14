import { AppView } from "../views/AppView";
import { IntroView } from "../views/IntroView";
import { LoginView } from "../views/LoginView";
import { useIntro } from "../logic/useIntro";
import { AuthProvider } from "../logic/AuthContext";
import { useAuth } from "../logic/useAuth";

function AppInner() {
  const { visible, exiting, skip } = useIntro(4000);
  const { user } = useAuth();

  if (visible) return <IntroView onSkip={skip} exiting={exiting} />;
  if (!user) return <LoginView />;
  return <AppView />;
}

function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}

export default App;

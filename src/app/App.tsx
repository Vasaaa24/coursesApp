import { AppView } from "../views/AppView";
import { IntroView } from "../views/IntroView";
import { useIntro } from "../logic/useIntro";

function App() {
  const { visible, exiting, skip } = useIntro(4000);

  if (visible) return <IntroView onSkip={skip} exiting={exiting} />;

  return <AppView />;
}

export default App;

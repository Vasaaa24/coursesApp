import { useNav } from "../logic/useNav";
import { useAuth } from "../logic/useAuth";
import { BottomNav } from "../components/BottomNav";
import { HomeView } from "./HomeView";
import { CoursesView } from "./CoursesView";
import { ProfileView } from "./ProfileView";
import { SupportView } from "./SupportView";
import { AdminView } from "./admin/AdminView";
import "../styles/app.css";

export function AppView() {
  const { view, navigate } = useNav();
  const { isAdmin } = useAuth();

  if (view === "admin" && isAdmin) {
    return <AdminView onBack={() => navigate("profile")} />;
  }

  return (
    <div className="app-shell">
      <div className="view-content">
        <div key={view}>
          {view === "home" && <HomeView />}
          {view === "courses" && <CoursesView />}
          {view === "profile" && (
            <ProfileView onAdminOpen={() => navigate("admin")} />
          )}
          {view === "support" && <SupportView />}
        </div>
      </div>
      <BottomNav current={view} onNavigate={navigate} />
    </div>
  );
}

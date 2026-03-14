import { useNav } from "../logic/useNav";
import { useAuth } from "../logic/useAuth";
import { BottomNav } from "../components/BottomNav";
import { HomeView } from "./HomeView";
import { CoursesView } from "./CoursesView";
import { CourseDetailView } from "./CourseDetailView";
import { ProfileView } from "./ProfileView";
import { SupportView } from "./SupportView";
import { AdminView } from "./admin/AdminView";
import "../styles/app.css";

export function AppView() {
  const { view, courseId, navigate, goBack } = useNav();
  const { isAdmin } = useAuth();

  if (view === "admin" && isAdmin) {
    return <AdminView onBack={() => navigate("profile")} />;
  }

  if (view === "courseDetail" && courseId !== null) {
    return (
      <div className="app-shell">
        <div className="view-content">
          <CourseDetailView courseId={courseId} onBack={goBack} />
        </div>
        <BottomNav current="courses" onNavigate={navigate} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="view-content">
        <div key={view}>
          {view === "home" && (
            <HomeView onCourseOpen={(id) => navigate("courseDetail", id)} />
          )}
          {view === "courses" && (
            <CoursesView onCourseOpen={(id) => navigate("courseDetail", id)} />
          )}
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

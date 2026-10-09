import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout.tsx";
import { ArchitecturePage } from "./pages/Architecture.tsx";
import { ClaimsPage } from "./pages/Claims.tsx";
import { GettingStartedPage } from "./pages/GettingStarted.tsx";
import { LaunchesPage } from "./pages/Launches.tsx";
import { OverviewPage } from "./pages/Overview.tsx";
import { PrivacyPage } from "./pages/Privacy.tsx";
import { ProofsPage } from "./pages/Proofs.tsx";
import { RecordPage } from "./pages/Record.tsx";
import { RelayerPage } from "./pages/Relayer.tsx";
import { ReviewPage } from "./pages/Review.tsx";
import { RolesPage } from "./pages/Roles.tsx";
import { TradingPage } from "./pages/Trading.tsx";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<OverviewPage />} />
        <Route path="getting-started" element={<GettingStartedPage />} />
        <Route path="architecture" element={<ArchitecturePage />} />
        <Route path="record" element={<RecordPage />} />
        <Route path="roles" element={<RolesPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="proofs" element={<ProofsPage />} />
        <Route path="claims" element={<ClaimsPage />} />
        <Route path="launches" element={<LaunchesPage />} />
        <Route path="trading" element={<TradingPage />} />
        <Route path="relayer" element={<RelayerPage />} />
        <Route path="review" element={<ReviewPage />} />
      </Route>
    </Routes>
  );
}
